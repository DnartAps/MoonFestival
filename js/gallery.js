/* Moon Festival · Gallery per edizione (Cabina C70 · D21, decisa da Simone con Sarah il 22/11/2026)
   Dati in js/gallery-<anno>.js (window.MOON_GALLERY), generati da strumenti/gallery.py.
   - Griglia a righe giustificate: le foto non si tagliano mai, ogni riga ha la stessa altezza e riempie
     tutta la larghezza (circa 180 px sul telefono, 260 px sul computer, 6 px tra le foto).
   - Ordine casuale a ogni visita, alternando verticali e orizzontali (mai più di due uguali di fila).
   - 40 foto alla volta con «Mostra altre foto»: le nuove si aggiungono in fondo, le altre restano dove sono.
   - Al tocco la foto si apre a tutta pagina: intera, contatore, credito, frecce (computer), scorrimento
     con il dito (telefono), tasti freccia ed Esc, fuoco intrappolato e poi riportato alla miniatura. */
(function () {
  var G = window.MOON_GALLERY;
  if (!G) return;
  var TESTI = window.MOON_TESTI || {};
  var PASSO = 40, SPAZIO = 6;
  var html = document.documentElement;
  function L() { return html.getAttribute('lang') === 'en' ? 'en' : 'it'; }
  function tx(k, v) {
    var t = (TESTI[k] || {})[L()] || '';
    Object.keys(v || {}).forEach(function (n) { t = t.split('{' + n + '}').join(v[n]); });
    return t;
  }
  function lt(o) { return o ? (o[L()] || o.it || '') : ''; }
  var ridotto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Ordine casuale con verticali e orizzontali alternate (al massimo due uguali di fila) */
  function mescola(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function ordine(foto) {
    var v = [], o = [];
    foto.forEach(function (f, i) { (f[2] > f[1] ? v : o).push(i); });
    mescola(v); mescola(o);
    var out = [], ultimo = '', fila = 0;
    while (v.length || o.length) {
      var prendiV;
      if (!v.length) prendiV = false;
      else if (!o.length) prendiV = true;
      else if (fila >= 2) prendiV = ultimo !== 'v';
      else prendiV = Math.random() < v.length / (v.length + o.length) * (ultimo === 'v' ? 0.6 : 1.4);
      var tipo = prendiV ? 'v' : 'o';
      out.push((prendiV ? v : o).shift());
      fila = tipo === ultimo ? fila + 1 : 1; ultimo = tipo;
    }
    return out;
  }

  var sezioni = [];
  G.sezioni.forEach(function (sez) {
    var box = document.querySelector('[data-gallery="' + sez.id + '"]');
    if (!box) return;
    var S = { sez: sez, box: box, ord: ordine(sez.foto), mostrate: 0, el: [], altre: document.querySelector('[data-gallery-altre="' + sez.id + '"]') };
    sezioni.push(S);
    function miniatura(k) {
      var f = sez.foto[S.ord[k]];
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'gal-foto';
      var img = document.createElement('img');
      img.src = G.cartella + sez.id + '/' + f[0] + '-m.jpg';
      img.alt = ''; img.loading = 'lazy'; img.decoding = 'async';
      img.width = f[1]; img.height = f[2];
      b.appendChild(img);
      b.addEventListener('click', function () { apri(S, k, b); });
      return b;
    }
    S.etichette = function () {
      S.el.forEach(function (b, k) { b.setAttribute('aria-label', tx('gal.apri', { i: k + 1, n: sez.foto.length }) + ' · ' + lt(sez.alt)); });
      if (S.altre) S.altre.querySelector('span').textContent = tx('gal.altre');
    };
    S.aggiungi = function (quante) {
      var da = S.mostrate, a = Math.min(sez.foto.length, S.mostrate + quante);
      for (var k = da; k < a; k++) S.el.push(miniatura(k));
      S.mostrate = a;
      if (S.altre) S.altre.hidden = S.mostrate >= sez.foto.length;
      S.disegna(); S.etichette();
      return da;
    };
    /* Righe giustificate: ogni riga si riempie finché la somma dei rapporti, all'altezza voluta,
       supera la larghezza; poi la riga si scala per riempire esattamente la larghezza. */
    S.disegna = function () {
      var W = box.clientWidth; if (!W) return;
      var H = W < 600 ? 180 : 260;
      var attivo = document.activeElement && box.contains(document.activeElement) ? document.activeElement : null;
      var frammento = document.createDocumentFragment(), riga = [], somma = 0;
      function chiudiRiga(piena) {
        if (!riga.length) return;
        var d = document.createElement('div'); d.className = 'gal-riga';
        var h = piena ? (W - SPAZIO * (riga.length - 1)) / somma : H;
        d.style.height = h + 'px';
        riga.forEach(function (x) {
          x.b.style.flex = piena ? x.r + ' 1 0%' : '0 0 ' + (x.r * h) + 'px';
          d.appendChild(x.b);
        });
        frammento.appendChild(d); riga = []; somma = 0;
      }
      S.el.forEach(function (b, k) {
        var f = sez.foto[S.ord[k]], r = f[1] / f[2];
        riga.push({ b: b, r: r }); somma += r;
        if (somma * H + SPAZIO * (riga.length - 1) >= W) chiudiRiga(true);
      });
      chiudiRiga(false);
      box.innerHTML = ''; box.appendChild(frammento);
      if (attivo) attivo.focus({ preventScroll: true });
    };
    if (S.altre) S.altre.addEventListener('click', function () {
      var primo = S.aggiungi(PASSO);
      if (S.el[primo]) S.el[primo].focus();
    });
    S.aggiungi(PASSO);
  });

  var attesa = null;
  window.addEventListener('resize', function () {
    clearTimeout(attesa);
    attesa = setTimeout(function () { sezioni.forEach(function (S) { S.disegna(); }); }, 120);
  });

  /* ---------- Foto aperta a tutta pagina ---------- */
  var V = document.createElement('div');
  V.className = 'gal-aperta'; V.hidden = true;
  V.setAttribute('role', 'dialog'); V.setAttribute('aria-modal', 'true'); V.setAttribute('aria-labelledby', 'gal-aperta-titolo');
  V.innerHTML =
    '<div class="gal-aperta__testa"><p id="gal-aperta-titolo" class="gal-aperta__titolo"></p>' +
    '<button type="button" class="gal-aperta__tondo gal-aperta__chiudi"><span aria-hidden="true">×</span></button></div>' +
    '<div class="gal-aperta__corpo">' +
    '<button type="button" class="gal-aperta__tondo gal-aperta__freccia gal-aperta__prec"><span aria-hidden="true">‹</span></button>' +
    '<figure class="gal-aperta__foto"><img alt=""></figure>' +
    '<button type="button" class="gal-aperta__tondo gal-aperta__freccia gal-aperta__succ"><span aria-hidden="true">›</span></button></div>' +
    '<div class="gal-aperta__piede"><p class="gal-aperta__credito"></p><p class="gal-aperta__aiuto"></p></div>';
  document.body.appendChild(V);
  var vImg = V.querySelector('img'), vTit = V.querySelector('.gal-aperta__titolo');
  var bChiudi = V.querySelector('.gal-aperta__chiudi'), bPrec = V.querySelector('.gal-aperta__prec'), bSucc = V.querySelector('.gal-aperta__succ');
  var aperta = null;   /* { S, k, ritorno } */

  function mostra() {
    var S = aperta.S, sez = S.sez, f = sez.foto[S.ord[aperta.k]];
    vImg.src = G.cartella + sez.id + '/' + f[0] + '-g.jpg';
    vImg.width = f[1]; vImg.height = f[2];
    vImg.alt = lt(sez.alt);
    vTit.textContent = lt(sez.titolo) + ' · ' + (aperta.k + 1) + ' / ' + sez.foto.length;
    V.querySelector('.gal-aperta__credito').textContent = lt(sez.credito);
    V.querySelector('.gal-aperta__aiuto').textContent = tx('gal.scorri');
    bChiudi.setAttribute('aria-label', tx('gal.chiudi'));
    bPrec.setAttribute('aria-label', tx('gal.prec'));
    bSucc.setAttribute('aria-label', tx('gal.succ'));
    /* la foto dopo si scarica in anticipo */
    var dopo = sez.foto[S.ord[(aperta.k + 1) % sez.foto.length]];
    if (dopo) { var p = new Image(); p.src = G.cartella + sez.id + '/' + dopo[0] + '-g.jpg'; }
  }
  function apri(S, k, ritorno) {
    aperta = { S: S, k: k, ritorno: ritorno };
    V.hidden = false; html.classList.add('gal-bloccata');
    mostra(); bChiudi.focus();
  }
  function vai(d) {
    if (!aperta) return;
    var n = aperta.S.sez.foto.length;
    aperta.k = (aperta.k + d + n) % n;
    mostra();
  }
  function chiudi() {
    if (!aperta) return;
    var S = aperta.S, k = aperta.k;
    V.hidden = true; html.classList.remove('gal-bloccata');
    /* il fuoco torna alla miniatura dell'ultima foto vista (se serve, si caricano le foto fino a lì) */
    if (k >= S.mostrate) S.aggiungi(k - S.mostrate + 1);
    var b = S.el[k] || aperta.ritorno; aperta = null;
    if (b) { b.focus({ preventScroll: true }); b.scrollIntoView({ block: 'nearest', behavior: ridotto ? 'auto' : 'smooth' }); }
  }
  bChiudi.addEventListener('click', chiudi);
  bPrec.addEventListener('click', function () { vai(-1); });
  bSucc.addEventListener('click', function () { vai(1); });
  V.addEventListener('click', function (e) { if (e.target === V || e.target.classList.contains('gal-aperta__corpo')) chiudi(); });
  document.addEventListener('keydown', function (e) {
    if (!aperta) return;
    if (e.key === 'Escape') { e.preventDefault(); chiudi(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); vai(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); vai(-1); }
    else if (e.key === 'Tab') {
      var f = [].filter.call(V.querySelectorAll('button'), function (b) { return b.offsetParent !== null; });
      var i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  /* telefono: si passa alla foto dopo scorrendo con il dito */
  var x0 = null, y0 = null;
  V.addEventListener('touchstart', function (e) { if (e.touches.length === 1) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; } }, { passive: true });
  V.addEventListener('touchend', function (e) {
    if (x0 == null) return;
    var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) vai(dx < 0 ? 1 : -1);
  });

  document.addEventListener('moon:lingua', function () {
    sezioni.forEach(function (S) { S.etichette(); });
    if (aperta) mostra();
  });
})();
