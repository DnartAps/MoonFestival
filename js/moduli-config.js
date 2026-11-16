/* Moon Festival · collegamento dei moduli al foglio Google (ambito: Simone)
   url: indirizzo dell'app web di Google Apps Script ("Esegui il deployment" > "App web").
        Si imposta una volta sola: resta uguale per tutte le edizioni.
        Finché è vuoto i moduli funzionano in modalità prova e non inviano nulla.
   edizione: l'anno dei moduli. Ogni anno basta cambiarlo (e aggiornare le date qui sotto).
   stato: quando ogni modulo è aperto. "apre" e "chiude" come AAAA-MM-GG oppure AAAA-MM-GGTHH:MM.
        Solo la data: apre alle 9:00 di quel giorno; "chiude" è la scadenza scritta sul sito
        e il modulo resta aperto fino alle 15:00 del giorno dopo. Con l'ora: a quell'ora esatta.
        Vuoto = sempre aperto.
        Prima dell'apertura il modulo dice quando apre e i link verso la sua pagina non si vedono.
        Dopo la chiusura il modulo dice "chiuso" e i link spariscono, tranne con restaVisibile: true.
        Tutto questo vale solo con attivi: true in js/periodi.js (in anteprima si vede tutto).
   Regole del 9/11/2026 (sito-funzioni, punto 18), date e orari aggiornati il 16/11/2026 (punti 22 e 24). */
window.MOON_MODULI_CONFIG = {
  url: 'https://script.google.com/macros/s/AKfycbxVaChP5XGG70gqAlL-yAGCmgA31C-NU1riX8o7DHrGUWlf2bJV0txWJxCyrDCA8ME/exec',
  edizione: '2027',
  stato: {
    artisti: { apre: '2027-02-15', chiude: '2027-04-15', restaVisibile: true },
    installazioni: { apre: '2027-02-15', chiude: '2027-04-15', restaVisibile: true },
    laboratori: { apre: '2027-02-15', chiude: '2027-04-15', restaVisibile: true },
    'moon-lab': { apre: '2027-03-15', chiude: '2027-06-15' },
    volontari: { apre: '2027-03-01', chiude: '2027-08-31', restaVisibile: true },
    cantina: { apre: '', chiude: '' },
    adotta: { apre: '', chiude: '' },
    registrazione: { apre: '2027-06-01', chiude: '2027-09-06' },
    'moon-walk': { apre: '2027-08-01', chiude: '2027-09-04T17:00' },
    'iscrizione-laboratori': { apre: '2027-08-01', chiude: '2027-09-05' }
  }
};
