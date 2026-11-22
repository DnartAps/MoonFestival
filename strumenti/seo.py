#!/usr/bin/env python3
"""Moon Festival · SEO e metadati (ambito: Simone).

Scrive nella <head> di ogni pagina il blocco tra
  <!-- SEO:inizio ... -->  e  <!-- SEO:fine -->
(titolo, descrizione, canonical, hreflang, Open Graph, dati strutturati)
e rigenera sitemap.xml e robots.txt.

Titoli e descrizioni NON si scrivono qui: stanno in js/testi.js
(chiavi titolo.<pagina> e descr.<pagina>, IT e EN). In inglese li cambia
js/sito.js quando si sceglie EN.

Uso, dalla cartella del sito:
    python3 strumenti/seo.py

Quando il sito va online sul dominio: INDICIZZA = True, poi rilanciare.
"""
import datetime
import glob
import html
import json
import os
import re

# ---------------- Impostazioni ----------------
BASE = "https://moonfestival.it/"   # indirizzo definitivo, con / finale
INDICIZZA = False                    # False = noindex (sito non ancora finito)
IMMAGINE = "assets/img/condivisione/Ilum-collettivo_MoonFestival_5ed_borgo-notte_condivisione.jpg"
IMMAGINE_W, IMMAGINE_H = 1200, 630
MAI_INDICIZZARE = {"cerca.html"}     # pagine di servizio: sempre noindex, fuori dalla sitemap

# Edizione in corso (dati confermati: documento "contenuti", 2.)
FESTIVAL = {
    "nome": "Moon Festival 2027",
    "inizio": "2027-09-03",
    "fine": "2027-09-05",
    "luogo": "San Raffaele Cimena Alto",
    "comune": "San Raffaele Cimena",
    "cap": "10090",
    "provincia": "TO",
}
SOCIAL = [
    "https://www.instagram.com/moonfestival_/",
    "https://www.facebook.com/MoonFestival2023",
]
EMAIL = "info@associazionednart.it"
# ----------------------------------------------

CARTELLA = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INIZIO = "<!-- SEO:inizio · generato da strumenti/seo.py: non modificare a mano -->"
FINE = "<!-- SEO:fine -->"


def leggi_testi():
    testi = {}
    with open(os.path.join(CARTELLA, "js", "testi.js"), encoding="utf-8") as f:
        for riga in f:
            m = re.match(r'\s*"([^"]+)"\s*:\s*(\{.*\})\s*,?\s*$', riga)
            if m:
                testi[m.group(1)] = json.loads(m.group(2))
    return testi


def url_pagina(nome_file):
    return BASE if nome_file == "index.html" else BASE + nome_file


def e(testo):
    return html.escape(testo, quote=True)


def blocco(nome_file, chiave, titolo, descr, alt):
    url = url_pagina(nome_file)
    img = BASE + IMMAGINE
    righe = [INIZIO, f"<title data-t-titolo=\"titolo.{chiave}\">{e(titolo)}</title>",
             f"<meta name=\"description\" content=\"{e(descr)}\">"]
    if not INDICIZZA or nome_file in MAI_INDICIZZARE:
        righe.append('<meta name="robots" content="noindex, follow">')
    righe += [
        f'<link rel="canonical" href="{url}">',
        f'<link rel="alternate" hreflang="it" href="{url}">',
        f'<link rel="alternate" hreflang="en" href="{url}?lang=en">',
        f'<link rel="alternate" hreflang="x-default" href="{url}">',
        '<meta property="og:type" content="website">',
        '<meta property="og:site_name" content="Moon Festival">',
        f'<meta property="og:title" content="{e(titolo)}">',
        f'<meta property="og:description" content="{e(descr)}">',
        f'<meta property="og:url" content="{url}">',
        '<meta property="og:locale" content="it_IT">',
        '<meta property="og:locale:alternate" content="en_GB">',
        f'<meta property="og:image" content="{img}">',
        f'<meta property="og:image:width" content="{IMMAGINE_W}">',
        f'<meta property="og:image:height" content="{IMMAGINE_H}">',
        f'<meta property="og:image:alt" content="{e(alt)}">',
        '<meta name="twitter:card" content="summary_large_image">',
    ]
    if nome_file == "index.html":
        righe.append('<script type="application/ld+json">\n'
                     + json.dumps(dati_strutturati(descr), ensure_ascii=False, indent=1)
                     + '\n</script>')
    righe.append(FINE)
    return "\n".join(righe)


