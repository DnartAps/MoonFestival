#!/usr/bin/env python3
"""Moon Festival · Gallery per edizione (Cabina C70 · D21, decisa da Simone con Sarah il 22/11/2026).

Prende una cartella di foto (scaricata da Drive), le alleggerisce e prepara la pagina dell'anno:
  - assets/img/gallery/<anno>/<sezione>/NNNN-m.jpg (miniatura, 600 px sul lato lungo)
    e NNNN-g.jpg (grande, 1200 px sul lato lungo), JPEG qualità 75, senza dati EXIF (niente GPS);
  - js/gallery-<anno>.js con l'elenco delle foto (window.MOON_GALLERY), letto da js/gallery.js;
  - gallery-<anno>.html (stessa testata e piè di pagina di edizioni.html);
  - in js/testi.js le chiavi titolo.gallery-<anno>, descr.gallery-<anno> e gal.<anno>.*;
  - la fila degli anni in tutte le pagine gallery-*.html.
Salta PNG, screenshot, foto piccole (meno di 1000 px) e doppioni. Mai i file originali nel sito.

Uso, dalla cartella del sito (serve Pillow: python3 -m pip install pillow):
    python3 strumenti/gallery.py 2026 festival ~/Downloads/gallery/2026-festival --credito "Ilum collettivo"
    python3 strumenti/gallery.py 2026 moon-lab ~/Downloads/gallery/2026-moon-lab
    python3 strumenti/gallery.py 2024 festival ~/Downloads/gallery/2024
Poi: python3 strumenti/seo.py && python3 strumenti/ricerca.py
Senza --credito la foto non ha credito (regola "contenuti": senza nome nessun credito).
"""
import argparse
import hashlib
import json
import os
import re
import sys

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Serve Pillow: python3 -m pip install pillow")

CARTELLA = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ANNI = [2026, 2025, 2024, 2023, 2022]          # fila degli anni (senza foto: tratteggiati, non cliccabili)
EDIZIONE = {2026: 5, 2025: 4, 2024: 3, 2023: 2, 2022: 1}
EN_ORD = {1: "1st", 2: "2nd", 3: "3rd"}
# titolo di ogni edizione dalla pagina Edizioni
TITOLO = {2026: "ATTIDICURA", 2025: "Moon Festival 2025", 2024: "Moon Festival 2024"}
SEZIONI = {"festival": ("Moon Festival", "Moon Festival"), "moon-lab": ("Moon Lab", "Moon Lab")}
MINIATURA, GRANDE, QUALITA = 600, 1200, 75
ESTENSIONI = (".jpg", ".jpeg", ".heic", ".heif", ".tif", ".tiff", ".webp")
SCARTA = re.compile(r"screenshot|schermata|screen shot|whatsapp image", re.I)


def ordinale(n, lingua):
    return f"{n}ª" if lingua == "it" else EN_ORD.get(n, f"{n}th")


def foto_della_cartella(origine):
    visti, out, saltate = set(), [], []
    for radice, _, files in os.walk(os.path.expanduser(origine)):
        for f in sorted(files):
            p = os.path.join(radice, f)
            if f.startswith(".") or not f.lower().endswith(ESTENSIONI) or SCARTA.search(f):
                saltate.append((f, "non è una foto o è uno screenshot"))
                continue
            h = hashlib.md5(open(p, "rb").read()).hexdigest()
            if h in visti:
                saltate.append((f, "doppione"))
                continue
            visti.add(h)
            out.append(p)
    return out, saltate


def riduci(img, lato, dest):
    w, h = img.size
    k = min(1, lato / max(w, h))
    r = img.resize((round(w * k), round(h * k)), Image.LANCZOS) if k < 1 else img
    r.save(dest, "JPEG", quality=QUALITA, optimize=True, progressive=True)   # senza exif
    return r.size


