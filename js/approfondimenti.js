/* Moon Festival · pagine di approfondimento accese e spente (ambito: Simone)
   true  = la sezione ha il bottone "Approfondisci" e la sua pagina si vede nei menu;
   false = il bottone sparisce e nei menu la voce porta alla sezione della pagina principale.
   Per spegnere o accendere una pagina basta cambiare true/false qui sotto. */
window.MOON_APPROFONDIMENTI = {
  'cos-e-il-moon': true,
  'note-di-regia': true,
  'chi-siamo': true,
  'territorio': true,
  'partner': true
};

/* C58 · Iscrizione ai laboratori (ambito: Simone). Non è ancora deciso se si introduce.
   true  = la pagina «Partecipa ai laboratori» si vede nei menu e nelle tessere; la FAQ
           «I laboratori si prenotano?» risponde «Alcuni sì…».
   false = la pagina sparisce dai menu e dalle tessere; la FAQ risponde «No: basta presentarsi…».
   Dopo aver cambiato il valore: python3 strumenti/ricerca.py (la ricerca usa la risposta giusta). */
window.MOON_ISCRIZIONE_LABORATORI = true;
