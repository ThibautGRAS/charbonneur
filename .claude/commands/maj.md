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
   - `lastMatch` : **récupère le dernier résultat (et le prochain match) via OneFootball**
     (`https://onefootball.com/fr/equipe/rc-lens-256`, données datées et fiables) → `comp`,
     `home`/`away` = `{code,name,score}`, `isLens:true` côté Lens, `info` = lieu · état.
     **N'invente jamais** un score ; en cas de doute, laisse la valeur en place.
   - **Classement en saison** : dès que la saison en cours a démarré, prends le classement **live**
     (OneFootball `/fr/competition/ligue-1-23/classement`, ou le widget scoreaxis de lensois).
     **Hors saison**, garde la **table finale** de la dernière saison jouée (cas actuel : 2025-2026).

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

## ⚖️ ÉTHIQUE ÉDITORIALE (obligatoire, ajouté après l'incident Openda/Obispo du 19/08/2026)
La crédibilité du site prime sur la fraîcheur. Règles absolues :
1. **Sources datées uniquement.** Une info n'est publiable que si sa date de publication
   est vérifiable et ≤ 72 h. Les listings d'agrégateurs sans date (pages « fiche club »
   de jeunesfooteux, mercato.fr, tickers) NE SONT PAS des sources : ils ressortent des
   articles vieux de plusieurs semaines (ex. rumeur Openda ressortie alors qu'il était
   à l'OL depuis fin juillet). Ils servent seulement de point de départ pour retrouver
   l'article original daté.
2. **Rumeur = 2 sources datées et concordantes**, sinon on ne publie pas. Shoutbox,
   forums et comptes fans ne comptent pas. Conditionnel obligatoire dans le texte.
3. **Statut des joueurs cités** : avant de citer un joueur comme piste, vérifier qu'il
   n'a pas déjà signé ailleurs (1 recherche « <nom> transfert officiel »).
4. **Cohérence rétroactive** : avant tout commit d'article, relire les titres/excerpts
   des articles encore dans la fenêtre newsletter (7 derniers jours). Si le nouvel
   article contredit un ancien (transfert capoté, info démentie), CORRIGER AUSSI
   l'ancien article (titre, excerpt, corps) pour que le fil et la newsletter racontent
   une histoire cohérente — et le signaler dans le message de commit.
5. **Correctif assumé** : quand on rectifie une info publiée, le dire dans le texte
   (« précision importante sur un dossier évoqué ces derniers jours ») plutôt que
   d'effacer silencieusement.

## 🛡️ GARDE-FOUS TECHNIQUES (19/08/2026)
- **DOSSIERS.md** (racine du repo) : le lire AVANT d'écrire, le mettre à jour APRÈS
  chaque commit d'article. Jamais citer comme piste un dossier marqué CLOS.
- **Champ `statut`** obligatoire sur tout article mercato : 'officiel' (communiqué club),
  'confirme' (2 sources datées concordantes), 'rumeur' (conditionnel obligatoire).
  Badge affiché sur le site et dans la newsletter.
- **`node scripts/lint-articles.js`** doit passer AVANT tout commit d'articles
  (aussi exécuté en CI à chaque push : workflow lint-articles.yml).
