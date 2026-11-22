/* Moon Festival · video della Home da Vimeo (ambito: Simone · Cabina C2, C9, C32)
   - Il riquadro ha il formato del video (16:9), a tutta larghezza, senza tagli né bande (Sarah 13).
   - Vimeo si carica solo quando il video si avvicina allo schermo (dati e velocità della pagina).
   - Di norma parte da solo, senza audio, in loop, senza l'interfaccia di Vimeo (controls=0).
   - Con «riduci movimento» (prefers-reduced-motion) non parte da solo: c'è solo il tasto play
     (Sarah 29: niente scritta, il nome «Fai partire il video» lo legge lo screen reader); Vimeo si
     carica al clic.
   - Due bottoni mentre il video gira: pausa/play (WCAG 2.2.2) e audio sì/no (WCAG 1.4.2).
   - I comandi (pausa, play, audio) partono solo quando il player di Vimeo dice di essere pronto.
   - dnt=1: Vimeo non traccia chi guarda (niente cookie di profilazione).
   - Fuori schermo il video si ferma (batteria e dati) e riparte quando torna visibile, se non è in pausa.
   Per cambiare video basta cambiare il numero in data-vimeo nella pagina. */
(function () {
  var box = document.querySelector('.video[data-vimeo]');
  if (!box) return;
  var id = box.getAttribute('data-vimeo');
  var TESTI = window.MOON_TESTI || {};
  var L = function () { return document.documentElement.lang === 'en' ? 'en' : 'it'; };
  var t = function (k) { return (TESTI[k] || {})[L()] || k; };
  var ridotto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var inPausa = ridotto, conAudio = false, pronto = false, coda = [], f = null, visibile = false;

  var ICO_PLAY = '<svg class="ico-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  var comandi = document.createElement('div');
  comandi.className = 'video__comandi';
  comandi.innerHTML =
    '<button type="button" class="video__bottone video__audio"><svg class="ico-muto" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4zM16 9l5 6M21 9l-5 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/></svg>' +
    '<svg class="ico-audio" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4zM16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/></svg><span class="sr"></span></button>' +
    '<button type="button" class="video__bottone video__pausa"><svg class="ico-pausa" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>' +
    ICO_PLAY + '<span class="sr"></span></button>';
  var bPausa = comandi.querySelector('.video__pausa'), bAudio = comandi.querySelector('.video__audio');

  /* Video fermo (riduci movimento): solo il tasto play, al centro */
  var avvia = null;
  if (ridotto) {
    avvia = document.createElement('button');
    avvia.type = 'button';
    avvia.className = 'video__bottone video__avvia';
    avvia.innerHTML = ICO_PLAY.replace('class="ico-play" ', '');
    box.appendChild(avvia);
    avvia.addEventListener('click', function () {
      inPausa = false;
      carica(true);
      box.removeChild(avvia); avvia = null;
      box.appendChild(comandi);
      bPausa.focus();
      aggiorna();
    });
  } else {
    box.appendChild(comandi);
  }

  function aggiorna() {
    bPausa.querySelector('.sr').textContent = t(inPausa ? 'video.play' : 'video.pausa');
    bPausa.classList.toggle('attivo', inPausa);
    bAudio.querySelector('.sr').textContent = t(conAudio ? 'video.audio.off' : 'video.audio.on');
    bAudio.classList.toggle('attivo', conAudio);
    if (avvia) avvia.setAttribute('aria-label', t('video.play'));
    if (f) f.title = t('video.titolo');
  }
  function invia(m) { try { f.contentWindow.postMessage(JSON.stringify(m), 'https://player.vimeo.com'); } catch (e) {} }
  function comanda(metodo, valore) {
    var m = { method: metodo }; if (valore !== undefined) m.value = valore;
    if (!f) return;
    if (pronto) invia(m); else coda.push(m);   /* prima che il player sia pronto i comandi aspettano */
  }
  function carica(subito) {
    if (f) return;
    f = document.createElement('iframe');
    f.src = 'https://player.vimeo.com/video/' + id + '?autoplay=' + (subito || !ridotto ? 1 : 0) +
            '&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0&playsinline=1&dnt=1&autopause=0';
    f.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
    f.setAttribute('tabindex', '-1');           // il video non ha comandi propri: si usano i bottoni
    f.className = 'video__iframe';
    box.insertBefore(f, box.firstChild);
    /* riserva: se il player non manda «ready», i comandi partono 1,5 secondi dopo il caricamento */
    f.addEventListener('load', function () {
      setTimeout(function () { if (!pronto) { pronto = true; coda.splice(0).forEach(invia); } }, 1500);
    });
    aggiorna();
  }
  window.addEventListener('message', function (e) {
    if (e.origin !== 'https://player.vimeo.com' || !f || e.source !== f.contentWindow) return;
    var d; try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (x) { return; }
    if (d && d.event === 'ready' && !pronto) {
      pronto = true;
      coda.splice(0).forEach(invia);
      if (!inPausa && !visibile) invia({ method: 'pause' });
    }
  });
  bPausa.addEventListener('click', function () { inPausa = !inPausa; comanda(inPausa ? 'pause' : 'play'); aggiorna(); });
  bAudio.addEventListener('click', function () {
    conAudio = !conAudio;
    comanda('setMuted', !conAudio); comanda('setVolume', conAudio ? 1 : 0);
    if (conAudio && inPausa) { inPausa = false; comanda('play'); }
    aggiorna();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (v) {
      visibile = v[0].isIntersecting;
      if (visibile && !ridotto) carica();
      if (f && !inPausa) comanda(visibile ? 'play' : 'pause');
    }, { rootMargin: '200px 0px' }).observe(box);
  } else if (!ridotto) { visibile = true; carica(); }
  document.addEventListener('moon:lingua', aggiorna);
  aggiorna();
})();

