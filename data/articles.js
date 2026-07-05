/* =====================================================================
   DONNÉES DES ARTICLES — Charbonneurs
   Édité par la procédure /maj-articles. Nouvel article EN TÊTE.
   Champs : id, date, category (news|mercato|interview|mag|saison),
   title, excerpt (chapô), body (paragraphes étoffés), sources (liens),
   image, imgPos (object-position optionnel pour cadrer le visage, ex. 'center 45%'),
   featured, pinned.
   ===================================================================== */

window.ARTICLES = [
  {
    id: 'abdulhamid-officiel',
    date: '2026-07-05',
    time: '14:15',
    category: 'mercato',
    title: 'Saud Abdulhamid rejoint définitivement le RC Lens',
    excerpt: 'Le latéral saoudien, prêté la saison passée par l’AS Rome, s’est engagé à titre définitif avec les Sang et Or jusqu’en 2029.',
    image: 'images/articles/abdulhamid-lens.jpg',
    featured: 'feat',
    pinned: false,
    body: [
      'Le RC Lens officialise l’arrivée définitive de Saud Abdulhamid. Le défenseur saoudien, qui évoluait déjà sous les couleurs lensoises la saison dernière sous forme de prêt en provenance de l’AS Rome, a paraphé un contrat courant jusqu’en 2029.',
      'Latéral droit capable de dépanner dans un couloir gauche, Abdulhamid avait rapidement gagné sa place dans la rotation défensive artésienne, apprécié pour sa vitesse de récupération et sa solidité dans les duels. Son passage en prêt aura permis au staff de confirmer qu’il correspondait au profil recherché pour durer.',
      'Cette signature à titre définitif intervient alors que le secteur défensif lensois est en pleine recomposition, avec les départs annoncés de Malang Sarr et le suivi rapproché dont fait l’objet Robin Risser. Sécuriser un latéral international déjà adapté au groupe permet au club de limiter l’incertitude estivale.',
      'Pour Abdulhamid, international saoudien, ce nouveau bail représente une étape de stabilisation en Europe après un parcours entre l’Italie et la France. Le joueur avait exprimé son souhait de poursuivre l’aventure à Bollaert, où il dit s’être senti rapidement intégré.',
      'Le RC Lens, engagé en Ligue des champions la saison prochaine, mise sur cette continuité pour aborder sereinement une préparation estivale chargée, entre matches de gala et finalisation du reste du mercato.'
    ],
    sources: [
      { name: 'Média Sportif', url: 'https://www.mediasportif.fr/2026/07/03/rc-lens-mercato-le-successeur-de-malang-sarr-trouve-et-ca-ne-va-rien-couter/' },
      { name: 'MadeInLens', url: 'https://www.madeinlens.com/tableau-mercato/ete-2026.html' }
    ]
  },
  {
    id: 'risser-aston-villa',
    date: '2026-07-05',
    time: '11:30',
    category: 'mercato',
    title: 'Aston Villa suivrait de près le jeune gardien Robin Risser',
    excerpt: 'Le portier lensois de 21 ans figurerait parmi les pistes d’Aston Villa, qui prépare l’avenir de ses cages.',
    image: 'images/articles/risser.jpg',
    featured: null,
    pinned: false,
    body: [
      'Le nom de Robin Risser circule outre-Manche. Le jeune gardien du RC Lens, âgé de 21 ans, serait suivi par Aston Villa, qui chercherait à préparer la succession, à terme, d’Emiliano Martínez.',
      'Produit du centre de formation, Risser incarne la politique du club : faire éclore ses talents et leur offrir une chance au plus haut niveau. Son profil moderne, à l’aise au pied, séduit au-delà des frontières.',
      'Pour Lens, cet intérêt est à double tranchant : il valorise le travail de formation, mais pose la question de la hiérarchie des gardiens, alors qu’Hervé Koffi est de retour et vise la place de numéro un.',
      'À ce stade, rien n’indique un départ imminent : il s’agit surtout d’une marque d’intérêt, et le club n’a aucune raison de brader un jeune prometteur encore sous contrat.',
      'Un dossier à suivre, révélateur de l’attractivité retrouvée des jeunes Sang et Or sur le marché européen.'
    ],
    sources: [
      { name: 'MadeInLens', url: 'https://www.madeinlens.com/tableau-mercato/ete-2026.html' },
      { name: 'Foot Mercato', url: 'https://www.footmercato.net/club/racing-club-de-lens/' }
    ]
  },
  {
    id: 'sangare-grosse-vente',
    date: '2026-07-05',
    time: '10:00',
    category: 'mercato',
    title: 'Mamadou Sangaré, valorisé à plus de 40 M€, attise les convoitises anglaises',
    excerpt: 'Le milieu lensois pourrait être la grosse vente de l’été : plusieurs clubs, notamment anglais, se positionnent.',
    featured: null,
    pinned: false,
    body: [
      'Le RC Lens tient peut-être la vente qui financera son mercato. Mamadou Sangaré, milieu de terrain valorisé à plus de 40 millions d’euros, suscite l’intérêt de plusieurs clubs, en particulier en Angleterre.',
      'Athlétique et déjà précieux dans l’entrejeu, le joueur s’est imposé comme l’un des actifs majeurs du club. Une offre importante serait difficile à refuser dans la logique économique lensoise.',
      'Après les départs de cadres et la nécessité d’équilibrer les comptes, une cession de cette ampleur donnerait des moyens pour se renforcer intelligemment.',
      'Sportivement, elle obligerait toutefois à anticiper : perdre un milieu de ce calibre suppose d’avoir déjà ciblé, voire sécurisé, sa succession.',
      'Le dossier illustre le nouveau statut du club : formateur et vendeur, capable de générer de grosses plus-values tout en visant le haut du tableau.'
    ],
    sources: [
      { name: 'RCLensois.fr', url: 'https://www.rclensois.fr/transferts-mercato-rclens.html' },
      { name: 'Mercato Live', url: 'https://www.mercatolive.fr/france/rc-lens.php' }
    ]
  },
  {
    id: 'hazard-signe',
    date: '2026-07-04',
    time: '17:15',
    category: 'mercato',
    title: 'Officiel : Thorgan Hazard signe au RC Lens, un retour aux sources',
    excerpt: 'Libre après son passage à Anderlecht, l’international belge s’engage deux saisons dans l’Artois — là même où il avait lancé sa carrière avant Chelsea.',
    image: 'images/articles/hazard.jpg',
    featured: null,
    pinned: false,
    body: [
      'Le RC Lens tient une recrue de prestige : Thorgan Hazard s’est engagé pour deux saisons avec les Sang et Or. Libre de tout contrat après son aventure à Anderlecht, l’international belge relance sa carrière dans l’Artois.',
      'Le symbole est fort : c’est à Lens que le cadet de la fratrie Hazard avait fait ses premiers pas professionnels, avant de rejoindre Chelsea en 2012. Quatorze ans plus tard, il revient là où tout a commencé.',
      'Le profil a de quoi séduire : 33 ans, 47 sélections avec la Belgique, un vécu au plus haut niveau — de Chelsea au Borussia Dortmund — et une dernière saison pleine à Anderlecht. Polyvalent sur le front de l’attaque, il apporte création et expérience.',
      'Pour Dino Toppmöller, c’est une option précieuse : un joueur capable d’animer plusieurs postes offensifs et d’encadrer un effectif jeune. L’arrivée complète celle de Michaël Cuisance et confirme l’ambition affichée après une saison référence.',
      'Reste à roder les automatismes et à trouver le meilleur emploi pour l’ancien Dortmundois. Les supporters, eux, savoureront déjà le retour d’un enfant de la maison sous les couleurs sang et or.'
    ],
    sources: [
      { name: 'TopMercato', url: 'https://www.topmercato.com/2067903-mercato-lens-thorgan-hazard-va-faire-son-grand-retour-chez-les-sang-et-or/' },
      { name: 'MediaSportif', url: 'https://www.mediasportif.fr/2026/06/29/mercato-rc-lens-thorgan-hazard-debarque-pour-dynamiser-leffectif-apres-cuisance/' },
      { name: 'AllezLensois', url: 'https://allezlens.fr/mercato-le-rc-lens-entre-le-fantasme-thorgan-hazard-et-le-realisme-des-joueurs-libres/' }
    ]
  },
  {
    id: 'sylla-sion',
    date: '2026-07-04',
    time: '16:00',
    category: 'mercato',
    title: 'Départ : Fodé Sylla rejoint le FC Sion',
    excerpt: 'Le jeune milieu de 20 ans quitte l’Artois pour la Suisse, où il s’est engagé sur un long contrat avec le club valaisan.',
    featured: null,
    pinned: false,
    body: [
      'Fodé Sylla poursuit sa carrière à l’étranger : le milieu de terrain de 20 ans s’est officiellement engagé avec le FC Sion, en Suisse, où il a signé un contrat de longue durée.',
      'Passé par la formation lensoise, le joueur cherche désormais un cadre pour enchaîner les matchs et franchir un cap, loin de la concurrence d’un entrejeu bien fourni dans l’Artois.',
      'Pour le RC Lens, ce départ s’inscrit dans un été de mouvements, marqué par plusieurs sorties qui allègent l’effectif et ouvrent des espaces pour la nouvelle hiérarchie voulue par le staff.',
      'Le club garde un œil bienveillant sur la suite du parcours d’un jeune qu’il a vu grandir — le championnat suisse offrant souvent un tremplin intéressant aux talents en quête de temps de jeu.'
    ],
    sources: [
      { name: 'MadeInLens', url: 'https://www.madeinlens.com/tableau-mercato/ete-2026.html' },
      { name: 'Foot Mercato', url: 'https://www.footmercato.net/club/racing-club-de-lens/tableau/' }
    ]
  },
  {
    id: 'sotoca-narbonnais',
    date: '2026-07-04',
    time: '14:30',
    category: 'mag',
    title: 'Florian Sotoca devient actionnaire du Racing Club Narbonnais',
    excerpt: 'Le capitaine des Sang et Or investit dans le club de rugby narbonnais, fraîchement promu en Pro D2.',
    image: 'images/players/sotoca.jpg',
    featured: null,
    pinned: false,
    body: [
      'Surprise en dehors des terrains de football : Florian Sotoca, attaquant et capitaine du RC Lens, vient d’entrer au capital du Racing Club Narbonnais, tout juste promu en Pro D2.',
      'Ce type d’investissement illustre l’attachement du joueur au sport et sa volonté de préparer l’après-carrière, dans une région où le rugby occupe une place particulière.',
      'Sur le plan sportif, l’attaquant reste évidemment pleinement concentré sur sa mission avec les Sang et Or, où il demeure un cadre et un repère du vestiaire.',
      'Un engagement qui ajoute une corde à l’arc d’un capitaine déjà très identifié à Lens, et qui montre que les footballeurs diversifient de plus en plus leurs projets.'
    ],
    sources: [
      { name: 'Lensois.com', url: 'https://www.lensois.com/' },
      { name: 'MadeInLens', url: 'https://www.madeinlens.com/' }
    ]
  },
  {
    id: 'pagis-lorient',
    date: '2026-07-04',
    time: '12:50',
    category: 'mercato',
    title: 'Mercato : le RC Lens insiste pour Pablo Pagis, mais Lorient bloque',
    excerpt: 'Le club artésien apprécie l’attaquant, mais les exigences financières de Lorient freinent pour l’instant le dossier.',
    featured: null,
    pinned: false,
    body: [
      'Le RC Lens n’a pas lâché la piste menant à Pablo Pagis. Le club artésien apprécie le profil de l’attaquant et aimerait le faire venir pour renforcer son secteur offensif.',
      'Le dossier se heurte toutefois aux exigences de Lorient : les Merlus réclameraient un montant élevé, que Lens ne serait pas disposé à payer en l’état.',
      'Les discussions pourraient donc s’étirer, à moins qu’un compromis financier ne soit trouvé entre les deux clubs dans les prochaines semaines.',
      'Un dossier représentatif d’un mercato estival où le Racing avance avec méthode, sans céder à la surenchère.'
    ],
    sources: [
      { name: 'Mercato Live', url: 'https://www.mercatolive.fr/france/rc-lens.php' },
      { name: 'Foot Mercato', url: 'https://www.footmercato.net/club/racing-club-de-lens/' }
    ]
  },
  {
    id: 'fulgini-retour',
    date: '2026-07-04',
    time: '11:20',
    category: 'mercato',
    title: 'Angelo Fulgini de retour à Lens à l’issue de son prêt',
    excerpt: 'Le milieu offensif réintègre le groupe sang et or après son prêt à Al-Taawoun, en Arabie saoudite.',
    image: 'images/players/fulgini.jpg',
    featured: null,
    pinned: false,
    body: [
      'Angelo Fulgini fait son retour dans l’effectif du RC Lens. Prêté la saison passée à Al-Taawoun, en Arabie saoudite, le milieu offensif réintègre le groupe à l’occasion de la reprise.',
      'Déjà passé par l’Artois, le joueur connaît la maison et le public de Bollaert-Delelis. Son profil créatif, capable d’évoluer dans l’entrejeu comme un cran plus haut, apporte des solutions supplémentaires.',
      'Pour Dino Toppmöller, ce retour élargit l’éventail offensif au moment de bâtir sa rotation et ses automatismes avant le début de saison.',
      'Reste à savoir quelle place le joueur occupera dans la hiérarchie, dans un secteur déjà concurrentiel et encore susceptible d’évoluer d’ici la fin du mercato.'
    ],
    sources: [
      { name: 'MadeInLens', url: 'https://www.madeinlens.com/tableau-mercato/ete-2026.html' },
      { name: 'AllezLens', url: 'https://allezlens.fr/mercato-rc-lens/' }
    ]
  },
  {
    id: 'medina-marseille',
    date: '2026-07-04',
    time: '09:45',
    category: 'mercato',
    title: 'Facundo Medina proche de l’Olympique de Marseille',
    excerpt: 'Prêté à l’OM avec une option d’achat estimée autour de 22 M€, le défenseur argentin pourrait s’inscrire dans la durée sur la Canebière.',
    image: 'images/articles/medina.jpg',
    featured: null,
    pinned: false,
    body: [
      'Le dossier Facundo Medina se précise : le défenseur international argentin évolue à l’Olympique de Marseille dans le cadre d’un prêt assorti d’une option d’achat, estimée autour de 22 millions d’euros.',
      'Apprécié à Lens pour son agressivité, sa polyvalence et sa relance, Medina laisserait un vide dans l’arrière-garde s’il venait à être transféré définitivement.',
      'Sur le plan économique, l’opération représenterait une très belle vente pour le club artésien, cohérente avec sa stratégie de valorisation des joueurs.',
      'Sportivement, elle obligerait toutefois la direction à anticiper l’arrivée d’un renfort défensif pour ne pas fragiliser un secteur clé.'
    ],
    sources: [
      { name: 'Transfermarkt', url: 'https://www.transfermarkt.fr/rc-lens/transfers/verein/826' },
      { name: 'Foot Mercato', url: 'https://www.footmercato.net/club/racing-club-de-lens/' }
    ]
  },
  {
    id: 'toppmoller-officiel',
    date: '2026-07-03',
    time: '18:30',
    category: 'news',
    title: 'Dino Toppmöller officiellement sur le banc du RC Lens jusqu’en 2028',
    excerpt: 'Arrivé d’Eintracht Francfort, l’entraîneur allemand succède à Pierre Sage, parti à Crystal Palace. Il veut confirmer la dynamique du club.',
    image: 'images/articles/toppmoller.jpg',
    poster: 'images/defaut/stade.jpg',
    video: 'video/fond.mp4',
    featured: 'hero',
    pinned: false,
    body: [
      'Le RC Lens tient son nouvel entraîneur : Dino Toppmöller s’est engagé jusqu’en 2028. L’Allemand succède à Pierre Sage, qui a choisi de relever un nouveau défi en Premier League du côté de Crystal Palace.',
      'Passé notamment par le banc d’Eintracht Francfort, Toppmöller s’est bâti une réputation de technicien porté vers l’avant, attaché à un jeu de possession ambitieux et à la valorisation des jeunes talents. Un profil qui colle à l’identité que le club veut cultiver.',
      'Il hérite d’un groupe en pleine réussite, auréolé d’une saison précédente exceptionnelle. La barre est donc placée haut : il s’agit de confirmer, tout en installant progressivement sa propre patte tactique.',
      'Le mercato ajoute à l’équation : entre départs de cadres, retours de prêt et recrues, le nouvel entraîneur devra rapidement construire une hiérarchie et des automatismes. La reprise à La Gaillette et les matchs de préparation seront ses premiers vrais laboratoires.',
      'Pour les supporters Sang et Or, c’est le début d’un nouveau chapitre : celui de la continuité dans l’ambition, avec l’espoir de rester durablement installé dans le haut du tableau.'
    ],
    sources: [
      { name: 'Eurosport', url: 'https://www.eurosport.fr/football/ligue-1/' },
      { name: 'RC Lens (officiel)', url: 'https://www.rclens.fr/' }
    ]
  },
  {
    id: 'saison-historique-2025-2026',
    date: '2026-07-03',
    time: '17:10',
    category: 'saison',
    title: 'Une saison 2025-2026 historique : dauphin du PSG et vainqueur de la Coupe de France',
    excerpt: 'Retour sur une campagne exceptionnelle qui a vu les Sang et Or terminer 2ᵉ de Ligue 1 et soulever la Coupe de France.',
    image: 'images/defaut/tribune.jpg',
    featured: 'feat',
    pinned: false,
    body: [
      'La saison 2025-2026 restera comme l’une des plus belles pages récentes du club. En Ligue 1, le RC Lens a terminé à la deuxième place, juste derrière l’ogre parisien, décrochant un billet européen de prestige.',
      'La cerise sur le gâteau est venue de la Coupe de France, soulevée au terme d’un parcours abouti. Un trophée qui récompense la régularité et le caractère d’un groupe soudé.',
      'Derrière ces résultats, il y a une constante : la ferveur de Bollaert-Delelis. Saison après saison, le stade affiche complet et pousse son équipe, transformant chaque rencontre à domicile en atout majeur.',
      'Ce doublé sportif change la dimension du club : visibilité accrue, attractivité renforcée sur le marché des transferts et objectifs revus à la hausse. La nouvelle ère, ouverte par l’arrivée de Dino Toppmöller, s’annonce comme celle de la confirmation.'
    ],
    sources: [
      { name: 'Wikipédia — Saison 2025-2026 du RC Lens', url: 'https://fr.wikipedia.org/wiki/Saison_2025-2026_du_Racing_Club_de_Lens' }
    ]
  },
  {
    id: 'cuisance-signe-2030',
    date: '2026-07-02',
    time: '16:00',
    category: 'mercato',
    title: 'Michaël Cuisance signe jusqu’en 2030 : le milieu débarque du Hertha Berlin',
    excerpt: 'Le milieu de 26 ans s’engage pour quatre saisons, pour un montant estimé autour de 5 M€ bonus compris.',
    image: 'images/players/cuisance.jpg',
    featured: null,
    pinned: false,
    body: [
      'Le RC Lens frappe un joli coup sur le marché : Michaël Cuisance s’engage jusqu’en 2030. Le milieu de terrain de 26 ans arrive en provenance du Hertha Berlin pour une indemnité estimée autour de 5 millions d’euros, bonus compris.',
      'Formé à l’école de la précision technique, Cuisance est réputé pour sa qualité de passe, sa vision et sa capacité à casser des lignes. Autant d’atouts qui doivent apporter de la créativité à l’entrejeu lensois.',
      'Son profil s’inscrit dans la philosophie de jeu prônée par le nouveau staff : un football de possession, tourné vers l’avant. Il vient densifier une zone clé et offrir des solutions supplémentaires à Dino Toppmöller.',
      'Cette signature envoie aussi un signal : porté par sa saison référence et son retour européen, le club a les moyens d’attirer des joueurs au vécu solide dans les grands championnats.'
    ],
    sources: [
      { name: 'RCLensois.fr', url: 'https://www.rclensois.fr/transferts-mercato-rclens.html' },
      { name: 'Foot Mercato', url: 'https://www.footmercato.net/club/racing-club-de-lens/' }
    ]
  },
  {
    id: 'gift-links-aarhus',
    date: '2026-07-03',
    time: '15:40',
    category: 'mercato',
    title: 'Gift Links : Lens pousse pour le défenseur, mais le dossier avec l’AGF Aarhus se complique',
    excerpt: 'Les Sang et Or auraient transmis une offre avoisinant les 5 M€ bonus compris. L’étalement du paiement proposé freine encore les négociations.',
    image: 'images/articles/giftlinks.jpg',
    featured: null,
    pinned: false,
    body: [
      'Le RC Lens continue de travailler activement le dossier Gift Links. Le club aurait transmis une nouvelle offre pour le joueur de l’AGF Aarhus, signe de l’intérêt concret des dirigeants.',
      'Selon les informations qui circulent, la proposition avoisinerait les 5 millions d’euros, bonus compris. Mais les discussions achoppent sur les modalités : l’étalement du paiement sur plusieurs saisons ne conviendrait pas au club danois.',
      'Côté joueur, le voyant serait au vert : l’intéressé se montrerait ouvert à l’idée de rejoindre l’Artois et de découvrir la Ligue 1.',
      'Reste donc à rapprocher les points de vue entre clubs. Un dossier à suivre, symptomatique d’un mercato estival où Lens veut avancer sans se précipiter.'
    ],
    sources: [
      { name: 'MediaSportif', url: 'https://www.mediasportif.fr/' }
    ]
  },
  {
    id: 'bayomog-losc',
    date: '2026-07-03',
    time: '13:15',
    category: 'mercato',
    title: 'Hugo Bayomog, jeune latéral du LOSC, sur le point de s’engager avec le Racing',
    excerpt: 'Le RC Lens finalise l’arrivée d’un latéral prometteur formé chez le voisin lillois, appelé à densifier le couloir droit.',
    image: 'images/defaut/stade2.jpg',
    featured: null,
    pinned: false,
    body: [
      'Le RC Lens serait tout proche de boucler l’arrivée d’un jeune latéral prometteur : Hugo Bayomog, formé chez le voisin lillois.',
      'Le profil correspond à la stratégie affichée par le club, qui mise volontiers sur des joueurs à fort potentiel pour les faire progresser et valoriser à terme.',
      'Sur le plan sportif, il s’agit de renforcer et de rajeunir le couloir droit, tout en préparant la relève à ce poste.',
      'Un mouvement qui, dans le contexte d’un derby du Nord toujours bouillant, ne manquera pas de faire parler des deux côtés.'
    ],
    sources: [
      { name: 'Lens Mercato', url: 'https://lensmercato.fr/' }
    ]
  },
  {
    id: 'cuisance-interview',
    date: '2026-07-02',
    time: '12:30',
    category: 'interview',
    title: '« Un projet qui donne envie » : les premiers pas de Michaël Cuisance',
    excerpt: 'Le milieu revient sur son choix et ses ambitions dans l’Artois pour cette nouvelle aventure.',
    image: 'images/players/cuisance.jpg',
    featured: null,
    pinned: false,
    body: [
      'À peine arrivé, Michaël Cuisance a fait bonne impression lors de ses premières prises de parole. Le milieu se dit séduit par le projet sportif et par la ferveur qui entoure le club.',
      'Il met en avant l’attractivité d’un environnement ambitieux, la qualité de l’effectif et l’engouement populaire autour de Bollaert-Delelis, souvent cités comme des arguments décisifs par les recrues.',
      'Sur le terrain, le joueur affiche sa volonté de s’intégrer rapidement, de trouver ses repères avec ses nouveaux partenaires et de contribuer dès les premières échéances.',
      'De quoi nourrir l’impatience des supporters, curieux de voir à l’œuvre un joueur au profil créatif dans le dispositif de Dino Toppmöller.'
    ],
    sources: [
      { name: 'RC Lens (officiel)', url: 'https://www.rclens.fr/' }
    ]
  },
  {
    id: 'gardiens-hierarchie',
    date: '2026-07-01',
    time: '18:00',
    category: 'news',
    title: 'Gardiens : Hervé Koffi de retour, Robin Risser pousse pour sa chance',
    excerpt: 'Le départ des expérimentés Gurtner et Gorgelin rebat les cartes dans les buts lensois.',
    image: 'images/players/koffi.jpg',
    featured: null,
    pinned: false,
    body: [
      'Les buts lensois connaissent un vrai renouvellement. Les départs des gardiens expérimentés Régis Gurtner et Mathieu Gorgelin ouvrent grand la concurrence à ce poste.',
      'De retour de prêt, l’international burkinabè Hervé Koffi retrouve le groupe avec l’ambition de s’imposer comme numéro un. Face à lui, le jeune Robin Risser, issu du centre de formation, entend bien saisir sa chance.',
      'Pour le nouveau staff, l’enjeu est double : trancher une hiérarchie claire tout en maintenant une émulation saine entre les portiers.',
      'Un poste clé, souvent déterminant sur une saison, que Dino Toppmöller devra sécuriser rapidement avant la reprise de la compétition.'
    ],
    sources: [
      { name: 'AllezLens', url: 'https://allezlens.fr/mercato-rc-lens/' },
      { name: 'Lensois.com', url: 'https://www.lensois.com/le-point-sur-le-marche-des-transferts-dete-2026/' }
    ]
  },
  {
    id: 'openda-retour-rumeur',
    date: '2026-07-01',
    time: '10:15',
    category: 'mag',
    title: 'Loïs Openda de retour à Lens ? La piste d’un come-back agite le mercato',
    excerpt: 'L’attaquant belge, révélé sous les couleurs lensoises, alimente les rumeurs d’un retour aux sources.',
    image: 'images/articles/openda.jpg',
    featured: null,
    pinned: false,
    body: [
      'C’est le genre de rumeur qui enflamme un été : Loïs Openda pourrait faire son retour au RC Lens. L’attaquant belge avait explosé aux yeux de l’Europe sous les couleurs sang et or, avant un transfert record.',
      'Depuis, son parcours a connu des hauts et des bas, et une période plus délicate relancerait aujourd’hui l’hypothèse d’un retour aux sources.',
      'Émotionnellement, l’idée séduit une partie du public, qui garde le souvenir d’un buteur électrique et généreux dans l’effort.',
      'Sur le plan sportif et financier, le dossier reste néanmoins très hypothétique à ce stade. À prendre, donc, avec les précautions d’usage propres au marché des transferts.'
    ],
    sources: [
      { name: 'Mercato Live', url: 'https://www.mercatolive.fr/france/rc-lens.php' }
    ]
  },
  {
    id: 'bentayeb-piste',
    date: '2026-06-30',
    time: '17:30',
    category: 'mercato',
    title: 'Attaque : le RC Lens se positionne sur le buteur marocain Tawfik Bentayeb',
    excerpt: 'Le FC Porto et l’Olympiakos suivent aussi de près l’avant-centre, ce qui pourrait faire grimper la note.',
    image: 'images/defaut/stade2.jpg',
    featured: null,
    pinned: false,
    body: [
      'Pour étoffer sa ligne offensive, le RC Lens explorerait plusieurs pistes. Le nom de Tawfik Bentayeb, avant-centre marocain, revient avec insistance.',
      'Le profil séduit, mais le club artésien n’est pas seul sur le coup : plusieurs formations européennes, dont le FC Porto et l’Olympiakos, suivraient également le joueur.',
      'Cette concurrence pourrait logiquement faire grimper le prix et compliquer l’opération, dans un marché où les bons buteurs se disputent à prix fort.',
      'Le dossier illustre la volonté lensoise de renforcer l’animation offensive, un secteur toujours scruté par les supporters en quête de garanties de buts.'
    ],
    sources: [
      { name: 'MediaSportif', url: 'https://www.mediasportif.fr/' }
    ]
  },
  {
    id: 'bermont-pret-angers',
    date: '2026-06-30',
    time: '11:00',
    category: 'mercato',
    title: 'Anthony Bermont prêté à Angers pour emmagasiner du temps de jeu',
    excerpt: 'Accord trouvé entre les deux clubs pour le prêt de l’ailier de 21 ans, qui va tenter de franchir un cap.',
    image: 'images/defaut/tribune.jpg',
    featured: null,
    pinned: false,
    body: [
      'Anthony Bermont va poursuivre sa progression loin de l’Artois : un accord a été trouvé pour un prêt à Angers. L’ailier de 21 ans change d’air le temps d’une saison.',
      'L’objectif est clair : lui offrir du temps de jeu régulier au plus haut niveau, une denrée précieuse pour un jeune talent en quête de confirmation.',
      'Pour le RC Lens, ce type de prêt s’inscrit dans une logique de formation : laisser mûrir un joueur prometteur avant, potentiellement, de le récupérer plus aguerri.',
      'Un pari gagnant-gagnant, fréquent dans le football moderne, que le club espère voir porter ses fruits dès cette saison.'
    ],
    sources: [
      { name: 'MadeInLens', url: 'https://www.madeinlens.com/tableau-mercato/ete-2026.html' }
    ]
  }
];
