/* Moon Festival · link ai moduli che si accendono e spengono con le date (ambito: Simone, funzioni)
   Ogni elemento con data-finestra="<modulo>" (voce di sottomenu, tessera di Partecipa, bottone)
   si vede solo mentre quel modulo è aperto, con le date di js/moduli-config.js.
   La voce della pagina in cui ti trovi resta sempre visibile.
   Con restaVisibile: true (moduli-config.js) i link restano anche dopo la chiusura: la pagina dice che la call è chiusa.
   In anteprima (stagione scelta dal footer o ?periodo=) si vedono tutti. */
(function () {
  function adesso() { var d = new Date(), p = function (n) { return String(n).padStart(2, '0'); }; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + 'T' + p(d.getHours()) + ':' + p(d.getMinutes()); }
  /* data senza ora: apre alle 9:00, chiude alle 15:00 del giorno dopo la scadenza (16/11/2026) */
  function giornoDopo(g) { var d = new Date(g + 'T12:00'); d.setDate(d.getDate() + 1); var p = function (n) { return String(n).padStart(2, '0'); }; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }
  function aperto(id) {
    if ((window.MOON_PERIODI || {}).attivi === false) return true;   /* date spente: tutto aperto */
    var st = ((window.MOON_MODULI_CONFIG || {}).stato || {})[id]; if (!st) return true;
    var ora = adesso();
    var apre = st.apre ? (st.apre.length === 10 ? st.apre + 'T09:00' : st.apre) : '';
    var chiude = st.chiude ? (st.chiude.length === 10 ? giornoDopo(st.chiude) + 'T15:00' : st.chiude) : '';
    if (apre && ora < apre) return false;
    if (chiude && ora > chiude) return !!st.restaVisibile;   /* call che restano in vista anche dopo la chiusura */
    return true;
  }
  window.MOON_MODULO_APERTO = aperto;
  function applica() {
    var anteprima = false;
    try { var q = new URLSearchParams(location.search).get('periodo');
      anteprima = q === 'auto' ? false : (q === 'base' || q === 'prima' || q === 'durante') ? true : !!sessionStorage.getItem('moon-periodo'); } catch (e) {}
    document.querySelectorAll('[data-finestra]').forEach(function (el) {
      var on = anteprima || aperto(el.getAttribute('data-finestra')) || !!el.querySelector('[aria-current="page"]') || el.getAttribute('aria-current') === 'page';
      el.hidden = !on;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applica); else applica();
})();
