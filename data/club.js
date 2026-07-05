/* =====================================================================
   DONNÉES CLUB — dernier match + classement (widgets de la barre latérale)
   Édité par la procédure /maj (bloc « club »).
   Données RÉELLES fin de saison 2025-2026 :
   - CLASSEMENT : lensois.com/classement/ (widget scoreaxis).
   - DERNIER MATCH : finale Coupe de France (recoupée via besoccer.com,
     le widget fctables de lensois étant protégé par Cloudflare).
   ===================================================================== */
window.CLUB = {
  // Dernier match de la saison : finale de la Coupe de France remportée (22 mai 2026)
  lastMatch: {
    comp: 'Finale · Coupe de France',
    home: { code: 'RCL', name: 'RC Lens', score: 3, isLens: true },
    away: { code: 'NIC', name: 'Nice', score: 1 },
    info: 'Stade de France · vainqueur'
  },
  // Classement final Ligue 1 2025-2026 (source : lensois.com/classement/)
  standingsTitle: 'Classement final 2025-2026',
  standings: [
    { pos: 1, club: 'Paris SG', played: 34, diff: '+45', pts: 76 },
    { pos: 2, club: 'RC Lens', played: 34, diff: '+31', pts: 70, isLens: true },
    { pos: 3, club: 'Lille', played: 34, diff: '+15', pts: 61 },
    { pos: 4, club: 'Lyon', played: 34, diff: '+13', pts: 60 },
    { pos: 5, club: 'Marseille', played: 34, diff: '+18', pts: 59 },
    { pos: 6, club: 'Rennes', played: 34, diff: '+9', pts: 59 }
  ]
};
