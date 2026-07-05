# 🔴🟡 Projet « Lensois — Nouvelle Génération »

Un média RC Lens qui ne ressemble à aucun autre : immersif, dynamique, mis à jour
tout seul chaque jour. De la mine à Bollaert.

---

## 🎯 Vision

Quand un supporter arrive sur le site, il doit ressentir un **effet waouh** immédiat :
plongée dans l'ambiance des corons et de Bollaert, visuel vivant, son d'ambiance.
Puis une navigation moderne : actu qui se met à jour seule, effectif cliquable,
stats des joueurs, calendrier, classement live.

Objectif : rendre les sites lensois « dépassés » complètement obsolètes.

---

## 🏗️ Architecture (le point clé)

Tout repose sur **une séparation stricte données / affichage**. C'est ce qui permet
la mise à jour quotidienne automatique sans jamais toucher au code du site.

```
lens/
├── index.html                     # coquille : structure + zones vides à remplir
├── style.css                      # tout le design (thème Sang & Or, intro, animations)
├── app.js                         # moteur : rend les articles, gère l'intro + le son
├── data/
│   ├── articles.js                # ← LES DONNÉES articles. La routine édite ce fichier
│   ├── videos.js                  # vraies vidéos RC Lens (intégrations YouTube)
│   └── players.js                 # (phase 4) effectif + stats
├── images/                        # photos libres (Wikimedia CC BY-SA)
├── video/                         # vidéo d'ambiance libre de droits (Pexels)
├── .claude/commands/maj-lensois.md  # la routine de mise à jour (slash command)
└── PROJET.md                      # ce document
```

**Règle d'or :** la mise à jour quotidienne = ajouter des objets dans `data/articles.js`.
Le site se régénère automatiquement. Les anciens articles restent, les nouveaux
remontent en tête (tri par date + épinglage).

### Modèle d'un article

```js
{
  id:       'toppmoller-officiel',   // identifiant unique (sert à éviter les doublons)
  date:     '2026-07-03',            // AAAA-MM-JJ → sert au tri + à l'affichage
  category: 'news',                  // news | mercato | interview | mag | saison
  title:    'Titre de l'article',
  excerpt:  'Chapô en une ou deux phrases.',
  image:    'images/stade.jpg',      // visuel de la carte
  featured: 'hero',                  // 'hero' (à la une) | 'feat' (mise en avant) | null
  pinned:   false                    // épinglé en haut quoi qu'il arrive
}
```

---

## 🗺️ Feuille de route

### ✅ Phase 1 — Fondations data-driven  *(FAIT)*
- [x] Articles extraits dans `data/articles.js`
- [x] `app.js` génère le hero, les mises en avant et le fil à partir des données
- [x] Tri automatique par date, épinglage, pagination « charger plus »

### ✅ Phase 2 — Expérience d'arrivée « waouh »  *(FAIT — prototype)*
- [x] Intro cinématique plein écran : descente dans la mine → remontée à Bollaert
- [x] Chevalement (silhouette de mine) + braises animées
- [x] Bouton « Entrer » qui lance l'ambiance sonore
- [x] Ambiance sonore **générée en direct** (Web Audio : grondement de mine + souffle de foule) — libre de droits
- [x] Animations d'apparition au scroll, parallaxe sur le hero
- [ ] À affiner : transitions, particules de poussière de charbon, vidéo de fond (option)

### 🔜 Phase 3 — Routine quotidienne automatique
- [x] Commande `/maj-lensois` qui scanne l'actu et crée les articles
- [ ] Planification quotidienne (Tâche planifiée Windows OU routine cloud) → *à décider ensemble*
- [ ] Téléchargement automatique d'une image libre par article
- [ ] Archivage : page « toutes les news » quand le fil devient long

### 🔜 Phase 4 — Effectif interactif & stats
- [ ] `data/players.js` : effectif 2026-2027, postes, numéros
- [ ] Grille de joueurs cliquables → fiche joueur (photo, bio, stats saison)
- [ ] Mini-graphiques de stats (buts, passes, temps de jeu)

### 🔜 Phase 5 — Le reste
- [ ] Calendrier / résultats live
- [ ] Classement live
- [ ] Page « Le Mag », vidéos « Lens Foot TV »
- [ ] Mode sombre, PWA (installable), performances (images optimisées)

---

## 🔁 Mise à jour quotidienne — comment ça marche

La commande **`/maj-lensois`** (voir `.claude/commands/maj-lensois.md`) fait, à chaque exécution :

1. Recherche web de l'actu RC Lens des dernières 24 h.
2. Compare aux `id` déjà présents dans `data/articles.js` → ignore les doublons.
3. Rédige 1 à 3 nouveaux articles **avec ses propres mots** (jamais de copier-coller
   d'articles existants — uniquement des faits reformulés).
4. Les ajoute **en tête** de `data/articles.js`, en conservant tous les anciens.
5. Bascule l'ancien « hero » en article normal, met le plus frais à la une.

### Trois façons de la planifier

| Option | Où ça tourne | Idéal si… |
|--------|--------------|-----------|
| **A. Tâche planifiée Windows** | ton PC, chaque matin | le site reste **en local** (recommandé pour démarrer) |
| **B. `/loop 24h /maj-lensois`** | session Claude Code ouverte | tu laisses une session tourner |
| **C. Routine cloud (`/schedule`)** | serveur Anthropic | le site est **déployé en ligne** (avec dépôt git) |

> Exemple option A (à finaliser ensemble) : une tâche planifiée qui lance
> `claude -p "/maj-lensois"` dans ce dossier tous les jours à 8h.

---

## ⚠️ Points d'attention (licences)

- **Musique / hymne** : *Les Corons* et l'hymne du club sont **protégés** — on ne peut
  pas les intégrer. L'ambiance actuelle est **synthétisée** (100 % libre). Si tu veux
  un vrai morceau, il faut fournir un fichier **libre de droits** ou sous licence.
- **Images** : on utilise des photos **Wikimedia Commons (CC BY-SA)**, créditées en pied
  de page. Les photos officielles du club / agences de presse sont protégées.
- **Vidéos RC Lens** : les vraies vidéos (matchs, résumés, docu) sont **protégées** — on ne
  les télécharge PAS. On les **intègre via YouTube** (mécanisme officiel et légal, le contenu
  reste chez l'ayant droit). La vidéo d'ambiance de fond, elle, est un **stock libre (Pexels)**.
- **Textes** : les articles sont des **reformulations de faits** (les faits ne sont pas
  protégés), jamais des copies d'articles publiés.

---

## ❓ Décisions à prendre ensemble

1. **Ambiance sonore** : on garde le son synthétisé, tu fournis un fichier libre, ou pas de son ?
2. **Hébergement** : site en local (double-clic) ou mis en ligne (déploiement + nom de domaine) ?
3. **Automatisation** : où doit tourner la routine quotidienne (PC local / cloud) ?
