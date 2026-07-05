/* =====================================================================
   EFFECTIF RC LENS 2026-2027 — données factuelles (numéro, poste, nationalité, âge).
   Mis à jour au mercato été 2026 (source : Wikipédia / actualités).
   Départs pris en compte : Thomasson (Rennes), Saïd, Gorgelin, Gurtner, Sarr,
   Saint-Maximin, Sylla, Masuaku, Medina (Marseille), Zaroury...
   Retours de prêt / arrivées : Koffi, Chávez, Sagnan, Fulgini, Koyalipou,
   Agbonifo, Labeau-Lascary, Cuisance.
   Numéros incertains en plein mercato → null (affiché « — »).

   PHOTOS : uniquement des portraits RÉELLEMENT LIBRES (Wikimedia Commons, CC),
   vérifiés par le nom. Sans photo libre → tuile « maillot ».
   STATS matchs/buts : à brancher depuis une source officielle non bloquée.
   pos : G · D · M · A
   ===================================================================== */

window.PLAYERS = [
  // ---- Gardiens ----
  { num: 16, name: 'Hervé Koffi',      pos: 'G', nat: 'Burkina Faso',        flag: '🇧🇫', born: 1996, photo: 'images/players/koffi.jpg', desc: 'Gardien international burkinabè, de retour de prêt.', matches: 25, goals: 0, assists: 0 },
  { num: 40, name: 'Robin Risser',     pos: 'G', nat: 'France',              flag: '🇫🇷', born: 2004, photo: 'images/players/risser.jpg', desc: 'Gardien issu du centre de formation.' },
  { num: 60, name: 'Ilan Jourdren',    pos: 'G', nat: 'France',              flag: '🇫🇷', born: 2008 },

  // ---- Défenseurs ----
  { num: 2,  name: 'Ruben Aguilar',    pos: 'D', nat: 'France',              flag: '🇫🇷', born: 1993, photo: 'images/players/aguilar.jpg', matches: 19, goals: 1, assists: 2 },
  { num: 4,  name: 'Nidal Čelik',      pos: 'D', nat: 'Bosnie-Herzégovine',  flag: '🇧🇦', born: 2006 },
  { num: 6,  name: 'Samson Baidoo',    pos: 'D', nat: 'Autriche',            flag: '🇦🇹', born: 2004, photo: 'images/players/baidoo.jpg' },
  { num: 13, name: 'Jhoanner Chávez',  pos: 'D', nat: 'Équateur',            flag: '🇪🇨', born: 2002, photo: 'images/players/chavez.jpg', desc: 'Latéral international équatorien, de retour de prêt.', matches: 10, goals: 1, assists: 0 },
  { num: 14, name: 'Matthieu Udol',    pos: 'D', nat: 'France',              flag: '🇫🇷', born: 1996, photo: 'images/players/udol.jpg' },
  { num: 23, name: 'Saud Abdulhamid',  pos: 'D', nat: 'Arabie saoudite',     flag: '🇸🇦', born: 1999, photo: 'images/players/abdulhamid.jpg' },
  { num: 24, name: 'Jonathan Gradit',  pos: 'D', nat: 'France',              flag: '🇫🇷', born: 1992, photo: 'images/players/gradit.jpg', matches: 29, goals: 0, assists: 0 },
  { num: 25, name: 'Ismaëlo Ganiou',   pos: 'D', nat: 'Burkina Faso',        flag: '🇧🇫', born: 2005 },
  { num: 32, name: 'Kyllian Antonio',  pos: 'D', nat: 'France',              flag: '🇫🇷', born: 2008, matches: 7, goals: 0, assists: 0 },
  { num: 41, name: 'Souleymane Sagnan', pos: 'D', nat: 'Mali',               flag: '🇲🇱', born: 2005, desc: 'Défenseur de retour de prêt.' },

  // ---- Milieux ----
  { num: 5,  name: 'Andrija Bulatović', pos: 'M', nat: 'Monténégro',         flag: '🇲🇪', born: 2006 },
  { num: 8,  name: 'Mamadou Sangaré',   pos: 'M', nat: 'Mali',               flag: '🇲🇱', born: 2002 },
  { num: null, name: 'Angelo Fulgini',  pos: 'M', nat: 'France',             flag: '🇫🇷', born: 1996, photo: 'images/players/fulgini.jpg', desc: 'Milieu offensif de retour au club après un prêt.', matches: 29, goals: 1, assists: 1 },
  { num: 21, name: 'Amadou Haidara',    pos: 'M', nat: 'Mali',               flag: '🇲🇱', born: 1998, photo: 'images/players/haidara.jpg', matches: 23, goals: 0, assists: 0 },
  { num: 27, name: 'Michaël Cuisance',  pos: 'M', nat: 'France',             flag: '🇫🇷', born: 1999, photo: 'images/players/cuisance.jpg', video: 'https://www.youtube.com/watch?v=mLYctPMyMos', desc: 'Recrue estivale 2026, arrivé du Hertha Berlin.' },
  { num: 31, name: 'Alpha Diallo',      pos: 'M', nat: 'France',             flag: '🇫🇷', born: 2006 },

  // ---- Attaquants ----
  { num: null, name: 'Thorgan Hazard',  pos: 'A', nat: 'Belgique',            flag: '🇧🇪', born: 1993, photo: 'images/players/hazard.jpg', video: 'https://www.youtube.com/watch?v=xnDn2XUqsJ8', desc: 'Ailier international belge (47 sél.), revenu à Lens où il a débuté avant Chelsea.' },
  { num: 7,  name: 'Florian Sotoca',   pos: 'A', nat: 'France',              flag: '🇫🇷', born: 1990, cap: true, photo: 'images/players/sotoca.jpg', video: 'https://www.youtube.com/watch?v=SLHa6BXnmW4', desc: 'Capitaine emblématique des Sang & Or.', matches: 31, goals: 1, assists: 1 },
  { num: 10, name: 'Florian Thauvin',  pos: 'A', nat: 'France',              flag: '🇫🇷', born: 1993, photo: 'images/players/thauvin.jpg', video: 'https://www.youtube.com/watch?v=z0tKqyzXdWg', desc: 'Ailier technique international, champion du monde 2018, arrivé à Lens en janvier 2025.' },
  { num: 11, name: 'Odsonne Édouard',  pos: 'A', nat: 'France',              flag: '🇫🇷', born: 1998, photo: 'images/players/edouard.jpg', video: 'https://www.youtube.com/watch?v=zDRbxEfxh5Q', desc: 'Attaquant formé au PSG, passé par le Celtic et Crystal Palace.' },
  { num: 19, name: 'Abdallah Sima',    pos: 'A', nat: 'Sénégal',             flag: '🇸🇳', born: 2001, photo: 'images/players/sima.jpg', video: 'https://www.youtube.com/watch?v=w3tp1BLeMJM' },
  { num: null, name: 'Goduine Koyalipou', pos: 'A', nat: 'Centrafrique',     flag: '🇨🇫', born: 2000, photo: 'images/players/koyalipou.jpg', desc: 'Attaquant de retour de prêt.', matches: 18, goals: 4, assists: 0 },
  { num: null, name: 'Jeremy Agbonifo', pos: 'A', nat: 'Suède',              flag: '🇸🇪', born: 2005, matches: 11, goals: 1, assists: 0 },
  { num: 36, name: 'Rémy Labeau-Lascary', pos: 'A', nat: 'France',           flag: '🇫🇷', born: 2003, desc: 'Jeune attaquant formé au RC Lens.', matches: 14, goals: 2, assists: 1 },
  { num: 38, name: 'Rayan Fofana',     pos: 'A', nat: 'France',              flag: '🇫🇷', born: 2006, desc: 'Jeune attaquant du centre de formation.', matches: 3, goals: 0, assists: 0 }
];
