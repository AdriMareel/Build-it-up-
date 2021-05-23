let buildingListMk1 = [
	{id: 0,name: "caserne1", nom: "Caserne niveau 1", price: 2000, income: -50, ecologie: -3, economie: -5, bienEtre: 5, pop: 0, description: "", x:0,y:-10},
	{id: 1,name : "centrale1", nom: "Centrale niveau 1",  price: 5750, income: -150, ecologie: -12, economie: -7, bienEtre: 9, pop: 0, description: "",x:0, y:-30},
	{id: 2,name : "commissariat1", nom: "Commissariat niveau 1",  price: 2000, income: -50, ecologie: -5, economie: -2, bienEtre: 5, pop: 0, description: "",x:0, y: -10},
	{id: 3,name : "ecole1", nom: "Ecole niveau 1",  price: 2500, income: -50, ecologie: -3, economie: -5, bienEtre: 5, pop: 0, description: "", x:30, y:-10},
	{id: 4,name	: "hopital1", nom: "Hôpital niveau 1",  price : 5000, income: -50, ecologie: -3, economie: -5, bienEtre: 5, pop: 0, description: "",x:50, y: -50},
	{id: 5,name : "poste1", nom: "Poste niveau 1",  price: 1500, income: -50, ecologie: -3, economie: -5, bienEtre: 5, pop: 0, description: "",x:0, y: -10},
	{id: 6,name	: "centrale_hydraulique1", nom: "Centrale hydraulique niveau 1",  price: 9500, income : -350, ecologie : 10, economie : -15, bienEtre: -10, pop: 0, description: "",  x: -70, y:-40},
	{id: 7,name : "panneau_solaire", nom: "Panneau solaire niveau 1",  price: 6500, income: -150, ecologie: 10, economie: -9, bienEtre: -5, pop: 0, description: "", x: 0, y:-100},
	{id: 8, name: "parc1", nom: "Parc niveau 1",  price: 1000, income: -75, ecologie: 10, economie: -5, bienEtre: 10, pop: 0, description: "", x: 0,y:-10},
	{id: 9, name: "usine_recyclage1", nom: "Usine de recyclage niveau 1",  price: 7500, income: -250, ecologie: 15, economie: -15, bienEtre: -10, pop: 0, description: "", x: 0,y:-10},
	{id: 10, name: "banque1", nom: "Banque niveau 1",  price: 8500, income: 750, ecologie: -10, economie: 20, bienEtre: 5, pop: 0, description: "La banque est un batiment essentiel quelque soit la ville car elle permet d'augmenter grandement son éconameie",x:30, y: -180},
	{id: 11, name: "magasin1", nom: "Magasin niveau 1",  price: 1500, income: 300, ecologie: -8, economie: 15, bienEtre: 5, pop: 0, description: "",x:0, y: -10},
	{id: 12, name: "usine1", nom: "Usine niveau 1",  price: 5000, income: 700, ecologie: -30, economie: 14, bienEtre: -10, pop: 0, description: "", x:20, y: -10},
	{id: 13, name: "mairie1", nom: "Mairie niveau 1",  price: 5000, income: -50, ecologie: 0, economie: 0, bienEtre: 0, pop: 0, description: "", x:0,y:-40},
	{id: 14, name: "maison1", nom: "Maison niveau 1",  price: 1000, income: 100, ecologie: -8, economie: 5, bienEtre: 2, pop: 100, description: "",x:0,y:-40},
];

