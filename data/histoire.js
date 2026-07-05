/* =====================================================================
   HISTOIRE DU CLUB — filons (frise) + légendes (panthéon)
   Affiché dans la section « La mine ». Data-driven, facile à enrichir.
   (Premier jet : sans images. On pourra ajouter des photos LIBRES ensuite.)
   ===================================================================== */
window.HISTOIRE = {
  filons: [
    { year: 1906, titre: 'Naissance dans le charbon', image: 'images/histoire/mine.jpg',
      recit: [
        'Le Racing Club de Lens voit le jour en 1906, au cœur du bassin minier du Pas-de-Calais, intimement lié à la communauté des mineurs — les fameuses « gueules noires ».',
        'De cet héritage naît toute l’identité des « Charbonneurs » : un football populaire et ouvrier, taillé dans l’effort et la fierté du fond.'
      ] },
    { year: 1934, titre: 'Le Racing passe professionnel', image: 'images/histoire/bollaert.jpg',
      recit: [
        'Dans les années 1930, Lens embrasse le football professionnel et s’installe durablement au stade Félix-Bollaert, inauguré en 1933.',
        'Bollaert deviendra l’un des chaudrons les plus réputés de France, réputé pour l’un des publics les plus fervents du pays.'
      ] },
    { year: 1998, titre: 'Champion de France', image: 'images/histoire/kop.jpg',
      recit: [
        'Sous la houlette de Daniel Leclercq, « le Druide », le RC Lens décroche en 1998 le seul titre de Champion de France de son histoire.',
        'Porté par une génération dorée (Warmuz, Šmicer, Sikora…), le club s’installe dans l’élite et goûte à la Coupe d’Europe.'
      ] },
    { year: 2020, titre: 'Le retour dans l’élite', image: 'images/defaut/tribune.jpg',
      recit: [
        'Après plusieurs saisons d’ascenseur entre Ligue 1 et Ligue 2, Lens retrouve l’élite en 2020 en s’adjugeant le championnat de deuxième division.',
        'Le retour à Bollaert s’accompagne d’une ferveur intacte et lance une nouvelle ère, plus ambitieuse.'
      ] },
    { year: 2023, titre: 'Bollaert en Ligue des Champions', image: 'images/defaut/bollaert-nuit.jpg',
      recit: [
        'Vice-champion de France en 2023, le RC Lens se qualifie pour la Ligue des Champions, un quart de siècle après ses premières campagnes européennes.',
        'Bollaert-Delelis vit alors des nuits européennes incandescentes, confirmant le retour du club parmi les places fortes du football français.'
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
