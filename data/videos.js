/* =====================================================================
   VIDÉOS RC LENS — intégrées légalement via YouTube.
   - embeddable: true  → la vidéo se lit DANS le site (intégration autorisée)
                         → priorisée et mise en avant (grande carte).
   - embeddable: false → intégration bloquée par l'ayant droit (LFP / beIN /
                         Ligue 1+ / résumés de match) → carte en REDIRECTION.

   MàJ /maj-videos : embeddabilité VÉRIFIÉE via "playableInEmbed" de la page
   YouTube (fiable). On intègre aussi les compilations « skills / talent »
   des joueurs. Contenu de match beIN/LFP = toujours en redirection.
   ===================================================================== */

window.VIDEOS = [
  {
    id: '3HrULUsF_fo',
    title: 'Les Lensois préparent l’Europe — Épisode 4 (coulisses de l’été)',
    author: 'RC Lens (chaîne officielle)',
    embeddable: true,
    feature: true
  },
  {
    id: 'UGS9uZ-vMfw',
    title: 'Les Lensois préparent l’Europe — Épisode 3',
    author: 'RC Lens (chaîne officielle)',
    embeddable: true
  },
  {
    id: 'fcPZsKEhDr4',
    title: 'Les Lensois préparent l’Europe — Épisode 2 (souvenir européen des Made in Gaillette)',
    author: 'RC Lens (chaîne officielle)',
    embeddable: true
  },
  {
    id: 'fgJU_lc28Q4',
    title: 'Les Lensois préparent l’Europe — Épisode 1 (avec Vladimir Šmicer)',
    author: 'RC Lens (chaîne officielle)',
    embeddable: true
  },
  {
    id: 'V42MiNAhR14',
    title: 'CHARBONNEURS — le documentaire Ligue 1+ sur une saison historique',
    author: 'Ligue 1 McDonald’s',
    embeddable: true
  },
  {
    id: 'BgJaZjKGZyA',
    title: 'Jour de Lens : RC Lens – AJ Auxerre (1-0)',
    author: 'RC Lens (chaîne officielle)',
    embeddable: true
  },
  {
    id: 'jCL6LcQVFQE',
    title: 'Le meilleur de Florian Thauvin au RC Lens — best of 2025/2026',
    author: 'Compilation supporters',
    embeddable: true
  },
  {
    id: 'MxyRkp6xeXc',
    title: 'RC Lens 2025-2026 : tous les buts d’une saison légendaire',
    author: 'Ligue 1 Vintage',
    embeddable: true
  },
  {
    id: 'xnDn2XUqsJ8',
    title: 'Thorgan Hazard — talent & skills du nouveau Sang et Or',
    author: 'Skills compilation',
    embeddable: true
  },
  {
    id: '30C4H7-hJwM',
    title: 'Lens – Toulouse : les temps forts',
    author: 'beIN SPORTS',
    embeddable: false
  },
  {
    id: 'RF8TZMS6KQs',
    title: 'Lens – Nantes : les temps forts',
    author: 'beIN SPORTS',
    embeddable: false
  }
];
