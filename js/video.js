/* Moon Festival · video della Home da Vimeo (ambito: Simone)
   - Parte sempre da solo, senza audio, in loop, senza l'interfaccia di Vimeo (controls=0).
   - Due bottoni sempre visibili: pausa/play (WCAG 2.2.2, contenuto in movimento > 5 secondi)
     e audio sì/no (WCAG 1.4.2: l'audio parte solo se lo chiede chi guarda).
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
  var inPausa = false, conAudio = false;

  var f = document.createElement('iframe');
  f.src = 'https://player.vimeo.com/video/' + id + '?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0' +
          '&playsinline=1&dnt=1&autopause=0';
  f.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
  f.setAttribute('tabindex', '-1');           // il video non ha comandi propri: si usano i bottoni
  f.className = 'video__iframe';
  box.appendChild(f);

  var comandi = document.createElement('div');
  comandi.className = 'video__comandi';
  comandi.innerHTML =
    '<button type="button" class="video__bottone video__audio"><svg class="ico-muto" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4zM16 9l5 6M21 9l-5 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/></svg>' +
    '<svg class="ico-audio" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4zM16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/></svg><span class="sr"></span></button>' +
    '<button type="button" class="video__bottone video__pausa"><svg class="ico-pausa" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>' +
    '<svg class="ico-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><span class="sr"></span></button>';
  box.appendChild(comandi);
  var bPausa = comandi.querySelector('.video__pausa'), bAudio = comandi.querySelector('.video__audio');

  function aggiorna() {
    bPausa.querySelector('.sr').textContent = t(inPausa ? 'video.play' : 'video.pausa');
    bPausa.classList.toggle('attivo', inPausa);
    bAudio.querySelector('.sr').textContent = t(conAudio ? 'video.audio.off' : 'video.audio.on');
    bAudio.classList.toggle('attivo', conAudio);
    f.title = t('video.titolo');
  }
  function comanda(metodo, valore) {
    var m = { method: metodo }; if (valore !== undefined) m.value = valore;
    try { f.contentWindow.postMessage(JSON.stringify(m), 'https://player.vimeo.com'); } catch (e) {}
  }
  bPausa.addEventListener('click', function () { inPausa = !inPausa; comanda(inPausa ? 'pause' : 'play'); aggiorna(); });
  bAudio.addEventListener('click', function () {
    conAudio = !conAudio;
    comanda('setMuted', !conAudio); comanda('setVolume', conAudio ? 1 : 0);
    if (conAudio && inPausa) { inPausa = false; comanda('play'); }
    aggiorna();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (v) { if (!inPausa) comanda(v[0].isIntersecting ? 'play' : 'pause'); }).observe(box);
  }
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
