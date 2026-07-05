/* =====================================================================
   HISTOIRE DU CLUB — filons (frise) + légendes (panthéon)
   Affiché dans la section « La mine ». Data-driven, facile à enrichir.
   (Premier jet : sans images. On pourra ajouter des photos LIBRES ensuite.)
   ===================================================================== */
window.HISTOIRE = {
  filons: [
    { year: 1906, titre: 'Naissance dans le charbon',
      recit: ['Le Racing Club de Lens est fondé en 1906, porté par la communauté minière du bassin. Le club naît littéralement au cœur du charbon — c’est là toute l’âme des « Charbonneurs ».'] },
    { year: 1934, titre: 'Le Racing passe professionnel',
      recit: ['Dans les années 1930, Lens embrasse le football professionnel et s’installe durablement à Bollaert, qui deviendra l’un des chaudrons les plus réputés de France.'] },
    { year: 1998, titre: 'Champion de France',
      recit: ['Sous la houlette de Daniel Leclercq, « le Druide », le RC Lens décroche en 1998 son unique titre de champion de France — le sommet de l’histoire du club.'] },
    { year: 2020, titre: 'Le retour dans l’élite',
      recit: ['Après des années d’ascenseur entre les divisions, Lens retrouve la Ligue 1 et renoue avec la ferveur intacte de Bollaert-Delelis.'] },
    { year: 2023, titre: 'Bollaert en Ligue des Champions',
      recit: ['Vice-champion de France, le RC Lens retrouve la Ligue des Champions et fait vivre à Bollaert des nuits européennes incandescentes.'] },
    { year: 2026, titre: 'Dauphin & Coupe de France',
      recit: ['Une saison 2025-2026 d’anthologie : dauphin du PSG en Ligue 1 et vainqueur de la Coupe de France.'] }
  ],
  legendes: [
    { name: 'Daniel Leclercq', photo: 'images/legendes/leclercq.jpg', role: 'Entraîneur', era: 'Le Druide · sacre 1998',
      texte: ['« Le Druide », artisan du titre de champion de France 1998. Une figure entrée dans la légende sang et or.'] },
    { name: 'Guillaume Warmuz', role: 'Gardien', era: 'Années 1990-2000',
      texte: ['Gardien emblématique et dernier rempart du RC Lens champion de France 1998.'] },
    { name: 'Vladimír Šmicer', photo: 'images/legendes/smicer.jpg', role: 'Milieu', era: '1996-1999',
      texte: ['Milieu tchèque virevoltant, artisan du sacre 1998 avant de rejoindre Liverpool.'] },
    { name: 'Éric Sikora', role: 'Défenseur', era: 'Fidèle sang & or',
      texte: ['Défenseur fidèle au club, joueur puis membre du staff : une vie entière au service du Racing.'] },
    { name: 'Raphaël Varane', photo: 'images/legendes/varane.jpg', role: 'Défenseur', era: 'Formé à La Gaillette',
      texte: ['Formé au centre de formation lensois avant de devenir défenseur international et champion du monde 2018.'] }
  ]
};