def dati_strutturati(descr):
    f = FESTIVAL
    organizzazione = {
        "@type": "Organization", "@id": BASE + "#dnart", "name": "Dnart APS",
        "email": EMAIL, "taxID": "97709700013",
    }
    return {
        "@context": "https://schema.org",
        "@graph": [
            organizzazione,
            {"@type": "WebSite", "@id": BASE + "#sito", "url": BASE, "name": "Moon Festival",
             "inLanguage": ["it", "en"], "publisher": {"@id": BASE + "#dnart"}},
            {"@type": "Festival", "@id": BASE + "#festival", "name": f["nome"],
             "description": descr, "url": BASE, "image": [BASE + IMMAGINE],
             "startDate": f["inizio"], "endDate": f["fine"],
             "eventStatus": "https://schema.org/EventScheduled",
             "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
             "isAccessibleForFree": True, "inLanguage": ["it", "en"],
             "location": {"@type": "Place", "name": f["luogo"],
                          "address": {"@type": "PostalAddress", "addressLocality": f["comune"],
                                      "postalCode": f["cap"], "addressRegion": f["provincia"],
                                      "addressCountry": "IT"}},
             "offers": {"@type": "Offer", "price": "0", "priceCurrency": "EUR", "url": BASE},
             "organizer": {"@id": BASE + "#dnart"},
             "sameAs": SOCIAL},
        ],
    }


def aggiorna_pagina(percorso, testi):
    nome = os.path.basename(percorso)
    with open(percorso, encoding="utf-8") as f:
        s = f.read()
    m = re.search(r'<title data-t-titolo="titolo\.([^"]+)">', s)
    if not m:
        return None, f"{nome}: manca <title data-t-titolo>"
    chiave = m.group(1)
    titolo = testi.get(f"titolo.{chiave}", {}).get("it")
    descr = testi.get(f"descr.{chiave}", {}).get("it")
    if not titolo or not descr:
        return None, f"{nome}: mancano titolo.{chiave} o descr.{chiave} in js/testi.js"
    nuovo = blocco(nome, chiave, titolo, descr, testi["seo.immagine.alt"]["it"])
    if INIZIO in s:
        s = re.sub(re.escape(INIZIO) + r".*?" + re.escape(FINE), lambda _: nuovo, s, flags=re.S)
    else:
        s = re.sub(r'<title data-t-titolo="[^"]+">.*?</title>\s*', "", s, count=1, flags=re.S)
        s = re.sub(r'<meta name="description"[^>]*>\s*', "", s, count=1)
        s = s.replace('<meta name="viewport" content="width=device-width, initial-scale=1">',
                      '<meta name="viewport" content="width=device-width, initial-scale=1">\n' + nuovo, 1)
    with open(percorso, "w", encoding="utf-8") as f:
        f.write(s)
    return nome, None


def scrivi_sitemap(pagine):
    oggi = datetime.date.today().isoformat()
    righe = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
             'xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for nome in pagine:
        u = url_pagina(nome)
        for loc in (u, u + "?lang=en"):
            righe += ["  <url>", f"    <loc>{e(loc)}</loc>", f"    <lastmod>{oggi}</lastmod>",
                      f'    <xhtml:link rel="alternate" hreflang="it" href="{e(u)}"/>',
                      f'    <xhtml:link rel="alternate" hreflang="en" href="{e(u + "?lang=en")}"/>',
                      f'    <xhtml:link rel="alternate" hreflang="x-default" href="{e(u)}"/>',
                      "  </url>"]
    righe.append("</urlset>")
    with open(os.path.join(CARTELLA, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write("\n".join(righe) + "\n")
    with open(os.path.join(CARTELLA, "robots.txt"), "w", encoding="utf-8") as f:
        f.write("User-agent: *\nAllow: /\nDisallow: /strumenti/\n\nSitemap: " + BASE + "sitemap.xml\n")


def main():
    testi = leggi_testi()
    fatte, errori = [], []
    for percorso in sorted(glob.glob(os.path.join(CARTELLA, "*.html"))):
        nome, errore = aggiorna_pagina(percorso, testi)
        (errori.append(errore) if errore else fatte.append(nome))
    pagine = ["index.html"] + [p for p in fatte if p != "index.html" and p not in MAI_INDICIZZARE]
    scrivi_sitemap(pagine)
    print(f"{len(fatte)} pagine aggiornate · indicizza: {INDICIZZA} · base: {BASE}")
    for x in errori:
        print("ATTENZIONE:", x)


if __name__ == "__main__":
    main()
