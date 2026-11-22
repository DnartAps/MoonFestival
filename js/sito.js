/* Moon Festival · script del sito (ambito: Simone, funzioni)
   - Lingua IT/EN: cambia tutti i testi con data-t (dizionario in js/testi.js),
     i testi alternativi (data-t-alt), le etichette (data-t-aria) e i segnaposto (data-t-ph).
     La scelta resta memorizzata; ?lang=en nell'indirizzo apre direttamente l'inglese.
   - Versione accessibile: bianco e nero, memorizzata.
   - Menu mobile: apre e chiude il menu sotto i 960 px (Esc per chiudere).
   - Ricerca: il form dell'header porta a cerca.html (js/ricerca.js); le ancore dentro una tendina la aprono.
   - Periodi: base / prima / durante, in base alle date di js/periodi.js. */
(function () {
  var TESTI = window.MOON_TESTI || {};
  var html = document.documentElement;

  function leggi(chiave) { try { return window.localStorage.getItem(chiave); } catch (e) { return null; } }
  function scrivi(chiave, valore) { try { window.localStorage.setItem(chiave, valore); } catch (e) { /* niente */ } }

  /* ---------- Metadati (SEO) ----------
     Il blocco nella <head> lo scrive strumenti/seo.py in italiano.
     In inglese qui si cambiano descrizione e anteprime social (testi in js/testi.js,
     chiavi titolo.* e descr.*). Canonical e og:url passano a ?lang=en solo se
     l'inglese è nell'indirizzo, cioè quando la pagina è davvero la versione inglese. */
  function applicaMetadati(lingua, pagina) {
    function metti(selettore, valore) {
      var el = document.querySelector(selettore); if (el && valore) el.setAttribute('content', valore);
    }
    var t = TESTI['titolo.' + pagina], d = TESTI['descr.' + pagina], a = TESTI['seo.immagine.alt'];
    if (d) { metti('meta[name="description"]', d[lingua]); metti('meta[property="og:description"]', d[lingua]); }
    if (t) metti('meta[property="og:title"]', t[lingua]);
    if (a) metti('meta[property="og:image:alt"]', a[lingua]);
    metti('meta[property="og:locale"]', lingua === 'en' ? 'en_GB' : 'it_IT');
    metti('meta[property="og:locale:alternate"]', lingua === 'en' ? 'it_IT' : 'en_GB');
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      var base = canonical.getAttribute('href').split('?')[0];
      var inglese = (new URLSearchParams(window.location.search)).get('lang') === 'en';
      var url = inglese ? base + '?lang=en' : base;
      canonical.setAttribute('href', url);
      metti('meta[property="og:url"]', url);
    }
  }

  /* ---------- Lingua ---------- */
  function applicaLingua(lingua) {
    if (lingua !== 'en') lingua = 'it';
    html.setAttribute('lang', lingua);
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var t = TESTI[el.getAttribute('data-t')]; if (t && t[lingua] != null) el.innerHTML = t[lingua];
    });
    document.querySelectorAll('[data-t-alt]').forEach(function (el) {
      var t = TESTI[el.getAttribute('data-t-alt')]; if (t) el.setAttribute('alt', t[lingua]);
    });
    document.querySelectorAll('[data-t-aria]').forEach(function (el) {
      var t = TESTI[el.getAttribute('data-t-aria')]; if (t) el.setAttribute('aria-label', t[lingua]);
    });
    document.querySelectorAll('[data-t-title]').forEach(function (el) {
      var t = TESTI[el.getAttribute('data-t-title')]; if (t) el.setAttribute('title', t[lingua]);
    });
    document.querySelectorAll('[data-t-ph]').forEach(function (el) {
      var t = TESTI[el.getAttribute('data-t-ph')]; if (t) el.setAttribute('placeholder', t[lingua]);
    });
    var titolo = document.querySelector('title[data-t-titolo]');
    if (titolo) { var tt = TESTI[titolo.getAttribute('data-t-titolo')]; if (tt) document.title = tt[lingua]; }
    if (titolo) applicaMetadati(lingua, titolo.getAttribute('data-t-titolo').replace('titolo.', ''));
    document.querySelectorAll('.lingue button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('lang') === lingua));
    });
    /* i link interni portano con sé la lingua scelta */
    document.querySelectorAll('a[data-interno]').forEach(function (a) {
      var base = a.getAttribute('data-interno'), q = [];
      if (lingua === 'en') q.push('lang=en');
      if (window.MOON_PERIODO_FORZATO) q.push('periodo=' + window.MOON_PERIODO_FORZATO);
      a.setAttribute('href', q.length ? base.replace(/(#|$)/, '?' + q.join('&') + '$1') : base);
    });
    scrivi('moon-lingua', lingua);
    document.dispatchEvent(new CustomEvent('moon:lingua', { detail: lingua }));
  }

  /* ---------- Versione accessibile ---------- */
  function applicaAccessibile(attiva) {
    html.classList.toggle('accessibile', attiva);
    document.querySelectorAll('[data-accessibile]').forEach(function (c) { c.setAttribute('aria-pressed', attiva ? 'true' : 'false'); });
    scrivi('moon-accessibile', attiva ? '1' : '0');
  }

  /* ---------- Periodi: base, prima, durante (dati in js/periodi.js) ---------- */
  function oggiISO(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function calcolaPeriodo() {
    var P = window.MOON_PERIODI || {}, par = new URLSearchParams(window.location.search);
    var forzato = par.get('periodo');
    /* La stagione scelta dal footer resta valida in tutte le pagine finché non si torna ad "Automatica"
       (vale solo per questa scheda del browser: sessionStorage). */
    var salvata = null; try { salvata = sessionStorage.getItem('moon-periodo'); } catch (e) {}
    if (forzato === 'auto') { try { sessionStorage.removeItem('moon-periodo'); } catch (e) {} forzato = null; salvata = null; }
    if (forzato === 'base' || forzato === 'prima' || forzato === 'durante') { try { sessionStorage.setItem('moon-periodo', forzato); } catch (e) {} return { stato: forzato, forzato: true }; }
    if (salvata === 'base' || salvata === 'prima' || salvata === 'durante') return { stato: salvata, forzato: true };
    if (P.attivi === false) return { stato: 'tutto' };   /* periodi spenti: si vede tutto */
    var oggi = oggiISO(new Date());
    if (P.festival && oggi >= P.festival.dal && oggi <= P.festival.al) return { stato: 'durante' };
    if (P.prima && P.prima.dal && P.festival && oggi >= P.prima.dal && oggi < P.festival.dal) return { stato: 'prima' };
    return { stato: 'base' };
  }
  function applicaPeriodo() {
    var p = calcolaPeriodo();
    html.setAttribute('data-periodo', p.stato);
    window.MOON_STATO = p.stato;
    document.querySelectorAll('[data-periodi]').forEach(function (el) {
      var attivo = p.stato === 'tutto' || el.getAttribute('data-periodi').split(/\s+/).indexOf(p.stato) !== -1;
      /* la voce della pagina in cui ti trovi resta sempre visibile */
      if (el.querySelector('[aria-current="page"]')) attivo = true;
      el.hidden = !attivo;
    });
    if (p.forzato) {
      var barra = document.createElement('p');
      barra.className = 'anteprima-periodo';
      barra.setAttribute('role', 'status');
      barra.textContent = 'Anteprima · stato del sito: ' + p.stato;
      document.body.insertBefore(barra, document.body.firstChild);
      window.MOON_PERIODO_FORZATO = p.stato; /* i link interni mantengono l'anteprima */
    }
  }

  /* ---------- Pagine di approfondimento accese/spente (js/approfondimenti.js) ---------- */
  function applicaApprofondimenti() {
    var A = window.MOON_APPROFONDIMENTI || {};
    document.querySelectorAll('[data-approfondisci]').forEach(function (el) {
      if (A[el.getAttribute('data-approfondisci')] !== false) return;
      var ancora = el.getAttribute('data-ancora');
      if (ancora) { el.setAttribute('href', ancora); el.setAttribute('data-interno', ancora); }
      else { var box = el.closest('p') || el; box.hidden = true; }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    /* Pagina nuova senza #ancora: parte sempre dall'alto. Serve quando il sito è mostrato dentro un'altra
       pagina (anteprima) che altrimenti conserva lo scorrimento della pagina precedente.
       Non tocca il "torna indietro", dove il browser ripristina la posizione. */
    try {
      var nav = (performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) || {};
      if (!location.hash && nav.type !== 'back_forward') {
        window.scrollTo(0, 0);
        var primo = document.body;
        if (primo && primo.scrollIntoView && window.top !== window) primo.scrollIntoView({ block: 'start' });
      }
    } catch (e) {}
    applicaPeriodo();
    applicaApprofondimenti();
    /* Selettore della stagione nel footer: segna quella attiva e mantiene la lingua */
    document.querySelectorAll('[data-periodo-link]').forEach(function (a) {
      var per = a.getAttribute('data-periodo-link');
      var scelta = window.MOON_PERIODO_FORZATO || 'auto';
      if (per === scelta) a.setAttribute('aria-current', 'true');
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var q = new URLSearchParams(location.search); q.set('periodo', per);
        if (per === 'auto') { try { sessionStorage.removeItem('moon-periodo'); } catch (z) {} q.delete('periodo'); }
        if (html.getAttribute('lang') === 'en') q.set('lang', 'en');
        location.assign(location.pathname + (q.toString() ? '?' + q.toString() : ''));
      });
    });
    var daIndirizzo = (new URLSearchParams(window.location.search)).get('lang');
    applicaLingua(daIndirizzo || leggi('moon-lingua') || 'it');
    applicaAccessibile(leggi('moon-accessibile') === '1');

    document.querySelectorAll('.lingue button').forEach(function (b) {
      b.addEventListener('click', function () { applicaLingua(b.getAttribute('lang')); });
    });
    document.querySelectorAll('[data-accessibile]').forEach(function (c) {
      c.addEventListener('click', function () { applicaAccessibile(c.getAttribute('aria-pressed') !== 'true'); });
    });

    /* Ricerca (C39): il form dell'header porta a cerca.html?q=…
       Con il campo vuoto il bottone apre il campo e ci mette il focus, senza inviare. */
    document.querySelectorAll('.cerca').forEach(function (form) {
      var bottone = form.querySelector('button'), campo = form.querySelector('input');
      if (!bottone || !campo) return;
      form.addEventListener('submit', function (e) {
        if (!campo.value.trim()) { e.preventDefault(); campo.focus(); }
      });
    });

    /* Ancora dentro una tendina (<details>), es. una FAQ aperta da un risultato della ricerca:
       la tendina si apre e il focus va sulla sua domanda. */
    var apriAncora = function () {
      var id = ''; try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { return; }
      var el = id && document.getElementById(id); if (!el) return;
      var d = el.tagName === 'DETAILS' ? el : el.closest('details');
      if (!d) return;
      for (var p = d; p; p = p.parentElement && p.parentElement.closest('details')) p.open = true;
      var s = d.querySelector('summary');
      if (s) { s.focus({ preventScroll: true }); el.scrollIntoView({ block: 'start' }); }
    };
    apriAncora();
    /* di nuovo a pagina caricata: il browser, scorrendo all'ancora, toglie il focus messo prima */
    if (document.readyState === 'complete') apriAncora(); else window.addEventListener('load', apriAncora);
    window.addEventListener('hashchange', apriAncora);

    /* Bottoni «Copia» (es. IBAN nella pagina Sostieni): copia il valore senza spazi
       e annuncia l'esito nella regione role="status" vicina. */
    document.querySelectorAll('[data-copia]').forEach(function (b) {
      b.addEventListener('click', function () {
        var esito = b.closest('div').querySelector('[data-copia-esito]');
        function annuncia(chiave) {
          var t = TESTI[chiave]; if (!esito || !t) return;
          esito.textContent = '';
          setTimeout(function () { esito.textContent = t[html.getAttribute('lang') === 'en' ? 'en' : 'it']; }, 50);
        }
        var valore = b.getAttribute('data-copia');
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(valore).then(function () { annuncia(b.getAttribute('data-copia-ok')); },
            function () { annuncia(b.getAttribute('data-copia-errore')); });
        } else annuncia(b.getAttribute('data-copia-errore'));
      });
    });

    /* Menu mobile */
    var header = document.querySelector('.header');
    var bottoneMenu = document.querySelector('.menu-bottone');
    if (header && bottoneMenu) {
      var chiudi = function (rimettiFocus) {
        header.classList.remove('menu-aperto');
        bottoneMenu.setAttribute('aria-expanded', 'false');
        if (rimettiFocus) bottoneMenu.focus();
      };
      bottoneMenu.addEventListener('click', function () {
        var aperto = header.classList.toggle('menu-aperto');
        bottoneMenu.setAttribute('aria-expanded', String(aperto));
        if (aperto) { var primo = header.querySelector('.menu a'); if (primo) primo.focus(); }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && header.classList.contains('menu-aperto')) chiudi(true);
      });
      header.querySelectorAll('.menu a').forEach(function (a) { a.addEventListener('click', function () { chiudi(false); }); });
    }

    // Sottomenu con ancore (es. Il festival): la voce della sezione che si sta leggendo diventa
    // "corrente" (aria-current="location", grassetto) mentre si scorre la pagina.
    var voci = [].slice.call(document.querySelectorAll('.sottomenu a[href^="#"]')).filter(function (a) {
      return a.getAttribute('href').length > 1 && document.getElementById(a.getAttribute('href').slice(1));
    });
    if (voci.length > 1 && 'IntersectionObserver' in window) {
      var segna = function (id) {
        voci.forEach(function (a) {
          if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'location');
          else if (a.getAttribute('aria-current') === 'location') a.removeAttribute('aria-current');
        });
      };
      var oss = new IntersectionObserver(function (righe) {
        righe.forEach(function (r) { if (r.isIntersecting) segna(r.target.id); });
      }, { rootMargin: '-45% 0px -50% 0px' });
      voci.forEach(function (a) { oss.observe(document.getElementById(a.getAttribute('href').slice(1))); });
    }
  });

  // C51 · Tessere di Partecipa (Sarah 8): colori mescolati sulle tessere visibili, in un giro di 6 colori
  // (tutta la palette tranne il fucsia), così due tessere vicine non hanno mai lo stesso colore
  // con 1, 2 o 5 tessere per riga, anche quando le date nascondono alcune tessere. Testo: quello previsto per l'area.
  var GIRO = [['#FB5607', '#251B4B'], ['#3A86FF', '#251B4B'], ['#FFBE0B', '#45328B'],
              ['#45328B', '#FFFFFF'], ['#ACA866', '#251B4B'], ['#FD8DA0', '#45328B']];
  function coloraTessere() {
    [].forEach.call(document.querySelectorAll('.hub'), function (hub) {
      var i = 0;
      [].forEach.call(hub.querySelectorAll('.tile'), function (t) {
        if (t.hidden) return;
        t.style.setProperty('--c', GIRO[i % GIRO.length][0]);
        t.style.setProperty('--t', GIRO[i % GIRO.length][1]);
        i++;
      });
    });
  }
  document.addEventListener('moon:finestre', coloraTessere);

  // C28 · Alternanza dei blocchi (sito-funzioni, Sarah 14): quando foto e testo di un blocco stanno uno
  // sotto l'altro (fino a 960 px), il blocco comincia con il testo se il blocco prima finisce con una
  // foto o un video, e con la foto se finisce con un testo. Così non ci sono mai due media di fila,
  // e due testi di fila solo dove ci sono due sezioni di solo testo una dopo l'altra.
  function alternaBlocchi() {
    var main = document.getElementById('contenuto'); if (!main) return;
    var ultimo = 'T';
    [].forEach.call(main.children, function (s) {
      if (s.hidden || s.tagName === 'NAV' || s.tagName === 'SCRIPT') return;
      var split = s.querySelector('.split');
      if (split && split.querySelector('.split__foto') && split.querySelector('.split__testo')) {
        var testoPrima = ultimo === 'M';
        split.classList.toggle('split--testo-prima', testoPrima);
        ultimo = testoPrima ? 'M' : 'T';
        return;
      }
      var soloMedia = s.querySelector('.video, video, iframe') && !s.querySelector('h1, h2, h3, p');
      ultimo = soloMedia ? 'M' : 'T';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', alternaBlocchi); else alternaBlocchi();
})();
