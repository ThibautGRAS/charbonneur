/* =====================================================================
   HISTOIRE DU CLUB — filons (frise "veine du temps") + légendes (panthéon)
   Affiché dans la section « La mine ». Data-driven.
   Événements synthétisés et REFORMULÉS d'après la chronologie officielle
   (rclens.fr/club/histoire) — aucune reprise texte. Faits vérifiés.
   ===================================================================== */
window.HISTOIRE = {
  filons: [
    { year: 1906, titre: 'La création du club', image: 'images/histoire/creation.jpg',
      recit: [
        'Le Racing Club de Lens naît en 1906, dans le quartier de la Place Verte, au cœur du bassin minier du Pas-de-Calais.',
        'Porté par la communauté des mineurs, le club forge très tôt son identité populaire et ouvrière — celle des « Charbonneurs », les gueules noires du fond.'
      ] },
    { year: 1933, titre: 'L’arrivée à Bollaert', image: 'images/histoire/bollaert.jpg',
      recit: [
        'Au début des années 1930, le club s’installe dans son écrin : le stade Félix-Bollaert, inauguré en 1933, avant d’embrasser le football professionnel.',
        'L’enceinte deviendra l’un des chaudrons les plus réputés de France, connue pour une ferveur hors norme dans une ville pourtant modeste.'
      ] },
    { year: 1998, titre: 'Champion de France', image: 'images/histoire/kop.jpg',
      recit: [
        'En 1998, à Auxerre, le RC Lens est sacré Champion de France pour la première — et à ce jour unique — fois de son histoire.',
        'Sous la houlette de Daniel Leclercq, « le Druide », une génération dorée (Warmuz, Šmicer, Vairelles, Sikora…) écrit la plus belle page du club.'
      ] },
    { year: 1999, titre: 'Coupe de la Ligue & nuits d’Europe', image: 'images/defaut/stade2.jpg',
      recit: [
        'Dans la foulée du titre, Lens remporte la Coupe de la Ligue en 1999 et s’installe sur la scène continentale.',
        'En 2000, le club réalise un parcours retentissant en Coupe de l’UEFA jusqu’en demi-finale : Bollaert vibre au rythme des grandes soirées européennes.'
      ] },
    { year: 2014, titre: 'Les années yo-yo', image: 'images/histoire/mine.jpg',
      recit: [
        'Les années 2000-2010 sont plus contrastées : le Racing alterne le meilleur et le pire, entre maintiens accrochés et allers-retours avec la Ligue 2.',
        'Une traversée du désert éprouvante — mais le club ne perd jamais le soutien indéfectible de son public, l’un des plus fidèles de France.'
      ] },
    { year: 2020, titre: 'Le retour dans l’élite', image: 'images/defaut/tribune.jpg',
      recit: [
        'En 2020, après cinq saisons en Ligue 2, Lens retrouve l’élite en terminant en tête du championnat de deuxième division.',
        'Le retour à Bollaert s’accompagne d’une ferveur intacte et relance un projet sportif ambitieux.'
      ] },
    { year: 2023, titre: 'Le retour en Ligue des Champions', image: 'images/defaut/bollaert-nuit.jpg',
      recit: [
        'Vice-champion de France en 2023, le RC Lens décroche son billet pour la Ligue des Champions, une vingtaine d’années après sa dernière apparition.',
        'Bollaert-Delelis renoue avec les nuits européennes et confirme le retour du club parmi l’élite continentale.'
      ] },
    { year: 2026, titre: 'Dauphin & Coupe de France', image: 'images/defaut/supporters.jpg',
      recit: [
        'La saison 2025-2026 restera dans les mémoires : dauphin du Paris Saint-Germain en Ligue 1 et vainqueur de la Coupe de France.',
        'Un aboutissement qui confirme le nouveau statut du RC Lens et le renvoie vers les sommets européens.'
      ] }
  ],
  legendes: [
    { name: 'Éric Sikora', photo: 'images/legendes/sikora.jpg', role: 'Défenseur', era: 'Une vie au club',
      texte: [
        'Latéral droit, fidèle parmi les fidèles : une carrière de joueur entièrement dédiée au RC Lens.',
        'Présent lors du sacre de Champion de France 1998, il est ensuite devenu un pilier du staff technique — l’incarnation de l’esprit sang et or.'
      ] },
    { name: 'Guillaume Warmuz', photo: 'images/legendes/warmuz.jpg', role: 'Gardien', era: 'RC Lens 1993-2004',
      texte: [
        'Gardien de but, dernier rempart du RC Lens pendant plus de dix ans.',
        'Au club de 1993 à 2004, titulaire lors du sacre de Champion de France 1998. Une référence dans les buts sang et or.'
      ] },
    { name: 'Vladimír Šmicer', photo: 'images/legendes/smicer.jpg', role: 'Milieu', era: 'RC Lens 1996-1999',
      texte: [
        'Milieu offensif international tchèque, technique et percutant.',
        'Au RC Lens de 1996 à 1999, artisan majeur du titre de Champion de France 1998, avant de rejoindre Liverpool (avec qui il remportera la Ligue des Champions 2005).'
      ] },
    { name: 'Tony Vairelles', photo: 'images/legendes/vairelles.jpg', role: 'Attaquant', era: 'RC Lens 1997-1999',
      texte: [
        'Attaquant spectaculaire et buteur, à l’énergie communicative.',
        'Au RC Lens de 1997 à 1999, il participe pleinement au sacre de Champion de France 1998 et connaît l’équipe de France.'
      ] },
    { name: 'Daniel Leclercq', photo: 'images/legendes/leclercq.jpg', role: 'Entraîneur', era: 'RC Lens 1997-1999',
      texte: [
        '« Le Druide » : entraîneur charismatique et emblématique du RC Lens à la fin des années 1990.',
        'Sur le banc lensois de 1997 à 1999, il offre au club son unique titre de Champion de France (saison 1997-1998) — le sommet de l’histoire du Racing.'
      ] },
    { name: 'Seydou Keita', photo: 'images/legendes/keita.jpg', role: 'Milieu', era: 'RC Lens 2000-2007',
      texte: [
        'Milieu de terrain international malien, complet et infatigable.',
        'Révélé au RC Lens dans les années 2000, il y confirme son talent avant de briller à Séville puis au FC Barcelone.'
      ] },
    { name: 'Éric Carrière', photo: 'images/legendes/carriere.jpg', role: 'Meneur de jeu', era: 'RC Lens 2002-2005',
      texte: [
        'Meneur de jeu élégant et passeur d’exception, arrivé à Lens auréolé de son titre avec Nantes.',
        'Au début des années 2000, il illumine l’entrejeu artésien de sa vista et de sa qualité de passe.'
      ] },
    { name: 'Raphaël Varane', photo: 'images/legendes/varane.jpg', role: 'Défenseur', era: 'Formé à La Gaillette',
      texte: [
        'Défenseur central formé au centre de formation lensois (La Gaillette).',
        'Débuts professionnels avec Lens en 2010-2011 (une vingtaine de matchs) avant de rejoindre le Real Madrid à 18 ans. Champion du monde 2018 avec la France et multiple vainqueur de la Ligue des Champions.'
      ] },
    { name: 'Jean-Louis Leca', photo: 'images/legendes/leca.jpg', role: 'Gardien', era: 'RC Lens 2018-2022',
      texte: [
        'Gardien et capitaine au tempérament de leader.',
        'Artisan de la remontée en Ligue 1 en 2020, il incarne le renouveau lensois de la fin des années 2010.'
      ] },
    { name: 'Kevin Danso', role: 'Défenseur', era: 'RC Lens 2020-2024',
      texte: [
        'Défenseur central puissant et fiable, international autrichien.',
        'Pilier de l’arrière-garde lensoise de 2020 à 2024, il accompagne le retour du club en Ligue des Champions.'
      ] },
    { name: 'Seko Fofana', photo: 'images/legendes/fofana.jpg', role: 'Milieu', era: 'RC Lens 2020-2023',
      texte: [
        'Milieu box-to-box explosif, capitaine emblématique et moteur du renouveau.',
        'De 2020 à 2023, il porte le RC Lens vers le vice-championnat de France et le retour en Ligue des Champions, avant un transfert record.'
      ] },
    { name: 'Loïs Openda', photo: 'images/legendes/openda.jpg', role: 'Attaquant', era: 'RC Lens 2022-2023',
      texte: [
        'Attaquant belge électrique, redoutable dans la surface.',
        'Auteur d’une saison 2022-2023 exceptionnelle (une vingtaine de buts), il contribue au vice-championnat avant un transfert record vers le RB Leipzig.'
      ] }
  ]
};
