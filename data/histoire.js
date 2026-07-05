/* =====================================================================
   HISTOIRE DU CLUB — filons (frise "veine du temps") + légendes (panthéon)
   Affiché dans la section « La mine ». Data-driven.
   Événements synthétisés et REFORMULÉS d'après la chronologie officielle
   (rclens.fr/club/histoire) — aucune reprise texte. Faits vérifiés.
   Images : illustratives (Wikimedia + visuels ajoutés à la main).
   ===================================================================== */
window.HISTOIRE = {
  filons: [
    { year: 1906, titre: 'La création du club', image: 'images/histoire/creation.jpg',
      recit: [
        'Tout commence en 1906, à l’ombre des chevalements. Sur la Place Verte, quelques passionnés fondent le Racing Club de Lens, dans une ville qui vit au rythme des sirènes de la mine.',
        'D’emblée, le club est celui des gueules noires : un football de corons, rugueux et fier, qui puise sa force dans la solidarité du fond. L’ADN des Charbonneurs est scellé.'
      ] },
    { year: 1933, titre: 'L’arrivée à Bollaert', image: 'images/histoire/bollaert.jpg',
      recit: [
        'En 1933, le Racing pose ses valises dans un écrin appelé à devenir mythique : le stade Félix-Bollaert. Bientôt, l’enceinte peut accueillir plus de spectateurs qu’il n’y a d’habitants à Lens.',
        'Les jours de match, la ville entière se déverse dans les tribunes. Naît alors la réputation d’un chaudron unique, où le douzième homme fait trembler les charpentes.'
      ] },
    { year: 1998, titre: 'Champion de France', image: 'images/histoire/tifo.jpg',
      recit: [
        'Printemps 1998. Porté par « le Druide » Daniel Leclercq et une bande de guerriers — Warmuz, Šmicer, Vairelles, Sikora — le RC Lens réalise l’impensable et devient Champion de France.',
        'Le titre se scelle loin de ses bases, à Auxerre, mais c’est tout un bassin minier qui explose de joie. Le seul et unique sacre national du club, gravé à jamais.'
      ] },
    { year: 1999, titre: 'Coupe de la Ligue & nuits d’Europe', image: 'images/defaut/bollaert-nuit.jpg',
      recit: [
        'Sur sa lancée, Lens soulève la Coupe de la Ligue en 1999 et goûte enfin aux grands rendez-vous continentaux.',
        'En 2000, les Sang et Or défient l’Europe et poussent jusqu’aux demi-finales de la Coupe de l’UEFA. Sous les projecteurs, Bollaert gronde comme jamais.'
      ] },
    { year: 2014, titre: 'Les années yo-yo', image: 'images/histoire/terril.jpg',
      recit: [
        'Après les sommets, la descente. Dans les années 2000-2010, le Racing enchaîne montées et rechutes — l’élite une saison, la Ligue 2 la suivante — mettant le cœur des supporters à rude épreuve.',
        'Mais même dans la tourmente, Bollaert ne se vide jamais. Cette fidélité à toute épreuve deviendra la marque d’un peuple qui n’abandonne pas les siens.'
      ] },
    { year: 2020, titre: 'Le retour dans l’élite', image: 'images/histoire/kop.jpg',
      recit: [
        '2020 : après cinq longues saisons de purgatoire, Lens arrache son retour parmi les grands en dominant la Ligue 2.',
        'Le peuple sang et or reprend possession de son antre. La faim est intacte, l’ambition de nouveau permise — une nouvelle ère se lève sur l’Artois.'
      ] },
    { year: 2023, titre: 'Le retour en Ligue des Champions', image: 'images/histoire/nuit.jpg',
      recit: [
        'Vice-champion de France en 2023, le RC Lens signe l’un des plus beaux exploits de son histoire moderne et retrouve la Ligue des Champions, une vingtaine d’années après sa dernière apparition.',
        'Sous les étoiles de Bollaert, les hymnes européens résonnent à nouveau : le club de mineurs tient tête aux cadors du continent.'
      ] },
    { year: 2026, titre: 'Dauphin & Coupe de France', image: 'images/defaut/supporters.jpg',
      recit: [
        'La saison 2025-2026 restera comme une saison d’anthologie : dauphin du tout-puissant Paris Saint-Germain et vainqueur de la Coupe de France.',
        'Du fond de la mine aux sommets du football français, les Charbonneurs n’ont jamais aussi bien porté leur nom.'
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
    { name: 'Kevin Danso', photo: 'images/legendes/danso.jpg', role: 'Défenseur', era: 'RC Lens 2020-2024',
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
