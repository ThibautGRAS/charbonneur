/* =====================================================================
   SONDAGE — Charbonneurs
   Régénéré à chaque /maj-articles (prompt « sondage ») : pour lancer un
   NOUVEAU sondage, change `id` → les votes locaux se réinitialisent et
   les visiteurs peuvent revoter.
   `base` = amorce de votes par option (point de départ crédible).
   ⚠️ Comptage RÉEL cross-visiteurs (agrégé, 1 vote/personne côté serveur)
   = nécessite un backend. En statique, chaque navigateur ajoute son
   unique vote local par-dessus l'amorce `base`.
   ===================================================================== */
window.POLL = {
  id: 'trophee-champions-2026',
  question: 'Après le sacre au Trophée des Champions, que peut viser Lens cette saison ?',
  options: [
    { label: 'Le titre de champion',                    base: 42 },
    { label: 'Le podium et la Ligue des champions',     base: 88 },
    { label: 'Une place européenne',                    base: 51 },
    { label: 'Se maintenir sereinement',                base: 12 }
  ]
};
