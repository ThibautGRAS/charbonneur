/* =====================================================================
   DONNÉES CLUB — dernier match + classement (widgets de la barre latérale)
   Édité par la procédure /maj (bloc « club »).
   Données RÉELLES fin de saison 2025-2026 :
   - CLASSEMENT : lensois.com/classement/ (widget scoreaxis).
   - DERNIER MATCH : finale de la Como Cup (amical, recoupée via
     OneFootball / Lensois.com). Classement : table finale 2025-2026
     conservée jusqu'à la 1re journée de L1 2026-27 (22 août).
   ===================================================================== */
window.CLUB = {
  // Dernier match : finale de la Como Cup remportée face à Villarreal (1er août 2026, Côme)
  lastMatch: {
    comp: 'Finale · Como Cup (amical)',
    home: { code: 'RCL', name: 'RC Lens', score: 3, isLens: true },
    away: { code: 'VIL', name: 'Villarreal', score: 1 },
    info: 'Côme · vainqueur, invaincu en préparation'
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
