let buildingListMk1 = [
	{id: 0,name: "caserne1",price: 2000,income: -50,ecologie: -3,economie: -5,bienEtre: 10},
	{id: 1,name : "centrale1",price: 5750, income : -150, ecologie: -18,economie: -15, bienEtre: 15},
	{id: 2,name : "commissariat1",price: 2000,income: -50,ecologie: -3, economie: -5,bienEtre: 10},
	{id: 3,name : "ecole1", price: 2500,income: -50,ecologie: -3,economie: -5,bienEtre: 10},
	{id: 4,name	: "hopital1", price : 5000, income: -50, ecologie: -3, economie: -5, bienEtre: 10},
	{id: 5,name : "poste1", price: 1500, income: -50,ecologie: -3,economie: -5,bienEtre: 10},
	{id: 6,name	: "centrale_hydrolique1", price: 9500, income : -350, ecologie : 30,economie : -35, bienEtre: -15},
	{id: 7,name : "panneau_solaire", price: 6500, income: -150, ecologie: 25, economie: -15, bienEtre: -5},
	{id: 8, name: "parc1", price: 1000, income: -75, ecologie: 15, economie: -5, bienEtre: 20},
	{id: 9, name: "usine_recyclage1", price: 7500, income: -250, ecologie: 30, economie: -20, bienEtre: -12},
	{id: 10, name: "banque1", price: 8500, income: 750, ecologie: -10, economie: 60, bienEtre: 10},
	{id: 11, name: "magasin1", price: 1500, income: 300, ecologie: -5, economie: 20, bienEtre: 10},
	{id: 12, name: "usine1", price: 5000, income: 700, ecologie: -25, economie: 40, bienEtre: -20},
	{id: 13, name: "mairie1", price: 5000, income: -50, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 14, name: "maison1", price: 1000, income: 100, ecologie: -3, economie: 3, bienEtre: 2, pop: 100},
];

//Si tous les bâtiments sont placés 1 fois : 625 d'income, 0 d'ecologie, 8 d'economie, 24 de bien etre

let buildingListMk2 = [
	{id: 0,name: "caserne2",price: 0,income: 0,ecologie: 0,economie: 0,bienEtre: 0},
	{id: 1,name : "centrale2",price: 0, income : 0, ecologie: 0,economie: 0, bienEtre: 0,population: 0},
	{id: 2,name : "commissariat2",price: 0,income: 0,ecologie: 0, economie: 0,bienEtre: 0},
	{id: 3,name : "ecole2", price: 0,income: 0,ecologie: 0,economie: 0,bienEtre: 0},
	{id: 4,name	: "hopital2", price : 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 5,name : "poste2", price: 0, income: 0,ecologie: 0,economie: 0,bienEtre: 0},
	{id: 6,name	: "centrale_hydrolique2", price: 0, income : 0, ecologie : 0,economie : 0, bienEtre: 0},
	{id: 7,name : "panneau_solaire2", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 8, name: "parc2", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 9, name: "usine_recyclage2", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 10, name: "banque2", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 11, name: "magasin2", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 12, name: "usine2", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 13, name: "mairie2", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 14, name: "maison2", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0, pop: 300}
];

let buildingListMk3 = [
	{id: 0,name: "caserne3",price: 0,income: 0,ecologie: 0,economie: 0,bienEtre: 0},
	{id: 1,name : "centrale3",price: 0, income : 0, ecologie: 0,economie: 0, bienEtre: 0,population: 0},
	{id: 2,name : "commissariat3",price: 0,income: 0,ecologie: 0, economie: 0,bienEtre: 0},
	{id: 3,name : "ecole3", price: 0,income: 0,ecologie: 0,economie: 0,bienEtre: 0},
	{id: 4,name	: "hopital3", price : 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 5,name : "poste3", price: 0, income: 0,ecologie: 0,economie: 0,bienEtre: 0},
	{id: 6,name	: "centrale_hydrolique3", price: 0, income : 0, ecologie : 0,economie : 0, bienEtre: 0},
	{id: 7,name : "panneau_solaire3", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 8, name: "parc3", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 9, name: "usine_recyclage3", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 10, name: "banque3", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 11, name: "magasin3", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 12, name: "usine3", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 13, name: "mairie3", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0},
	{id: 14, name: "maison3", price: 0, income: 0, ecologie: 0, economie: 0, bienEtre: 0, pop: 500}
];