def leggi_dati(anno):
    p = os.path.join(CARTELLA, "js", f"gallery-{anno}.js")
    if not os.path.exists(p):
        return {"anno": anno, "cartella": f"assets/img/gallery/{anno}/", "sezioni": []}
    s = open(p, encoding="utf-8").read()
    return json.loads(s[s.index("=") + 1:].strip().rstrip(";"))


def scrivi_dati(anno, dati):
    p = os.path.join(CARTELLA, "js", f"gallery-{anno}.js")
    testa = ("/* Moon Festival · Gallery " + str(anno) + " (C70) · generato da strumenti/gallery.py: non modificare a mano.\n"
             "   foto: [file, larghezza, altezza] della foto grande; la miniatura ha le stesse proporzioni. */\n")
    open(p, "w", encoding="utf-8").write(testa + "window.MOON_GALLERY = " + json.dumps(dati, ensure_ascii=False, separators=(",", ":")) + ";\n")


def sezione_dati(anno, sid, credito, foto):
    nit, nen = SEZIONI.get(sid, (sid, sid))
    n = EDIZIONE.get(anno)
    if sid == "festival":
        cred = ({"it": f"© {credito} · Moon Festival, {ordinale(n, 'it')} edizione",
                 "en": f"© {credito} · Moon Festival, {ordinale(n, 'en')} edition"} if credito else None)
    else:
        cred = {"it": f"© {credito} · {nit} {anno}", "en": f"© {credito} · {nen} {anno}"} if credito else None
    alt = ({"it": f"{nit} {anno}, foto di {credito}", "en": f"{nen} {anno}, photo by {credito}"} if credito
           else {"it": f"{nit} {anno}", "en": f"{nen} {anno}"})
    return {"id": sid, "titolo": {"it": f"{nit} {anno}", "en": f"{nen} {anno}"}, "credito": cred,
            "fotografo": credito or "", "alt": alt, "foto": foto}


# ---------- testi.js ----------
GENERALI = {
    "gal.apri": ("Foto {i} di {n}", "Photo {i} of {n}"),
    "gal.altre": ("Mostra altre foto", "Show more photos"),
    "gal.chiudi": ("Chiudi la foto", "Close the photo"),
    "gal.prec": ("Foto precedente", "Previous photo"),
    "gal.succ": ("Foto successiva", "Next photo"),
    "gal.scorri": ("Scorri con il dito per la prossima →", "Swipe for the next one →"),
    "gal.anni": ("Gallery degli altri anni", "Galleries of other years"),
    "gal.vuoto": ("foto non ancora disponibili", "photos not available yet"),
    "gal.js": ("Per vedere le foto serve JavaScript.", "JavaScript is needed to see the photos."),
}


def aggiorna_testi(chiavi):
    p = os.path.join(CARTELLA, "js", "testi.js")
    righe = open(p, encoding="utf-8").read().split("\n")
    nuove = {k: ' ' + json.dumps(k, ensure_ascii=False) + ': ' + json.dumps({"it": it, "en": en}, ensure_ascii=False) + ','
             for k, (it, en) in chiavi.items()}
    fatte = set()
    for i, r in enumerate(righe):
        m = re.match(r'\s*"([^"]+)":', r)
        if m and m.group(1) in nuove:
            righe[i] = nuove[m.group(1)]
            fatte.add(m.group(1))
    resto = [nuove[k] for k in chiavi if k not in fatte]
    if resto:
        i = max(i for i, r in enumerate(righe) if re.match(r'\s*"descr\.', r))   # dopo l'ultima descr.*
        righe[i + 1:i + 1] = resto
    open(p, "w", encoding="utf-8").write("\n".join(righe))


# ---------- pagina ----------
def fila_anni(anno_corrente):
    voci = []
    for a in ANNI:
        if os.path.exists(os.path.join(CARTELLA, "js", f"gallery-{a}.js")):
            cur = ' aria-current="page"' if a == anno_corrente else ""
            voci.append(f'<li><a href="gallery-{a}.html" data-interno="gallery-{a}.html"{cur}>{a}</a></li>')
        else:
            voci.append(f'<li><span aria-disabled="true">{a}<span class="sr">: <span data-t="gal.vuoto">foto non ancora disponibili</span></span></span></li>')
    return ('<nav class="gal-anni" aria-label="Gallery degli altri anni" data-t-aria="gal.anni"><ul>'
            + "".join(voci) + "</ul></nav>")


