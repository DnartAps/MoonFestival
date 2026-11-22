/* Moon Festival · ricerca nel sito (Cabina C39, ambito: Simone, funzioni)
   Pagina cerca.html?q=parole. L'indice è in js/ricerca-indice.js, generato da strumenti/ricerca.py
   (testi di tutte le pagine e schede del Programma, IT e EN).
   - Tutte le parole devono comparire (titolo, pagina o testo); maiuscole e accenti non contano.
   - Rispetta i periodi (data-periodi) e le pagine di approfondimento spente.
   - Accessibile: il titolo dei risultati riceve il focus e dice quanti sono; ogni risultato è un link
     che porta alla sezione giusta (le tendine si aprono da sole, js/sito.js). */
(function () {
  var INDICE = window.MOON_RICERCA || [];
  var TESTI = window.MOON_TESTI || {};
  var esito = document.getElementById('cerca-esito');
  var campo = document.getElementById('cerca-q');
  var form = document.querySelector('.cerca-pagina');
  if (!esito || !campo || !form) return;

  function lingua() { return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'it'; }
  function tx(k, v) {
    var t = (TESTI[k] || {})[lingua()] || '';
    Object.keys(v || {}).forEach(function (n) { t = t.split('{' + n + '}').join(v[n]); });
    return t;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  /* Normalizza carattere per carattere, così le posizioni restano quelle del testo originale */
  function norm(s) {
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var c = s[i].normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
      if (c === '’' || c === '‘') c = "'";
      out += c.charAt(0) || s[i];
    }
    return out;
  }
  function parole(q) {
    return norm(q).split(/[\s,.;:!?«»“”"()]+/).filter(function (p) { return p.length >= 2; });
  }
  function visibile(v) {
    var A = window.MOON_APPROFONDIMENTI || {};
    if (A[v.p.replace('.html', '')] === false) return false;
    if (!v.per) return true;
    var stato = window.MOON_STATO || 'base';
    return stato === 'tutto' || v.per.split(/\s+/).indexOf(stato) !== -1;
  }
  function conta(testo, p) { var n = 0, i = -1; while ((i = testo.indexOf(p, i + 1)) !== -1) n++; return n; }

  function cerca(q) {
    var ps = parole(q), L = lingua();
    if (!ps.length) return [];
    return INDICE.filter(visibile).map(function (v) {
      var t = norm(v.t[L] || ''), pt = norm(v.pt[L] || ''), x = norm(v.x[L] || '');
      var punti = 0;
      for (var i = 0; i < ps.length; i++) {
        var a = conta(t, ps[i]), b = conta(pt, ps[i]), c = conta(x, ps[i]);
        if (!a && !b && !c) return null;
        punti += a * 6 + b * 3 + Math.min(c, 5);
      }
      return { v: v, punti: punti };
    }).filter(Boolean).sort(function (a, b) { return b.punti - a.punti; });
  }

  /* Un pezzo di testo intorno alla prima parola trovata, con le parole evidenziate */
  function estratto(testo, ps) {
    if (!testo) return '';
    var n = norm(testo), inizio = -1;
    ps.forEach(function (p) { var i = n.indexOf(p); if (i !== -1 && (inizio === -1 || i < inizio)) inizio = i; });
    var da = 0, a = Math.min(testo.length, 200);
    if (inizio > 80) { da = testo.lastIndexOf(' ', inizio - 60); if (da < 0) da = inizio - 60; a = Math.min(testo.length, da + 200); }
    var pezzo = testo.slice(da, a), np = n.slice(da, a);
    var segni = [];
    ps.forEach(function (p) { var i = -1; while ((i = np.indexOf(p, i + 1)) !== -1) segni.push([i, i + p.length]); });
    segni.sort(function (x, y) { return x[0] - y[0]; });
    var html = '', pos = 0;
    segni.forEach(function (s) {
      if (s[0] < pos) return;
      html += esc(pezzo.slice(pos, s[0])) + '<mark>' + esc(pezzo.slice(s[0], s[1])) + '</mark>';
      pos = s[1];
    });
    html += esc(pezzo.slice(pos));
    return (da > 0 ? '… ' : '') + html.trim() + (a < testo.length ? ' …' : '');
  }

  function mostra(q, conFocus) {
    q = (q || '').trim();
    if (!q) { esito.innerHTML = ''; return; }
    var L = lingua(), ps = parole(q), qe = esc(q), r = [];
    var titolo;
    if (!ps.length) titolo = tx('cerca.corta');
    else {
      r = cerca(q);
      titolo = r.length ? tx(r.length === 1 ? 'cerca.risultati.1' : 'cerca.risultati.n', { n: r.length, q: qe }) : tx('cerca.nessuno', { q: qe });
    }
    var html = '<h2 class="cerca-esito__titolo" id="cerca-titolo" tabindex="-1">' + titolo + '</h2>';
    if (r.length) {
      html += '<ol class="cerca-risultati" aria-labelledby="cerca-titolo">' + r.map(function (x) {
        var v = x.v, nome = v.t[L] || v.pt[L];
        var href = v.p + (L === 'en' ? '?lang=en' : '') + (v.a ? '#' + encodeURIComponent(v.a) : '');
        var pagina = v.t[L] && v.pt[L] && v.pt[L] !== v.t[L] ? '<span class="cerca-risultati__pagina">' + esc(v.pt[L]) + '</span>' : '';
        return '<li>' + pagina + '<a href="' + esc(href) + '">' + esc(nome) + '</a>' +
          '<p>' + estratto(v.x[L] || '', ps) + '</p></li>';
      }).join('') + '</ol>';
    }
    esito.innerHTML = html;
    if (conFocus) document.getElementById('cerca-titolo').focus();
  }

  var q0 = new URLSearchParams(location.search).get('q') || '';
  campo.value = q0;
  function avvia() { mostra(q0, !!q0.trim()); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', avvia); else avvia();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var q = campo.value.trim();
    var u = new URL(location.href); if (q) u.searchParams.set('q', q); else u.searchParams.delete('q');
    history.replaceState(null, '', u.pathname + u.search);
    q0 = q;
    if (!q) { campo.focus(); esito.innerHTML = ''; return; }
    mostra(q, true);
  });
  document.addEventListener('moon:lingua', function () { mostra(q0, false); });
})();
