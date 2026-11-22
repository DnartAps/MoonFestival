#!/bin/bash
# Moon Festival · copia di backup del sito per il Drive (Cabina C57 · Sarah 37 · sito-funzioni 23)
# La versione vera resta GitHub: questo zip è solo una copia, da mettere nella cartella Drive
# «SITO WEB › github_backup» (id 1Yh1f6QjUL8suV0-G_RcIMbZfVDYnsTG9) a ogni pubblicazione (/chiudi).
# Prende la versione pubblicata (origin/main), non le modifiche locali: niente CLAUDE.md né .claude/.
# Uso, dalla cartella del sito:   bash strumenti/backup.sh [cartella di uscita]
set -e
cd "$(dirname "$0")/.."
git fetch -q origin main
USCITA=${1:-.}
COMMIT=$(git rev-parse --short origin/main)
NOME="MoonFestival-sito_$(date +%Y-%m-%d_%H%M)_${COMMIT}.zip"
git archive --format=zip --prefix=MoonFestival/ -o "$USCITA/$NOME" origin/main
# il connettore Drive carica al massimo 10 MB per file (codificato, cioè circa 7 MB veri): lo zip si divide in parti da 6 MB
# (MoonFestival-sito_….z01, .z02 … e l'ultima .zip). Per riaprirlo: scaricare tutte le parti nella
# stessa cartella e unirle con   zip -s 0 MoonFestival-sito_….zip --out intero.zip   poi aprire intero.zip.
PARTI="${NOME%.zip}"
mkdir -p "$USCITA/$PARTI"
zip -q -s 6m "$USCITA/$NOME" --out "$USCITA/$PARTI/$NOME"
rm "$USCITA/$NOME"
echo "commit $COMMIT · parti in $USCITA/$PARTI:"
ls -l "$USCITA/$PARTI" | awk 'NR>1 {printf "  %s (%d MB)\n", $9, $5/1048576}'
