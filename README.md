# Charbonneurs — média immersif RC Lens

Site de démonstration : une expérience immersive « de la mine à Bollaert » consacrée
à l'actualité du Racing Club de Lens. Intro cinématique, descente dans un puits de
mine au scroll, ambiance sonore réactive, effectif interactif, vidéos et fil d'actu.

## ▶️ Lancer le site

Le site doit être servi en **http://** (pas en double-clic `file://`), sinon les
vidéos YouTube et le filtre sonore ne fonctionnent pas.

- **Le plus simple** : double-cliquer **`Lancer-Charbonneurs.bat`** → ouvre
  automatiquement http://localhost:8000
- **Manuel** : dans le dossier, lancer `python -m http.server 8000` puis ouvrir
  http://localhost:8000

## 🗂️ Structure

```
index.html            page unique (coquille + intro + sections)
style.css             design system sombre + décor de mine
app.js                moteur : rendu, intro, audio, descente, effectif, vidéos
data/
  articles.js         fil d'actualité (édité par la routine de mise à jour)
  videos.js           vidéos (Lens Foot TV) — embeddable: true = lecture intégrée
  players.js          effectif (données factuelles)
images/               photos (dont images/fond = décor du puits) + logo
audio/                corons, ascenseur (descend/monte), pioche
video/                vidéo d'ambiance
.claude/commands/maj-lensois.md   routine de mise à jour du contenu
```

## ✨ Fonctionnalités

- **Intro** cinématique (vidéo + braises + chevalement) et bouton « Entrer ».
- **Descente dans la mine** au scroll : décor qui défile, grille latérale,
  obscurité + lampe torche, jauge de profondeur. Bouton « Descendre » = descente
  automatique par paliers.
- **Ambiance sonore réactive** : chant des corons en surface qui s'atténue en
  profondeur, ascenseur (descente/montée) pendant le scroll, pioche au fond.
- **Effectif** : cartes joueurs (photos en duotone Sang & Or) + fiches.
- **Lens Foot TV** : vidéos lisibles intégrées (mises en avant) ou en lien YouTube.
- **Actu** : fil d'articles, mis à jour via la commande `/maj-lensois`.

## ⚖️ Crédits & licences

- Photos du stade / supporters : **Wikimedia Commons** (CC BY-SA).
- Vidéo d'ambiance : **Pexels** (libre).
- Vidéos RC Lens : **intégrées / liées via YouTube** (le contenu reste chez l'ayant droit).
- Audios (corons, ascenseur, pioche) et image de fond : fournis par l'auteur du projet.
- **Démonstration non officielle, non affiliée au RC Lens.** Le nom et le logo du club
  sont des marques déposées : usage à vérifier avant toute publication.
