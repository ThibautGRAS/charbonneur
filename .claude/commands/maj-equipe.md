---
description: Met à jour l'effectif (joueurs, stats, photos) du site Charbonneurs
---

Tu mets à jour **uniquement** `data/players.js` (effectif de la saison en cours).

⚙️ **Frugalité tokens** (quitte à être un peu plus lent) : recherches web limitées (1-2), greps/lectures ciblés (jamais de fichiers entiers), petits remplacements, **aucun sous-agent**, résumé court.

1. **Vérifie l'effectif ACTUEL** (WebSearch + WebFetch), en **croisant plusieurs sources** :
   - **En priorité la page officielle du club `rclens.fr`** (effectif / équipe première) pour
     confirmer les joueurs présents et les numéros,
   - complétée par Wikipédia « Saison <année>-<année+1> du Racing Club de Lens » et Transfermarkt.
   - Applique les **départs** (un joueur parti ailleurs ne doit plus figurer) et les
     **arrivées / retours de prêt**. En plein mercato, **recoupe systématiquement rclens.fr**
     avant d'inscrire ou de retirer un joueur.
2. **Champs par joueur** : `num` (null si le numéro est incertain → affiché « — »),
   `name`, `pos` (G|D|M|A), `nat`, `flag` (emoji drapeau), `born` (année).
   `cap:true` pour le capitaine. `desc` : phrase courte et factuelle pour les cadres.
3. **Photos** — uniquement **Wikimedia Commons** (licences libres), **vérifiées par le nom** :
   - API : `commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=<nom>&srnamespace=6&srlimit=12&formatversion=2&format=json`
   - Ne garder un fichier **que si son nom contient le nom du joueur** (anti-erreur d'identité)
     **et qu'il est bien cadré** (visage visible, portrait de préférence — pas de tête coupée).
   - Récupérer la miniature via `prop=imageinfo&iiprop=url&iiurlwidth=500`, télécharger dans
     `images/players/<slug>.jpg`, puis `photo: 'images/players/<slug>.jpg'`.
   - ⚠️ **Jamais** de photo de presse / d'agence protégée. Sans photo libre → pas de `photo`
     (le site affiche une tuile « maillot »).
4. **Vidéo « skills »** : cherche sur YouTube « <nom du joueur> skills » (aussi : talent, buts/goals,
   best of, highlights, **meilleurs moments**, **meilleures actions**, top, compilation, résumé). **Ne force PAS « RC Lens »** dans la requête : beaucoup de compils
   couvrent la carrière du joueur **hors Lens** (autres clubs) — cherche par **nom + mot-clé** seul.
   Cherche large — au besoin directement dans YouTube (`/results?search_query=…&hl=fr&gl=FR`), pas
   seulement via un moteur US. **S'il y a plusieurs récaps, prends le PLUS RÉCENT.** Si aucun **titre**
   ne correspond clairement, **lis la DESCRIPTION** de la vidéo : si elle indique un récap du joueur
   (ex. « Dans cette vidéo je vous présente les meilleurs moments de Florian Sotoca »), on peut la retenir. Renseigne alors le champ
   `video` (URL ou identifiant) → bouton **« Skills ↗ »**.
   ⚠️ **Vérifie que la vidéo existe toujours** : oEmbed `https://www.youtube.com/oembed?url=https://
   www.youtube.com/watch?v=<ID>&format=json` doit répondre **200** (les compilations sont souvent
   supprimées — remplace tout lien mort). Sinon, la fiche affiche un bouton **« Vidéos ↗ »** vers une
   recherche YouTube du joueur. On ne fait que **lier**, aucun hébergement.
5. **Stats** (`matches`, `goals`, `assists`) : via **API-Football**, la **Ligue 1 uniquement**.
   - Requête (paginée) : `GET https://v3.football.api-sports.io/players?team=116&season=2024&league=61&page=N`
     avec l'en-tête `x-apisports-key: <clé>` ; boucle sur `paging.total` (pause ~6 s entre pages).
   - Pour chaque joueur, prends la ligne `statistics` où `league.id == 61` :
     `matches = games.appearences`, `goals = goals.total`, `assists = goals.assists`.
     (Ne cumule pas les autres compétitions : leurs `appearences` sont parfois erronées.)
   - **`season=2024` = saison 2024-2025** (dernière accessible en plan gratuit). Le libellé des tuiles
     dans `app.js` (`Statistiques Ligue 1 · saison 2024-2025`) doit rester **cohérent** avec la saison
     réellement récupérée — si tu changes de saison, mets ce libellé à jour.
   - Un joueur **absent** de la liste (pas au club cette saison-là : recrue récente, retour d'un autre
     championnat, blessé toute la saison…) **n'a pas de stats** → **aucun** champ `matches/goals/assists`
     (pas de 0 inventé, jamais de chiffre repris d'un autre club ni d'une phrase « X buts » non vérifiée).
   ⚠️ La **clé API reste dans un fichier LOCAL non versionné** (scratchpad), **jamais** dans le site ni le
   dépôt ; on n'écrit que les **nombres** dans `players.js`. Après coup, vérifie que la clé n'apparaît
   nulle part dans le projet (`grep` de la clé → 0).
6. **Vérifie** que le JS reste valide. **Résume** les entrées/sorties + sources.

Ne touche qu'à `data/players.js` et `images/players/` (photos libres).

## Commit automatique
Termine par : `git add -A` puis `git commit -m "maj effectif : <entrées/sorties>"`
(termine le message par `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`).
