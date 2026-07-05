@echo off
REM ============================================================
REM  Lanceur du site Charbonneurs
REM  Double-cliquez ce fichier pour ouvrir le site correctement
REM  (via http://localhost, necessaire pour les videos YouTube
REM   et le vrai filtre passe-bas du son).
REM ============================================================
cd /d "%~dp0"
set PY=C:\Users\gras\AppData\Local\Programs\Python\Python311\python.exe
if not exist "%PY%" set PY=python
start "Charbonneurs - serveur (ne pas fermer cette fenetre)" "%PY%" -m http.server 8000
timeout /t 1 /nobreak >nul
start "" http://localhost:8000