/* Moon Festival · video brevi nei blocchi foto + testo (Cabina C27 · sito-funzioni 5, 21/11/2026)
   - File nel sito (assets/video/), senza audio: partono da soli, muti, in loop, quando entrano nello schermo.
   - Due misure dallo stesso file: <source media="(max-width: 767px)"> per il telefono, poi quella del computer.
     Un browser che non capisce media prende la prima, cioè la più leggera.
   - Si scaricano solo quando il blocco si avvicina allo schermo; fuori schermo si fermano.
   - Bottone pausa/play sempre visibile mentre il video gira (WCAG 2.2.2).
   - Con «riduci movimento» il video non si carica: resta la foto del blocco. */
(function () {
  var blocchi = document.querySelectorAll('.video-blocco');
  if (!blocchi.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var TESTI = window.MOON_TESTI || {};
  var L = function () { return document.documentElement.lang === 'en' ? 'en' : 'it'; };
  var t = function (k) { return (TESTI[k] || {})[L()] || k; };

  Array.prototype.forEach.call(blocchi, function (b) {
    var v = b.querySelector('video'), img = b.querySelector('.video-blocco__copertina');
    if (!v) return;
    var inPausa = false, caricato = false, visibile = false;
    v.muted = true;

    var comandi = document.createElement('div');
    comandi.className = 'video__comandi';
    comandi.innerHTML = '<button type="button" class="video__bottone video__pausa">' +
      '<svg class="ico-pausa" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>' +
      '<svg class="ico-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><span class="sr"></span></button>';
    b.appendChild(comandi);
    var bott = comandi.querySelector('button');

    function aggiorna() {
      bott.querySelector('.sr').textContent = t(inPausa ? 'video.play' : 'video.pausa');
      bott.classList.toggle('attivo', inPausa);
    }
    function gioca() {
      if (inPausa || !visibile) return;
      var p = v.play(); if (p && p.catch) p.catch(function () {});
    }
    function carica() {
      if (caricato) return; caricato = true;
      Array.prototype.forEach.call(v.querySelectorAll('source[data-src]'), function (s) { s.src = s.getAttribute('data-src'); });
      v.hidden = false;
      v.addEventListener('playing', function () {
        b.classList.add('attivo');
        if (img) img.setAttribute('aria-hidden', 'true');   // ora si vede il video, che ha il suo testo alternativo
      }, { once: true });
      v.load();
    }
    bott.addEventListener('click', function () {
      inPausa = !inPausa;
      if (inPausa) v.pause(); else gioca();
      aggiorna();
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (voci) {
        visibile = voci[0].isIntersecting;
        if (visibile) { carica(); gioca(); } else if (caricato) v.pause();
      }, { rootMargin: '200px 0px' }).observe(b);
    } else { visibile = true; carica(); gioca(); }
    document.addEventListener('moon:lingua', aggiorna);
    aggiorna();
  });
})();
