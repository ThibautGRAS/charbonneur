@echo off
REM ============================================================
REM  Charbonneurs - maj EFFECTIF (double-clic, ~1x/semaine)
REM  Vérifie l'effectif, photos, stats, vidéos skills.
REM ============================================================
setlocal
set "PROJ=C:\Users\gras\Desktop\Outils\lens"
set "CLAUDE=C:\Users\gras\AppData\Local\Microsoft\WinGet\Packages\Anthropic.ClaudeCode_Microsoft.Winget.Source_8wekyb3d8bbwe\claude.exe"

REM ==== MODELE : change la valeur ci-dessous selon ton envie ====
REM    claude-sonnet-5             equilibre qualite/vitesse  (recommande)
REM    claude-opus-4-8            meilleure qualite (un peu plus lent)
REM    claude-haiku-4-5-20251001  le plus rapide / plus leger
set "MODEL=claude-sonnet-5"

cd /d "%PROJ%"
echo ==================================================
echo   Charbonneurs - maj EFFECTIF  (%date% %time%)
echo   Modele : %MODEL%
echo ==================================================
echo.

REM Sortie affichee EN DIRECT dans cette fenetre (--verbose = on voit l'activite)
"%CLAUDE%" --model %MODEL% --max-turns 60 --verbose --dangerously-skip-permissions -p "/maj-equipe"

echo.
echo ---- envoi sur GitHub ----
git push origin main

echo.
echo   Termine ! (la fenetre reste ouverte)
pause
endlocal
