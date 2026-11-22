#!/usr/bin/env python3
"""Moon Festival · regole delle domande per lo script moduli-moon.gs (Cabina C6 e C12).

Lo script Apps Script ripete i controlli del sito e accetta solo le domande previste.
Le regole (etichetta, tipo, obbligatoria, lunghezza, file ammessi) nascono da
js/moduli-dati.js (generato dal foglio "Domande dei moduli del sito") e dalla finestra
"Scrivici" (js/contatti.js).

Uso, dalla cartella del sito:
    python3 strumenti/regole-moduli.py                    # stampa il blocco REGOLE
    python3 strumenti/regole-moduli.py moduli-moon.gs     # lo sostituisce nel file dello script
Dopo ogni modifica al foglio Domande: rigenerare, incollare lo script in Apps Script, nuova versione.
"""
import datetime
import json
import os
import re
import sys

CARTELLA = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INIZIO = "// REGOLE:inizio"
FINE = "// REGOLE:fine"

# Finestra "Scrivici" (js/contatti.js): le etichette in italiano, come nel file Candidature
CONTATTI = [
    ("nome", "Nome", "testo", True), ("nome-elezione", "Nome di elezione", "testo", False),
    ("cognome", "Cognome", "testo", False), ("email", "Email", "email", True),
    ("cellulare", "Cellulare", "tel", False), ("messaggio", "Messaggio", "area", False),
    ("privacy", "Consenso · privacy", "consenso", True), ("newsletter", "Consenso · newsletter", "consenso", False),
]
# Domande previste ma non ancora nel foglio Domande (C16, regola "contenuti" del 19/11/2026)
EXTRA = {
    m: [("pausa_cura", "Anche la Luna ha le sue fasi (pausa di cura)", "area", False, 2000)]
    for m in ("artisti", "installazioni", "laboratori")
}


def leggi_moduli():
    s = open(os.path.join(CARTELLA, "js", "moduli-dati.js"), encoding="utf-8").read()
    i = s.index("window.MOON_MODULI")
    return json.loads(s[s.index("=", i) + 1:].strip().rstrip(";"))


def regole():
    R = {}
    for m, F in leggi_moduli().items():
        c, f = {}, {}
        for b in F["blocchi"]:
            for q in b["campi"]:
                if q["tipo"] == "info":
                    continue
                sempre = bool(q.get("obbl")) and not q.get("se") and not b.get("se")
                if q["tipo"] == "file":
                    f[q["id"]] = [q["et"]["it"], int(q.get("multipli") or 1), q.get("accetta", ""), 1 if sempre else 0]
                    continue
                et = "Consenso · " + q["id"] if q["tipo"] == "consenso" else q["et"]["it"]
                c[q["id"]] = [et, q["tipo"], 1 if sempre else 0, int(q.get("max") or 0)]
        quando = "all’inizio del Moon Lab" if m == "moon-lab" else "all’inizio del festival"
        c["eta_calcolata"] = ["Età " + quando + " (calcolata)", "numero", 0, 0]
        c["maggiorenne"] = ["Maggiorenne " + quando + " (calcolato)", "testo", 0, 0]
        for (i, et, t, o, mx) in EXTRA.get(m, []):
            c.setdefault(i, [et, t, 1 if o else 0, mx])
        R[m] = {"c": c, "f": f}
    R["contatti"] = {"c": {i: [et, t, 1 if o else 0, 0] for (i, et, t, o) in CONTATTI}, "f": {}}
    return R


def blocco():
    oggi = datetime.date.today().strftime("%d/%m/%Y")
    corpo = json.dumps(regole(), ensure_ascii=False, separators=(",", ":"))
    return (f"{INIZIO} · generato da strumenti/regole-moduli.py il {oggi} da js/moduli-dati.js: non modificare a mano\n"
            "// Per ogni modulo: c = domande {id: [etichetta, tipo, obbligatoria sempre (1/0), lunghezza massima]},\n"
            "//                  f = file {id: [etichetta, quanti file al massimo, tipi ammessi, obbligatorio (1/0)]}\n"
            f"var REGOLE = {corpo};\n{FINE}")


def main():
    b = blocco()
    if len(sys.argv) < 2:
        print(b)
        return
    p = sys.argv[1]
    s = open(p, encoding="utf-8").read()
    if INIZIO not in s or FINE not in s:
        sys.exit(f"{p}: mancano i segni {INIZIO} e {FINE}")
    s = re.sub(re.escape(INIZIO) + r".*?" + re.escape(FINE), lambda _: b, s, count=1, flags=re.S)
    open(p, "w", encoding="utf-8").write(s)
    print(f"REGOLE aggiornate in {p} ({len(b) // 1024} KB)")


if __name__ == "__main__":
    main()
