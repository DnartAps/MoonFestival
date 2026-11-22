#!/usr/bin/env python3
"""Moon Festival · indice della ricerca del sito (Cabina C39).

Legge tutte le pagine *.html e js/testi.js (IT e EN) e scrive js/ricerca-indice.js:
una voce per ogni sezione con un id (<section id>, <details id>), con titolo e testo
nelle due lingue, più una voce per ogni scheda del Programma (js/programma-dati.js).
La pagina cerca.html usa questo indice (js/ricerca.js).

Uso, dalla cartella del sito, dopo ogni modifica ai testi:
    python3 strumenti/ricerca.py
"""
import html
import json
import os
import re
from html.parser import HTMLParser

CARTELLA = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ESCLUSE = {"cerca.html"}
# contenitori che diventano una voce della ricerca
CONTENITORI = {"section", "details"}
# parti della pagina che non si indicizzano (menu, sottomenu, percorso, moduli)
SALTA = {"header", "footer", "nav", "script", "style", "form"}
VUOTI = {"br", "img", "input", "meta", "link", "source", "hr", "use", "wbr"}


def leggi_testi():
    testi = {}
    with open(os.path.join(CARTELLA, "js", "testi.js"), encoding="utf-8") as f:
        for riga in f:
            m = re.match(r'\s*"([^"]+)"\s*:\s*(\{.*\})\s*,?\s*$', riga)
            if m:
                testi[m.group(1)] = json.loads(m.group(2))
    return testi


def pulisci(s):
    s = re.sub(r"<[^>]+>", " ", s or "")
    s = re.sub(r"\s+", " ", html.unescape(s)).strip()
    return re.sub(r"\s+([.,;:)])", r"\1", s)


class Pagina(HTMLParser):
    """Raccoglie, per ogni contenitore con id, le chiavi data-t (titolo e testo)."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.pila = []   # (tag, voce o None, salta?)
        self.voci = []
        self.h1 = None
        # testo fuori dalle sezioni con id: voce della pagina (si apre dall'alto)
        self.pagina = {"id": "", "periodi": "", "titolo": None, "chiavi": []}

    def voce_corrente(self):
        for _, voce, _ in reversed(self.pila):
            if voce is not None:
                return voce
        return self.pagina

    def saltando(self):
        return any(s for _, _, s in self.pila)

    def handle_starttag(self, tag, attrs):
        if tag in VUOTI:
            return
        a = dict(attrs)
        salta = tag in SALTA or "hidden" in a or a.get("aria-hidden") == "true"
        voce = None
        if not self.saltando() and not salta and tag in CONTENITORI and a.get("id"):
            voce = {"id": a["id"], "periodi": a.get("data-periodi", ""), "titolo": None, "chiavi": []}
            self.voci.append(voce)
        self.pila.append((tag, voce, salta))
        if self.saltando():
            return
        k = a.get("data-t")
        if tag == "h1" and k:
            self.h1 = k
        v = self.voce_corrente()
        if k and not (v is self.pagina and tag == "h1"):
            if v is not self.pagina and v["titolo"] is None and (re.match(r"h[1-4]$", tag) or tag == "summary"):
                v["titolo"] = k
            elif k not in v["chiavi"]:
                v["chiavi"].append(k)

    def handle_endtag(self, tag):
        if tag in VUOTI:
            return
        while self.pila:
            t, _, _ = self.pila.pop()
            if t == tag:
                break


def indice_pagine(testi):
    voci = []
    for nome in sorted(os.listdir(CARTELLA)):
        if not nome.endswith(".html") or nome in ESCLUSE:
            continue
        with open(os.path.join(CARTELLA, nome), encoding="utf-8") as f:
            sorgente = f.read()
        m = re.search(r"<main\b.*?</main>", sorgente, re.S)
        if not m:
            continue
        p = Pagina()
        p.feed(m.group(0))
        pag = testi.get(p.h1, {}) if p.h1 else {}
        for v in [p.pagina] + p.voci:
            tit = testi.get(v["titolo"], {}) if v["titolo"] else {}
            testo = {l: " ".join(pulisci(testi[k][l]) for k in v["chiavi"] if k in testi) for l in ("it", "en")}
            if not (tit or testo["it"]):
                continue
            voce = {
                "p": nome, "a": v["id"],
                "pt": {l: pulisci(pag.get(l, "")).rstrip(".") for l in ("it", "en")},
                "t": {l: pulisci(tit.get(l, "")) for l in ("it", "en")},
                "x": testo,
            }
            if v["periodi"]:
                voce["per"] = v["periodi"]
            voci.append(voce)
    return voci


def indice_programma():
    percorso = os.path.join(CARTELLA, "js", "programma-dati.js")
    if not os.path.exists(percorso):
        return []
    s = open(percorso, encoding="utf-8").read()
    s = s[s.index("=") + 1:].strip().rstrip(";")
    P = json.loads(s)
    anno = P.get("anno", "")
    voci = []
    for a in P.get("attivita", []):
        def testo(l):
            parti = [a.get("artista", ""), (a.get("genere") or {}).get(l, "")] + list((a.get("desc") or {}).get(l, []))
            return pulisci(" ".join(x for x in parti if x))
        voci.append({
            "p": "programma.html", "a": a["id"],
            "pt": {"it": f"Programma {anno}", "en": f"Programme {anno}"},
            "t": {"it": a.get("titolo", ""), "en": a.get("titolo", "")},
            "x": {"it": testo("it"), "en": testo("en")},
        })
    return voci


def main():
    testi = leggi_testi()
    voci = indice_pagine(testi) + indice_programma()
    corpo = json.dumps(voci, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(CARTELLA, "js", "ricerca-indice.js"), "w", encoding="utf-8") as f:
        f.write("/* Moon Festival · indice della ricerca. Generato da strumenti/ricerca.py: non modificare a mano. */\n")
        f.write("window.MOON_RICERCA = " + corpo + ";\n")
    print(f"{len(voci)} voci nell'indice · js/ricerca-indice.js ({len(corpo) // 1024} KB)")


if __name__ == "__main__":
    main()
