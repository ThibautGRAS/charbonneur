---
description: Met à jour les vidéos (Lens Foot TV) du site Charbonneurs
---

Tu mets à jour **uniquement** `data/videos.js`.

⚙️ **Frugalité tokens** (quitte à être un peu plus lent) : recherches web limitées (1-2), vérifs ciblées (oEmbed/`playableInEmbed`), petits remplacements, **aucun sous-agent**, résumé court.

1. **Lis** `data/videos.js` (les `id` déjà présents).
2. **Recherche** (WebSearch) des vidéos YouTube RC Lens récentes : résumés, buts,
   interviews, coulisses, conférences de presse, documentaires, **et compilations
   « skills / talent » de joueurs** (titres avec « talent », « skills », « best of »…).
3. **Vérifie chaque candidate** :
   - **Existence** : oEmbed `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json`
     doit répondre **200** (sinon 404/privée → ne pas référencer).
   - **Intégrabilité (fiable)** : récupère la page `https://www.youtube.com/watch?v=<ID>` et lis
     **`"playableInEmbed":true/false`** → détermine `embeddable`. (Plus sûr que l'oEmbed, qui
     répond 200 même pour une vidéo non intégrable.)
   - **Bloquée en France** → **NE PAS la référencer du tout**.
4. **`embeddable`** :
   - `true` = intégration autorisée (contenus **club, sans images de match** :
     interviews, coulisses, presse) → **lue dans le site et mise en avant**.
   - `false` = **LFP / beIN / Ligue 1+ / résumés & buts de match** (intégration bloquée)
     → carte en **redirection YouTube**.
5. **Priorise et mets en avant les `embeddable:true`**. Format d'un objet :
   `{ id, title (court, reformulé), author, embeddable }`.
   **Objectif : viser une DIZAINE de vidéos LISIBLES (`embeddable:true`)** à chaque mise à jour
   — cherche assez large dans les contenus club (interviews, coulisses, presse, magazines,
   chaînes de supporters autorisant l'intégration) pour atteindre ~10 vidéos jouables dans le
   site. Tu peux ajouter en plus quelques `embeddable:false` (redirection), mais l'essentiel
   doit être lisible en intégré.
6. Conserve les anciennes, aucun doublon d'`id`. **Vérifie** que le JS reste valide.

Ne touche à aucun autre fichier. Jamais de vidéo bloquée en France ; jamais d'hébergement
de fichier vidéo protégé (on n'utilise que l'intégration/lien YouTube).

## Commit automatique
Termine par : `git add -A` puis `git commit -m "maj vidéos : <n> vidéos"`
(termine le message par `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`).
