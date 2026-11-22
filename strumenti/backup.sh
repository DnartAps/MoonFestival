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
echo "$USCITA/$NOME ($(( $(stat -f%z "$USCITA/$NOME") / 1024 / 1024 )) MB, commit $COMMIT)"
