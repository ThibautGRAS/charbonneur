---
description: Met à jour le fil d'articles du site Charbonneurs (actu RC Lens)
---

Tu mets à jour le fil d'actualité (`data/articles.js`), avec pour chaque article une
**photo libre en lien avec le sujet**, sans jamais casser le site ni supprimer d'anciens articles.

## ⚙️ Frugalité en tokens (prioritaire — quitte à être un peu plus lent)
- **1 seule recherche web** au départ (2 max) ; pas de recherches en cascade.
- **1 à 2 articles** par run, pas 3.
- **Ne lis pas les fichiers en entier** : récupère les `id` existants par un **grep ciblé**, édite par **petits remplacements** (pas de réécriture de fichier).
- **N'ouvre pas** les grands contenus web en entier, et **ne charge une image que si nécessaire** (le recadrage visage se fait par script cv2, pas besoin de « voir » chaque photo).
- **Aucun sous-agent** : fais tout en direct. Résumé final **court** (2-3 lignes).

1. **Lis** `data/articles.js` (les `id` déjà présents).
2. **Scanne l'actu récente**, en priorité via **OneFootball**
   (`https://onefootball.com/fr/equipe/rc-lens-256`) : il agrège des titres RC Lens **datés**
   (« il y a X heures/jours »), multi-sources — idéal pour ne retenir que du **frais** et fiable.
   Complète au besoin par **WebSearch** : « RC Lens mercato/actualité <mois année> », « RC Lens résultat ».
3. **Sélectionne** 1 à 2 infos **VRAIMENT RÉCENTES** : vérifie la **date de publication** de la
   source — n'accepte que ce qui date des **~3-4 derniers jours**. **Écarte** toute info ancienne,
   déjà présente dans un article, **ou déjà reflétée dans l'effectif** (un transfert déjà acté/intégré
   n'est PLUS une news — ex. un joueur déjà dans `data/players.js`). **Si rien de neuf : n'ajoute RIEN.**
4. **Rédige avec tes propres mots** (faits reformulés, JAMAIS de copier-coller, jamais de
   fausses citations). Champs :
   - `id` (minuscules-tirets, unique), `date` = **date RÉELLE de l'info** (celle de la source, AAAA-MM-JJ)
     — **surtout pas** la date du run, `time` (HH:MM — alimente le fil d'infos),
   - `category` (news|mercato|interview|mag|saison), `title`, `excerpt` (1-2 phrases),
   - `body` : **4 à 6 paragraphes étoffés** (contexte, profil/enjeux, ce que ça change, la suite),
   - `sources` : **tableau `{ name, url }`** — les **sites d'où vient l'info** (obligatoire),
   - `image` (+ `imgPos` optionnel pour bien cadrer le visage — voir point 5),
   - `featured` ('hero'|'feat'|null), `pinned`.
   - `video` (+ `poster`) optionnels : le héros peut tourner une vidéo de fond. **Dans ce cas,
     renseigne AUSSI `image`** avec une photo de bonne qualité — c'est elle (pas la vidéo) qui
     s'affiche quand on ouvre l'article.
   - `hot: true` ou `heat: <nombre>` optionnels : coup de pouce pour désigner l'actu « brûlante ».
5. **PHOTO de l'article — pipeline automatique.** Applique cet **arbre de décision**, dans l'ordre :
   - **a) Réutiliser une image LOCALE existante (à privilégier, pour TOUT type de sujet).**
     Identifie le **sujet central** (joueur, entraîneur, dirigeant, adversaire, jeune…). **Liste
     les fichiers** de `images/articles/` **et** `images/players/`. **Normalise des DEUX côtés**
     (minuscules, sans accents, sans espaces ni séparateurs, sans chiffre final) le nom du sujet ET
     le nom de fichier (sans extension), puis retiens une image si l'un **contient** l'autre — pour
     le **nom**, le **prénom**, ou le **nom complet collé** :
       • « Loïs Openda » → `openda.jpg`, `loisopenda.jpg`, `lois-openda.jpg`
       • « Gift Links » → `giftlinks.jpg`  ·  « Facundo Medina » → `medina.jpg`
     Si un fichier correspond, **réutilise-le** (`image` = ce chemin). Terminé.
     ⚠️ **Refais ce balayage aussi pour les articles récents DÉJÀ présents** : si une image a été
     déposée à la main dans `images/articles/` après coup, **adopte-la** (remplace l'image par défaut).
   - **b) Sinon, chercher une photo libre** : **Wikidata** `P18` (identité prénom + nom + nationalité,
     anti-homonyme), sinon **Wikimedia Commons** (nom de fichier = sujet). Télécharge la miniature
     (`iiurlwidth=640`) dans **`images/articles/<slug>.jpg`** et mets `image` = ce chemin.
   - **c) Aucune image fiable ?** → **laisse `image` vide** : le site pioche **au hasard** (mais de
     façon stable, d'après l'`id` de l'article) une photo d'ambiance dans `images/defaut/`. Si le titre
     cite un joueur de l'effectif, sa photo `images/players/` est utilisée automatiquement à la place.
     Rien à inventer. (Pool défaut modifiable via `DEFAULT_POOL` dans `app.js`.)
   - **CADRAGE — on doit BIEN VOIR LE VISAGE : reformate l'image, ne compte pas sur le CSS.**
     Les cartes d'articles sont larges (paysage) : une image **portrait ou carrée** y couperait le
     visage. Donc **recadre toute image portrait/carrée en paysage 16:9 CENTRÉ sur le visage**
     (détection de visage OpenCV/Haar : `haarcascade_frontalface_default.xml` → visage le plus grand,
     cadre 16:9 max centré horizontalement, visage vers 45% en hauteur ; à défaut de visage détecté,
     repli centre-haut ~40%). Les images déjà en paysage (stades) sont OK telles quelles. Le CSS
     recadre ensuite en `object-position: center center` ; le champ `imgPos` reste un ajustement
     de dernier recours. ⚠️ Ne recadre QUE `images/articles/` — les portraits `images/players/`
     restent verticaux (tuiles joueurs).
   - **PAS de crédit photo dans l'article** : n'ajoute **pas** de champ `imageCredit` ni de mention
     de source photo. L'attribution Creative Commons figure **globalement** dans le disclaimer en
     pied de page — c'est suffisant.
   - ⚠️ **JAMAIS** de photo de presse/agence protégée. Évite de réutiliser la **même** photo pour
     deux articles consécutifs. Dossiers : `images/defaut/` = défauts · `images/articles/` = articles.
6. **Insère EN TÊTE** du tableau, conserve TOUS les anciens. Le **héros est choisi
   AUTOMATIQUEMENT** = l'actu la plus brûlante (fraîcheur + poids de catégorie, mercato en tête ;
   ajustable via `hot`/`heat`). `featured: 'hero'` ne sert plus qu'à **forcer** une une précise.
   Garde 2 `feat` max pour les mises en avant secondaires.
7. **Vérifie** que le JS reste valide. **Commit** (voir ci-dessous). **Résume** : articles
   ajoutés + sources.

## Commit automatique
Termine par un commit git :
`git add -A` puis `git commit -m "maj articles : <titres ajoutés>"`.
(Message court ; termine-le par la ligne `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.)

N'édite que `data/articles.js` et `images/` (photos libres). Pas de contenu protégé.