let buildingListMk2 = [
	{id: 0,name: "caserne2", nom: "Caserne niveau 2",  price: 3500, income: -30, ecologie: -3, economie: -2.5, bienEtre: 10, pop: 0, description: "",x:100,y:-100},
	{id: 1,name : "centrale2", nom: "Centrale niveau 2",  price: 8000, income : -120, ecologie: -8, economie: -5, bienEtre: 12, pop: 0, description: "",x:0,y:0},
	{id: 2,name : "commissariat2", nom: "Commissariat niveau 2",  price: 3500, income: -30, ecologie: -3, economie: -2.5, bienEtre: 10, pop: 0, description: "",x:0,y:0},
	{id: 3,name : "ecole2", nom: "Ecole niveau 2",  price: 3500, income: -30, ecologie: -3, economie: -2.5, bienEtre: 10, pop: 0, description: "",x:0,y:0},
	{id: 4,name	: "hopital2", nom: "Hopital niveau 2",  price : 3500, income: -30, ecologie: -3, economie: -2.5, bienEtre: 10, pop: 0, description: "",x:0,y:0},
	{id: 5,name : "poste2", nom: "Poste niveau 2",  price: 3500, income: -30, ecologie: -3, economie: -2.5, bienEtre: 10, pop: 0, description: "",x:0,y:0},
	{id: 6,name	: "centrale_hydraulique2", nom: "Centrale hydraulique niveau 2",  price: 12000, income : -250, ecologie : 20, economie : -9, bienEtre: -7, pop: 0, description: "",x:0,y:0},
	{id: 7,name : "panneau_solaire2", nom: "Panneau solaire niveau 2",  price: 9000, income: -150, ecologie: 15, economie: -5, bienEtre: -3, pop: 0, description: "",x:0,y:0},
	{id: 8, name: "parc2", nom: "Parc niveau 2",  price: 2500, income: -80, ecologie: 15, economie: -8, bienEtre: 13, description: "",x:0,y:0},
	{id: 9, name: "usine_recyclage2", nom: "Usine de recyclage niveau 2",  price: 10000, income: -225, ecologie: 17, economie: -10, bienEtre: -5, pop: 0, description: "",x:0,y:0},
	{id: 10, name: "banque2", nom: "Banque niveau 2",  price: 12500, income: 1250, ecologie: -7, economie: 23, bienEtre: 7, pop: 0, description: "",x:0,y:0},
	{id: 11, name: "magasin2", nom: "Magasin niveau 2",  price: 2500, income: 450, ecologie: -5, economie: 18, bienEtre: 8, pop: 0, description: "",x:0,y:0},
	{id: 12, name: "usine2", nom: "Usine niveau 2",  price: 7500, income: 1000, ecologie: -20, economie: 19, bienEtre: -7, pop: 0, description: "",x:0,y:0},
	{id: 13, name: "mairie2", nom: "Mairie niveau 2",  price: 15000, income: 0, ecologie: 0, economie: 0, bienEtre: 0, pop: 0, description: "",x:-100,y:-100},
	{id: 14, name: "maison2", nom: "Maison niveau 2",  price: 2500, income: 200, ecologie: -3, economie: 8, bienEtre: 5, pop: 300, description: "",x:0,y:0}
];

let buildingListMk3 = [
	{id: 0,name: "caserne3", nom: "Caserne niveau 3",  price: 5000, income: -10, ecologie: 5, economie: -1, bienEtre: 20, pop: 0, description: "",x:0,y:-150},
	{id: 1,name : "centrale3", nom: "Centrale niveau 3",  price: 11000, income: -80, ecologie: -2, economie: -2, bienEtre: 15, pop: 0, description: "",x:0,y:0},
	{id: 2,name : "commissariat3", nom: "Commissariat niveau 3",  price: 5000, income: -10, ecologie: 1, economie: -1, bienEtre: 20, pop: 0, description: "",x:0,y:0},
	{id: 3,name : "ecole3", nom: "Ecole niveau 3",  price: 5000, income: -10, ecologie: 1, economie: -1, bienEtre: 20, pop: 0, description: "",x:0,y:0},
	{id: 4,name	: "hopital3", nom: "Hopital niveau 3",  price : 5000, income: -10, ecologie: 1, economie: -1, bienEtre: 20, pop: 0, description: "",x:0,y:0},
	{id: 5,name : "poste3", nom: "Poste niveau 3",  price: 5000, income: -10, ecologie: 1, economie: -1, bienEtre: 20, pop: 0, description: "",x:0,y:0},
	{id: 6,name	: "centrale_hydraulique3", nom: "Centrale hydrolique niveau 3",  price: 15000, income : -250, ecologie : 25, economie : -7, bienEtre: -5, pop: 0, description: "",x:0,y:0},
	{id: 7,name : "panneau_solaire3", nom: "Panneau solaire niveau 3",  price: 11000, income: -100, ecologie: 17, economie: -5, bienEtre: -1, pop: 0, description: "",x:0,y:0},
	{id: 8, name: "parc3", nom: "Parc niveau 3",  price: 4500, income: -70, ecologie: 18, economie: -5, bienEtre: 15, pop: 0, description: "",x:0,y:0},
	{id: 9, name: "usine_recyclage3", nom: "Usine de recyclage niveau 3",  price: 12000, income: -200, ecologie: 20, economie: -8, bienEtre: -2, pop: 0, description: "",x:0,y:0},
	{id: 10, name: "banque3", nom: "Banque niveau 3",  price: 15000, income: 1500, ecologie: -5, economie: 25, bienEtre: 8, pop: 0, description: "",x:0,y:0},
	{id: 11, name: "magasin3", nom: "Magasin niveau 3",  price: 4500, income: 600, ecologie: -2, economie: 20, bienEtre: -5, pop: 0, description: "",x:0,y:0},
	{id: 12, name: "usine3", nom: "Usine niveau 3",  price: 10000, income: 1200, ecologie: -15, economie: 22, bienEtre: -5, pop: 0, description: "",x:0,y:0},
	{id: 13, name: "mairie3", nom: "Mairie niveau 3",  price: 20000, income: 0, ecologie: 0, economie: 0, bienEtre: 0, pop: 0, description: "",x:-200,y:-200},
	{id: 14, name: "maison3", nom: "Maison niveau 3",  price: 4500, income: 250, ecologie: 0, economie: 10, bienEtre: 10, pop: 500, description: "",x:0,y:0}
];

