@echo off
REM ============================================================
REM  Charbonneurs - maj articles (a lancer par double-clic, ~1x/jour)
REM  Utilise Claude Code en mode economique (modele Sonnet).
REM ============================================================
setlocal
set "PROJ=C:\Users\gras\Desktop\Outils\lens"
set "CLAUDE=C:\Users\gras\AppData\Local\Microsoft\WinGet\Packages\Anthropic.ClaudeCode_Microsoft.Winget.Source_8wekyb3d8bbwe\claude.exe"
set "LOG=%PROJ%\maj.log"
cd /d "%PROJ%"

echo ================================================== >> "%LOG%"
echo [%date% %time%] Demarrage maj-articles >> "%LOG%"
echo.
echo   Mise a jour des articles du RC Lens en cours...
echo   (le detail s'ecrit dans maj.log)
echo.

REM Modele economique + plafond d'iterations + mode autonome (sans invite)
"%CLAUDE%" --model claude-sonnet-5 --max-turns 40 --dangerously-skip-permissions -p "/maj-articles" >> "%LOG%" 2>&1

REM Envoi sur GitHub (Netlify redeploie si le site est relie au depot)
git push origin main >> "%LOG%" 2>&1

echo [%date% %time%] Termine >> "%LOG%"
echo.
echo   Termine ! Verifie le rendu, details dans maj.log
echo.
pause
endlocal
