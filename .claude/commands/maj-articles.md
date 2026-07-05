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
   - `image` + `imageCredit` (voir point 5),
   - `featured` ('hero'|'feat'|null), `pinned`.
5. **PHOTO de l'article — pipeline automatique (images LIBRES uniquement).**
   Applique cet **arbre de décision**, dans l'ordre :
   - **a) Réutiliser une image LOCALE existante (à privilégier)** — identifie le **sujet central**
     de l'article (joueur, entraîneur, ou tout autre sujet). **Liste les fichiers** de
     `images/articles/` **et** `images/players/`, puis cherche une **correspondance de nom** en
     normalisant (minuscules, sans accents ni séparateurs) : le sujet « Loïs Openda » doit matcher
     `openda.jpg`, `loisopenda.jpg`, `loisopenda2.jpg`, `lois-openda.jpg`… (sous-chaîne du nom
     et/ou prénom). Si un fichier correspond, **réutilise-le** (`image` = ce chemin) — pratique
     pour les images déjà déposées, y compris un joueur **d'une autre équipe** ajouté à la main.
     Terminé (pas besoin de télécharger).
   - **b) Chercher une photo libre** de la personne :
     1. **Wikidata** (propriété `P18`), en vérifiant l'identité **prénom + nom + nationalité**
        (le plus fiable, évite les homonymes) ;
     2. sinon **Wikimedia Commons** (`action=query&list=search&srnamespace=6&srlimit=12&formatversion=2`),
        en ne retenant un fichier **que si son nom correspond au sujet**.
     - **Vérifie le CADRAGE** : visage visible, pas de tête coupée ni de plan trop large/de dos.
       En cas de doute, **analyse la vignette** avant de la retenir.
     - Télécharge la miniature (`prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=640`) dans
       **`images/articles/<slug>.jpg`**, mets `image` = ce chemin, et renseigne
       **`imageCredit: { text, url }`** (auteur + licence CC + lien Commons).
   - **c) Aucune photo libre fiable ?** → **laisse `image` absent/vide** (et **pas** d'`imageCredit`).
     Le site choisit alors **tout seul** une image de `images/defaut/` **selon la catégorie**
     (news→stade, mercato→stade2, interview→tribune, mag→bollaert-nuit, saison→kop) et gère
     aussi le repli si une image casse. Tu n'as donc **rien à inventer**.
   - ⚠️ **JAMAIS** de photo de presse/agence protégée (un crédit ne remplace pas une licence),
     jamais de photo bloquée. Évite de réutiliser la **même** photo pour deux articles consécutifs.
   - Rappel dossiers : `images/defaut/` = images par défaut · `images/articles/` = photos d'articles.
6. **Insère EN TÊTE** du tableau, conserve TOUS les anciens. Garde 1 `hero` + 2 `feat` max.
7. **Vérifie** que le JS reste valide. **Commit** (voir ci-dessous). **Résume** : articles
   ajoutés + sources.

## Commit automatique
Termine par un commit git :
`git add -A` puis `git commit -m "maj articles : <titres ajoutés>"`.
(Message court ; termine-le par la ligne `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.)

N'édite que `data/articles.js` et `images/` (photos libres). Pas de contenu protégé.
