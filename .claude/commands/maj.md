---
description: Mise à jour GLOBALE du site Charbonneurs (articles + vidéos + effectif + club)
---

Exécute les procédures de mise à jour, dans l'ordre, en suivant le détail
de chaque fichier de ce dossier, puis fais un résumé global.

1. **Articles** — applique la procédure de `.claude/commands/maj-articles.md` (→ `data/articles.js`).
2. **Vidéos** — applique la procédure de `.claude/commands/maj-videos.md` (→ `data/videos.js`).
3. **Effectif** — applique la procédure de `.claude/commands/maj-equipe.md` (→ `data/players.js`).
4. **Club (classement + dernier match)** — actualise `data/club.js` (`window.CLUB`).
   **Source classement : `https://www.lensois.com/classement/`** (widget scoreaxis).
   - Récupère le tableau réel via le widget : `https://widgets.scoreaxis.com/api/football/league-table/<leagueId>`
     (le `<leagueId>` est dans le `src` du script `widgets.scoreaxis.com` de la page). La réponse est du JS où
     le HTML est **échappé en `\uXXXX`** : décode-le, puis lis chaque ligne d'équipe
     (`<td class="team">…<span title="NOM">`, suivie des `<td>` dans l'ordre : MJ, V, N, D, buts, **diff**, **pts**).
   - `standings` : `pos`, `club`, `played`, `diff` (ex. `'+31'`), `pts`, `isLens:true` pour le RC Lens ;
     `standingsTitle` décrit la période (ex. « Classement final 2025-2026 »). Garde ~6 lignes (haut de tableau).
   - `lastMatch` : dernier match (`comp`, `home`/`away` = `{code,name,score}`, `isLens:true` côté Lens,
     `info` = lieu · état). ⚠️ Le widget « dernier match » (fctables) de lensois est **protégé (Cloudflare)** :
     s'il est inaccessible, recoupe le résultat via une source fiable — **n'invente jamais** un score non
     vérifié (en cas de doute, laisse la valeur en place).

### Règles communes
- N'édite que les fichiers `data/` concernés + `images/players/` pour les photos libres.
- **Frugalité tokens** (quitte à être un peu plus lent) : 1-2 recherches web max par section, lectures/greps ciblés (pas de fichiers entiers), **aucun sous-agent**, résumés courts.
- Garde toujours un **JavaScript valide** ; ne supprime jamais l'historique des articles.
- **Aucun contenu protégé** : faits reformulés, photos **libres (Wikimedia CC)**, vidéos en
  **intégration/lien YouTube** (jamais bloquées en France, jamais de fichier vidéo protégé).
- Termine par un **résumé** : ce qui a été ajouté/modifié dans chaque section + sources.

### Commit automatique (après CHAQUE section)
Après **chaque** section (articles, vidéos, effectif, club), fais un **commit dédié puis pousse** :
`git add -A` → `git commit -m "maj <section> : <résumé court>"` → `git push origin main`
(termine chaque message par la ligne `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`).
Chaque type de maj a ainsi son commit clair, et le site déployé se met à jour au fil de l'eau.
Si une section n'apporte rien de nouveau, ne fais pas de commit vide pour elle.

### Automatiser la maj quotidienne
Le site est local → pour lancer cette maj chaque jour automatiquement :
- **Tâche planifiée Windows** exécutant, dans le dossier du projet, Claude Code en mode
  headless : `claude -p "/maj"` (par ex. tous les jours à 08h00).
- (Si le site est un jour hébergé sur un dépôt git, une **routine cloud** peut faire la maj
  puis pousser les changements.)

Demande à l'assistant de te **générer la tâche planifiée** (fichier `.bat` + commande
`schtasks`) si tu veux l'activer.