def pagina(anno, dati):
    base = open(os.path.join(CARTELLA, "edizioni.html"), encoding="utf-8").read()
    s = base.replace("titolo.edizioni", f"titolo.gallery-{anno}")
    s = s.replace('href="edizioni.html" data-interno="edizioni.html" aria-current="page"',
                  'href="edizioni.html" data-interno="edizioni.html" aria-current="location"')
    tot = sum(len(z["foto"]) for z in dati["sezioni"])
    piu = len(dati["sezioni"]) > 1
    sez_html = []
    for z in dati["sezioni"]:
        k = f"gal.{anno}.{z['id']}"
        cred = f' · © {z["fotografo"]}' if z["fotografo"] else ""
        hid = f'gal-{z["id"]}-h'
        testa = (f'<div class="contenitore gal-sezione__testa"><h2 class="h2" id="{hid}" data-t="{k}.h2">{z["titolo"]["it"]}</h2>'
                 f'<p data-t="{k}.n">{len(z["foto"])} foto{cred}</p></div>') if piu else \
                f'<h2 class="sr" id="{hid}" data-t="{k}.h2">{z["titolo"]["it"]}</h2>'
        sez_html.append(
            f'<section class="gal-sezione sfondo-viola" id="gal-{z["id"]}" aria-labelledby="{hid}">' + testa
            + f'<div class="gal-griglia" data-gallery="{z["id"]}"></div>'
            + '<noscript><p class="contenitore" data-t="gal.js">Per vedere le foto serve JavaScript.</p></noscript>'
            + f'<div class="gal-altre"><button type="button" class="bottone" data-gallery-altre="{z["id"]}"><span data-t="gal.altre">Mostra altre foto</span></button></div>'
            + '</section>')
    unico = dati["sezioni"][0] if len(dati["sezioni"]) == 1 else None
    lead = f"{tot} foto" + (f' · © {unico["fotografo"]}' if unico and unico["fotografo"] else "")
    tit = TITOLO.get(anno, f"Moon Festival {anno}")
    main = (
        '<main id="contenuto">\n'
        '<section class="sfondo-viola"><div class="contenitore hero-pagina__inner">'
        '<nav class="percorso" aria-label="Percorso" data-t-aria="gen.percorso"><p>'
        '<a href="index.html" data-interno="index.html" data-t="gen.home.breve">Home</a> <span aria-hidden="true">/</span> '
        '<a href="edizioni.html" data-interno="edizioni.html" data-t="area.edizioni">Edizioni</a> <span aria-hidden="true">/</span> '
        f'<span aria-current="page">Gallery {anno}</span></p></nav>'
        f'<p class="occhiello" data-t="gal.{anno}.o">Gallery · {ordinale(EDIZIONE[anno], "it")} edizione</p>'
        f'<h1 class="h1" data-t="gal.{anno}.h1">{anno} · {tit}</h1>'
        f'<p class="lead" data-t="gal.{anno}.lead">{lead}</p>'
        + fila_anni(anno) +
        '</div></section>\n' + "\n".join(sez_html) + '\n</main>')
    s = re.sub(r"<main id=\"contenuto\">.*?</main>", lambda _: main, s, count=1, flags=re.S)
    s = s.replace("</body>", f'<script src="js/gallery-{anno}.js"></script>\n<script src="js/gallery.js"></script>\n</body>', 1)
    open(os.path.join(CARTELLA, f"gallery-{anno}.html"), "w", encoding="utf-8").write(s)
    # testi della pagina
    T = dict(GENERALI)
    T[f"titolo.gallery-{anno}"] = (f"Gallery {anno} · Moon Festival", f"Gallery {anno} · Moon Festival")
    T[f"descr.gallery-{anno}"] = (f"Le foto del Moon Festival {anno}: {tot} immagini dal borgo di San Raffaele Cimena.",
                                  f"Photos from Moon Festival {anno}: {tot} images from the village of San Raffaele Cimena.")
    T[f"gal.{anno}.o"] = (f"Gallery · {ordinale(EDIZIONE[anno], 'it')} edizione", f"Gallery · {ordinale(EDIZIONE[anno], 'en')} edition")
    T[f"gal.{anno}.h1"] = (f"{anno} · {tit}", f"{anno} · {tit}")
    T[f"gal.{anno}.lead"] = (lead, lead.replace(" foto", " photos", 1))
    for z in dati["sezioni"]:
        k = f"gal.{anno}.{z['id']}"
        T[f"{k}.h2"] = (z["titolo"]["it"], z["titolo"]["en"])
        cred = f' · © {z["fotografo"]}' if z["fotografo"] else ""
        T[f"{k}.n"] = (f"{len(z['foto'])} foto{cred}", f"{len(z['foto'])} photos{cred}")
    aggiorna_testi(T)