let technologieT1 = [
	{id: 0, name: "feuMalvoyant", nom: "Feu Tricolore Malvoyant", price: 1000, ecologie: 0, economie: 0, bienEtre: 0, description: "Feu Tricolore Malvoyant."},
	{id: 1, name: "signalSonore", nom: "Signal Sonore", price: 1000, ecologie: 0, economie: 0, bienEtre: 0, description: "Signal Sonore pour Malvoyant."},
	{id: 2, name: "feuSmart", nom: "Feu Intelligent", price: 1000, ecologie: 0, economie: 0, bienEtre: 0, description: "Passe le feu au vert quand un véhicule de secours passe."},
	{id: 3, name: "peageVehiVert", nom: "Péage gratuit pour véhicule vert", price: 1000, ecologie: 0, economie: 0, bienEtre: 0, description: "Péage gratuit pour véhicule vert."},
	{id: 4, name: "e_Admin", nom: "e-administration", price: 1000, ecologie: 0, economie: 0, bienEtre: 0, description: "Application permettant de faire toutes les démarches administratives en ligne."},
	{id: 5, name: "dechetIntell", nom: "Système de gestion des déchets intelligents", price: 1000, ecologie: 0, economie: 0, bienEtre: 0, description: "Permet de trier les déchets de manière plus efficace."},
	{id: 6, name: "passageCamions", nom: "Passage des camions", price: 1000, ecologie: 0, economie: 0, bienEtre: 0, description: "Optimisation du passage des camions."},
	{id: 7, name: "capteurPoub", nom: "Capteur poubelle", price: 1000, ecologie: 0, economie: 0, bienEtre: 0, description: "Capteur pour voir si la poubelle est remplie ou non."},
	{id: 8, name: "LED", nom: "Lampadaire LED", price: 1000, ecologie: 0, economie: 0, bienEtre: 0, description: "Lampadaire LED."}
];

let technologieT2 = [
	{id: 0, name: "voitureElec", nom: "Voiture électrique", price: 2000, ecologie: 0, economie: 0, bienEtre: 0, description: "Voiture électrique."},
	{id: 1, name: "routeElec", nom: "Route qui recharge la batterie", price: 2000, ecologie: 0, economie: 0, bienEtre: 0, description: "Route qui recharge la batterie des voitures électriques"},
	{id: 2, name: "parkingSmart", nom: "Parking intelligent", price: 2000, ecologie: 0, economie: 0, bienEtre: 0, description: "Capteur sur parking, applications qui donne les places libres."},
	{id: 3, name: "bornes", nom: "Bornes connectées ", price: 2000, ecologie: 0, economie: 0, bienEtre: 0, description: "Bornes connectées guide les touristes, carte interactive."},
	{id: 4, name: "compacPoub", nom: "Compacteur poubelle", price: 2000, ecologie: 0, economie: 0, bienEtre: 0, description: "Compacteur sur la poubelle pour augmentater la capacité de stockage."},
	{id: 5, name: "IA_Trie", nom: "IA trie", price: 2000, ecologie: 0, economie: 0, bienEtre: 0, description: "IA permettant de facilité et d'améliorer davantage le tri des déchets."},
	{id: 6, name: "capteurMouv", nom: "Capteur de mouvement lampadaire", price: 2000, ecologie: 0, economie: 0, bienEtre: 0, description: "Permet de détecter la présence d'une personne la nuit pour allumer ou non un lampadaire."}
];

let technologieT3 = [
	{id: 0, name: "voitureAuto", nom: "Voiture autonome", price: 3000, ecologie: 0, economie: 0, bienEtre: 0, description: "Voiture capable d'aller à un point A à B sans conducteur"},
	{id: 1, name: "IAPolice", nom: "Robot policier", price: 3000, ecologie: 0, economie: 0, bienEtre: 0, description: "IA capable d'intéragir avec des personnes, peut localiser le danger et contacter les secours et intervenir en cas de danger."},
	{id: 2, name: "tuyauDech", nom: "Réseau de tuyaux souterrains pour déchets", price: 3000, ecologie: 0, economie: 0, bienEtre: 0, description: "Optimisation de la gestion des déchets."},
	{id: 3, name: "IAClean", nom: "Robot nettoyeur", price: 3000, ecologie: 0, economie: 0, bienEtre: 0, description: "Robot pour nettoyer les rues."},
	{id: 4, name: "capteurRes", nom: "Capteur sur les réseaux électriques, hydroliques", price: 3000, ecologie: 0, economie: 0, bienEtre: 0, description: "Capteur permettant de détecter les problèmes de fuites, dommages..."},
	{id: 5, name: "intelOpe", nom: "Intelligent operation center ", price: 3000, ecologie: 0, economie: 0, bienEtre: 0, description: "Visualisation de toutes les données, big data en temps réel de la ville"}	
];