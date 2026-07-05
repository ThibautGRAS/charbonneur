---
description: Met à jour le fil d'articles du site Charbonneurs (actu RC Lens)
---

Tu mets à jour le fil d'actualité (`data/articles.js`), avec pour chaque article une
**photo libre en lien avec le sujet**, sans jamais casser le site ni supprimer d'anciens articles.

1. **Lis** `data/articles.js` (les `id` déjà présents).
2. **Recherche** (WebSearch) l'actu RC Lens des dernières 24-48 h :
   « RC Lens actualité <mois année> », « RC Lens mercato », « RC Lens match résultat ».
3. **Sélectionne** 1 à 3 infos nouvelles (aucun doublon d'`id`/de sujet).
4. **Rédige avec tes propres mots** (faits reformulés, JAMAIS de copier-coller, jamais de
   fausses citations). Champs :
   - `id` (minuscules-tirets, unique), `date` (AAAA-MM-JJ), `time` (HH:MM — alimente le fil d'infos),
   - `category` (news|mercato|interview|mag|saison), `title`, `excerpt` (1-2 phrases),
   - `body` : **4 à 6 paragraphes étoffés** (contexte, profil/enjeux, ce que ça change, la suite),
   - `sources` : **tableau `{ name, url }`** — les **sites d'où vient l'info** (obligatoire),
   - `image` (+ `imgPos` optionnel pour bien cadrer le visage — voir point 5),
   - `featured` ('hero'|'feat'|null), `pinned`.
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
   - **c) Aucune image fiable ?** → **laisse `image` vide** : le site choisit une image de
     `images/defaut/` selon la catégorie (news→stade, mercato→stade2, interview→tribune,
     mag→bollaert-nuit, saison→kop). Rien à inventer.
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
6. **Insère EN TÊTE** du tableau, conserve TOUS les anciens. Garde 1 `hero` + 2 `feat` max.
7. **Vérifie** que le JS reste valide. **Commit** (voir ci-dessous). **Résume** : articles
   ajoutés + sources.

## Commit automatique
Termine par un commit git :
`git add -A` puis `git commit -m "maj articles : <titres ajoutés>"`.
(Message court ; termine-le par la ligne `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.)

N'édite que `data/articles.js` et `images/` (photos libres). Pas de contenu protégé.