def main():
    a = argparse.ArgumentParser(description="Gallery per edizione (C70)")
    a.add_argument("anno", type=int)
    a.add_argument("sezione", help="festival oppure moon-lab")
    a.add_argument("cartella", help="cartella con le foto scaricate da Drive")
    a.add_argument("--credito", default="", help="nome di chi ha fatto le foto (senza: nessun credito)")
    o = a.parse_args()
    files, saltate = foto_della_cartella(o.cartella)
    if not files:
        sys.exit("Nessuna foto trovata in " + o.cartella)
    dest = os.path.join(CARTELLA, "assets", "img", "gallery", str(o.anno), o.sezione)
    os.makedirs(dest, exist_ok=True)
    for f in os.listdir(dest):
        if f.endswith(".jpg"):
            os.remove(os.path.join(dest, f))
    foto, n = [], 0
    for p in files:
        try:
            img = ImageOps.exif_transpose(Image.open(p)).convert("RGB")
        except Exception as e:
            saltate.append((os.path.basename(p), f"non si apre ({e.__class__.__name__})"))
            continue
        if max(img.size) < 1000:
            saltate.append((os.path.basename(p), "troppo piccola"))
            continue
        n += 1
        nome = f"{n:04d}"
        riduci(img, MINIATURA, os.path.join(dest, nome + "-m.jpg"))
        w, h = riduci(img, GRANDE, os.path.join(dest, nome + "-g.jpg"))
        foto.append([nome, w, h])
        if n % 50 == 0:
            print(f"  {n} foto…", flush=True)
    dati = leggi_dati(o.anno)
    nuova = sezione_dati(o.anno, o.sezione, o.credito.strip(), foto)
    ordine = ["festival", "moon-lab"]
    dati["sezioni"] = sorted([z for z in dati["sezioni"] if z["id"] != o.sezione] + [nuova],
                             key=lambda z: ordine.index(z["id"]) if z["id"] in ordine else 9)
    scrivi_dati(o.anno, dati)
    for anno in ANNI:   # pagina di quest'anno e fila degli anni nelle altre
        if anno == o.anno or os.path.exists(os.path.join(CARTELLA, "js", f"gallery-{anno}.js")):
            pagina(anno, leggi_dati(anno))
    peso = sum(os.path.getsize(os.path.join(dest, f)) for f in os.listdir(dest)) / 1048576
    print(f"{o.anno} · {o.sezione}: {len(foto)} foto ({peso:.0f} MB) in {os.path.relpath(dest, CARTELLA)}; saltate {len(saltate)}")
    for f, perche in saltate[:30]:
        print(f"  saltata: {f} ({perche})")
    print("Ora: python3 strumenti/seo.py && python3 strumenti/ricerca.py")


if __name__ == "__main__":
    main()
