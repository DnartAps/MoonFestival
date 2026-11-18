/* Moon Festival · domande dei moduli del sito (ambito: Simone, contenuti e funzioni)
   GENERATO DAL FOGLIO "Domande dei moduli del sito": non modificare a mano, cambia il foglio
   e chiedi a Claude di aggiornare i moduli. Inglese tradotto da Claude, da rivedere.
   I segnaposto tra [QUADRE] sono dati da confermare.

   Tipi: testo, area (testo lungo), email, tel, data, numero, link, cap (5 cifre), comune (si sceglie tra i comuni
   del CAP, elenco in js/comuni-cap.js), scelta (una sola), scelte (più risposte), file, consenso (casella),
   info (solo testo da leggere). Aggiornato dal foglio del 16/11/2026.
   "se": il campo compare solo se un altro campo ha un certo valore (vale: uno o più valori; non; piuDi).
   Un "se" su una pagina (blocco) apre la pagina intera solo con quella risposta.
   "fonte": opzioni prese dal programma (laboratori e loro turni). */
window.MOON_MODULI = {
 "artisti": {
  "titolo": {
   "it": "Call artist* 2027",
   "en": "Open call for artists 2027"
  },
  "breve": {
   "it": "Spettacoli",
   "en": "Performances"
  },
  "lead": {
   "it": "Cerchiamo spettacoli capaci di incontrare davvero il borgo: teatro, circo, danza, musica, teatro di figura, performance.",
   "en": "We are looking for performances that can truly meet the village: theatre, circus, dance, music, puppetry, performance."
  },
  "info": [
   [
    {
     "it": "Date del festival",
     "en": "Festival dates"
    },
    {
     "it": "3, 4 e 5 settembre 2027",
     "en": "3, 4 and 5 September 2027"
    }
   ],
   [
    {
     "it": "Dove",
     "en": "Where"
    },
    {
     "it": "San Raffaele Cimena Alto (TO)",
     "en": "San Raffaele Cimena Alto (TO), Italy"
    }
   ],
   [
    {
     "it": "Formato",
     "en": "Format"
    },
    {
     "it": "Spettacoli all’aperto, fino a 30 minuti, ripetuti 3 volte a sera",
     "en": "Outdoor shows, up to 30 minutes, performed 3 times each evening"
    }
   ],
   [
    {
     "it": "Scadenza",
     "en": "Deadline"
    },
    {
     "it": "15 aprile 2027",
     "en": "15 April 2027"
    }
   ]
  ],
  "blocchi": [
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome anagrafico",
       "en": "Legal first name"
      },
      "auto": "given-name"
     },
     {
      "id": "nome_elezione",
      "tipo": "testo",
      "et": {
       "it": "Nome di elezione",
       "en": "Chosen name"
      },
      "aiuto": {
       "it": "Se usi un nome diverso da quello anagrafico, useremo questo in tutte le comunicazioni.",
       "en": "If you use a name other than your legal one, we will use it in all communications."
      },
      "auto": "nickname"
     },
     {
      "id": "cognome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Cognome",
       "en": "Last name"
      },
      "auto": "family-name"
     },
     {
      "id": "pronomi",
      "tipo": "scelta",
      "et": {
       "it": "Quali pronomi usi?",
       "en": "Which pronouns do you use?"
      },
      "opz": [
       {
        "it": "Lei",
        "en": "She/her"
       },
       {
        "it": "Lui",
        "en": "He/him"
       },
       {
        "it": "Neutri",
        "en": "They/them"
       },
       {
        "it": "Preferisco non dirlo",
        "en": "I prefer not to say"
       }
      ],
      "altro": true
     },
     {
      "id": "nascita",
      "tipo": "data",
      "obbl": true,
      "et": {
       "it": "Data di nascita",
       "en": "Date of birth"
      },
      "aiuto": {
       "it": "Ci serve per motivi organizzativi e assicurativi.",
       "en": "We need it for organisational and insurance reasons."
      },
      "auto": "bday"
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "auto": "email"
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "obbl": true,
      "et": {
       "it": "Telefono",
       "en": "Phone number"
      },
      "aiuto": {
       "it": "Con il prefisso, se non è italiano.",
       "en": "With the country code if it is not Italian."
      },
      "auto": "tel"
     },
     {
      "id": "paese",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Dove vivi?",
       "en": "Where do you live?"
      },
      "opz": [
       {
        "it": "In Italia",
        "en": "In Italy"
       },
       {
        "it": "In un altro Stato",
        "en": "In another country"
       }
      ],
      "auto": "country-name"
     },
     {
      "id": "cap",
      "tipo": "cap",
      "obbl": true,
      "et": {
       "it": "CAP",
       "en": "Postcode"
      },
      "aiuto": {
       "it": "Ci aiuta a capire da dove arrivate.",
       "en": "It helps us understand where you are coming from."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "postal-code"
     },
     {
      "id": "comune",
      "tipo": "comune",
      "obbl": true,
      "et": {
       "it": "Comune",
       "en": "Town or city"
      },
      "aiuto": {
       "it": "Lo scegli tra i comuni di quel CAP: se è uno solo, lo mettiamo noi.",
       "en": "Choose it from the towns with that postcode: if there is only one, we fill it in for you."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "address-level2"
     },
     {
      "id": "citta_estero",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Città e Stato",
       "en": "City and country"
      },
      "se": {
       "campo": "paese",
       "vale": "In un altro Stato"
      },
      "auto": "address-level2"
     }
    ]
   },
   {
    "id": "lo-spettacolo",
    "titolo": {
     "it": "Lo spettacolo",
     "en": "The performance"
    },
    "campi": [
     {
      "id": "compagnia",
      "tipo": "testo",
      "et": {
       "it": "Nome della compagnia o del collettivo",
       "en": "Name of the company or collective"
      },
      "aiuto": {
       "it": "Se presenti da sol*, lascia vuoto.",
       "en": "Leave empty if you are applying on your own."
      }
     },
     {
      "id": "titolo",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Titolo dello spettacolo",
       "en": "Title of the performance"
      }
     },
     {
      "id": "descrizione",
      "tipo": "area",
      "obbl": true,
      "et": {
       "it": "Raccontalo in poche righe",
       "en": "Describe it in a few lines"
      },
      "max": 500
     },
     {
      "id": "categoria",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Che tipo di spettacolo è?",
       "en": "What kind of performance is it?"
      },
      "opz": [
       {
        "it": "Teatro",
        "en": "Theatre"
       },
       {
        "it": "Circo",
        "en": "Circus"
       },
       {
        "it": "Danza",
        "en": "Dance"
       },
       {
        "it": "Performance",
        "en": "Performance"
       },
       {
        "it": "Teatro di figura / marionette",
        "en": "Puppetry / visual theatre"
       },
       {
        "it": "Musica / sound art",
        "en": "Music / sound art"
       }
      ],
      "altro": true
     },
     {
      "id": "linguaggio",
      "tipo": "scelte",
      "et": {
       "it": "Che linguaggio usa?",
       "en": "What kind of language does it use?"
      },
      "opz": [
       {
        "it": "Fisico",
        "en": "Physical"
       },
       {
        "it": "Poetico",
        "en": "Poetic"
       },
       {
        "it": "Comico",
        "en": "Comic"
       },
       {
        "it": "Visivo",
        "en": "Visual"
       },
       {
        "it": "Musicale",
        "en": "Musical"
       },
       {
        "it": "Acrobatico",
        "en": "Acrobatic"
       },
       {
        "it": "Partecipativo",
        "en": "Participatory"
       }
      ],
      "altro": true
     },
     {
      "id": "formato",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Sta fermo o si muove?",
       "en": "Does it stay in one place or move?"
      },
      "opz": [
       {
        "it": "Fisso, in un punto",
        "en": "Fixed, in one spot"
       },
       {
        "it": "Itinerante, si muove tra il pubblico",
        "en": "Roaming, it moves among the audience"
       },
       {
        "it": "Può essere tutti e due",
        "en": "It can be both"
       }
      ]
     },
     {
      "id": "durata",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto dura?",
       "en": "How long is it?"
      },
      "opz": [
       {
        "it": "Fino a 15 minuti",
        "en": "Up to 15 minutes"
       },
       {
        "it": "15–30 minuti",
        "en": "15–30 minutes"
       },
       {
        "it": "30–45 minuti",
        "en": "30–45 minutes"
       },
       {
        "it": "Oltre 45 minuti",
        "en": "Over 45 minutes"
       }
      ]
     },
     {
      "id": "max30",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Puoi portarlo a 30 minuti al massimo?",
       "en": "Can you bring it down to 30 minutes at most?"
      },
      "aiuto": {
       "it": "Al Moon il pubblico cammina da una scena all’altra: le forme brevi respirano meglio.",
       "en": "At the Moon the audience walks from one scene to the next: short pieces breathe better."
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ],
      "se": {
       "campo": "durata",
       "vale": [
        "30–45 minuti",
        "Oltre 45 minuti"
       ]
      }
     },
     {
      "id": "repliche",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Puoi replicarlo 3 volte nella stessa sera?",
       "en": "Can you perform it 3 times in the same evening?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "tema",
      "tipo": "area",
      "obbl": true,
      "et": {
       "it": "Come dialoga il tuo spettacolo con il tema 2027, [TEMA 2027]?",
       "en": "How does your performance relate to the 2027 theme, [THEME 2027]?"
      },
      "max": 600
     },
     {
      "id": "materiali",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Usi materiali riciclati, recuperati o sostenibili?",
       "en": "Do you use recycled, reclaimed or sustainable materials?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "In parte",
        "en": "Partly"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "materiali_quali",
      "tipo": "scelte",
      "et": {
       "it": "Quali?",
       "en": "Which ones?"
      },
      "opz": [
       {
        "it": "Legno e bancali",
        "en": "Wood and pallets"
       },
       {
        "it": "Tessuti e stoffe",
        "en": "Fabric and textiles"
       },
       {
        "it": "Metallo",
        "en": "Metal"
       },
       {
        "it": "Vetro",
        "en": "Glass"
       },
       {
        "it": "Plastica",
        "en": "Plastic"
       },
       {
        "it": "Carta e cartone",
        "en": "Paper and cardboard"
       },
       {
        "it": "Corde e reti",
        "en": "Ropes and nets"
       },
       {
        "it": "Luci e cavi",
        "en": "Lights and cables"
       },
       {
        "it": "Oggetti di recupero",
        "en": "Reclaimed objects"
       },
       {
        "it": "Vernici e colori",
        "en": "Paints"
       }
      ],
      "altro": true,
      "se": {
       "campo": "materiali",
       "non": "No"
      }
     }
    ]
   },
   {
    "id": "cosa-serve-alla-scena",
    "titolo": {
     "it": "Cosa serve alla scena",
     "en": "What the show needs"
    },
    "campi": [
     {
      "id": "spazio",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto spazio serve?",
       "en": "How much space does it need?"
      },
      "opz": [
       {
        "it": "Piccolo: fino a 3 × 3 m",
        "en": "Small: up to 3 × 3 m"
       },
       {
        "it": "Medio: fino a 6 × 6 m",
        "en": "Medium: up to 6 × 6 m"
       },
       {
        "it": "Grande: oltre 6 × 6 m",
        "en": "Large: over 6 × 6 m"
       },
       {
        "it": "Nessuno spazio fisso: è itinerante",
        "en": "No fixed space: it roams"
       }
      ]
     },
     {
      "id": "altezza",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Serve altezza?",
       "en": "Does it need height?"
      },
      "aiuto": {
       "it": "Per esempio per sospensioni o acrobatica aerea.",
       "en": "For example for rigging or aerial acrobatics."
      },
      "opz": [
       {
        "it": "No",
        "en": "No"
       },
       {
        "it": "Almeno 4 m",
        "en": "At least 4 m"
       },
       {
        "it": "Almeno 6 m",
        "en": "At least 6 m"
       },
       {
        "it": "Oltre 6 m",
        "en": "Over 6 m"
       }
      ]
     },
     {
      "id": "corrente",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Serve corrente?",
       "en": "Does it need power?"
      },
      "opz": [
       {
        "it": "No",
        "en": "No"
       },
       {
        "it": "Sì, una presa normale",
        "en": "Yes, a standard socket"
       },
       {
        "it": "Sì, più di una presa normale",
        "en": "Yes, more than a standard socket"
       },
       {
        "it": "Abbiamo batterie o un generatore",
        "en": "We have batteries or a generator"
       }
      ]
     },
     {
      "id": "esigenze",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Di cos’altro ha bisogno?",
       "en": "What else does it need?"
      },
      "opz": [
       {
        "it": "Niente di particolare, siamo autonom*",
        "en": "Nothing in particular, we are self-sufficient"
       },
       {
        "it": "Pavimento regolare",
        "en": "Even ground"
       },
       {
        "it": "Buio",
        "en": "Darkness"
       },
       {
        "it": "Silenzio, poco rumore intorno",
        "en": "Silence, little noise around"
       },
       {
        "it": "Impianto audio",
        "en": "Sound system"
       },
       {
        "it": "Impianto luci",
        "en": "Lighting"
       },
       {
        "it": "Un punto dove appendere o ancorare",
        "en": "A point to hang or anchor from"
       },
       {
        "it": "Uno spazio per cambiarsi",
        "en": "A space to get changed"
       }
      ],
      "altro": true
     },
     {
      "id": "autonomia",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto siete autonom* dal punto di vista tecnico?",
       "en": "How technically self-sufficient are you?"
      },
      "opz": [
       {
        "it": "Del tutto: abbiamo tutto ciò che serve",
        "en": "Completely: we have everything we need"
       },
       {
        "it": "In parte: ci serve un supporto minimo (corrente, luce di base, aiuto a montare)",
        "en": "Partly: we need minimal support (power, basic light, help with set-up)"
       },
       {
        "it": "Poco: ci serve il supporto del festival",
        "en": "Not much: we need support from the festival"
       },
       {
        "it": "Dipende dallo spazio",
        "en": "It depends on the space"
       }
      ]
     },
     {
      "id": "montaggio",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto tempo vi serve per montare?",
       "en": "How long do you need to set up?"
      },
      "opz": [
       {
        "it": "Meno di 15 minuti",
        "en": "Less than 15 minutes"
       },
       {
        "it": "15–30 minuti",
        "en": "15–30 minutes"
       },
       {
        "it": "30–60 minuti",
        "en": "30–60 minutes"
       },
       {
        "it": "Oltre un’ora",
        "en": "Over an hour"
       },
       {
        "it": "Dipende dallo spazio",
        "en": "It depends on the space"
       }
      ]
     },
     {
      "id": "giorno_prima",
      "tipo": "scelta",
      "et": {
       "it": "Vi serve montare il giorno prima?",
       "en": "Do you need to set up the day before?"
      },
      "opz": [
       {
        "it": "No, montiamo il giorno stesso",
        "en": "No, we set up on the day"
       },
       {
        "it": "Sarebbe meglio",
        "en": "It would be better"
       },
       {
        "it": "Sì, è necessario",
        "en": "Yes, it is necessary"
       }
      ]
     },
     {
      "id": "scheda_tecnica",
      "tipo": "file",
      "et": {
       "it": "Scheda tecnica (PDF), se ce l’hai",
       "en": "Technical rider (PDF), if you have one"
      },
      "multipli": 1,
      "accetta": "application/pdf"
     }
    ]
   },
   {
    "id": "per-chi-guarda",
    "titolo": {
     "it": "Per chi guarda",
     "en": "For the audience"
    },
    "campi": [
     {
      "id": "pubblico",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Per chi è?",
       "en": "Who is it for?"
      },
      "opz": [
       {
        "it": "Per tutt*",
        "en": "For everyone"
       },
       {
        "it": "Adatto a bambin*",
        "en": "Suitable for children"
       },
       {
        "it": "Per un pubblico adulto",
        "en": "For adults"
       }
      ],
      "altro": true
     },
     {
      "id": "lingua_spettacolo",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "In che lingua è?",
       "en": "What language is it in?"
      },
      "opz": [
       {
        "it": "Non verbale",
        "en": "Non-verbal"
       },
       {
        "it": "Italiano",
        "en": "Italian"
       },
       {
        "it": "Inglese",
        "en": "English"
       },
       {
        "it": "Francese",
        "en": "French"
       },
       {
        "it": "Misto, più lingue",
        "en": "Mixed, several languages"
       }
      ],
      "altro": true
     },
     {
      "id": "interazione",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto coinvolge il pubblico?",
       "en": "How much does it involve the audience?"
      },
      "opz": [
       {
        "it": "Nessuna: il pubblico guarda",
        "en": "None: the audience watches"
       },
       {
        "it": "Leggera: uno sguardo, un gesto, una battuta",
        "en": "Light: a look, a gesture, a quip"
       },
       {
        "it": "Centrale: il pubblico partecipa",
        "en": "Central: the audience takes part"
       },
       {
        "it": "Fisica: c’è contatto",
        "en": "Physical: there is contact"
       }
      ]
     },
     {
      "id": "visione",
      "tipo": "scelte",
      "et": {
       "it": "Come lo segue il pubblico?",
       "en": "How does the audience follow it?"
      },
      "aiuto": {
       "it": "Ci aiuta a scegliere il posto giusto nel borgo.",
       "en": "It helps us choose the right spot in the village."
      },
      "opz": [
       {
        "it": "Da vicino, in un gruppo raccolto",
        "en": "Up close, in a small group"
       },
       {
        "it": "Anche da lontano",
        "en": "From a distance too"
       },
       {
        "it": "Seduto",
        "en": "Seated"
       },
       {
        "it": "In piedi",
        "en": "Standing"
       },
       {
        "it": "Camminando con noi",
        "en": "Walking with us"
       }
      ]
     },
     {
      "id": "rumore",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto è rumoroso?",
       "en": "How loud is it?"
      },
      "opz": [
       {
        "it": "Poco",
        "en": "Low"
       },
       {
        "it": "Medio",
        "en": "Moderate"
       },
       {
        "it": "Molto",
        "en": "High"
       }
      ]
     },
     {
      "id": "alert",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Ci sono cose da segnalare a chi guarda?",
       "en": "Is there anything the audience should be warned about?"
      },
      "aiuto": {
       "it": "Le scriviamo nel programma, così ognun* può scegliere con serenità.",
       "en": "We list them in the programme, so everyone can choose with peace of mind."
      },
      "opz": [
       {
        "it": "Buio o poca luce",
        "en": "Darkness or low light"
       },
       {
        "it": "Luci intermittenti o stroboscopiche",
        "en": "Flashing or strobe lights"
       },
       {
        "it": "Fumo o nebbia scenica",
        "en": "Stage smoke or haze"
       },
       {
        "it": "Fuoco o fiamme",
        "en": "Fire or flames"
       },
       {
        "it": "Volume alto",
        "en": "High volume"
       },
       {
        "it": "Suoni improvvisi",
        "en": "Sudden sounds"
       },
       {
        "it": "Musica o rumori prolungati",
        "en": "Long stretches of music or noise"
       },
       {
        "it": "Microfoni o amplificazione forte",
        "en": "Microphones or loud amplification"
       },
       {
        "it": "Contatto fisico",
        "en": "Physical contact"
       },
       {
        "it": "Artist* che si muovono tra il pubblico",
        "en": "Performers moving among the audience"
       },
       {
        "it": "Oggetti sospesi o in movimento",
        "en": "Suspended or moving objects"
       },
       {
        "it": "Acqua o materiali che bagnano",
        "en": "Water or materials that get you wet"
       },
       {
        "it": "Polveri, coriandoli o materiali dispersi",
        "en": "Powder, confetti or scattered materials"
       },
       {
        "it": "Odori o sostanze profumate",
        "en": "Smells or scented substances"
       },
       {
        "it": "Cibo o possibili allergeni",
        "en": "Food or possible allergens"
       },
       {
        "it": "Animali",
        "en": "Pets"
       },
       {
        "it": "Nudità o corpo esposto",
        "en": "Nudity or exposed bodies"
       },
       {
        "it": "Linguaggio esplicito",
        "en": "Explicit language"
       },
       {
        "it": "Temi delicati",
        "en": "Sensitive themes"
       },
       {
        "it": "Scene di conflitto, tensione o paura",
        "en": "Scenes of conflict, tension or fear"
       },
       {
        "it": "Non adatto a bambin* piccol*",
        "en": "Not suitable for young children"
       },
       {
        "it": "Nessuna di queste",
        "en": "None of these"
       }
      ],
      "altro": true
     }
    ]
   },
   {
    "id": "il-gruppo",
    "titolo": {
     "it": "Il gruppo",
     "en": "The group"
    },
    "campi": [
     {
      "id": "date",
      "tipo": "info",
      "et": {
       "it": "Il Moon Festival 2027 è venerdì 3, sabato 4 e domenica 5 settembre.",
       "en": "Moon Festival 2027 takes place on Friday 3, Saturday 4 and Sunday 5 September."
      },
      "aiuto": {
       "it": "Per ora non ti chiediamo se ci sarai: se la proposta ci emoziona, ne parliamo insieme.",
       "en": "We are not asking yet whether you can be there: if your proposal moves us, we will talk it through together."
      }
     },
     {
      "id": "persone",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone siete in tutto?",
       "en": "How many people are you in total?"
      },
      "aiuto": {
       "it": "Contando chi va in scena e chi segue la tecnica.",
       "en": "Counting performers and technical crew."
      },
      "min": 1
     },
     {
      "id": "eta_media",
      "tipo": "scelta",
      "et": {
       "it": "Età media del gruppo",
       "en": "Average age of the group"
      },
      "opz": [
       {
        "it": "Meno di 18",
        "en": "Under 18"
       },
       {
        "it": "18–25",
        "en": "18–25"
       },
       {
        "it": "26–30",
        "en": "26–30"
       },
       {
        "it": "31–40",
        "en": "31–40"
       },
       {
        "it": "41–50",
        "en": "41–50"
       },
       {
        "it": "51–60",
        "en": "51–60"
       },
       {
        "it": "Oltre 60",
        "en": "Over 60"
       },
       {
        "it": "Gruppo di più generazioni",
        "en": "Multigenerational group"
       }
      ],
      "se": {
       "campo": "persone",
       "piuDi": 1
      }
     },
     {
      "id": "lingue",
      "tipo": "scelte",
      "et": {
       "it": "Che lingue parlate?",
       "en": "Which languages do you speak?"
      },
      "opz": [
       {
        "it": "Italiano",
        "en": "Italian"
       },
       {
        "it": "Inglese",
        "en": "English"
       },
       {
        "it": "Francese",
        "en": "French"
       },
       {
        "it": "Spagnolo",
        "en": "Spanish"
       },
       {
        "it": "Tedesco",
        "en": "German"
       }
      ],
      "altro": true
     },
     {
      "id": "territorio",
      "tipo": "scelta",
      "et": {
       "it": "Sarete in Piemonte o nei dintorni tra agosto e settembre 2027?",
       "en": "Will you be in Piedmont or nearby in August and September 2027?"
      },
      "aiuto": {
       "it": "Ci aiuta a valorizzare chi è già sul territorio in quel periodo.",
       "en": "It helps us support people who are already in the area at that time."
      },
      "opz": [
       {
        "it": "Sì, ho già date confermate in Piemonte",
        "en": "Yes, I already have confirmed dates in Piedmont"
       },
       {
        "it": "Sì, ho date nelle zone vicine",
        "en": "Yes, I have dates in nearby areas"
       },
       {
        "it": "No, ma sarò comunque in Piemonte",
        "en": "No, but I will be in Piedmont anyway"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "vegani",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone del gruppo mangiano vegano?",
       "en": "How many people in the group eat vegan?"
      },
      "aiuto": {
       "it": "La cucina del Moon è vegetariana: un festival che crede nella sostenibilità lo è anche a tavola. Cuciniamo tutto noi. Scrivi 0 se nessuna.",
       "en": "The Moon kitchen is vegetarian: a festival that believes in sustainability is sustainable at the table too. We cook everything. Write 0 if nobody."
      },
      "min": 1
     },
     {
      "id": "allergie_si",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Nel gruppo ci sono allergie o intolleranze alimentari serie?",
       "en": "Does anyone in the group have serious food allergies or intolerances?"
      },
      "aiuto": {
       "it": "Meglio saperlo subito: in cucina ci organizziamo per tempo.",
       "en": "Better to know now: it lets the kitchen plan ahead."
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "allergie_persone",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone?",
       "en": "How many people?"
      },
      "aiuto": {
       "it": "Per ognuna ti chiediamo cosa e quanto è seria, fino a 4 persone. Se sono di più, scrivilo in «Vuoi dirci qualcos’altro?».",
       "en": "For each person we ask what it is and how serious, up to 4 people. If there are more, write it in “Anything else to tell us?”."
      },
      "se": {
       "campo": "allergie_si",
       "vale": "Sì"
      },
      "min": 1
     },
     {
      "id": "allergie_1",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 1: quali allergie o intolleranze?",
       "en": "Person 1: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 0
      }
     },
     {
      "id": "gravita_1",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 1: quanto è seria?",
       "en": "Person 1: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 0
      }
     },
     {
      "id": "allergie_2",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 2: quali allergie o intolleranze?",
       "en": "Person 2: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 1
      }
     },
     {
      "id": "gravita_2",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 2: quanto è seria?",
       "en": "Person 2: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 1
      }
     },
     {
      "id": "allergie_3",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 3: quali allergie o intolleranze?",
       "en": "Person 3: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 2
      }
     },
     {
      "id": "gravita_3",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 3: quanto è seria?",
       "en": "Person 3: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 2
      }
     },
     {
      "id": "allergie_4",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 4: quali allergie o intolleranze?",
       "en": "Person 4: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 3
      }
     },
     {
      "id": "gravita_4",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 4: quanto è seria?",
       "en": "Person 4: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 3
      }
     }
    ]
   },
   {
    "id": "foto-video-e-documenti",
    "titolo": {
     "it": "Foto, video e documenti",
     "en": "Photos, videos and documents"
    },
    "campi": [
     {
      "id": "foto",
      "tipo": "file",
      "obbl": true,
      "et": {
       "it": "Foto (fino a 5)",
       "en": "Photos (up to 5)"
      },
      "aiuto": {
       "it": "Foto orizzontali o verticali, almeno 1000 px sul lato lungo. Le useremo anche per il sito e i social, se verrai selezionat*.",
       "en": "Landscape or portrait, at least 1000 px on the long side. If selected, we will also use them on the website and social media."
      },
      "multipli": 5,
      "accetta": "image/jpeg,image/png"
     },
     {
      "id": "dossier",
      "tipo": "file",
      "et": {
       "it": "Dossier o presentazione (PDF)",
       "en": "Portfolio or presentation (PDF)"
      },
      "multipli": 1,
      "accetta": "application/pdf"
     },
     {
      "id": "link_video",
      "tipo": "link",
      "obbl": true,
      "et": {
       "it": "Link al video integrale dello spettacolo",
       "en": "Link to the full-length video of the performance"
      },
      "aiuto": {
       "it": "Lo spettacolo intero, anche ripreso con una sola camera fissa. Un trailer puoi aggiungerlo negli altri link. Usa un link che non scade (Drive, Dropbox, Vimeo, YouTube, il tuo sito): i link di WeTransfer scadono dopo pochi giorni.",
       "en": "The whole performance, even if filmed with a single fixed camera. You can add a trailer in the other links. Use a link that does not expire (Drive, Dropbox, Vimeo, YouTube, your website): WeTransfer links expire after a few days."
      }
     },
     {
      "id": "link_altro",
      "tipo": "link",
      "et": {
       "it": "Altri link (sito, Instagram, foto online)",
       "en": "Other links (website, Instagram, online photos)"
      },
      "aiuto": {
       "it": "Uno per riga.",
       "en": "One per line."
      },
      "righe": true
     }
    ],
    "intro": {
     "it": "Puoi caricare i file qui sotto oppure incollare dei link. Foto in JPG o PNG, documenti in PDF, massimo 10 MB per file.",
     "en": "You can upload files below or paste links. Photos as JPG or PNG, documents as PDF, up to 10 MB per file."
    }
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "conosciuto",
      "tipo": "scelta",
      "et": {
       "it": "Come hai conosciuto il Moon Festival?",
       "en": "How did you hear about Moon Festival?"
      },
      "opz": [
       {
        "it": "Passaparola",
        "en": "Word of mouth"
       },
       {
        "it": "Instagram",
        "en": "Instagram"
       },
       {
        "it": "Facebook",
        "en": "Facebook"
       },
       {
        "it": "TikTok",
        "en": "TikTok"
       },
       {
        "it": "Sito web",
        "en": "Website"
       },
       {
        "it": "Materiale stampato",
        "en": "Printed materials"
       },
       {
        "it": "Ci sono già stat*",
        "en": "I have been before"
       }
      ],
      "altro": true
     },
     {
      "id": "suggerimenti",
      "tipo": "area",
      "et": {
       "it": "Vuoi dirci qualcos’altro?",
       "en": "Anything else you want to tell us?"
      },
      "aiuto": {
       "it": "Suggerimenti, bisogni, cose che il modulo non ti ha chiesto o errori che hai notato.",
       "en": "Suggestions, needs, things this form did not ask, or mistakes you noticed."
      },
      "max": 1000
     },
     {
      "id": "liberatoria",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Autorizzo Dnart APS a usare foto e video del festival in cui compaio io o compaiono le persone del gruppo, per comunicazione, documentazione e archivio del Moon Festival.",
       "en": "I authorise Dnart APS to use festival photos and videos in which I or the members of my group appear, for Moon Festival communication, documentation and archive purposes."
      },
      "aiuto": {
       "it": "Ho informato tutte le persone del gruppo.",
       "en": "I have informed everyone in the group."
      }
     },
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679). Se la proposta è di un gruppo, ho informato tutte le persone coinvolte e ho il loro consenso.",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679). If the proposal comes from a group, I have informed everyone involved and have their consent."
      },
      "link": "privacy.html"
     },
     {
      "id": "comunicazioni",
      "tipo": "consenso",
      "et": {
       "it": "Acconsento all’uso della mia email per comunicazioni sul Moon Festival e sulle call future.",
       "en": "I agree to my email being used for communications about Moon Festival and future calls."
      }
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 },
 "installazioni": {
  "titolo": {
   "it": "Call installazioni 2027",
   "en": "Open call for installations 2027"
  },
  "breve": {
   "it": "Installazioni",
   "en": "Installations"
  },
  "lead": {
   "it": "Opere da abitare per tre sere: luce, suono, materia, sagome che trasformano vicoli, cortili e piazze del borgo.",
   "en": "Works to be lived in for three evenings: light, sound, matter and shapes that transform the lanes, courtyards and squares of the village."
  },
  "info": [
   [
    {
     "it": "Date del festival",
     "en": "Festival dates"
    },
    {
     "it": "3, 4 e 5 settembre 2027",
     "en": "3, 4 and 5 September 2027"
    }
   ],
   [
    {
     "it": "Dove",
     "en": "Where"
    },
    {
     "it": "All’aperto e in spazi del borgo, dal tramonto a mezzanotte",
     "en": "Outdoors and in village spaces, from sunset to midnight"
    }
   ],
   [
    {
     "it": "Scadenza",
     "en": "Deadline"
    },
    {
     "it": "15 aprile 2027",
     "en": "15 April 2027"
    }
   ]
  ],
  "blocchi": [
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome anagrafico",
       "en": "Legal first name"
      },
      "auto": "given-name"
     },
     {
      "id": "nome_elezione",
      "tipo": "testo",
      "et": {
       "it": "Nome di elezione",
       "en": "Chosen name"
      },
      "aiuto": {
       "it": "Se usi un nome diverso da quello anagrafico, useremo questo in tutte le comunicazioni.",
       "en": "If you use a name other than your legal one, we will use it in all communications."
      },
      "auto": "nickname"
     },
     {
      "id": "cognome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Cognome",
       "en": "Last name"
      },
      "auto": "family-name"
     },
     {
      "id": "pronomi",
      "tipo": "scelta",
      "et": {
       "it": "Quali pronomi usi?",
       "en": "Which pronouns do you use?"
      },
      "opz": [
       {
        "it": "Lei",
        "en": "She/her"
       },
       {
        "it": "Lui",
        "en": "He/him"
       },
       {
        "it": "Neutri",
        "en": "They/them"
       },
       {
        "it": "Preferisco non dirlo",
        "en": "I prefer not to say"
       }
      ],
      "altro": true
     },
     {
      "id": "nascita",
      "tipo": "data",
      "obbl": true,
      "et": {
       "it": "Data di nascita",
       "en": "Date of birth"
      },
      "aiuto": {
       "it": "Ci serve per motivi organizzativi e assicurativi.",
       "en": "We need it for organisational and insurance reasons."
      },
      "auto": "bday"
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "auto": "email"
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "obbl": true,
      "et": {
       "it": "Telefono",
       "en": "Phone number"
      },
      "aiuto": {
       "it": "Con il prefisso, se non è italiano.",
       "en": "With the country code if it is not Italian."
      },
      "auto": "tel"
     },
     {
      "id": "paese",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Dove vivi?",
       "en": "Where do you live?"
      },
      "opz": [
       {
        "it": "In Italia",
        "en": "In Italy"
       },
       {
        "it": "In un altro Stato",
        "en": "In another country"
       }
      ],
      "auto": "country-name"
     },
     {
      "id": "cap",
      "tipo": "cap",
      "obbl": true,
      "et": {
       "it": "CAP",
       "en": "Postcode"
      },
      "aiuto": {
       "it": "Ci aiuta a capire da dove arrivate.",
       "en": "It helps us understand where you are coming from."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "postal-code"
     },
     {
      "id": "comune",
      "tipo": "comune",
      "obbl": true,
      "et": {
       "it": "Comune",
       "en": "Town or city"
      },
      "aiuto": {
       "it": "Lo scegli tra i comuni di quel CAP: se è uno solo, lo mettiamo noi.",
       "en": "Choose it from the towns with that postcode: if there is only one, we fill it in for you."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "address-level2"
     },
     {
      "id": "citta_estero",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Città e Stato",
       "en": "City and country"
      },
      "se": {
       "campo": "paese",
       "vale": "In un altro Stato"
      },
      "auto": "address-level2"
     }
    ]
   },
   {
    "id": "l-opera",
    "titolo": {
     "it": "L’opera",
     "en": "The work"
    },
    "campi": [
     {
      "id": "compagnia",
      "tipo": "testo",
      "et": {
       "it": "Nome del collettivo o dello studio",
       "en": "Name of the collective or studio"
      },
      "aiuto": {
       "it": "Se presenti da sol*, lascia vuoto.",
       "en": "Leave empty if you are applying on your own."
      }
     },
     {
      "id": "titolo",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Titolo dell’opera",
       "en": "Title of the work"
      }
     },
     {
      "id": "descrizione",
      "tipo": "area",
      "obbl": true,
      "et": {
       "it": "Raccontala in poche righe",
       "en": "Describe it in a few lines"
      },
      "max": 500
     },
     {
      "id": "forma",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Come presenti il progetto?",
       "en": "How are you presenting the project?"
      },
      "opz": [
       {
        "it": "Da sol*",
        "en": "On my own"
       },
       {
        "it": "Con un gruppo informale",
        "en": "With an informal group"
       },
       {
        "it": "Come collettivo",
        "en": "As a collective"
       },
       {
        "it": "Come associazione",
        "en": "As an association"
       }
      ],
      "altro": true
     },
     {
      "id": "nuova",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "È una creazione nuova?",
       "en": "Is it a new piece?"
      },
      "opz": [
       {
        "it": "Sì, pensata per il Moon",
        "en": "Yes, made for the Moon"
       },
       {
        "it": "È un adattamento di un progetto esistente",
        "en": "It is an adaptation of an existing project"
       },
       {
        "it": "È già stata presentata altrove",
        "en": "It has already been shown elsewhere"
       }
      ]
     },
     {
      "id": "dove_presentata",
      "tipo": "testo",
      "et": {
       "it": "Dove e quando l’hai già presentata?",
       "en": "Where and when have you already shown it?"
      },
      "se": {
       "campo": "nuova",
       "vale": "È già stata presentata altrove"
      }
     },
     {
      "id": "tipo_opera",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Che tipo di installazione è?",
       "en": "What kind of installation is it?"
      },
      "opz": [
       {
        "it": "Luminosa",
        "en": "Light"
       },
       {
        "it": "Sonora",
        "en": "Sound"
       },
       {
        "it": "Interattiva, il pubblico la usa o la tocca",
        "en": "Interactive, the audience uses or touches it"
       },
       {
        "it": "Scultura o oggetto",
        "en": "Sculpture or object"
       },
       {
        "it": "Site-specific, nasce per il luogo",
        "en": "Site-specific, made for the place"
       },
       {
        "it": "Visiva o video",
        "en": "Visual or video"
       }
      ],
      "altro": true
     },
     {
      "id": "tema",
      "tipo": "area",
      "obbl": true,
      "et": {
       "it": "Come dialoga l’opera con il tema 2027, [TEMA 2027]?",
       "en": "How does the work relate to the 2027 theme, [THEME 2027]?"
      },
      "max": 600
     },
     {
      "id": "partecipativa",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Il pubblico partecipa all’installazione?",
       "en": "Does the audience take part in the installation?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "In parte",
        "en": "Partly"
       },
       {
        "it": "No, si guarda",
        "en": "No, people just look"
       }
      ]
     },
     {
      "id": "partecipa_come",
      "tipo": "testo",
      "et": {
       "it": "Come partecipa, in poche parole?",
       "en": "How do they take part, in a few words?"
      },
      "se": {
       "campo": "partecipativa",
       "non": "No, si guarda"
      }
     },
     {
      "id": "materiali",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Usi materiali riciclati, recuperati o sostenibili?",
       "en": "Do you use recycled, reclaimed or sustainable materials?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "In parte",
        "en": "Partly"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "materiali_quali",
      "tipo": "scelte",
      "et": {
       "it": "Quali?",
       "en": "Which ones?"
      },
      "opz": [
       {
        "it": "Legno e bancali",
        "en": "Wood and pallets"
       },
       {
        "it": "Tessuti e stoffe",
        "en": "Fabric and textiles"
       },
       {
        "it": "Metallo",
        "en": "Metal"
       },
       {
        "it": "Vetro",
        "en": "Glass"
       },
       {
        "it": "Plastica",
        "en": "Plastic"
       },
       {
        "it": "Carta e cartone",
        "en": "Paper and cardboard"
       },
       {
        "it": "Corde e reti",
        "en": "Ropes and nets"
       },
       {
        "it": "Luci e cavi",
        "en": "Lights and cables"
       },
       {
        "it": "Oggetti di recupero",
        "en": "Reclaimed objects"
       },
       {
        "it": "Vernici e colori",
        "en": "Paints"
       }
      ],
      "altro": true,
      "se": {
       "campo": "materiali",
       "non": "No"
      }
     }
    ]
   },
   {
    "id": "spazio-e-montaggio",
    "titolo": {
     "it": "Spazio e montaggio",
     "en": "Space and set-up"
    },
    "campi": [
     {
      "id": "date",
      "tipo": "info",
      "et": {
       "it": "Le installazioni restano nel borgo per tutto il festival: venerdì 3, sabato 4 e domenica 5 settembre 2027.",
       "en": "Installations stay in the village for the whole festival: Friday 3, Saturday 4 and Sunday 5 September 2027."
      },
      "aiuto": {
       "it": "Per ora non ti chiediamo se ci sarai: se la proposta ci emoziona, ne parliamo insieme.",
       "en": "We are not asking yet whether you can be there: if your proposal moves us, we will talk it through together."
      }
     },
     {
      "id": "luogo",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Dove funziona meglio?",
       "en": "Where does it work best?"
      },
      "opz": [
       {
        "it": "All’aperto",
        "en": "Outdoors"
       },
       {
        "it": "Al coperto",
        "en": "Indoors"
       },
       {
        "it": "In un vicolo o passaggio",
        "en": "In a lane or passage"
       },
       {
        "it": "In una piazza o cortile",
        "en": "In a square or courtyard"
       },
       {
        "it": "Su un muro o una facciata",
        "en": "On a wall or facade"
       },
       {
        "it": "Va bene ovunque",
        "en": "Anywhere"
       }
      ]
     },
     {
      "id": "dimensioni",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto spazio occupa?",
       "en": "How much space does it take up?"
      },
      "aiuto": {
       "it": "Il lato più lungo, anche a occhio.",
       "en": "The longest side, a rough guess is fine."
      },
      "opz": [
       {
        "it": "Sta su un tavolo",
        "en": "It fits on a table"
       },
       {
        "it": "Fino a 2 m",
        "en": "Up to 2 m"
       },
       {
        "it": "Da 2 a 5 m",
        "en": "From 2 to 5 m"
       },
       {
        "it": "Oltre 5 m",
        "en": "Over 5 m"
       },
       {
        "it": "Si adatta allo spazio",
        "en": "It adapts to the space"
       }
      ]
     },
     {
      "id": "notte",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Come vive di notte?",
       "en": "How does it live at night?"
      },
      "aiuto": {
       "it": "Il festival si accende quando cala il buio.",
       "en": "The festival lights up when darkness falls."
      },
      "opz": [
       {
        "it": "Si illumina da sola",
        "en": "It lights itself up"
       },
       {
        "it": "Va illuminata",
        "en": "It needs lighting"
       },
       {
        "it": "Vive nel buio, con poca luce",
        "en": "It lives in the dark, with little light"
       },
       {
        "it": "Si vede solo di giorno",
        "en": "It can only be seen by day"
       }
      ]
     },
     {
      "id": "elettricita",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Ha bisogno di corrente?",
       "en": "Does it need power?"
      },
      "opz": [
       {
        "it": "No",
        "en": "No"
       },
       {
        "it": "Sì, una presa normale",
        "en": "Yes, a standard socket"
       },
       {
        "it": "Sì, più di una presa normale",
        "en": "Yes, more than a standard socket"
       },
       {
        "it": "Funziona a batteria",
        "en": "It runs on batteries"
       }
      ]
     },
     {
      "id": "meteo",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Regge pioggia e vento?",
       "en": "Can it withstand rain and wind?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "Con qualche protezione",
        "en": "With some protection"
       },
       {
        "it": "No, va protetta o smontata",
        "en": "No, it must be covered or taken down"
       }
      ]
     },
     {
      "id": "montaggio",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto tempo serve per montarla?",
       "en": "How long does it take to install?"
      },
      "opz": [
       {
        "it": "Meno di mezza giornata",
        "en": "Less than half a day"
       },
       {
        "it": "Una giornata",
        "en": "One day"
       },
       {
        "it": "Due giorni o più",
        "en": "Two days or more"
       }
      ]
     },
     {
      "id": "presenza",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Durante il festival serve una persona accanto all’opera?",
       "en": "Does the work need someone with it during the festival?"
      },
      "opz": [
       {
        "it": "No, è autonoma",
        "en": "No, it runs on its own"
       },
       {
        "it": "Sì, la seguiamo noi",
        "en": "Yes, we look after it"
       },
       {
        "it": "Sì, serve una persona del festival",
        "en": "Yes, it needs someone from the festival"
       }
      ]
     },
     {
      "id": "quando",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "L’installazione resta per tutto il festival?",
       "en": "Does the installation stay for the whole festival?"
      },
      "opz": [
       {
        "it": "Sì, tutti e tre i giorni",
        "en": "Yes, all three days"
       },
       {
        "it": "Solo in alcuni momenti",
        "en": "Only at certain times"
       }
      ]
     },
     {
      "id": "alert",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Ci sono cose da sapere per chi la visita?",
       "en": "Is there anything visitors should know?"
      },
      "aiuto": {
       "it": "Le scriviamo nel programma e ci aiutano a scegliere il posto giusto.",
       "en": "We list them in the programme and they help us choose the right spot."
      },
      "opz": [
       {
        "it": "Parti fragili",
        "en": "Fragile parts"
       },
       {
        "it": "Spigoli o parti taglienti",
        "en": "Sharp edges or parts"
       },
       {
        "it": "Si può toccare",
        "en": "People can touch it"
       },
       {
        "it": "Si può calpestare o attraversare",
        "en": "People can walk on it or through it"
       },
       {
        "it": "Luci intermittenti o stroboscopiche",
        "en": "Flashing or strobe lights"
       },
       {
        "it": "Suoni improvvisi o volume alto",
        "en": "Sudden sounds or high volume"
       },
       {
        "it": "Buio o poca luce",
        "en": "Darkness or low light"
       },
       {
        "it": "Fuoco o fiamme",
        "en": "Fire or flames"
       },
       {
        "it": "Fumo o nebbia",
        "en": "Smoke or haze"
       },
       {
        "it": "Acqua o materiali che bagnano",
        "en": "Water or materials that get you wet"
       },
       {
        "it": "Oggetti sospesi o in movimento",
        "en": "Suspended or moving objects"
       },
       {
        "it": "Odori o sostanze profumate",
        "en": "Smells or scented substances"
       },
       {
        "it": "Non adatta a bambin* piccol*",
        "en": "Not suitable for young children"
       },
       {
        "it": "Nessuna di queste",
        "en": "None of these"
       }
      ],
      "altro": true
     }
    ]
   },
   {
    "id": "il-gruppo",
    "titolo": {
     "it": "Il gruppo",
     "en": "The group"
    },
    "campi": [
     {
      "id": "persone",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone verranno al festival?",
       "en": "How many people will come to the festival?"
      },
      "min": 1
     },
     {
      "id": "territorio",
      "tipo": "scelta",
      "et": {
       "it": "Sarete in Piemonte o nei dintorni tra agosto e settembre 2027?",
       "en": "Will you be in Piedmont or nearby in August and September 2027?"
      },
      "aiuto": {
       "it": "Ci aiuta a valorizzare chi è già sul territorio in quel periodo.",
       "en": "It helps us support people who are already in the area at that time."
      },
      "opz": [
       {
        "it": "Sì, ho già date confermate in Piemonte",
        "en": "Yes, I already have confirmed dates in Piedmont"
       },
       {
        "it": "Sì, ho date nelle zone vicine",
        "en": "Yes, I have dates in nearby areas"
       },
       {
        "it": "No, ma sarò comunque in Piemonte",
        "en": "No, but I will be in Piedmont anyway"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "vegani",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone del gruppo mangiano vegano?",
       "en": "How many people in the group eat vegan?"
      },
      "aiuto": {
       "it": "La cucina del Moon è vegetariana: un festival che crede nella sostenibilità lo è anche a tavola. Cuciniamo tutto noi. Scrivi 0 se nessuna.",
       "en": "The Moon kitchen is vegetarian: a festival that believes in sustainability is sustainable at the table too. We cook everything. Write 0 if nobody."
      },
      "min": 1
     },
     {
      "id": "allergie_si",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Nel gruppo ci sono allergie o intolleranze alimentari serie?",
       "en": "Does anyone in the group have serious food allergies or intolerances?"
      },
      "aiuto": {
       "it": "Meglio saperlo subito: in cucina ci organizziamo per tempo.",
       "en": "Better to know now: it lets the kitchen plan ahead."
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "allergie_persone",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone?",
       "en": "How many people?"
      },
      "aiuto": {
       "it": "Per ognuna ti chiediamo cosa e quanto è seria, fino a 4 persone. Se sono di più, scrivilo in «Vuoi dirci qualcos’altro?».",
       "en": "For each person we ask what it is and how serious, up to 4 people. If there are more, write it in “Anything else to tell us?”."
      },
      "se": {
       "campo": "allergie_si",
       "vale": "Sì"
      },
      "min": 1
     },
     {
      "id": "allergie_1",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 1: quali allergie o intolleranze?",
       "en": "Person 1: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 0
      }
     },
     {
      "id": "gravita_1",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 1: quanto è seria?",
       "en": "Person 1: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 0
      }
     },
     {
      "id": "allergie_2",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 2: quali allergie o intolleranze?",
       "en": "Person 2: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 1
      }
     },
     {
      "id": "gravita_2",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 2: quanto è seria?",
       "en": "Person 2: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 1
      }
     },
     {
      "id": "allergie_3",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 3: quali allergie o intolleranze?",
       "en": "Person 3: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 2
      }
     },
     {
      "id": "gravita_3",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 3: quanto è seria?",
       "en": "Person 3: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 2
      }
     },
     {
      "id": "allergie_4",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 4: quali allergie o intolleranze?",
       "en": "Person 4: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 3
      }
     },
     {
      "id": "gravita_4",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 4: quanto è seria?",
       "en": "Person 4: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 3
      }
     }
    ]
   },
   {
    "id": "foto-video-e-documenti",
    "titolo": {
     "it": "Foto, video e documenti",
     "en": "Photos, videos and documents"
    },
    "campi": [
     {
      "id": "foto",
      "tipo": "file",
      "obbl": true,
      "et": {
       "it": "Foto o disegni dell’opera (fino a 5)",
       "en": "Photos or drawings of the work (up to 5)"
      },
      "aiuto": {
       "it": "Foto orizzontali o verticali, almeno 1000 px sul lato lungo. Le useremo anche per il sito e i social, se verrai selezionat*.",
       "en": "Landscape or portrait, at least 1000 px on the long side. If selected, we will also use them on the website and social media."
      },
      "multipli": 5,
      "accetta": "image/jpeg,image/png"
     },
     {
      "id": "dossier",
      "tipo": "file",
      "et": {
       "it": "Dossier o presentazione (PDF)",
       "en": "Portfolio or presentation (PDF)"
      },
      "multipli": 1,
      "accetta": "application/pdf"
     },
     {
      "id": "link_video",
      "tipo": "link",
      "et": {
       "it": "Link a un video (se c’è)",
       "en": "Link to a video (if any)"
      },
      "aiuto": {
       "it": "Usa un link che non scade (Drive, Dropbox, Vimeo, YouTube, il tuo sito): i link di WeTransfer scadono dopo pochi giorni.",
       "en": "Use a link that does not expire (Drive, Dropbox, Vimeo, YouTube, your website): WeTransfer links expire after a few days."
      }
     },
     {
      "id": "link_altro",
      "tipo": "link",
      "et": {
       "it": "Altri link (sito, Instagram, foto online)",
       "en": "Other links (website, Instagram, online photos)"
      },
      "aiuto": {
       "it": "Uno per riga.",
       "en": "One per line."
      },
      "righe": true
     }
    ],
    "intro": {
     "it": "Puoi caricare i file qui sotto oppure incollare dei link. Foto in JPG o PNG, documenti in PDF, massimo 10 MB per file.",
     "en": "You can upload files below or paste links. Photos as JPG or PNG, documents as PDF, up to 10 MB per file."
    }
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "conosciuto",
      "tipo": "scelta",
      "et": {
       "it": "Come hai conosciuto il Moon Festival?",
       "en": "How did you hear about Moon Festival?"
      },
      "opz": [
       {
        "it": "Passaparola",
        "en": "Word of mouth"
       },
       {
        "it": "Instagram",
        "en": "Instagram"
       },
       {
        "it": "Facebook",
        "en": "Facebook"
       },
       {
        "it": "TikTok",
        "en": "TikTok"
       },
       {
        "it": "Sito web",
        "en": "Website"
       },
       {
        "it": "Materiale stampato",
        "en": "Printed materials"
       },
       {
        "it": "Ci sono già stat*",
        "en": "I have been before"
       }
      ],
      "altro": true
     },
     {
      "id": "suggerimenti",
      "tipo": "area",
      "et": {
       "it": "Vuoi dirci qualcos’altro?",
       "en": "Anything else you want to tell us?"
      },
      "aiuto": {
       "it": "Suggerimenti, bisogni, cose che il modulo non ti ha chiesto o errori che hai notato.",
       "en": "Suggestions, needs, things this form did not ask, or mistakes you noticed."
      },
      "max": 1000
     },
     {
      "id": "liberatoria",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Autorizzo Dnart APS a usare foto e video del festival in cui compaio io o compaiono le persone del gruppo, per comunicazione, documentazione e archivio del Moon Festival.",
       "en": "I authorise Dnart APS to use festival photos and videos in which I or the members of my group appear, for Moon Festival communication, documentation and archive purposes."
      },
      "aiuto": {
       "it": "Ho informato tutte le persone del gruppo.",
       "en": "I have informed everyone in the group."
      }
     },
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679). Se la proposta è di un gruppo, ho informato tutte le persone coinvolte e ho il loro consenso.",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679). If the proposal comes from a group, I have informed everyone involved and have their consent."
      },
      "link": "privacy.html"
     },
     {
      "id": "comunicazioni",
      "tipo": "consenso",
      "et": {
       "it": "Acconsento all’uso della mia email per comunicazioni sul Moon Festival e sulle call future.",
       "en": "I agree to my email being used for communications about Moon Festival and future calls."
      }
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 },
 "laboratori": {
  "titolo": {
   "it": "Proponi un laboratorio 2027",
   "en": "Propose a workshop 2027"
  },
  "breve": {
   "it": "Laboratori",
   "en": "Workshops"
  },
  "lead": {
   "it": "Hai un laboratorio da condividere? Raccontaci cosa vorresti costruire con il pubblico del festival.",
   "en": "Do you have a workshop to share? Tell us what you would like to build with the festival audience."
  },
  "info": [
   [
    {
     "it": "Date dei laboratori",
     "en": "Workshop dates"
    },
    {
     "it": "Sabato 4 e domenica 5 settembre 2027",
     "en": "Saturday 4 and Sunday 5 September 2027"
    }
   ],
   [
    {
     "it": "Quando",
     "en": "When"
    },
    {
     "it": "Di solito nel pomeriggio, prima degli spettacoli",
     "en": "Usually in the afternoon, before the shows"
    }
   ],
   [
    {
     "it": "Scadenza",
     "en": "Deadline"
    },
    {
     "it": "15 aprile 2027",
     "en": "15 April 2027"
    }
   ]
  ],
  "blocchi": [
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome anagrafico",
       "en": "Legal first name"
      },
      "auto": "given-name"
     },
     {
      "id": "nome_elezione",
      "tipo": "testo",
      "et": {
       "it": "Nome di elezione",
       "en": "Chosen name"
      },
      "aiuto": {
       "it": "Se usi un nome diverso da quello anagrafico, useremo questo in tutte le comunicazioni.",
       "en": "If you use a name other than your legal one, we will use it in all communications."
      },
      "auto": "nickname"
     },
     {
      "id": "cognome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Cognome",
       "en": "Last name"
      },
      "auto": "family-name"
     },
     {
      "id": "pronomi",
      "tipo": "scelta",
      "et": {
       "it": "Quali pronomi usi?",
       "en": "Which pronouns do you use?"
      },
      "opz": [
       {
        "it": "Lei",
        "en": "She/her"
       },
       {
        "it": "Lui",
        "en": "He/him"
       },
       {
        "it": "Neutri",
        "en": "They/them"
       },
       {
        "it": "Preferisco non dirlo",
        "en": "I prefer not to say"
       }
      ],
      "altro": true
     },
     {
      "id": "nascita",
      "tipo": "data",
      "obbl": true,
      "et": {
       "it": "Data di nascita",
       "en": "Date of birth"
      },
      "aiuto": {
       "it": "Ci serve per motivi organizzativi e assicurativi.",
       "en": "We need it for organisational and insurance reasons."
      },
      "auto": "bday"
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "auto": "email"
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "obbl": true,
      "et": {
       "it": "Telefono",
       "en": "Phone number"
      },
      "aiuto": {
       "it": "Con il prefisso, se non è italiano.",
       "en": "With the country code if it is not Italian."
      },
      "auto": "tel"
     },
     {
      "id": "paese",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Dove vivi?",
       "en": "Where do you live?"
      },
      "opz": [
       {
        "it": "In Italia",
        "en": "In Italy"
       },
       {
        "it": "In un altro Stato",
        "en": "In another country"
       }
      ],
      "auto": "country-name"
     },
     {
      "id": "cap",
      "tipo": "cap",
      "obbl": true,
      "et": {
       "it": "CAP",
       "en": "Postcode"
      },
      "aiuto": {
       "it": "Ci aiuta a capire da dove arrivate.",
       "en": "It helps us understand where you are coming from."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "postal-code"
     },
     {
      "id": "comune",
      "tipo": "comune",
      "obbl": true,
      "et": {
       "it": "Comune",
       "en": "Town or city"
      },
      "aiuto": {
       "it": "Lo scegli tra i comuni di quel CAP: se è uno solo, lo mettiamo noi.",
       "en": "Choose it from the towns with that postcode: if there is only one, we fill it in for you."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "address-level2"
     },
     {
      "id": "citta_estero",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Città e Stato",
       "en": "City and country"
      },
      "se": {
       "campo": "paese",
       "vale": "In un altro Stato"
      },
      "auto": "address-level2"
     }
    ]
   },
   {
    "id": "il-laboratorio",
    "titolo": {
     "it": "Il laboratorio",
     "en": "The workshop"
    },
    "campi": [
     {
      "id": "realta",
      "tipo": "testo",
      "et": {
       "it": "Associazione, collettivo o realtà che rappresenti",
       "en": "Organisation or collective you represent"
      },
      "aiuto": {
       "it": "Se proponi da sol*, lascia vuoto.",
       "en": "Leave empty if you are proposing it on your own."
      }
     },
     {
      "id": "titolo",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Titolo del laboratorio",
       "en": "Title of the workshop"
      }
     },
     {
      "id": "descrizione",
      "tipo": "area",
      "obbl": true,
      "et": {
       "it": "Cosa si fa, passo per passo?",
       "en": "What happens, step by step?"
      },
      "max": 500
     },
     {
      "id": "ambito",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Di che cosa si tratta?",
       "en": "What is it about?"
      },
      "opz": [
       {
        "it": "Arte e manualità",
        "en": "Art and crafts"
       },
       {
        "it": "Natura e ambiente",
        "en": "Nature and environment"
       },
       {
        "it": "Corpo e movimento",
        "en": "Body and movement"
       },
       {
        "it": "Musica e suono",
        "en": "Music and sound"
       },
       {
        "it": "Scienza e gioco",
        "en": "Science and play"
       },
       {
        "it": "Parola e racconto",
        "en": "Words and storytelling"
       }
      ],
      "altro": true
     },
     {
      "id": "tema",
      "tipo": "area",
      "et": {
       "it": "Come dialoga con il tema 2027, [TEMA 2027]?",
       "en": "How does it relate to the 2027 theme, [THEME 2027]?"
      },
      "max": 600
     },
     {
      "id": "materiali",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Usi materiali riciclati, recuperati o sostenibili?",
       "en": "Do you use recycled, reclaimed or sustainable materials?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "In parte",
        "en": "Partly"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "materiali_quali",
      "tipo": "scelte",
      "et": {
       "it": "Quali?",
       "en": "Which ones?"
      },
      "opz": [
       {
        "it": "Legno e bancali",
        "en": "Wood and pallets"
       },
       {
        "it": "Tessuti e stoffe",
        "en": "Fabric and textiles"
       },
       {
        "it": "Metallo",
        "en": "Metal"
       },
       {
        "it": "Vetro",
        "en": "Glass"
       },
       {
        "it": "Plastica",
        "en": "Plastic"
       },
       {
        "it": "Carta e cartone",
        "en": "Paper and cardboard"
       },
       {
        "it": "Corde e reti",
        "en": "Ropes and nets"
       },
       {
        "it": "Luci e cavi",
        "en": "Lights and cables"
       },
       {
        "it": "Oggetti di recupero",
        "en": "Reclaimed objects"
       },
       {
        "it": "Vernici e colori",
        "en": "Paints"
       }
      ],
      "altro": true,
      "se": {
       "campo": "materiali",
       "non": "No"
      }
     }
    ]
   },
   {
    "id": "chi-partecipa-e-come",
    "titolo": {
     "it": "Chi partecipa e come",
     "en": "Who takes part and how"
    },
    "campi": [
     {
      "id": "date",
      "tipo": "info",
      "et": {
       "it": "I laboratori sono sabato 4 e domenica 5 settembre 2027.",
       "en": "Workshops take place on Saturday 4 and Sunday 5 September 2027."
      },
      "aiuto": {
       "it": "Per ora non ti chiediamo se ci sarai: se la proposta ci emoziona, ne parliamo insieme.",
       "en": "We are not asking yet whether you can be there: if your proposal moves us, we will talk it through together."
      }
     },
     {
      "id": "destinatari",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "A chi è rivolto?",
       "en": "Who is it for?"
      },
      "opz": [
       {
        "it": "Bambin* (fino a 10 anni)",
        "en": "Children (up to 10)"
       },
       {
        "it": "Ragazz* (11–17 anni)",
        "en": "Teenagers (11–17)"
       },
       {
        "it": "Famiglie",
        "en": "Families"
       },
       {
        "it": "Adult*",
        "en": "Adults"
       },
       {
        "it": "Tutt*",
        "en": "Everyone"
       }
      ]
     },
     {
      "id": "eta_minima",
      "tipo": "numero",
      "et": {
       "it": "Età minima",
       "en": "Minimum age"
      },
      "aiuto": {
       "it": "Lascia vuoto se non c’è.",
       "en": "Leave empty if there is none."
      },
      "min": 0
     },
     {
      "id": "max_persone",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone al massimo per volta?",
       "en": "Maximum number of people at a time?"
      },
      "min": 1
     },
     {
      "id": "minimo",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Serve un numero minimo di persone per farlo partire?",
       "en": "Is there a minimum number of people to start it?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "minimo_quanti",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone, almeno?",
       "en": "How many people, at least?"
      },
      "se": {
       "campo": "minimo",
       "vale": "Sì"
      },
      "min": 1
     },
     {
      "id": "durata",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto dura?",
       "en": "How long is it?"
      },
      "opz": [
       {
        "it": "Meno di un’ora",
        "en": "Less than an hour"
       },
       {
        "it": "1–2 ore",
        "en": "1–2 hours"
       },
       {
        "it": "Oltre 2 ore",
        "en": "Over 2 hours"
       },
       {
        "it": "Aperto, si entra e si esce",
        "en": "Drop-in, people come and go"
       }
      ]
     },
     {
      "id": "repliche",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quante volte puoi proporlo?",
       "en": "How many times can you run it?"
      },
      "opz": [
       {
        "it": "Una volta",
        "en": "Once"
       },
       {
        "it": "Una volta al giorno",
        "en": "Once a day"
       },
       {
        "it": "Più volte al giorno",
        "en": "Several times a day"
       }
      ]
     },
     {
      "id": "accessibile",
      "tipo": "scelte",
      "et": {
       "it": "Chi può partecipare senza difficoltà?",
       "en": "Who can take part without difficulty?"
      },
      "aiuto": {
       "it": "Ci aiuta a preparare le informazioni di accessibilità.",
       "en": "It helps us prepare accessibility information."
      },
      "opz": [
       {
        "it": "Chi usa la carrozzina",
        "en": "Wheelchair users"
       },
       {
        "it": "Chi vede poco o non vede",
        "en": "People with low vision or who are blind"
       },
       {
        "it": "Chi sente poco o non sente",
        "en": "People who are hard of hearing or deaf"
       },
       {
        "it": "Chi non parla italiano",
        "en": "People who do not speak Italian"
       },
       {
        "it": "Chi ha bisogno di pause o di un ritmo lento",
        "en": "People who need breaks or a slower pace"
       },
       {
        "it": "Bambin* con chi l* accompagna",
        "en": "Children with the adult who comes with them"
       }
      ],
      "altro": true
     },
     {
      "id": "inclusivi",
      "tipo": "scelta",
      "et": {
       "it": "Hai già condotto laboratori inclusivi?",
       "en": "Have you already led inclusive workshops?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "In parte",
        "en": "Partly"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "alert",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Ci sono cose da sapere per chi partecipa?",
       "en": "Is there anything participants should know?"
      },
      "aiuto": {
       "it": "Le scriviamo nel programma.",
       "en": "We list them in the programme."
      },
      "opz": [
       {
        "it": "Contatto fisico",
        "en": "Physical contact"
       },
       {
        "it": "Ci si sporca",
        "en": "You will get messy"
       },
       {
        "it": "Acqua o materiali che bagnano",
        "en": "Water or materials that get you wet"
       },
       {
        "it": "Attrezzi taglienti o appuntiti",
        "en": "Sharp or pointed tools"
       },
       {
        "it": "Colle, vernici o odori forti",
        "en": "Glue, paint or strong smells"
       },
       {
        "it": "Cibo o possibili allergeni",
        "en": "Food or possible allergens"
       },
       {
        "it": "Animali",
        "en": "Pets"
       },
       {
        "it": "Suoni forti",
        "en": "Loud sounds"
       },
       {
        "it": "Temi delicati",
        "en": "Sensitive themes"
       },
       {
        "it": "Si sta all’aperto a lungo",
        "en": "A long time outdoors"
       },
       {
        "it": "Nessuna di queste",
        "en": "None of these"
       }
      ],
      "altro": true
     }
    ]
   },
   {
    "id": "spazio-e-materiali",
    "titolo": {
     "it": "Spazio e materiali",
     "en": "Space and materials"
    },
    "campi": [
     {
      "id": "spazio",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Di che spazio hai bisogno?",
       "en": "What kind of space do you need?"
      },
      "opz": [
       {
        "it": "All’aperto",
        "en": "Outdoors"
       },
       {
        "it": "Al coperto",
        "en": "Indoors"
       },
       {
        "it": "Tavoli e sedie",
        "en": "Tables and chairs"
       },
       {
        "it": "Ombra",
        "en": "Shade"
       },
       {
        "it": "Acqua vicina",
        "en": "Water nearby"
       },
       {
        "it": "Presa elettrica",
        "en": "Power socket"
       }
      ]
     },
     {
      "id": "spazio_misura",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto spazio serve, più o meno?",
       "en": "Roughly how much space do you need?"
      },
      "opz": [
       {
        "it": "Poco: un angolo tranquillo",
        "en": "Small: a quiet corner"
       },
       {
        "it": "Medio: una stanza o un cortile piccolo",
        "en": "Medium: a room or a small courtyard"
       },
       {
        "it": "Ampio: un cortile o un prato",
        "en": "Large: a courtyard or a lawn"
       },
       {
        "it": "Molto ampio: una piazza",
        "en": "Very large: a square"
       }
      ]
     },
     {
      "id": "postura",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Come si sta durante il laboratorio?",
       "en": "How do people take part in the workshop?"
      },
      "opz": [
       {
        "it": "Sedut* a terra",
        "en": "Sitting on the floor"
       },
       {
        "it": "Sedut* su sedie",
        "en": "Sitting on chairs"
       },
       {
        "it": "In piedi",
        "en": "Standing"
       },
       {
        "it": "Un po’ di tutto",
        "en": "A bit of everything"
       }
      ]
     },
     {
      "id": "tavoli",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanti tavoli ti servono?",
       "en": "How many tables do you need?"
      },
      "opz": [
       {
        "it": "Nessuno",
        "en": "None"
       },
       {
        "it": "1",
        "en": "1"
       },
       {
        "it": "2",
        "en": "2"
       },
       {
        "it": "3",
        "en": "3"
       },
       {
        "it": "4 o più",
        "en": "4 or more"
       }
      ]
     },
     {
      "id": "adattabile",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Si adatta a spazi diversi, se serve?",
       "en": "Can it adapt to different spaces if needed?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "In parte",
        "en": "Partly"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "materiali_lab",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "I materiali per chi partecipa",
       "en": "Materials for participants"
      },
      "opz": [
       {
        "it": "Li porto io",
        "en": "I bring them"
       },
       {
        "it": "Me ne serve una parte",
        "en": "I need some of them"
       },
       {
        "it": "Mi servono tutti",
        "en": "I need all of them"
       }
      ]
     },
     {
      "id": "materiali_elenco",
      "tipo": "area",
      "et": {
       "it": "Quali materiali ti servono?",
       "en": "Which materials do you need?"
      },
      "se": {
       "campo": "materiali_lab",
       "non": "Li porto io"
      },
      "max": 500
     }
    ]
   },
   {
    "id": "il-gruppo",
    "titolo": {
     "it": "Il gruppo",
     "en": "The group"
    },
    "campi": [
     {
      "id": "persone",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone verranno al festival con il laboratorio?",
       "en": "How many people will come to the festival with the workshop?"
      },
      "aiuto": {
       "it": "Contando anche chi ti aiuta.",
       "en": "Including anyone helping you."
      },
      "min": 1
     },
     {
      "id": "vegani",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone del gruppo mangiano vegano?",
       "en": "How many people in the group eat vegan?"
      },
      "aiuto": {
       "it": "La cucina del Moon è vegetariana: un festival che crede nella sostenibilità lo è anche a tavola. Cuciniamo tutto noi. Scrivi 0 se nessuna.",
       "en": "The Moon kitchen is vegetarian: a festival that believes in sustainability is sustainable at the table too. We cook everything. Write 0 if nobody."
      },
      "min": 1
     },
     {
      "id": "allergie_si",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Nel gruppo ci sono allergie o intolleranze alimentari serie?",
       "en": "Does anyone in the group have serious food allergies or intolerances?"
      },
      "aiuto": {
       "it": "Meglio saperlo subito: in cucina ci organizziamo per tempo.",
       "en": "Better to know now: it lets the kitchen plan ahead."
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "allergie_persone",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone?",
       "en": "How many people?"
      },
      "aiuto": {
       "it": "Per ognuna ti chiediamo cosa e quanto è seria, fino a 4 persone. Se sono di più, scrivilo in «Vuoi dirci qualcos’altro?».",
       "en": "For each person we ask what it is and how serious, up to 4 people. If there are more, write it in “Anything else to tell us?”."
      },
      "se": {
       "campo": "allergie_si",
       "vale": "Sì"
      },
      "min": 1
     },
     {
      "id": "allergie_1",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 1: quali allergie o intolleranze?",
       "en": "Person 1: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 0
      }
     },
     {
      "id": "gravita_1",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 1: quanto è seria?",
       "en": "Person 1: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 0
      }
     },
     {
      "id": "allergie_2",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 2: quali allergie o intolleranze?",
       "en": "Person 2: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 1
      }
     },
     {
      "id": "gravita_2",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 2: quanto è seria?",
       "en": "Person 2: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 1
      }
     },
     {
      "id": "allergie_3",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 3: quali allergie o intolleranze?",
       "en": "Person 3: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 2
      }
     },
     {
      "id": "gravita_3",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 3: quanto è seria?",
       "en": "Person 3: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 2
      }
     },
     {
      "id": "allergie_4",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Persona 4: quali allergie o intolleranze?",
       "en": "Person 4: which allergies or intolerances?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_persone",
       "piuDi": 3
      }
     },
     {
      "id": "gravita_4",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Persona 4: quanto è seria?",
       "en": "Person 4: how serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_persone",
       "piuDi": 3
      }
     }
    ]
   },
   {
    "id": "foto-video-e-documenti",
    "titolo": {
     "it": "Foto, video e documenti",
     "en": "Photos, videos and documents"
    },
    "campi": [
     {
      "id": "foto",
      "tipo": "file",
      "obbl": true,
      "et": {
       "it": "Foto di laboratori già fatti (fino a 5)",
       "en": "Photos of past workshops (up to 5)"
      },
      "aiuto": {
       "it": "Foto orizzontali o verticali, almeno 1000 px sul lato lungo. Le useremo anche per il sito e i social, se verrai selezionat*.",
       "en": "Landscape or portrait, at least 1000 px on the long side. If selected, we will also use them on the website and social media."
      },
      "multipli": 5,
      "accetta": "image/jpeg,image/png"
     },
     {
      "id": "dossier",
      "tipo": "file",
      "et": {
       "it": "Dossier o presentazione (PDF)",
       "en": "Portfolio or presentation (PDF)"
      },
      "multipli": 1,
      "accetta": "application/pdf"
     },
     {
      "id": "link_video",
      "tipo": "link",
      "et": {
       "it": "Link a un video",
       "en": "Link to a video"
      },
      "aiuto": {
       "it": "Usa un link che non scade (Drive, Dropbox, Vimeo, YouTube, il tuo sito): i link di WeTransfer scadono dopo pochi giorni.",
       "en": "Use a link that does not expire (Drive, Dropbox, Vimeo, YouTube, your website): WeTransfer links expire after a few days."
      }
     },
     {
      "id": "link_altro",
      "tipo": "link",
      "et": {
       "it": "Altri link (sito, Instagram, foto online)",
       "en": "Other links (website, Instagram, online photos)"
      },
      "aiuto": {
       "it": "Uno per riga.",
       "en": "One per line."
      },
      "righe": true
     }
    ],
    "intro": {
     "it": "Puoi caricare i file qui sotto oppure incollare dei link. Foto in JPG o PNG, documenti in PDF, massimo 10 MB per file.",
     "en": "You can upload files below or paste links. Photos as JPG or PNG, documents as PDF, up to 10 MB per file."
    }
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "conosciuto",
      "tipo": "scelta",
      "et": {
       "it": "Come hai conosciuto il Moon Festival?",
       "en": "How did you hear about Moon Festival?"
      },
      "opz": [
       {
        "it": "Passaparola",
        "en": "Word of mouth"
       },
       {
        "it": "Instagram",
        "en": "Instagram"
       },
       {
        "it": "Facebook",
        "en": "Facebook"
       },
       {
        "it": "TikTok",
        "en": "TikTok"
       },
       {
        "it": "Sito web",
        "en": "Website"
       },
       {
        "it": "Materiale stampato",
        "en": "Printed materials"
       },
       {
        "it": "Ci sono già stat*",
        "en": "I have been before"
       }
      ],
      "altro": true
     },
     {
      "id": "suggerimenti",
      "tipo": "area",
      "et": {
       "it": "Vuoi dirci qualcos’altro?",
       "en": "Anything else you want to tell us?"
      },
      "aiuto": {
       "it": "Suggerimenti, bisogni, cose che il modulo non ti ha chiesto o errori che hai notato.",
       "en": "Suggestions, needs, things this form did not ask, or mistakes you noticed."
      },
      "max": 1000
     },
     {
      "id": "liberatoria",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Autorizzo Dnart APS a usare foto e video del festival in cui compaio io o compaiono le persone del gruppo, per comunicazione, documentazione e archivio del Moon Festival.",
       "en": "I authorise Dnart APS to use festival photos and videos in which I or the members of my group appear, for Moon Festival communication, documentation and archive purposes."
      },
      "aiuto": {
       "it": "Ho informato tutte le persone del gruppo.",
       "en": "I have informed everyone in the group."
      }
     },
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679). Se la proposta è di un gruppo, ho informato tutte le persone coinvolte e ho il loro consenso.",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679). If the proposal comes from a group, I have informed everyone involved and have their consent."
      },
      "link": "privacy.html"
     },
     {
      "id": "comunicazioni",
      "tipo": "consenso",
      "et": {
       "it": "Acconsento all’uso della mia email per comunicazioni sul Moon Festival e sulle call future.",
       "en": "I agree to my email being used for communications about Moon Festival and future calls."
      }
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 },
 "moon-lab": {
  "titolo": {
   "it": "Moon Lab 2027",
   "en": "Moon Lab 2027"
  },
  "breve": {
   "it": "Moon Lab",
   "en": "Moon Lab"
  },
  "lead": {
   "it": "Dodici giorni per costruire il festival insieme: formazione, lavoro condiviso e vita in campeggio. Per chi ha tra i 18 e i 35 anni.",
   "en": "Twelve days to build the festival together: training, shared work and camp life. For people aged 18 to 35."
  },
  "info": [
   [
    {
     "it": "Quando",
     "en": "When"
    },
    {
     "it": "Dal 27 agosto al 7 settembre 2027: 12 giorni, presenza per tutto il periodo",
     "en": "From 27 August to 7 September 2027: 12 days, attendance for the whole period"
    }
   ],
   [
    {
     "it": "Per chi",
     "en": "Who for"
    },
    {
     "it": "Dai 18 ai 35 anni, senza competenze specifiche",
     "en": "Aged 18 to 35, no specific skills needed"
    }
   ],
   [
    {
     "it": "Ospitalità",
     "en": "Accommodation"
    },
    {
     "it": "In tenda: ognun* porta le sue cose. I pasti li copriamo noi",
     "en": "In a tent: everyone brings their own things. We cover the meals"
    }
   ],
   [
    {
     "it": "Assicurazione",
     "en": "Insurance"
    },
    {
     "it": "Copert* come volontari* di Dnart APS, senza tessera",
     "en": "Covered as a Dnart APS volunteer, no membership needed"
    }
   ],
   [
    {
     "it": "Scadenza",
     "en": "Deadline"
    },
    {
     "it": "15 giugno 2027",
     "en": "15 June 2027"
    }
   ]
  ],
  "blocchi": [
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome anagrafico",
       "en": "Legal first name"
      },
      "auto": "given-name"
     },
     {
      "id": "nome_elezione",
      "tipo": "testo",
      "et": {
       "it": "Nome di elezione",
       "en": "Chosen name"
      },
      "aiuto": {
       "it": "Se usi un nome diverso da quello anagrafico, useremo questo in tutte le comunicazioni.",
       "en": "If you use a name other than your legal one, we will use it in all communications."
      },
      "auto": "nickname"
     },
     {
      "id": "cognome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Cognome",
       "en": "Last name"
      },
      "auto": "family-name"
     },
     {
      "id": "pronomi",
      "tipo": "scelta",
      "et": {
       "it": "Quali pronomi usi?",
       "en": "Which pronouns do you use?"
      },
      "opz": [
       {
        "it": "Lei",
        "en": "She/her"
       },
       {
        "it": "Lui",
        "en": "He/him"
       },
       {
        "it": "Neutri",
        "en": "They/them"
       },
       {
        "it": "Preferisco non dirlo",
        "en": "I prefer not to say"
       }
      ],
      "altro": true
     },
     {
      "id": "nascita",
      "tipo": "data",
      "obbl": true,
      "et": {
       "it": "Data di nascita",
       "en": "Date of birth"
      },
      "aiuto": {
       "it": "Il Moon Lab è pensato per chi ha tra i 18 e i 35 anni.",
       "en": "The Moon Lab is meant for people aged 18 to 35."
      },
      "auto": "bday"
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "auto": "email"
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "obbl": true,
      "et": {
       "it": "Telefono",
       "en": "Phone number"
      },
      "aiuto": {
       "it": "Con il prefisso, se non è italiano.",
       "en": "With the country code if it is not Italian."
      },
      "auto": "tel"
     },
     {
      "id": "paese",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Dove vivi?",
       "en": "Where do you live?"
      },
      "opz": [
       {
        "it": "In Italia",
        "en": "In Italy"
       },
       {
        "it": "In un altro Stato",
        "en": "In another country"
       }
      ],
      "auto": "country-name"
     },
     {
      "id": "cap",
      "tipo": "cap",
      "obbl": true,
      "et": {
       "it": "CAP",
       "en": "Postcode"
      },
      "aiuto": {
       "it": "Ci aiuta a capire da dove arrivate.",
       "en": "It helps us understand where you are coming from."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "postal-code"
     },
     {
      "id": "comune",
      "tipo": "comune",
      "obbl": true,
      "et": {
       "it": "Comune",
       "en": "Town or city"
      },
      "aiuto": {
       "it": "Lo scegli tra i comuni di quel CAP: se è uno solo, lo mettiamo noi.",
       "en": "Choose it from the towns with that postcode: if there is only one, we fill it in for you."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "address-level2"
     },
     {
      "id": "citta_estero",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Città e Stato",
       "en": "City and country"
      },
      "se": {
       "campo": "paese",
       "vale": "In un altro Stato"
      },
      "auto": "address-level2"
     }
    ]
   },
   {
    "id": "il-tuo-percorso",
    "titolo": {
     "it": "Il tuo percorso",
     "en": "Your path"
    },
    "campi": [
     {
      "id": "formazione",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Stai facendo un percorso di scuola o di formazione che chiede ore certificate?",
       "en": "Are you on a school or training course that requires certified hours?"
      },
      "aiuto": {
       "it": "Il Moon Lab può valere come PCTO, stage o tirocinio curricolare, anche per l’università, in accordo con la tua scuola o il tuo ente. La fattibilità la valutiamo caso per caso.",
       "en": "Moon Lab can count as a school work-experience scheme (PCTO), an internship or a curricular traineeship, university included, in agreement with your school or institution. We assess each case individually."
      },
      "opz": [
       {
        "it": "No",
        "en": "No"
       },
       {
        "it": "Sì, PCTO (scuola superiore)",
        "en": "Yes, PCTO (secondary school work experience)"
       },
       {
        "it": "Sì, stage o tirocinio curricolare (università o corso di formazione)",
        "en": "Yes, curricular internship or traineeship (university or training course)"
       },
       {
        "it": "Sì, altro percorso di formazione",
        "en": "Yes, another training course"
       }
      ]
     },
     {
      "id": "scuola",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome della scuola, dell’università o dell’ente",
       "en": "Name of the school, university or institution"
      },
      "se": {
       "campo": "formazione",
       "non": "No"
      }
     },
     {
      "id": "indirizzo_studio",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Che indirizzo di studio segui?",
       "en": "What are you studying?"
      },
      "aiuto": {
       "it": "Per esempio: liceo artistico, grafica, scienze della comunicazione, design.",
       "en": "For example: art high school, graphic design, communication studies, design."
      },
      "se": {
       "campo": "formazione",
       "non": "No"
      }
     },
     {
      "id": "convenzione",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho capito: la convenzione la attivo io, chiedendo alla segreteria della mia scuola o del mio ente di scrivere a info@associazionednart.it.",
       "en": "I understand: I set up the agreement myself, by asking my school's or institution's office to write to info@associazionednart.it."
      },
      "aiuto": {
       "it": "Noi non contattiamo la segreteria: aspettiamo che sia lei a cercarci. Poi i moduli li compiliamo noi.",
       "en": "We do not contact the office: we wait for them to get in touch. Then we fill in the forms."
      },
      "se": {
       "campo": "formazione",
       "non": "No"
      }
     },
     {
      "id": "racconto",
      "tipo": "area",
      "obbl": true,
      "et": {
       "it": "Raccontaci qualcosa di te",
       "en": "Tell us something about yourself"
      },
      "aiuto": {
       "it": "Chi sei, cosa ti muove, cosa cerchi nel Moon Lab.",
       "en": "Who you are, what moves you, what you are looking for in Moon Lab."
      },
      "max": 1000
     },
     {
      "id": "cv",
      "tipo": "file",
      "et": {
       "it": "CV (PDF), se vuoi",
       "en": "CV (PDF), if you like"
      },
      "multipli": 1,
      "accetta": "application/pdf,image/jpeg,image/png"
     },
     {
      "id": "lingua",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Qual è la tua lingua principale?",
       "en": "What is your main language?"
      },
      "opz": [
       {
        "it": "Italiano",
        "en": "Italian"
       },
       {
        "it": "Inglese",
        "en": "English"
       },
       {
        "it": "Francese",
        "en": "French"
       },
       {
        "it": "Spagnolo",
        "en": "Spanish"
       }
      ],
      "altro": true
     },
     {
      "id": "lingue_altre",
      "tipo": "scelte",
      "et": {
       "it": "Quali altre lingue parli?",
       "en": "Which other languages do you speak?"
      },
      "opz": [
       {
        "it": "Italiano",
        "en": "Italian"
       },
       {
        "it": "Inglese",
        "en": "English"
       },
       {
        "it": "Francese",
        "en": "French"
       },
       {
        "it": "Spagnolo",
        "en": "Spanish"
       }
      ],
      "altro": true
     },
     {
      "id": "gruppo",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "In quale gruppo di lavoro ti piacerebbe stare?",
       "en": "Which working group would you like to join?"
      },
      "aiuto": {
       "it": "Scegline uno: si apre una pagina con qualche domanda in più. I gruppi lavorano insieme e i confini restano aperti.",
       "en": "Choose one: a page with a few more questions will open. The groups work together and the boundaries stay open."
      },
      "opz": [
       {
        "it": "Scenografia, allestimento e luci",
        "en": "Set design, installation and lighting"
       },
       {
        "it": "Media: foto, video, grafica, social",
        "en": "Media: photo, video, graphics, social"
       },
       {
        "it": "Produzione e organizzazione",
        "en": "Production and organisation"
       },
       {
        "it": "Accoglienza e awareness",
        "en": "Welcome and awareness"
       },
       {
        "it": "Cucina e convivialità",
        "en": "Kitchen and conviviality"
       },
       {
        "it": "Dove serve",
        "en": "Wherever needed"
       }
      ]
     }
    ]
   },
   {
    "id": "scenografia-allestimento-e-luci",
    "titolo": {
     "it": "Scenografia, allestimento e luci",
     "en": "Set design, installation and lighting"
    },
    "campi": [
     {
      "id": "scen_info",
      "tipo": "info",
      "et": {
       "it": "Qui il festival prende forma con le mani: si costruisce, si monta, si tirano cavi e si accendono luci.",
       "en": "Here the festival takes shape by hand: building, assembling, running cables and switching on lights."
      },
      "aiuto": {
       "it": "Si lavora con quello che c’è: materiali recuperati e riusati, niente usa e getta. Anche un errore, a volte, ha una seconda vita.",
       "en": "We work with what there is: salvaged and reused materials, nothing disposable. Even a mistake sometimes gets a second life."
      }
     },
     {
      "id": "scen_ambito",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Da dove ti piacerebbe partire?",
       "en": "Where would you like to start?"
      },
      "opz": [
       {
        "it": "Scenografia e allestimenti",
        "en": "Set design and installations"
       },
       {
        "it": "Luci e light design",
        "en": "Lights and lighting design"
       },
       {
        "it": "Mi va bene tutto",
        "en": "Anything is fine"
       }
      ]
     },
     {
      "id": "scen_esperienza",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Che esperienza hai in allestimento o scenografia?",
       "en": "What experience do you have in set-up or set design?"
      },
      "opz": [
       {
        "it": "Nessuna, ma voglio imparare",
        "en": "None, but I want to learn"
       },
       {
        "it": "Di base, ho già partecipato a cose simili",
        "en": "Basic, I have done similar things"
       },
       {
        "it": "Sono autonom* su alcune attività",
        "en": "I can work on my own on some tasks"
       },
       {
        "it": "Avanzata o professionale",
        "en": "Advanced or professional"
       }
      ]
     },
     {
      "id": "scen_competenze",
      "tipo": "scelte",
      "et": {
       "it": "Hai pratica in qualcuno di questi ambiti?",
       "en": "Do you have practice in any of these?"
      },
      "opz": [
       {
        "it": "Falegnameria e bricolage",
        "en": "Carpentry and DIY"
       },
       {
        "it": "Scenografia",
        "en": "Set design"
       },
       {
        "it": "Cucito e tessuti",
        "en": "Sewing and textiles"
       },
       {
        "it": "Pittura e decorazione",
        "en": "Painting and decoration"
       },
       {
        "it": "Elettricità di base",
        "en": "Basic electrics"
       },
       {
        "it": "Light design",
        "en": "Lighting design"
       },
       {
        "it": "Nodi fatti bene (in sicurezza)",
        "en": "Tying knots properly (safely)"
       },
       {
        "it": "Riuso dei materiali",
        "en": "Reusing materials"
       },
       {
        "it": "Nessuna in particolare",
        "en": "None in particular"
       }
      ],
      "altro": true
     },
     {
      "id": "scen_attrezzi",
      "tipo": "scelte",
      "et": {
       "it": "Porti attrezzi tuoi?",
       "en": "Are you bringing your own tools?"
      },
      "opz": [
       {
        "it": "Avvitatore o trapano",
        "en": "Screwdriver or drill"
       },
       {
        "it": "Seghetto o sega",
        "en": "Hacksaw or saw"
       },
       {
        "it": "Attrezzi a mano",
        "en": "Hand tools"
       },
       {
        "it": "Macchina da cucire",
        "en": "Sewing machine"
       },
       {
        "it": "Pennelli e colori",
        "en": "Brushes and paints"
       },
       {
        "it": "No",
        "en": "No"
       }
      ],
      "altro": true
     },
     {
      "id": "scen_modo",
      "tipo": "scelta",
      "et": {
       "it": "Come ti trovi meglio a lavorare?",
       "en": "How do you prefer to work?"
      },
      "opz": [
       {
        "it": "In gruppo, seguendo indicazioni condivise",
        "en": "In a group, following shared instructions"
       },
       {
        "it": "In autonomia, su compiti concordati",
        "en": "On my own, on agreed tasks"
       },
       {
        "it": "Mi va bene tutto",
        "en": "Anything is fine"
       }
      ]
     },
     {
      "id": "scen_link",
      "tipo": "link",
      "et": {
       "it": "Un link a qualcosa che hai costruito o allestito, se ce l’hai",
       "en": "A link to something you have built or set up, if you have one"
      },
      "aiuto": {
       "it": "Foto, portfolio, Instagram, Drive. Controlla che il link si apra.",
       "en": "Photos, portfolio, Instagram, Drive. Check that the link opens."
      }
     }
    ],
    "se": {
     "campo": "gruppo",
     "vale": "Scenografia, allestimento e luci"
    }
   },
   {
    "id": "media",
    "titolo": {
     "it": "Media",
     "en": "Media"
    },
    "campi": [
     {
      "id": "media_info",
      "tipo": "info",
      "et": {
       "it": "Il team Media racconta il Moon Festival dentro e fuori dal borgo: immagini, video, parole e grafiche che diventano la memoria viva del festival e il modo in cui vive online.",
       "en": "The Media team tells the story of Moon Festival inside and outside the village: images, videos, words and graphics that become the living memory of the festival and the way it lives online."
      },
      "aiuto": {
       "it": "Qui si osserva, si sperimenta e si impara facendo, con persone del settore pronte a seguirti. Non è una gara a chi sa già tutto.",
       "en": "Here you observe, experiment and learn by doing, with professionals ready to guide you. It is not a contest of who already knows everything."
      }
     },
     {
      "id": "media_ambiti",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Di cosa ti piacerebbe occuparti?",
       "en": "What would you like to work on?"
      },
      "aiuto": {
       "it": "Scegline quante vuoi.",
       "en": "Choose as many as you like."
      },
      "opz": [
       {
        "it": "Fotografia",
        "en": "Photography"
       },
       {
        "it": "Video",
        "en": "Video"
       },
       {
        "it": "Montaggio e post-produzione",
        "en": "Editing and post-production"
       },
       {
        "it": "Grafica e illustrazione",
        "en": "Graphics and illustration"
       },
       {
        "it": "Social media",
        "en": "Social media"
       },
       {
        "it": "Scrittura e storytelling",
        "en": "Writing and storytelling"
       }
      ],
      "altro": true
     },
     {
      "id": "media_fare",
      "tipo": "scelte",
      "et": {
       "it": "Cosa ti piacerebbe fare durante il festival?",
       "en": "What would you like to do during the festival?"
      },
      "opz": [
       {
        "it": "Fotografare gli spettacoli",
        "en": "Photographing the shows"
       },
       {
        "it": "Raccontare il backstage",
        "en": "Telling the backstage story"
       },
       {
        "it": "Ritratti di artist* e volontar*",
        "en": "Portraits of artists and volunteers"
       },
       {
        "it": "Video brevi per i social",
        "en": "Short videos for social media"
       },
       {
        "it": "Video racconto (aftermovie)",
        "en": "Video story (aftermovie)"
       },
       {
        "it": "Grafiche",
        "en": "Graphics"
       },
       {
        "it": "Gestire i social insieme al team comunicazione",
        "en": "Running social media with the communication team"
       }
      ]
     },
     {
      "id": "media_esperienza",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Che esperienza hai?",
       "en": "How much experience do you have?"
      },
      "opz": [
       {
        "it": "Nessuna, voglio imparare",
        "en": "None, I want to learn"
       },
       {
        "it": "Di base, ma so lavorare in autonomia",
        "en": "Basic, but I can work on my own"
       },
       {
        "it": "Ho già lavorato a eventi o progetti simili",
        "en": "I have already worked on similar events or projects"
       },
       {
        "it": "Avanzata o professionale",
        "en": "Advanced or professional"
       }
      ]
     },
     {
      "id": "media_attrezzatura",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Che attrezzatura puoi portare?",
       "en": "What equipment can you bring?"
      },
      "aiuto": {
       "it": "Solo quella che puoi usare in autonomia durante il festival.",
       "en": "Only what you can use on your own during the festival."
      },
      "opz": [
       {
        "it": "Macchina fotografica",
        "en": "Camera"
       },
       {
        "it": "Videocamera",
        "en": "Video camera"
       },
       {
        "it": "Smartphone",
        "en": "Smartphone"
       },
       {
        "it": "Microfono",
        "en": "Microphone"
       },
       {
        "it": "Cavalletto o stabilizzatore",
        "en": "Tripod or stabiliser"
       },
       {
        "it": "Computer portatile",
        "en": "Laptop"
       },
       {
        "it": "Programmi di montaggio o grafica",
        "en": "Editing or graphics software"
       },
       {
        "it": "Niente, uso quello che c’è",
        "en": "Nothing, I use what is there"
       }
      ],
      "altro": true
     },
     {
      "id": "media_attrezzatura_note",
      "tipo": "testo",
      "et": {
       "it": "Che modelli?",
       "en": "Which models?"
      },
      "aiuto": {
       "it": "Per esempio: Canon R6 con 24-70, iPhone 13, Premiere.",
       "en": "For example: Canon R6 with 24-70, iPhone 13, Premiere."
      },
      "se": {
       "campo": "media_attrezzatura",
       "non": "Niente, uso quello che c’è"
      }
     },
     {
      "id": "media_link",
      "tipo": "link",
      "et": {
       "it": "Un link a qualcosa che hai fatto",
       "en": "A link to something you have made"
      },
      "aiuto": {
       "it": "Portfolio, Instagram, Vimeo, YouTube, Drive: va bene anche un solo lavoro. Controlla che il link si apra.",
       "en": "Portfolio, Instagram, Vimeo, YouTube, Drive: even a single piece of work is fine. Check that the link opens."
      }
     }
    ],
    "se": {
     "campo": "gruppo",
     "vale": "Media: foto, video, grafica, social"
    }
   },
   {
    "id": "produzione-e-organizzazione",
    "titolo": {
     "it": "Produzione e organizzazione",
     "en": "Production and organisation"
    },
    "campi": [
     {
      "id": "prod_info",
      "tipo": "info",
      "et": {
       "it": "La produzione è il motore operativo del festival: tempi, flussi, arrivi di artist*, navette, materiali, informazioni tra i gruppi.",
       "en": "Production is the festival's operational engine: timings, flows, artist arrivals, shuttles, materials, information between groups."
      },
      "aiuto": {
       "it": "Non si costruisce la magia: si fa in modo che possa accadere.",
       "en": "We do not build the magic: we make sure it can happen."
      }
     },
     {
      "id": "prod_esperienza",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Hai già fatto esperienze simili, anche non professionali?",
       "en": "Have you done anything similar before, even non-professionally?"
      },
      "opz": [
       {
        "it": "Sì, in eventi o festival",
        "en": "Yes, at events or festivals"
       },
       {
        "it": "Sì, in altri contesti organizzativi",
        "en": "Yes, in other organisational settings"
       },
       {
        "it": "No, ma mi piacerebbe imparare",
        "en": "No, but I would like to learn"
       }
      ]
     },
     {
      "id": "prod_attivita",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "In cosa ti senti più a tuo agio?",
       "en": "What do you feel most comfortable with?"
      },
      "opz": [
       {
        "it": "Tempi e orari",
        "en": "Timings and schedules"
       },
       {
        "it": "Logistica e materiali",
        "en": "Logistics and materials"
       },
       {
        "it": "Coordinare i gruppi",
        "en": "Coordinating the groups"
       },
       {
        "it": "Spostamenti e flussi di persone",
        "en": "Getting people around"
       },
       {
        "it": "Supporto ad artist* e staff",
        "en": "Supporting artists and staff"
       },
       {
        "it": "Dove serve",
        "en": "Wherever needed"
       }
      ],
      "altro": true
     },
     {
      "id": "prod_imprevisti",
      "tipo": "scelta",
      "et": {
       "it": "Quando qualcosa non va come previsto, di solito…",
       "en": "When something doesn't go as planned, I usually…"
      },
      "opz": [
       {
        "it": "Cerco una soluzione pratica e vado avanti",
        "en": "I look for a practical solution and carry on"
       },
       {
        "it": "Chiedo indicazioni e collaboro",
        "en": "I ask for directions and work with others"
       },
       {
        "it": "Mi adatto facilmente",
        "en": "I adapt easily"
       },
       {
        "it": "Faccio un po’ fatica, ma ci provo",
        "en": "I find it a bit hard, but I try"
       }
      ]
     }
    ],
    "se": {
     "campo": "gruppo",
     "vale": "Produzione e organizzazione"
    }
   },
   {
    "id": "accoglienza-e-awareness",
    "titolo": {
     "it": "Accoglienza e awareness",
     "en": "Welcome and awareness"
    },
    "campi": [
     {
      "id": "acc_info",
      "tipo": "info",
      "et": {
       "it": "Questo gruppo fa in modo che il Moon Lab sia uno spazio accogliente per tutt*: cura degli spazi comuni, della vita quotidiana al campo e delle relazioni.",
       "en": "This group makes sure Moon Lab is a welcoming space for everyone: caring for shared spaces, daily life at the camp and relationships."
      },
      "aiuto": {
       "it": "È una presenza attenta che osserva, ascolta e segnala. Non è un ruolo di controllo. Durante il festival diventa accoglienza e orientamento del pubblico.",
       "en": "It is an attentive presence that observes, listens and flags things. It is not a policing role. During the festival it becomes welcoming and guiding the audience."
      }
     },
     {
      "id": "acc_esperienza",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Hai esperienza o interesse nel facilitare gruppi e momenti collettivi?",
       "en": "Do you have experience or interest in facilitating groups and shared moments?"
      },
      "opz": [
       {
        "it": "Sì, ho già ideato o condotto attività di gruppo",
        "en": "Yes, I have already designed or led group activities"
       },
       {
        "it": "Sì, ho supportato dinamiche di gruppo in modo informale",
        "en": "Yes, I have supported group dynamics informally"
       },
       {
        "it": "Mi interessa molto, anche senza esperienza",
        "en": "I am very interested, even without experience"
       }
      ]
     },
     {
      "id": "acc_facilitare",
      "tipo": "scelta",
      "et": {
       "it": "Ti andrebbe di proporre o facilitare momenti di gruppo durante il Moon Lab?",
       "en": "Would you like to propose or facilitate group moments during Moon Lab?"
      },
      "opz": [
       {
        "it": "Sì, ho già qualche idea",
        "en": "Yes, I already have some ideas"
       },
       {
        "it": "Sì, dando una mano a chi li conduce",
        "en": "Yes, helping whoever leads them"
       },
       {
        "it": "Preferisco di no",
        "en": "I'd rather not"
       }
      ]
     }
    ],
    "se": {
     "campo": "gruppo",
     "vale": "Accoglienza e awareness"
    }
   },
   {
    "id": "cucina-e-convivialit",
    "titolo": {
     "it": "Cucina e convivialità",
     "en": "Kitchen and conviviality"
    },
    "campi": [
     {
      "id": "cucina_info",
      "tipo": "info",
      "et": {
       "it": "Ci sarà un team cucina: si cucina per tutt*, insieme a uno chef professionista.",
       "en": "There will be a kitchen team: we cook for everyone, together with a professional chef."
      },
      "aiuto": {
       "it": "Non serve essere chef: serve voglia di stare ai fornelli e di prendersi cura di chi mangia.",
       "en": "You do not need to be a chef: you need to enjoy cooking and looking after the people who eat."
      }
     },
     {
      "id": "cucina_esperienza",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Che esperienza hai in cucina?",
       "en": "What experience do you have in the kitchen?"
      },
      "opz": [
       {
        "it": "Nessuna, voglio imparare",
        "en": "None, I want to learn"
       },
       {
        "it": "Cucino spesso, anche per tante persone",
        "en": "I cook often, even for lots of people"
       },
       {
        "it": "Ho lavorato in cucina (ristorante, mensa, catering)",
        "en": "I have worked in a kitchen (restaurant, canteen, catering)"
       }
      ]
     }
    ],
    "se": {
     "campo": "gruppo",
     "vale": "Cucina e convivialità"
    }
   },
   {
    "id": "vita-al-campo",
    "titolo": {
     "it": "Vita al campo",
     "en": "Camp life"
    },
    "campi": [
     {
      "id": "date",
      "tipo": "info",
      "et": {
       "it": "Il Moon Lab è un percorso di formazione di 12 giorni: dal 27 agosto al 7 settembre 2027, con il festival nel mezzo, il 3, 4 e 5 settembre.",
       "en": "The Moon Lab is a 12-day training programme: from 27 August to 7 September 2027, with the festival in the middle, on 3, 4 and 5 September."
      },
      "aiuto": {
       "it": "Si dorme in tenda e ognun* porta le sue cose. I pasti li copriamo noi.",
       "en": "You sleep in a tent and everyone brings their own things. We cover the meals."
      }
     },
     {
      "id": "periodo",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Puoi esserci per tutti i 12 giorni, dal 27 agosto al 7 settembre 2027?",
       "en": "Can you be there for all 12 days, from 27 August to 7 September 2027?"
      },
      "aiuto": {
       "it": "Il Moon Lab si vive insieme, dall’inizio alla fine.",
       "en": "The Moon Lab is lived together, from start to finish."
      },
      "opz": [
       {
        "it": "Sì, ci sono tutti i 12 giorni",
        "en": "Yes, I’ll be there all 12 days"
       },
       {
        "it": "No, non per tutti i giorni",
        "en": "No, not for all the days"
       }
      ]
     },
     {
      "id": "periodo_note",
      "tipo": "area",
      "obbl": true,
      "et": {
       "it": "Quali giorni non ci sei?",
       "en": "Which days can’t you be there?"
      },
      "se": {
       "campo": "periodo",
       "vale": "No, non per tutti i giorni"
      },
      "max": 600
     },
     {
      "id": "campeggio",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Cosa porti per il campeggio?",
       "en": "What are you bringing for camping?"
      },
      "aiuto": {
       "it": "Tenda e sacco a pelo li porta ognun*.",
       "en": "Everyone brings their own tent and sleeping bag."
      },
      "opz": [
       {
        "it": "Tenda",
        "en": "Tent"
       },
       {
        "it": "Sacco a pelo",
        "en": "Sleeping bag"
       },
       {
        "it": "Materassino",
        "en": "Sleeping mat"
       },
       {
        "it": "Borraccia",
        "en": "Water bottle"
       },
       {
        "it": "Mi manca qualcosa: ne parliamo",
        "en": "I am missing something: let’s talk about it"
       }
      ]
     },
     {
      "id": "patente",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Hai la patente?",
       "en": "Do you have a driving licence?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "auto",
      "tipo": "scelta",
      "et": {
       "it": "Puoi mettere a disposizione la tua auto per il festival?",
       "en": "Could your car be used for festival needs?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ],
      "se": {
       "campo": "patente",
       "vale": "Sì"
      }
     },
     {
      "id": "maglietta",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Taglia della maglietta staff",
       "en": "Staff T-shirt size"
      },
      "opz": [
       {
        "it": "XS",
        "en": "XS"
       },
       {
        "it": "S",
        "en": "S"
       },
       {
        "it": "M",
        "en": "M"
       },
       {
        "it": "L",
        "en": "L"
       },
       {
        "it": "XL",
        "en": "XL"
       },
       {
        "it": "XXL",
        "en": "XXL"
       }
      ]
     },
     {
      "id": "dieta",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Come mangi?",
       "en": "What do you eat?"
      },
      "aiuto": {
       "it": "La cucina del Moon è vegetariana: un festival che crede nella sostenibilità lo è anche a tavola.",
       "en": "The Moon kitchen is vegetarian: a festival that believes in sustainability is sustainable at the table too."
      },
      "opz": [
       {
        "it": "Vegetariano",
        "en": "Vegetarian"
       },
       {
        "it": "Vegano",
        "en": "Vegan"
       }
      ]
     },
     {
      "id": "allergie_si",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Hai allergie o intolleranze alimentari serie?",
       "en": "Do you have serious food allergies or intolerances?"
      },
      "aiuto": {
       "it": "Meglio saperlo subito: in cucina ci organizziamo per tempo.",
       "en": "Better to know now: it lets the kitchen plan ahead."
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "allergie",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Quali?",
       "en": "Which ones?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_si",
       "vale": "Sì"
      }
     },
     {
      "id": "allergie_gravita",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto è seria?",
       "en": "How serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_si",
       "vale": "Sì"
      }
     },
     {
      "id": "bisogni",
      "tipo": "area",
      "et": {
       "it": "C’è qualcosa che ci aiuta a farti stare bene?",
       "en": "Is there anything that helps us make you feel at ease?"
      },
      "aiuto": {
       "it": "Bisogni di accessibilità, salute, ritmi. Resta tra noi dello staff.",
       "en": "Accessibility, health, rhythms. It stays within the staff."
      },
      "max": 500
     },
     {
      "id": "proposta",
      "tipo": "area",
      "et": {
       "it": "C’è un’idea o un’attività che ti piacerebbe proporre durante il Moon Lab?",
       "en": "Is there an idea or activity you would like to propose during Moon Lab?"
      },
      "aiuto": {
       "it": "Un formato, un gesto, una pratica, anche un’idea strampalata: siamo apert* a tutto.",
       "en": "A format, a gesture, a practice, even a crazy idea: we are open to anything."
      },
      "max": 600
     }
    ]
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "conosciuto",
      "tipo": "scelta",
      "et": {
       "it": "Come hai conosciuto il Moon Festival?",
       "en": "How did you hear about Moon Festival?"
      },
      "opz": [
       {
        "it": "Passaparola",
        "en": "Word of mouth"
       },
       {
        "it": "Instagram",
        "en": "Instagram"
       },
       {
        "it": "Facebook",
        "en": "Facebook"
       },
       {
        "it": "TikTok",
        "en": "TikTok"
       },
       {
        "it": "Sito web",
        "en": "Website"
       },
       {
        "it": "Materiale stampato",
        "en": "Printed materials"
       },
       {
        "it": "Ci sono già stat*",
        "en": "I have been before"
       }
      ],
      "altro": true
     },
     {
      "id": "suggerimenti",
      "tipo": "area",
      "et": {
       "it": "Vuoi dirci qualcos’altro?",
       "en": "Anything else you want to tell us?"
      },
      "aiuto": {
       "it": "Suggerimenti, bisogni, cose che il modulo non ti ha chiesto o errori che hai notato.",
       "en": "Suggestions, needs, things this form did not ask, or mistakes you noticed."
      },
      "max": 1000
     },
     {
      "id": "assicurazione",
      "tipo": "info",
      "et": {
       "it": "Durante il Moon Lab sei copert* dall’assicurazione di Dnart APS, come volontari* dell’associazione.",
       "en": "During the Moon Lab you are covered by Dnart APS insurance, as a volunteer of the association."
      },
      "aiuto": {
       "it": "Non c’è nessuna tessera da fare.",
       "en": "There is no membership card to get."
      }
     },
     {
      "id": "liberatoria",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Autorizzo Dnart APS a usare foto e video del festival in cui compaio, per comunicazione, documentazione e archivio del Moon Festival.",
       "en": "I authorise Dnart APS to use festival photos and videos in which I appear, for Moon Festival communication, documentation and archive purposes."
      }
     },
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679).",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679)."
      },
      "link": "privacy.html"
     },
     {
      "id": "comunicazioni",
      "tipo": "consenso",
      "et": {
       "it": "Acconsento all’uso della mia email per comunicazioni sul Moon Festival e sulle call future.",
       "en": "I agree to my email being used for communications about Moon Festival and future calls."
      }
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 },
 "volontari": {
  "titolo": {
   "it": "Volontar* del festival 2027",
   "en": "Festival volunteers 2027"
  },
  "breve": {
   "it": "Volontar*",
   "en": "Volunteers"
  },
  "lead": {
   "it": "Tre giorni dentro il festival: accoglienza, piazza, media, cucina. Non servono competenze, servono ascolto e voglia di esserci.",
   "en": "Three days inside the festival: welcome, squares, media, kitchen. No skills needed, just listening and wanting to be there."
  },
  "info": [
   [
    {
     "it": "Quando",
     "en": "When"
    },
    {
     "it": "3, 4 e 5 settembre 2027, per tutti e tre i giorni",
     "en": "3, 4 and 5 September 2027, all three days"
    }
   ],
   [
    {
     "it": "Per chi",
     "en": "Who for"
    },
    {
     "it": "[FASCIA D’ETÀ VOLONTARI 2027]",
     "en": "[VOLUNTEER AGE RANGE 2027]"
    }
   ],
   [
    {
     "it": "Ospitalità",
     "en": "Accommodation"
    },
    {
     "it": "Non prevista: si torna a casa ogni sera",
     "en": "Not included: you go home every evening"
    }
   ],
   [
    {
     "it": "Scadenza",
     "en": "Deadline"
    },
    {
     "it": "31 agosto 2027",
     "en": "31 August 2027"
    }
   ]
  ],
  "blocchi": [
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome anagrafico",
       "en": "Legal first name"
      },
      "auto": "given-name"
     },
     {
      "id": "nome_elezione",
      "tipo": "testo",
      "et": {
       "it": "Nome di elezione",
       "en": "Chosen name"
      },
      "aiuto": {
       "it": "Se usi un nome diverso da quello anagrafico, useremo questo in tutte le comunicazioni.",
       "en": "If you use a name other than your legal one, we will use it in all communications."
      },
      "auto": "nickname"
     },
     {
      "id": "cognome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Cognome",
       "en": "Last name"
      },
      "auto": "family-name"
     },
     {
      "id": "pronomi",
      "tipo": "scelta",
      "et": {
       "it": "Quali pronomi usi?",
       "en": "Which pronouns do you use?"
      },
      "opz": [
       {
        "it": "Lei",
        "en": "She/her"
       },
       {
        "it": "Lui",
        "en": "He/him"
       },
       {
        "it": "Neutri",
        "en": "They/them"
       },
       {
        "it": "Preferisco non dirlo",
        "en": "I prefer not to say"
       }
      ],
      "altro": true
     },
     {
      "id": "nascita",
      "tipo": "data",
      "obbl": true,
      "et": {
       "it": "Data di nascita",
       "en": "Date of birth"
      },
      "aiuto": {
       "it": "Ci serve per l’assicurazione. Se hai meno di 18 anni ti chiederemo l’autorizzazione di chi esercita la responsabilità genitoriale.",
       "en": "We need it for insurance. If you are under 18 we will ask for permission from a parent or guardian."
      },
      "auto": "bday"
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "auto": "email"
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "obbl": true,
      "et": {
       "it": "Telefono",
       "en": "Phone number"
      },
      "aiuto": {
       "it": "Con il prefisso, se non è italiano.",
       "en": "With the country code if it is not Italian."
      },
      "auto": "tel"
     },
     {
      "id": "paese",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Dove vivi?",
       "en": "Where do you live?"
      },
      "opz": [
       {
        "it": "In Italia",
        "en": "In Italy"
       },
       {
        "it": "In un altro Stato",
        "en": "In another country"
       }
      ],
      "auto": "country-name"
     },
     {
      "id": "cap",
      "tipo": "cap",
      "obbl": true,
      "et": {
       "it": "CAP",
       "en": "Postcode"
      },
      "aiuto": {
       "it": "Ci aiuta a capire da dove arrivate.",
       "en": "It helps us understand where you are coming from."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "postal-code"
     },
     {
      "id": "comune",
      "tipo": "comune",
      "obbl": true,
      "et": {
       "it": "Comune",
       "en": "Town or city"
      },
      "aiuto": {
       "it": "Lo scegli tra i comuni di quel CAP: se è uno solo, lo mettiamo noi.",
       "en": "Choose it from the towns with that postcode: if there is only one, we fill it in for you."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "address-level2"
     },
     {
      "id": "citta_estero",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Città e Stato",
       "en": "City and country"
      },
      "se": {
       "campo": "paese",
       "vale": "In un altro Stato"
      },
      "auto": "address-level2"
     }
    ]
   },
   {
    "id": "come-vuoi-esserci",
    "titolo": {
     "it": "Come vuoi esserci",
     "en": "How you want to take part"
    },
    "campi": [
     {
      "id": "date",
      "tipo": "info",
      "et": {
       "it": "Il festival è venerdì 3, sabato 4 e domenica 5 settembre 2027.",
       "en": "The festival takes place on Friday 3, Saturday 4 and Sunday 5 September 2027."
      },
      "aiuto": {
       "it": "Chi fa volontariato al Moon c’è tutti e tre i giorni. Non ci sono campeggio né ospitalità, ma si mangia tutt* insieme!",
       "en": "Moon volunteers are there all three days. There is no camping or accommodation, but we all eat together!"
      }
     },
     {
      "id": "gruppo",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "In quale gruppo ti piacerebbe stare?",
       "en": "Which group would you like to join?"
      },
      "aiuto": {
       "it": "Scegline uno. Se scegli Media si apre una pagina con qualche domanda in più.",
       "en": "Choose one. If you choose Media, a page with a few more questions will open."
      },
      "opz": [
       {
        "it": "Bar: bevande e relazione con il pubblico",
        "en": "Bar: drinks and contact with the audience"
       },
       {
        "it": "Accoglienza e awareness: informazioni e primo contatto con il pubblico",
        "en": "Welcome and awareness: information and first contact with the audience"
       },
       {
        "it": "Servizio di piazza: presidio degli spazi e aiuto durante gli spettacoli",
        "en": "Square crew: looking after the spaces and helping during the shows"
       },
       {
        "it": "Backstage: accoglienza e supporto ad artist*",
        "en": "Backstage: welcoming and supporting artists"
       },
       {
        "it": "Media: foto, video, racconto del festival",
        "en": "Media: photos, videos, telling the festival's story"
       },
       {
        "it": "Altro: siamo pront* a tutto",
        "en": "Other: we are ready for anything"
       }
      ]
     },
     {
      "id": "racconto",
      "tipo": "area",
      "et": {
       "it": "Raccontaci qualcosa di te",
       "en": "Tell us something about yourself"
      },
      "aiuto": {
       "it": "Cosa fai nella vita, cosa ti incuriosisce del festival. Soprattutto se hai scelto Altro!",
       "en": "What you do in life, what makes you curious about the festival. Especially if you chose Other!"
      },
      "max": 800
     },
     {
      "id": "lingue",
      "tipo": "scelte",
      "et": {
       "it": "Che lingue parli?",
       "en": "Which languages do you speak?"
      },
      "aiuto": {
       "it": "Ci aiuta ad accogliere chi arriva da lontano.",
       "en": "It helps us welcome people who come from far away."
      },
      "opz": [
       {
        "it": "Italiano",
        "en": "Italian"
       },
       {
        "it": "Inglese",
        "en": "English"
       },
       {
        "it": "Francese",
        "en": "French"
       },
       {
        "it": "Spagnolo",
        "en": "Spanish"
       },
       {
        "it": "Tedesco",
        "en": "German"
       },
       {
        "it": "LIS",
        "en": "Italian Sign Language (LIS)"
       }
      ],
      "altro": true
     },
     {
      "id": "patente",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Hai la patente?",
       "en": "Do you have a driving licence?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "maglietta",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Taglia della maglietta staff",
       "en": "Staff T-shirt size"
      },
      "opz": [
       {
        "it": "XS",
        "en": "XS"
       },
       {
        "it": "S",
        "en": "S"
       },
       {
        "it": "M",
        "en": "M"
       },
       {
        "it": "L",
        "en": "L"
       },
       {
        "it": "XL",
        "en": "XL"
       },
       {
        "it": "XXL",
        "en": "XXL"
       }
      ]
     }
    ]
   },
   {
    "id": "media",
    "titolo": {
     "it": "Media",
     "en": "Media"
    },
    "campi": [
     {
      "id": "media_info",
      "tipo": "info",
      "et": {
       "it": "Il team Media racconta il Moon Festival dentro e fuori dal borgo: immagini, video, parole e grafiche che diventano la memoria viva del festival e il modo in cui vive online.",
       "en": "The Media team tells the story of Moon Festival inside and outside the village: images, videos, words and graphics that become the living memory of the festival and the way it lives online."
      },
      "aiuto": {
       "it": "Non serve essere professionist*: serve voglia di guardare e raccontare.",
       "en": "You do not need to be a professional: you need to enjoy looking and telling stories."
      }
     },
     {
      "id": "media_ambiti",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Di cosa ti piacerebbe occuparti?",
       "en": "What would you like to work on?"
      },
      "aiuto": {
       "it": "Scegline quante vuoi.",
       "en": "Choose as many as you like."
      },
      "opz": [
       {
        "it": "Fotografia",
        "en": "Photography"
       },
       {
        "it": "Video",
        "en": "Video"
       },
       {
        "it": "Montaggio e post-produzione",
        "en": "Editing and post-production"
       },
       {
        "it": "Grafica e illustrazione",
        "en": "Graphics and illustration"
       },
       {
        "it": "Social media",
        "en": "Social media"
       },
       {
        "it": "Scrittura e storytelling",
        "en": "Writing and storytelling"
       }
      ],
      "altro": true
     },
     {
      "id": "media_fare",
      "tipo": "scelte",
      "et": {
       "it": "Cosa ti piacerebbe fare durante il festival?",
       "en": "What would you like to do during the festival?"
      },
      "opz": [
       {
        "it": "Fotografare gli spettacoli",
        "en": "Photographing the shows"
       },
       {
        "it": "Raccontare il backstage",
        "en": "Telling the backstage story"
       },
       {
        "it": "Ritratti di artist* e volontar*",
        "en": "Portraits of artists and volunteers"
       },
       {
        "it": "Video brevi per i social",
        "en": "Short videos for social media"
       },
       {
        "it": "Video racconto (aftermovie)",
        "en": "Video story (aftermovie)"
       },
       {
        "it": "Grafiche",
        "en": "Graphics"
       },
       {
        "it": "Gestire i social insieme al team comunicazione",
        "en": "Running social media with the communication team"
       }
      ]
     },
     {
      "id": "media_esperienza",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Che esperienza hai?",
       "en": "How much experience do you have?"
      },
      "opz": [
       {
        "it": "Nessuna, voglio imparare",
        "en": "None, I want to learn"
       },
       {
        "it": "Di base, ma so lavorare in autonomia",
        "en": "Basic, but I can work on my own"
       },
       {
        "it": "Ho già lavorato a eventi o progetti simili",
        "en": "I have already worked on similar events or projects"
       },
       {
        "it": "Avanzata o professionale",
        "en": "Advanced or professional"
       }
      ]
     },
     {
      "id": "media_attrezzatura",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Che attrezzatura puoi portare?",
       "en": "What equipment can you bring?"
      },
      "aiuto": {
       "it": "Solo quella che puoi usare in autonomia durante il festival.",
       "en": "Only what you can use on your own during the festival."
      },
      "opz": [
       {
        "it": "Macchina fotografica",
        "en": "Camera"
       },
       {
        "it": "Videocamera",
        "en": "Video camera"
       },
       {
        "it": "Smartphone",
        "en": "Smartphone"
       },
       {
        "it": "Microfono",
        "en": "Microphone"
       },
       {
        "it": "Cavalletto o stabilizzatore",
        "en": "Tripod or stabiliser"
       },
       {
        "it": "Computer portatile",
        "en": "Laptop"
       },
       {
        "it": "Programmi di montaggio o grafica",
        "en": "Editing or graphics software"
       },
       {
        "it": "Niente, uso quello che c’è",
        "en": "Nothing, I use what is there"
       }
      ],
      "altro": true
     },
     {
      "id": "media_attrezzatura_note",
      "tipo": "testo",
      "et": {
       "it": "Che modelli?",
       "en": "Which models?"
      },
      "aiuto": {
       "it": "Per esempio: Canon R6 con 24-70, iPhone 13, Premiere.",
       "en": "For example: Canon R6 with 24-70, iPhone 13, Premiere."
      },
      "se": {
       "campo": "media_attrezzatura",
       "non": "Niente, uso quello che c’è"
      }
     },
     {
      "id": "media_link",
      "tipo": "link",
      "et": {
       "it": "Un link a qualcosa che hai fatto",
       "en": "A link to something you have made"
      },
      "aiuto": {
       "it": "Portfolio, Instagram, Vimeo, YouTube, Drive: va bene anche un solo lavoro. Controlla che il link si apra.",
       "en": "Portfolio, Instagram, Vimeo, YouTube, Drive: even a single piece of work is fine. Check that the link opens."
      }
     }
    ],
    "se": {
     "campo": "gruppo",
     "vale": "Media: foto, video, racconto del festival"
    }
   },
   {
    "id": "a-tavola",
    "titolo": {
     "it": "A tavola",
     "en": "At the table"
    },
    "campi": [
     {
      "id": "dieta",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Come mangi?",
       "en": "What do you eat?"
      },
      "aiuto": {
       "it": "La cucina del Moon è vegetariana: un festival che crede nella sostenibilità lo è anche a tavola.",
       "en": "The Moon kitchen is vegetarian: a festival that believes in sustainability is sustainable at the table too."
      },
      "opz": [
       {
        "it": "Vegetariano",
        "en": "Vegetarian"
       },
       {
        "it": "Vegano",
        "en": "Vegan"
       }
      ]
     },
     {
      "id": "allergie_si",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Hai allergie o intolleranze alimentari serie?",
       "en": "Do you have serious food allergies or intolerances?"
      },
      "aiuto": {
       "it": "Meglio saperlo subito: in cucina ci organizziamo per tempo.",
       "en": "Better to know now: it lets the kitchen plan ahead."
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "allergie",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Quali?",
       "en": "Which ones?"
      },
      "opz": [
       {
        "it": "Glutine (celiachia)",
        "en": "Gluten (coeliac disease)"
       },
       {
        "it": "Latte e lattosio",
        "en": "Milk and lactose"
       },
       {
        "it": "Uova",
        "en": "Eggs"
       },
       {
        "it": "Frutta a guscio",
        "en": "Tree nuts"
       },
       {
        "it": "Arachidi",
        "en": "Peanuts"
       },
       {
        "it": "Pesce",
        "en": "Fish"
       },
       {
        "it": "Crostacei e molluschi",
        "en": "Shellfish and molluscs"
       },
       {
        "it": "Soia",
        "en": "Soy"
       },
       {
        "it": "Sesamo",
        "en": "Sesame"
       },
       {
        "it": "Sedano",
        "en": "Celery"
       },
       {
        "it": "Senape",
        "en": "Mustard"
       }
      ],
      "altro": true,
      "se": {
       "campo": "allergie_si",
       "vale": "Sì"
      }
     },
     {
      "id": "allergie_gravita",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto è seria?",
       "en": "How serious is it?"
      },
      "opz": [
       {
        "it": "Intolleranza: un po’ non fa male",
        "en": "Intolerance: a little does no harm"
       },
       {
        "it": "Allergia: anche le tracce fanno male",
        "en": "Allergy: even traces cause harm"
       },
       {
        "it": "Allergia grave: rischio di reazione forte",
        "en": "Severe allergy: risk of a strong reaction"
       }
      ],
      "se": {
       "campo": "allergie_si",
       "vale": "Sì"
      }
     }
    ]
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "conosciuto",
      "tipo": "scelta",
      "et": {
       "it": "Come hai conosciuto il Moon Festival?",
       "en": "How did you hear about Moon Festival?"
      },
      "opz": [
       {
        "it": "Passaparola",
        "en": "Word of mouth"
       },
       {
        "it": "Instagram",
        "en": "Instagram"
       },
       {
        "it": "Facebook",
        "en": "Facebook"
       },
       {
        "it": "TikTok",
        "en": "TikTok"
       },
       {
        "it": "Sito web",
        "en": "Website"
       },
       {
        "it": "Materiale stampato",
        "en": "Printed materials"
       },
       {
        "it": "Ci sono già stat*",
        "en": "I have been before"
       }
      ],
      "altro": true
     },
     {
      "id": "suggerimenti",
      "tipo": "area",
      "et": {
       "it": "Vuoi dirci qualcos’altro?",
       "en": "Anything else you want to tell us?"
      },
      "aiuto": {
       "it": "Suggerimenti, bisogni, cose che il modulo non ti ha chiesto o errori che hai notato.",
       "en": "Suggestions, needs, things this form did not ask, or mistakes you noticed."
      },
      "max": 1000
     },
     {
      "id": "liberatoria",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Autorizzo Dnart APS a usare foto e video del festival in cui compaio, per comunicazione, documentazione e archivio del Moon Festival.",
       "en": "I authorise Dnart APS to use festival photos and videos in which I appear, for Moon Festival communication, documentation and archive purposes."
      }
     },
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679).",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679)."
      },
      "link": "privacy.html"
     },
     {
      "id": "comunicazioni",
      "tipo": "consenso",
      "et": {
       "it": "Acconsento all’uso della mia email per comunicazioni sul Moon Festival e sulle call future.",
       "en": "I agree to my email being used for communications about Moon Festival and future calls."
      }
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 },
 "cantina": {
  "titolo": {
   "it": "Apri la tua cantina",
   "en": "Open your cellar"
  },
  "breve": {
   "it": "Apri la tua cantina",
   "en": "Open your cellar"
  },
  "lead": {
   "it": "Quello che non usi può diventare un mondo. Raccogliamo materiali per costruire le scenografie del festival.",
   "en": "What you no longer use can become a world. We collect materials to build the festival sets."
  },
  "info": [
   [
    {
     "it": "Cosa cerchiamo",
     "en": "What we look for"
    },
    {
     "it": "Legno, tessuti, metallo, vetro, luci, oggetti e mobili in buono stato",
     "en": "Wood, fabric, metal, glass, lights, objects and furniture in good condition"
    }
   ],
   [
    {
     "it": "Quando",
     "en": "When"
    },
    {
     "it": "Raccolta durante l’anno, soprattutto prima del Moon Lab di fine agosto",
     "en": "Collected all year, especially before Moon Lab in late August"
    }
   ],
   [
    {
     "it": "Ritiro",
     "en": "Pick-up"
    },
    {
     "it": "Possiamo passare noi, nella zona di San Raffaele Cimena",
     "en": "We can collect around San Raffaele Cimena"
    }
   ]
  ],
  "blocchi": [
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome e cognome, o nome della realtà",
       "en": "Name, or name of the organisation"
      },
      "auto": "name"
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "auto": "email"
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "obbl": true,
      "et": {
       "it": "Telefono",
       "en": "Phone number"
      },
      "auto": "tel"
     },
     {
      "id": "cap",
      "tipo": "cap",
      "obbl": true,
      "et": {
       "it": "CAP",
       "en": "Postcode"
      },
      "aiuto": {
       "it": "Ci aiuta a organizzare i ritiri.",
       "en": "It helps us plan the collections."
      },
      "auto": "postal-code"
     },
     {
      "id": "comune",
      "tipo": "comune",
      "obbl": true,
      "et": {
       "it": "Comune",
       "en": "Town or city"
      },
      "aiuto": {
       "it": "Lo scegli tra i comuni di quel CAP: se è uno solo, lo mettiamo noi.",
       "en": "Choose it from the towns with that postcode: if there is only one, we fill it in for you."
      },
      "auto": "address-level2"
     }
    ]
   },
   {
    "id": "cosa-vuoi-donare",
    "titolo": {
     "it": "Cosa vuoi donare",
     "en": "What you want to donate"
    },
    "campi": [
     {
      "id": "tipi",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Che materiali hai?",
       "en": "What materials do you have?"
      },
      "opz": [
       {
        "it": "Legno e bancali",
        "en": "Wood and pallets"
       },
       {
        "it": "Tessuti e stoffe",
        "en": "Fabric and textiles"
       },
       {
        "it": "Metallo",
        "en": "Metal"
       },
       {
        "it": "Vetro e barattoli",
        "en": "Glass and jars"
       },
       {
        "it": "Plastica",
        "en": "Plastic"
       },
       {
        "it": "Carta e cartone",
        "en": "Paper and cardboard"
       },
       {
        "it": "Corde e reti",
        "en": "Ropes and nets"
       },
       {
        "it": "Luci, lampadine, cavi",
        "en": "Lights, bulbs, cables"
       },
       {
        "it": "Mobili",
        "en": "Furniture"
       },
       {
        "it": "Oggetti e cianfrusaglie",
        "en": "Objects and odds and ends"
       },
       {
        "it": "Vernici e colori",
        "en": "Paints"
       },
       {
        "it": "Attrezzi",
        "en": "Tools"
       }
      ],
      "altro": true
     },
     {
      "id": "descrizione",
      "tipo": "area",
      "obbl": true,
      "et": {
       "it": "Descrivili",
       "en": "Describe them"
      },
      "aiuto": {
       "it": "Cosa sono, in che stato, più o meno quanti.",
       "en": "What they are, what condition, roughly how many."
      },
      "max": 800
     },
     {
      "id": "quantita",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanto spazio occupano?",
       "en": "How much space do they take up?"
      },
      "opz": [
       {
        "it": "Sta in una borsa",
        "en": "Fits in a bag"
       },
       {
        "it": "Sta in un’auto",
        "en": "Fits in a car"
       },
       {
        "it": "Serve un furgone",
        "en": "Needs a van"
       }
      ]
     },
     {
      "id": "foto",
      "tipo": "file",
      "obbl": true,
      "et": {
       "it": "Foto dei materiali (fino a 5)",
       "en": "Photos of the materials (up to 5)"
      },
      "aiuto": {
       "it": "Ci aiutano a capire se riusciamo a usarli. Massimo 10 MB per foto.",
       "en": "They help us see whether we can use them. Up to 10 MB per photo."
      },
      "multipli": 5,
      "accetta": "image/jpeg,image/png"
     }
    ]
   },
   {
    "id": "consegna-o-ritiro",
    "titolo": {
     "it": "Consegna o ritiro",
     "en": "Drop-off or pick-up"
    },
    "campi": [
     {
      "id": "modalita",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Come preferisci?",
       "en": "What do you prefer?"
      },
      "opz": [
       {
        "it": "Li porto io",
        "en": "I bring them"
       },
       {
        "it": "Venite a prenderli",
        "en": "Please pick them up"
       }
      ]
     },
     {
      "id": "indirizzo",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Indirizzo per il ritiro",
       "en": "Pick-up address"
      },
      "se": {
       "campo": "modalita",
       "vale": "Venite a prenderli"
      },
      "auto": "street-address"
     },
     {
      "id": "quando_giorni",
      "tipo": "scelte",
      "et": {
       "it": "In quali giorni ti va meglio?",
       "en": "Which days suit you best?"
      },
      "opz": [
       {
        "it": "Dal lunedì al venerdì",
        "en": "Monday to Friday"
       },
       {
        "it": "Sabato",
        "en": "Saturday"
       },
       {
        "it": "Domenica",
        "en": "Sunday"
       }
      ]
     },
     {
      "id": "quando_ore",
      "tipo": "scelte",
      "et": {
       "it": "In che momento della giornata?",
       "en": "At what time of day?"
      },
      "opz": [
       {
        "it": "Mattina",
        "en": "Morning"
       },
       {
        "it": "Pomeriggio",
        "en": "Afternoon"
       },
       {
        "it": "Sera",
        "en": "Evening"
       }
      ]
     }
    ]
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679).",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679)."
      },
      "link": "privacy.html"
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 },
 "adotta": {
  "titolo": {
   "it": "Adotta un artista",
   "en": "Host an artist"
  },
  "breve": {
   "it": "Adotta un artista",
   "en": "Host an artist"
  },
  "lead": {
   "it": "Una stanza libera, un incontro in più. Cerchiamo persone del territorio che ospitino artiste e artisti durante il festival.",
   "en": "A spare room, one more encounter. We are looking for local people to host artists during the festival."
  },
  "info": [
   [
    {
     "it": "Quando",
     "en": "When"
    },
    {
     "it": "Le notti intorno al festival, 3, 4 e 5 settembre 2027",
     "en": "The nights around the festival, 3, 4 and 5 September 2027"
    }
   ],
   [
    {
     "it": "Dove",
     "en": "Where"
    },
    {
     "it": "A San Raffaele Cimena o nei paesi vicini",
     "en": "In San Raffaele Cimena or nearby villages"
    }
   ],
   [
    {
     "it": "Cosa serve",
     "en": "What it takes"
    },
    {
     "it": "Un letto o un divano, un bagno, un po’ di accoglienza",
     "en": "A bed or sofa, a bathroom, a little welcome"
    }
   ]
  ],
  "blocchi": [
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome",
       "en": "First name"
      },
      "auto": "given-name"
     },
     {
      "id": "cognome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Cognome",
       "en": "Last name"
      },
      "auto": "family-name"
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "auto": "email"
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "obbl": true,
      "et": {
       "it": "Telefono",
       "en": "Phone number"
      },
      "auto": "tel"
     },
     {
      "id": "cap",
      "tipo": "cap",
      "obbl": true,
      "et": {
       "it": "CAP",
       "en": "Postcode"
      },
      "auto": "postal-code"
     },
     {
      "id": "comune",
      "tipo": "comune",
      "obbl": true,
      "et": {
       "it": "Comune",
       "en": "Town or city"
      },
      "aiuto": {
       "it": "Lo scegli tra i comuni di quel CAP: se è uno solo, lo mettiamo noi.",
       "en": "Choose it from the towns with that postcode: if there is only one, we fill it in for you."
      },
      "auto": "address-level2"
     }
    ]
   },
   {
    "id": "cosa-puoi-offrire",
    "titolo": {
     "it": "Cosa puoi offrire",
     "en": "What you can offer"
    },
    "campi": [
     {
      "id": "indirizzo",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Indirizzo della casa",
       "en": "Address of the home"
      },
      "auto": "street-address"
     },
     {
      "id": "tipo",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Che posto hai?",
       "en": "What kind of space do you have?"
      },
      "opz": [
       {
        "it": "Una camera singola",
        "en": "A single room"
       },
       {
        "it": "Una camera doppia",
        "en": "A double room"
       },
       {
        "it": "Un divano letto",
        "en": "A sofa bed"
       },
       {
        "it": "Spazio per una tenda in giardino",
        "en": "Room for a tent in the garden"
       },
       {
        "it": "Posto per un camper o un furgone",
        "en": "Room for a camper or van"
       }
      ]
     },
     {
      "id": "posti",
      "tipo": "numero",
      "obbl": true,
      "et": {
       "it": "Quante persone puoi ospitare?",
       "en": "How many people can you host?"
      },
      "min": 1
     },
     {
      "id": "notti",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Quali notti?",
       "en": "Which nights?"
      },
      "aiuto": {
       "it": "Il festival è venerdì 3, sabato 4 e domenica 5 settembre 2027.",
       "en": "The festival takes place on Friday 3, Saturday 4 and Sunday 5 September 2027."
      },
      "opz": [
       {
        "it": "2–3 settembre",
        "en": "2–3 September"
       },
       {
        "it": "3–4 settembre",
        "en": "3–4 September"
       },
       {
        "it": "4–5 settembre",
        "en": "4–5 September"
       },
       {
        "it": "5–6 settembre",
        "en": "5–6 September"
       }
      ]
     },
     {
      "id": "bagno",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Il bagno",
       "en": "The bathroom"
      },
      "opz": [
       {
        "it": "Riservato agli ospiti",
        "en": "For guests only"
       },
       {
        "it": "Condiviso con la famiglia",
        "en": "Shared with the household"
       }
      ]
     },
     {
      "id": "extra",
      "tipo": "scelte",
      "et": {
       "it": "Puoi offrire anche",
       "en": "You can also offer"
      },
      "opz": [
       {
        "it": "La colazione",
        "en": "Breakfast"
       },
       {
        "it": "Un posto auto",
        "en": "A parking space"
       },
       {
        "it": "Un passaggio fino al festival",
        "en": "A lift to the festival"
       },
       {
        "it": "Lavatrice",
        "en": "Washing machine"
       },
       {
        "it": "Wi-fi",
        "en": "Wi-fi"
       }
      ]
     },
     {
      "id": "casa_info",
      "tipo": "scelte",
      "et": {
       "it": "In casa ci sono",
       "en": "In the home there are"
      },
      "aiuto": {
       "it": "Ci aiuta ad abbinare la casa giusta all’artista giusto.",
       "en": "It helps us match the right home with the right artist."
      },
      "opz": [
       {
        "it": "Animali",
        "en": "Pets"
       },
       {
        "it": "Bambine o bambini",
        "en": "Children"
       },
       {
        "it": "Persone che fumano",
        "en": "People who smoke"
       },
       {
        "it": "Scale per arrivare alla camera",
        "en": "Stairs up to the room"
       }
      ]
     },
     {
      "id": "lingue",
      "tipo": "scelte",
      "et": {
       "it": "Che lingue parli?",
       "en": "Which languages do you speak?"
      },
      "opz": [
       {
        "it": "Italiano",
        "en": "Italian"
       },
       {
        "it": "Inglese",
        "en": "English"
       },
       {
        "it": "Francese",
        "en": "French"
       },
       {
        "it": "Spagnolo",
        "en": "Spanish"
       },
       {
        "it": "Tedesco",
        "en": "German"
       }
      ],
      "altro": true
     },
     {
      "id": "note",
      "tipo": "area",
      "et": {
       "it": "Vuoi dirci qualcos’altro della casa o di te?",
       "en": "Anything else about the home or about you?"
      },
      "max": 600
     }
    ]
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679).",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679)."
      },
      "link": "privacy.html"
     },
     {
      "id": "comunicazioni",
      "tipo": "consenso",
      "et": {
       "it": "Acconsento all’uso della mia email per comunicazioni sul Moon Festival.",
       "en": "I agree to my email being used for communications about Moon Festival."
      }
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 },
 "moon-walk": {
  "titolo": {
   "it": "Moon Walk 2027",
   "en": "Moon Walk 2027"
  },
  "breve": {
   "it": "Moon Walk",
   "en": "Moon Walk"
  },
  "lead": {
   "it": "Il viaggio fa parte del festival: camminare insieme, incontrarsi, abitare il paesaggio.",
   "en": "The journey is part of the festival: walking together, meeting people, inhabiting the landscape."
  },
  "info": [
   [
    {
     "it": "Quando",
     "en": "When"
    },
    {
     "it": "Sabato 4 settembre 2027",
     "en": "Saturday 4 September 2027"
    }
   ],
   [
    {
     "it": "Partenze",
     "en": "Departures"
    },
    {
     "it": "Ore 15:00 e ore 16:00, con sosta alla Tenuta Cimena",
     "en": "15:00 and 16:00, with a stop at Tenuta Cimena"
    }
   ],
   [
    {
     "it": "Durata",
     "en": "Length"
    },
    {
     "it": "Circa 3 ore",
     "en": "About 3 hours"
    }
   ],
   [
    {
     "it": "Iscrizioni",
     "en": "Sign-up"
    },
    {
     "it": "Fino a sabato 4 settembre alle 17:00",
     "en": "Until Saturday 4 September at 17:00"
    }
   ]
  ],
  "genere": "iscrizione",
  "blocchi": [
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "date",
      "tipo": "info",
      "et": {
       "it": "La Moon Walk è sabato 4 settembre 2027.",
       "en": "The Moon Walk takes place on Saturday 4 September 2027."
      },
      "aiuto": {
       "it": "Un modulo per ogni persona che cammina, anche per bambine e bambini.",
       "en": "One form for each person walking, children included."
      }
     },
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome anagrafico",
       "en": "Legal first name"
      },
      "auto": "given-name"
     },
     {
      "id": "nome_elezione",
      "tipo": "testo",
      "et": {
       "it": "Nome di elezione",
       "en": "Chosen name"
      },
      "aiuto": {
       "it": "Se usi un nome diverso da quello anagrafico, useremo questo in tutte le comunicazioni.",
       "en": "If you use a name other than your legal one, we will use it in all communications."
      },
      "auto": "nickname"
     },
     {
      "id": "cognome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Cognome",
       "en": "Last name"
      },
      "auto": "family-name"
     },
     {
      "id": "pronomi",
      "tipo": "scelta",
      "et": {
       "it": "Quali pronomi usi?",
       "en": "Which pronouns do you use?"
      },
      "opz": [
       {
        "it": "Lei",
        "en": "She/her"
       },
       {
        "it": "Lui",
        "en": "He/him"
       },
       {
        "it": "Neutri",
        "en": "They/them"
       },
       {
        "it": "Preferisco non dirlo",
        "en": "I prefer not to say"
       }
      ],
      "altro": true
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "auto": "email"
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "obbl": true,
      "et": {
       "it": "Cellulare",
       "en": "Mobile phone"
      },
      "aiuto": {
       "it": "Ci serve per trovarti il giorno della passeggiata.",
       "en": "We need it to reach you on the day of the walk."
      },
      "auto": "tel"
     },
     {
      "id": "paese",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Dove vivi?",
       "en": "Where do you live?"
      },
      "opz": [
       {
        "it": "In Italia",
        "en": "In Italy"
       },
       {
        "it": "In un altro Stato",
        "en": "In another country"
       }
      ],
      "auto": "country-name"
     },
     {
      "id": "cap",
      "tipo": "cap",
      "obbl": true,
      "et": {
       "it": "CAP",
       "en": "Postcode"
      },
      "aiuto": {
       "it": "Ci aiuta a capire da dove arrivate.",
       "en": "It helps us understand where you are coming from."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "postal-code"
     },
     {
      "id": "comune",
      "tipo": "comune",
      "obbl": true,
      "et": {
       "it": "Comune",
       "en": "Town or city"
      },
      "aiuto": {
       "it": "Lo scegli tra i comuni di quel CAP: se è uno solo, lo mettiamo noi.",
       "en": "Choose it from the towns with that postcode: if there is only one, we fill it in for you."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "address-level2"
     },
     {
      "id": "citta_estero",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Città e Stato",
       "en": "City and country"
      },
      "se": {
       "campo": "paese",
       "vale": "In un altro Stato"
      },
      "auto": "address-level2"
     }
    ]
   },
   {
    "id": "per-l-assicurazione",
    "titolo": {
     "it": "Per l’assicurazione",
     "en": "For the insurance"
    },
    "campi": [
     {
      "id": "nascita",
      "tipo": "data",
      "obbl": true,
      "et": {
       "it": "Data di nascita",
       "en": "Date of birth"
      },
      "aiuto": {
       "it": "Data e luogo di nascita, codice fiscale e indirizzo servono all’assicurazione: così camminiamo insieme in sicurezza.",
       "en": "Date and place of birth, tax code and address are needed for the insurance: that way we walk together safely."
      },
      "auto": "bday"
     },
     {
      "id": "luogo_nascita",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Luogo di nascita",
       "en": "Place of birth"
      }
     },
     {
      "id": "codice_fiscale",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Codice fiscale",
       "en": "Italian tax code (codice fiscale)"
      },
      "auto": "off",
      "maxlen": 16,
      "maiuscolo": true
     },
     {
      "id": "indirizzo",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Indirizzo",
       "en": "Address"
      },
      "aiuto": {
       "it": "Via e numero civico.",
       "en": "Street and house number."
      },
      "auto": "street-address"
     }
    ]
   },
   {
    "id": "la-passeggiata",
    "titolo": {
     "it": "La passeggiata",
     "en": "The walk"
    },
    "campi": [
     {
      "id": "orario",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "A che ora parti?",
       "en": "What time do you set off?"
      },
      "aiuto": {
       "it": "La convocazione è 15 minuti prima della partenza.",
       "en": "Please be there 15 minutes before departure."
      },
      "opz": [
       {
        "it": "Ore 15:00, con sosta alla Tenuta Cimena (circa 3 ore)",
        "en": "15:00, with a stop at Tenuta Cimena (about 3 hours)"
       },
       {
        "it": "Ore 16:00, con sosta alla Tenuta Cimena (circa 3 ore)",
        "en": "16:00, with a stop at Tenuta Cimena (about 3 hours)"
       }
      ]
     },
     {
      "id": "camminare",
      "tipo": "scelte",
      "et": {
       "it": "C’è qualcosa da sapere per camminare insieme?",
       "en": "Is there anything we should know so we can walk together?"
      },
      "aiuto": {
       "it": "Ci aiuta a preparare il percorso e le soste.",
       "en": "It helps us plan the route and the stops."
      },
      "opz": [
       {
        "it": "Cammino con un passeggino",
        "en": "I walk with a pushchair"
       },
       {
        "it": "Ho bisogno di pause frequenti",
        "en": "I need frequent breaks"
       },
       {
        "it": "Ho difficoltà con salite o terreni irregolari",
        "en": "I find slopes or uneven ground difficult"
       },
       {
        "it": "Cammino con un cane",
        "en": "I walk with a dog"
       }
      ],
      "altro": true
     }
    ]
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "conosciuto",
      "tipo": "scelta",
      "et": {
       "it": "Come hai conosciuto il Moon Festival?",
       "en": "How did you hear about Moon Festival?"
      },
      "opz": [
       {
        "it": "Passaparola",
        "en": "Word of mouth"
       },
       {
        "it": "Instagram",
        "en": "Instagram"
       },
       {
        "it": "Facebook",
        "en": "Facebook"
       },
       {
        "it": "TikTok",
        "en": "TikTok"
       },
       {
        "it": "Sito web",
        "en": "Website"
       },
       {
        "it": "Materiale stampato",
        "en": "Printed materials"
       },
       {
        "it": "Ci sono già stat*",
        "en": "I have been before"
       }
      ],
      "altro": true
     },
     {
      "id": "suggerimenti",
      "tipo": "area",
      "et": {
       "it": "Vuoi dirci qualcos’altro?",
       "en": "Anything else you want to tell us?"
      },
      "aiuto": {
       "it": "Suggerimenti, bisogni, cose che il modulo non ti ha chiesto o errori che hai notato.",
       "en": "Suggestions, needs, things this form did not ask, or mistakes you noticed."
      },
      "max": 800
     },
     {
      "id": "liberatoria",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Durante la Moon Walk e il festival facciamo foto e video per raccontarli e promuoverli, anche insieme a partner e sostenitori del Moon Festival. Autorizzo l’uso delle immagini in cui compaio.",
       "en": "During the Moon Walk and the festival we take photos and videos to tell their story and promote them, also together with Moon Festival partners and supporters. I authorise the use of images in which I appear."
      },
      "aiuto": {
       "it": "Se vuoi che togliamo una foto o un video in cui ci sei, scrivici a info@associazionednart.it.",
       "en": "If you want us to remove a photo or video you appear in, write to info@associazionednart.it."
      }
     },
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679).",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679)."
      },
      "link": "privacy.html"
     },
     {
      "id": "comunicazioni",
      "tipo": "consenso",
      "et": {
       "it": "Acconsento all’uso della mia email per comunicazioni sul Moon Festival e sulle call future.",
       "en": "I agree to my email being used for communications about Moon Festival and future calls."
      }
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 },
 "registrazione": {
  "titolo": {
   "it": "Registrazione al Moon Festival 2027",
   "en": "Moon Festival 2027 registration"
  },
  "breve": {
   "it": "Registrazione",
   "en": "Registration"
  },
  "lead": {
   "it": "Il Moon Festival è gratuito. Registrarti non è obbligatorio, ma ci aiuta a prepararci ad accoglierti.",
   "en": "Moon Festival is free. Registering is not compulsory, but it helps us get ready to welcome you."
  },
  "info": [
   [
    {
     "it": "Quando",
     "en": "When"
    },
    {
     "it": "3, 4 e 5 settembre 2027",
     "en": "3, 4 and 5 September 2027"
    }
   ],
   [
    {
     "it": "Ingresso",
     "en": "Entry"
    },
    {
     "it": "Libero e gratuito",
     "en": "Free"
    }
   ],
   [
    {
     "it": "Registrazione",
     "en": "Registration"
    },
    {
     "it": "Non obbligatoria. Fino a 4 persone per modulo",
     "en": "Not compulsory. Up to 4 people per form"
    }
   ],
   [
    {
     "it": "Si chiude",
     "en": "Closes"
    },
    {
     "it": "Lunedì 6 settembre a mezzanotte",
     "en": "Monday 6 September at midnight"
    }
   ]
  ],
  "genere": "iscrizione",
  "blocchi": [
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "intro",
      "tipo": "info",
      "et": {
       "it": "La registrazione non è un biglietto e non è obbligatoria: il Moon Festival è gratuito.",
       "en": "Registering is not a ticket and it is not compulsory: Moon Festival is free."
      },
      "aiuto": {
       "it": "Registrarti ci aiuta a organizzare accoglienza, parcheggi, navette e servizi, e a sapere prima di cosa avete bisogno.",
       "en": "Registering helps us organise welcome, parking, shuttles and services, and know in advance what you need."
      }
     },
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome",
       "en": "First name"
      },
      "auto": "given-name"
     },
     {
      "id": "nome_elezione",
      "tipo": "testo",
      "et": {
       "it": "Nome di elezione",
       "en": "Chosen name"
      },
      "aiuto": {
       "it": "Se usi un nome diverso da quello anagrafico, useremo questo in tutte le comunicazioni.",
       "en": "If you use a name other than your legal one, we will use it in all communications."
      },
      "auto": "nickname"
     },
     {
      "id": "cognome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Cognome",
       "en": "Last name"
      },
      "auto": "family-name"
     },
     {
      "id": "pronomi",
      "tipo": "scelta",
      "et": {
       "it": "Quali pronomi usi?",
       "en": "Which pronouns do you use?"
      },
      "opz": [
       {
        "it": "Lei",
        "en": "She/her"
       },
       {
        "it": "Lui",
        "en": "He/him"
       },
       {
        "it": "Neutri",
        "en": "They/them"
       },
       {
        "it": "Preferisco non dirlo",
        "en": "I prefer not to say"
       }
      ],
      "altro": true
     },
     {
      "id": "eta",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quanti anni hai?",
       "en": "How old are you?"
      },
      "opz": [
       {
        "it": "Meno di 18",
        "en": "Under 18"
       },
       {
        "it": "18–24",
        "en": "18–24"
       },
       {
        "it": "25–34",
        "en": "25–34"
       },
       {
        "it": "35–44",
        "en": "35–44"
       },
       {
        "it": "45–54",
        "en": "45–54"
       },
       {
        "it": "55–64",
        "en": "55–64"
       },
       {
        "it": "65 o più",
        "en": "65 or over"
       }
      ]
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "aiuto": {
       "it": "Ti mandiamo la conferma e, prima del festival, le informazioni utili.",
       "en": "We will send you a confirmation and, before the festival, useful information."
      },
      "auto": "email"
     },
     {
      "id": "paese",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Dove vivi?",
       "en": "Where do you live?"
      },
      "opz": [
       {
        "it": "In Italia",
        "en": "In Italy"
       },
       {
        "it": "In un altro Stato",
        "en": "In another country"
       }
      ],
      "auto": "country-name"
     },
     {
      "id": "cap",
      "tipo": "cap",
      "obbl": true,
      "et": {
       "it": "CAP",
       "en": "Postcode"
      },
      "aiuto": {
       "it": "Ci aiuta a capire da dove arrivate.",
       "en": "It helps us understand where you are coming from."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "postal-code"
     },
     {
      "id": "comune",
      "tipo": "comune",
      "obbl": true,
      "et": {
       "it": "Comune",
       "en": "Town or city"
      },
      "aiuto": {
       "it": "Lo scegli tra i comuni di quel CAP: se è uno solo, lo mettiamo noi.",
       "en": "Choose it from the towns with that postcode: if there is only one, we fill it in for you."
      },
      "se": {
       "campo": "paese",
       "vale": "In Italia"
      },
      "auto": "address-level2"
     },
     {
      "id": "citta_estero",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Città e Stato",
       "en": "City and country"
      },
      "se": {
       "campo": "paese",
       "vale": "In un altro Stato"
      },
      "auto": "address-level2"
     }
    ]
   },
   {
    "id": "quando-arrivi",
    "titolo": {
     "it": "Quando arrivi",
     "en": "When you arrive"
    },
    "campi": [
     {
      "id": "giorni",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "In quali giorni vieni?",
       "en": "Which days are you coming?"
      },
      "opz": [
       {
        "it": "Venerdì 3 settembre, dalle 18:00",
        "en": "Friday 3 September, from 18:00"
       },
       {
        "it": "Sabato 4 settembre, dalle 16:00",
        "en": "Saturday 4 September, from 16:00"
       },
       {
        "it": "Domenica 5 settembre, dalle 16:00",
        "en": "Sunday 5 September, from 16:00"
       }
      ]
     },
     {
      "id": "ora_ven",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Venerdì 3 settembre: a che ora pensi di arrivare?",
       "en": "Friday 3 September: what time do you think you will arrive?"
      },
      "aiuto": {
       "it": "Anche a occhio: ci aiuta a organizzare le navette. Il venerdì le navette partono dalle 18:00.",
       "en": "A rough guess is fine: it helps us organise the shuttles. On Friday the shuttles start at 18:00."
      },
      "opz": [
       {
        "it": "18:00–19:00",
        "en": "18:00–19:00"
       },
       {
        "it": "19:00–20:00",
        "en": "19:00–20:00"
       },
       {
        "it": "20:00–21:00",
        "en": "20:00–21:00"
       },
       {
        "it": "21:00–22:00",
        "en": "21:00–22:00"
       },
       {
        "it": "22:00–23:00",
        "en": "22:00–23:00"
       }
      ],
      "se": {
       "campo": "giorni",
       "vale": "Venerdì 3 settembre, dalle 18:00"
      }
     },
     {
      "id": "ora_sab",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Sabato 4 settembre: a che ora pensi di arrivare?",
       "en": "Saturday 4 September: what time do you think you will arrive?"
      },
      "aiuto": {
       "it": "Anche a occhio: ci aiuta a organizzare le navette.",
       "en": "A rough guess is fine: it helps us plan the shuttles."
      },
      "opz": [
       {
        "it": "16:00–17:00",
        "en": "16:00–17:00"
       },
       {
        "it": "17:00–18:00",
        "en": "17:00–18:00"
       },
       {
        "it": "18:00–19:00",
        "en": "18:00–19:00"
       },
       {
        "it": "19:00–20:00",
        "en": "19:00–20:00"
       },
       {
        "it": "20:00–21:00",
        "en": "20:00–21:00"
       },
       {
        "it": "21:00–22:00",
        "en": "21:00–22:00"
       },
       {
        "it": "22:00–23:00",
        "en": "22:00–23:00"
       }
      ],
      "se": {
       "campo": "giorni",
       "vale": "Sabato 4 settembre, dalle 16:00"
      }
     },
     {
      "id": "ora_dom",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Domenica 5 settembre: a che ora pensi di arrivare?",
       "en": "Sunday 5 September: what time do you think you will arrive?"
      },
      "aiuto": {
       "it": "Anche a occhio: ci aiuta a organizzare le navette.",
       "en": "A rough guess is fine: it helps us plan the shuttles."
      },
      "opz": [
       {
        "it": "16:00–17:00",
        "en": "16:00–17:00"
       },
       {
        "it": "17:00–18:00",
        "en": "17:00–18:00"
       },
       {
        "it": "18:00–19:00",
        "en": "18:00–19:00"
       },
       {
        "it": "19:00–20:00",
        "en": "19:00–20:00"
       },
       {
        "it": "20:00–21:00",
        "en": "20:00–21:00"
       },
       {
        "it": "21:00–22:00",
        "en": "21:00–22:00"
       },
       {
        "it": "22:00–23:00",
        "en": "22:00–23:00"
       }
      ],
      "se": {
       "campo": "giorni",
       "vale": "Domenica 5 settembre, dalle 16:00"
      }
     },
     {
      "id": "persone",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quante persone siete, contando te?",
       "en": "How many of you are there, including you?"
      },
      "aiuto": {
       "it": "Puoi registrare fino a 4 persone con lo stesso modulo.",
       "en": "You can register up to 4 people with the same form."
      },
      "opz": [
       {
        "it": "1",
        "en": "1"
       },
       {
        "it": "2",
        "en": "2"
       },
       {
        "it": "3",
        "en": "3"
       },
       {
        "it": "4",
        "en": "4"
       }
      ]
     },
     {
      "id": "mezzo",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Come arrivi?",
       "en": "How are you getting there?"
      },
      "opz": [
       {
        "it": "In auto, guidando",
        "en": "By car, driving"
       },
       {
        "it": "In auto, con un passaggio",
        "en": "By car, as a passenger"
       },
       {
        "it": "Con il carpooling",
        "en": "By carpooling"
       },
       {
        "it": "Con i mezzi pubblici",
        "en": "By public transport"
       },
       {
        "it": "In moto o scooter",
        "en": "By motorbike or scooter"
       },
       {
        "it": "In bicicletta",
        "en": "By bike"
       },
       {
        "it": "A piedi",
        "en": "On foot"
       }
      ],
      "altro": true
     }
    ]
   },
   {
    "id": "accoglienza",
    "titolo": {
     "it": "Accoglienza",
     "en": "Welcome and access"
    },
    "campi": [
     {
      "id": "esigenze",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Hai esigenze di accessibilità, accoglienza o partecipazione da segnalarci?",
       "en": "Do you have any access, welcome or participation needs to tell us about?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "aspetti",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Quali?",
       "en": "Which ones?"
      },
      "aiuto": {
       "it": "Puoi sceglierne più di una.",
       "en": "You can choose more than one."
      },
      "opz": [
       {
        "it": "Mobilità con sedia a rotelle, deambulatore o altro ausilio",
        "en": "Getting around with a wheelchair, walker or other aid"
       },
       {
        "it": "Difficoltà con salite, scale o pavimentazioni irregolari",
        "en": "Difficulty with slopes, stairs or uneven ground"
       },
       {
        "it": "Sedute o punti di sosta",
        "en": "Seating or places to rest"
       },
       {
        "it": "Gravidanza, età avanzata, convalescenza o condizioni fisiche temporanee",
        "en": "Pregnancy, older age, recovery or temporary physical conditions"
       },
       {
        "it": "Partecipazione con bambin* piccol* o passeggino",
        "en": "Coming with young children or a pushchair"
       },
       {
        "it": "Vista o orientamento negli spazi",
        "en": "Sight or finding my way around"
       },
       {
        "it": "Udito o fruizione sonora",
        "en": "Hearing or experiencing sound"
       },
       {
        "it": "Neurodivergenze, sovraccarico sensoriale, ansia o bisogno di spazi tranquilli",
        "en": "Neurodivergence, sensory overload, anxiety or a need for quiet spaces"
       },
       {
        "it": "Bagni accessibili o gender neutral",
        "en": "Accessible or gender-neutral toilets"
       },
       {
        "it": "Allergie, alimentazione o contatto con materiali",
        "en": "Allergies, food or contact with materials"
       },
       {
        "it": "Arrivare al borgo con un mezzo proprio",
        "en": "Reaching the village with my own vehicle"
       },
       {
        "it": "Biglietto sospeso o navetta gratuita",
        "en": "A pay-it-forward ticket or free shuttle"
       }
      ],
      "altro": true,
      "se": {
       "campo": "esigenze",
       "vale": "Sì"
      }
     },
     {
      "id": "accoglienza",
      "tipo": "area",
      "et": {
       "it": "C’è qualcosa che può aiutarci ad accoglierti meglio?",
       "en": "Is there anything that would help us welcome you better?"
      },
      "aiuto": {
       "it": "Raccontaci pure: resta tra noi dello staff.",
       "en": "Feel free to tell us: it stays within the staff."
      },
      "se": {
       "campo": "esigenze",
       "vale": "Sì"
      },
      "max": 600
     },
     {
      "id": "info_pratiche",
      "tipo": "scelte",
      "et": {
       "it": "Ti servono informazioni prima del festival?",
       "en": "Do you need any information before the festival?"
      },
      "opz": [
       {
        "it": "Su parcheggi e navette",
        "en": "About parking and shuttles"
       },
       {
        "it": "Sui percorsi nel borgo",
        "en": "About routes through the village"
       },
       {
        "it": "Su salite, scale e pavimentazioni",
        "en": "About slopes, stairs and ground surfaces"
       },
       {
        "it": "Su bagni accessibili e punti di sosta",
        "en": "About accessible toilets and places to rest"
       },
       {
        "it": "Su orari e modi di seguire gli spettacoli",
        "en": "About times and ways to follow the performances"
       },
       {
        "it": "Su luci, suoni o altri elementi sensoriali",
        "en": "About lights, sounds or other sensory elements"
       }
      ],
      "altro": true,
      "se": {
       "campo": "esigenze",
       "vale": "Sì"
      }
     },
     {
      "id": "ricontatto",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Vuoi che ti contattiamo prima del festival?",
       "en": "Would you like us to contact you before the festival?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "Solo se serve",
        "en": "Only if needed"
       },
       {
        "it": "No",
        "en": "No"
       }
      ],
      "se": {
       "campo": "esigenze",
       "vale": "Sì"
      }
     },
     {
      "id": "contatto",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Come preferisci essere contattat*?",
       "en": "How would you like us to contact you?"
      },
      "opz": [
       {
        "it": "Email",
        "en": "Email"
       },
       {
        "it": "Telefono",
        "en": "Phone number"
       },
       {
        "it": "WhatsApp",
        "en": "WhatsApp"
       }
      ],
      "se": {
       "campo": "ricontatto",
       "non": "No"
      }
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "obbl": true,
      "et": {
       "it": "Numero di telefono",
       "en": "Phone number"
      },
      "se": {
       "campo": "contatto",
       "non": "Email"
      },
      "auto": "tel"
     }
    ]
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "conosciuto",
      "tipo": "scelta",
      "et": {
       "it": "Come hai conosciuto il Moon Festival?",
       "en": "How did you hear about Moon Festival?"
      },
      "opz": [
       {
        "it": "Passaparola",
        "en": "Word of mouth"
       },
       {
        "it": "Instagram",
        "en": "Instagram"
       },
       {
        "it": "Facebook",
        "en": "Facebook"
       },
       {
        "it": "TikTok",
        "en": "TikTok"
       },
       {
        "it": "Sito web",
        "en": "Website"
       },
       {
        "it": "Materiale stampato",
        "en": "Printed materials"
       },
       {
        "it": "Ci sono già stat*",
        "en": "I have been before"
       }
      ],
      "altro": true
     },
     {
      "id": "suggerimenti",
      "tipo": "area",
      "et": {
       "it": "Vuoi dirci qualcos’altro?",
       "en": "Anything else you want to tell us?"
      },
      "aiuto": {
       "it": "Suggerimenti, bisogni, cose che il modulo non ti ha chiesto o errori che hai notato.",
       "en": "Suggestions, needs, things this form did not ask, or mistakes you noticed."
      },
      "max": 800
     },
     {
      "id": "liberatoria",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Durante il festival facciamo foto e video per raccontarlo e promuoverlo, anche insieme a partner e sostenitori del Moon Festival. Autorizzo l’uso delle immagini in cui compaio io e le persone che iscrivo con me.",
       "en": "During the festival we take photos and videos to tell its story and promote it, also together with Moon Festival partners and supporters. I authorise the use of images in which I and the people I register with me appear."
      },
      "aiuto": {
       "it": "Ho informato chi viene con me; per chi ha meno di 18 anni, sono il genitore o chi ne ha la responsabilità. Se vuoi che togliamo una foto o un video, scrivici a info@associazionednart.it.",
       "en": "I have told the people coming with me; for anyone under 18, I am their parent or the person responsible for them. If you want us to remove a photo or video, write to info@associazionednart.it."
      }
     },
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679).",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679)."
      },
      "link": "privacy.html"
     },
     {
      "id": "comunicazioni",
      "tipo": "consenso",
      "et": {
       "it": "Acconsento all’uso della mia email per comunicazioni sul Moon Festival e sulle call future.",
       "en": "I agree to my email being used for communications about Moon Festival and future calls."
      }
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 },
 "iscrizione-laboratori": {
  "titolo": {
   "it": "Partecipa ai laboratori 2027",
   "en": "Join the workshops 2027"
  },
  "breve": {
   "it": "Partecipa ai laboratori",
   "en": "Join the workshops"
  },
  "lead": {
   "it": "Mani, corpo, voce: i laboratori del Moon sono aperti a tutt*. Scegli il tuo e tieniti un posto.",
   "en": "Hands, body, voice: Moon workshops are open to everyone. Choose yours and save a place."
  },
  "info": [
   [
    {
     "it": "Quando",
     "en": "When"
    },
    {
     "it": "Sabato 4 e domenica 5 settembre 2027",
     "en": "Saturday 4 and Sunday 5 September 2027"
    }
   ],
   [
    {
     "it": "Posti",
     "en": "Places"
    },
    {
     "it": "Limitati: ci si iscrive a un laboratorio alla volta",
     "en": "Limited: sign up for one workshop at a time"
    }
   ],
   [
    {
     "it": "Iscrizioni",
     "en": "Sign-up"
    },
    {
     "it": "Fino a domenica 5 settembre",
     "en": "Until Sunday 5 September"
    }
   ]
  ],
  "genere": "iscrizione",
  "blocchi": [
   {
    "id": "il-laboratorio",
    "titolo": {
     "it": "Il laboratorio",
     "en": "The workshop"
    },
    "campi": [
     {
      "id": "intro",
      "tipo": "info",
      "et": {
       "it": "I posti nei laboratori sono limitati: iscriversi ci aiuta a fare spazio a tutt*.",
       "en": "Workshop places are limited: signing up helps us make room for everyone."
      }
     },
     {
      "id": "laboratorio",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "A quale laboratorio vuoi partecipare?",
       "en": "Which workshop would you like to join?"
      },
      "fonte": "laboratori"
     },
     {
      "id": "turno",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quando?",
       "en": "When?"
      },
      "fonte": "turni"
     },
     {
      "id": "partecipanti",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Quante persone iscrivi, contando te?",
       "en": "How many people are you signing up, including you?"
      },
      "opz": [
       {
        "it": "1",
        "en": "1"
       },
       {
        "it": "2",
        "en": "2"
       },
       {
        "it": "3",
        "en": "3"
       },
       {
        "it": "4",
        "en": "4"
       }
      ]
     },
     {
      "id": "bambini",
      "tipo": "scelta",
      "obbl": true,
      "et": {
       "it": "Partecipano bambine o bambini?",
       "en": "Are children taking part?"
      },
      "opz": [
       {
        "it": "Sì",
        "en": "Yes"
       },
       {
        "it": "No",
        "en": "No"
       }
      ]
     },
     {
      "id": "eta_bambini",
      "tipo": "scelte",
      "obbl": true,
      "et": {
       "it": "Quanti anni hanno?",
       "en": "How old are they?"
      },
      "aiuto": {
       "it": "Se sono più di una, sceglile tutte.",
       "en": "If there is more than one, choose them all."
      },
      "opz": [
       {
        "it": "Meno di 3 anni",
        "en": "Under 3"
       },
       {
        "it": "3–5 anni",
        "en": "3–5 years"
       },
       {
        "it": "6–10 anni",
        "en": "6–10 years"
       },
       {
        "it": "11–13 anni",
        "en": "11–13 years"
       },
       {
        "it": "14–17 anni",
        "en": "14–17 years"
       }
      ],
      "se": {
       "campo": "bambini",
       "vale": "Sì"
      }
     },
     {
      "id": "accessibilita",
      "tipo": "scelte",
      "et": {
       "it": "C’è qualcosa che dobbiamo sapere per accoglierti?",
       "en": "Is there anything we should know to welcome you?"
      },
      "opz": [
       {
        "it": "Uso la sedia a rotelle",
        "en": "I use a wheelchair"
       },
       {
        "it": "Vedo poco o non vedo",
        "en": "I have low vision or I am blind"
       },
       {
        "it": "Sento poco o non sento",
        "en": "I am hard of hearing or deaf"
       },
       {
        "it": "Non parlo italiano",
        "en": "I do not speak Italian"
       },
       {
        "it": "Ho bisogno di pause o di un ritmo lento",
        "en": "I need breaks or a slower pace"
       },
       {
        "it": "Allergie a materiali (colle, vernici, lattice…)",
        "en": "Allergies to materials (glue, paint, latex…)"
       }
      ],
      "altro": true
     }
    ]
   },
   {
    "id": "chi-sei",
    "titolo": {
     "it": "Chi sei",
     "en": "About you"
    },
    "campi": [
     {
      "id": "nome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Nome",
       "en": "First name"
      },
      "auto": "given-name"
     },
     {
      "id": "nome_elezione",
      "tipo": "testo",
      "et": {
       "it": "Nome di elezione",
       "en": "Chosen name"
      },
      "aiuto": {
       "it": "Se usi un nome diverso da quello anagrafico, useremo questo in tutte le comunicazioni.",
       "en": "If you use a name other than your legal one, we will use it in all communications."
      },
      "auto": "nickname"
     },
     {
      "id": "cognome",
      "tipo": "testo",
      "obbl": true,
      "et": {
       "it": "Cognome",
       "en": "Last name"
      },
      "auto": "family-name"
     },
     {
      "id": "email",
      "tipo": "email",
      "obbl": true,
      "et": {
       "it": "Email",
       "en": "Email"
      },
      "aiuto": {
       "it": "Ti mandiamo la conferma e ti scriviamo se cambia qualcosa.",
       "en": "We will send you a confirmation and write to you if anything changes."
      },
      "auto": "email"
     },
     {
      "id": "telefono",
      "tipo": "tel",
      "et": {
       "it": "Cellulare",
       "en": "Mobile phone"
      },
      "auto": "tel"
     }
    ]
   },
   {
    "id": "prima-di-salutarci",
    "titolo": {
     "it": "Prima di salutarci",
     "en": "Before we say goodbye"
    },
    "campi": [
     {
      "id": "suggerimenti",
      "tipo": "area",
      "et": {
       "it": "Vuoi dirci qualcos’altro?",
       "en": "Anything else you want to tell us?"
      },
      "aiuto": {
       "it": "Suggerimenti, bisogni, cose che il modulo non ti ha chiesto o errori che hai notato.",
       "en": "Suggestions, needs, things this form did not ask, or mistakes you noticed."
      },
      "max": 800
     },
     {
      "id": "liberatoria",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Durante il festival facciamo foto e video per raccontarlo e promuoverlo, anche insieme a partner e sostenitori del Moon Festival. Autorizzo l’uso delle immagini in cui compaio io e le persone che iscrivo con me.",
       "en": "During the festival we take photos and videos to tell its story and promote it, also together with Moon Festival partners and supporters. I authorise the use of images in which I and the people I register with me appear."
      },
      "aiuto": {
       "it": "Ho informato chi viene con me; per chi ha meno di 18 anni, sono il genitore o chi ne ha la responsabilità. Se vuoi che togliamo una foto o un video, scrivici a info@associazionednart.it.",
       "en": "I have told the people coming with me; for anyone under 18, I am their parent or the person responsible for them. If you want us to remove a photo or video, write to info@associazionednart.it."
      }
     },
     {
      "id": "privacy",
      "tipo": "consenso",
      "obbl": true,
      "et": {
       "it": "Ho letto l’informativa privacy del Moon Festival e acconsento al trattamento dei miei dati personali (Regolamento UE 2016/679).",
       "en": "I have read the Moon Festival privacy notice and I consent to the processing of my personal data (EU Regulation 2016/679)."
      },
      "link": "privacy.html"
     },
     {
      "id": "comunicazioni",
      "tipo": "consenso",
      "et": {
       "it": "Acconsento all’uso della mia email per comunicazioni sul Moon Festival e sulle call future.",
       "en": "I agree to my email being used for communications about Moon Festival and future calls."
      }
     },
     {
      "id": "newsletter",
      "tipo": "consenso",
      "et": {
       "it": "Iscrivimi alla newsletter di Dnart APS. Ogni tanto atterriamo nella tua mail con idee, festival e piccoli atti di cura.",
       "en": "Sign me up to the Dnart APS newsletter. Every now and then we land in your inbox with ideas, festivals and small acts of care."
      }
     },
     {
      "id": "tessera_dnart",
      "tipo": "consenso",
      "et": {
       "it": "Voglio associarmi a Dnart APS e fare la tessera: mandatemi le informazioni per email.",
       "en": "I would like to join Dnart APS and get a membership card: please email me the information."
      },
      "aiuto": {
       "it": "Dnart APS fa parte di ARCI. Associarsi è un bel modo per sostenerci.",
       "en": "Dnart APS is part of ARCI. Joining is a lovely way to support us."
      }
     }
    ]
   }
  ]
 }
};
