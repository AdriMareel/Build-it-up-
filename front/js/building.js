class gameStat{
	constructor(){
		this.Income = 0;
		this.Bank = 100000;
		this.Pop = 0;
		this.statEcologie = 0;
		this.statEconomie = 0;
		this.statBienEtre = 0;
		this.listeBatiment = [];
		this.listeTechno = [];
		this.description = "";
	}

	saveBatiment(name){
		this.listeBatiment.push(name);
	}

	saveTechno(name){
		this.listeTechno.push(name);
	}

	updateIncome(){
		if(this.listeBatiment == null) {return 0;}
		else{
			this.Income = 0;
			for(let i = 0; i < this.listeBatiment.length; i++){
				for(let j = 0; j < buildingListMk1.length; j++){
					if(this.listeBatiment[i] == buildingListMk1[j].name){
						this.Income += buildingListMk1[j].income;
					}
				}
				for(let k = 0; k < buildingListMk2.length; k++){
					if(this.listeBatiment[i] == buildingListMk2[k].name){
						this.Income += buildingListMk2[k].income;
					}
				}
				for(let l = 0; l < buildingListMk3.length; l++){
					if(this.listeBatiment[i] == buildingListMk3[l].name){
						this.Income += buildingListMk3[l].income;
					}
				}
			}
		}
	}

	updateEcologie(){
		if(this.listeBatiment == null) {return 0;}
		else{
			this.statEcologie = 0;
			for(let i = 0; i < this.listeBatiment.length; i++){
				for(let j = 0; j < buildingListMk1.length; j++){
					if(this.listeBatiment[i] == buildingListMk1[j].name){
						this.statEcologie += buildingListMk1[j].ecologie;
					}
				}
				for(let k = 0; k < buildingListMk2.length; k++){
					if(this.listeBatiment[i] == buildingListMk2[k].name){
						this.statEcologie += buildingListMk2[k].ecologie;
					}
				}
				for(let l = 0; l < buildingListMk3.length; l++){
					if(this.listeBatiment[i] == buildingListMk3[l].name){
						this.statEcologie += buildingListMk3[l].ecologie;
					}
				}
			}
		}
	}

	updateEconomie(){
		if(this.listeBatiment == null) {return 0;}
		else{
			this.statEconomie = 0;
			for(let i = 0; i < this.listeBatiment.length; i++){
				for(let j = 0; j < buildingListMk1.length; j++){
					if(this.listeBatiment[i] == buildingListMk1[j].name){
						this.statEconomie += buildingListMk1[j].economie;
					}
				}
				for(let k = 0; k < buildingListMk2.length; k++){
					if(this.listeBatiment[i] == buildingListMk2[k].name){
						this.statEconomie += buildingListMk2[k].economie;
					}
				}
				for(let l = 0; l < buildingListMk3.length; l++){
					if(this.listeBatiment[i] == buildingListMk3[l].name){
						this.statEconomie += buildingListMk3[l].economie;
					}
				}
			}
		}
	}

	updateBienEtre(){
		if(this.listeBatiment == null) {return 0;}
		else{
			this.statBienEtre = 0;
			for(let i = 0; i < this.listeBatiment.length; i++){
				for(let j = 0; j < buildingListMk1.length; j++){
					if(this.listeBatiment[i] == buildingListMk1[j].name){
						this.statBienEtre += buildingListMk1[j].bienEtre;
					}
				}
				for(let k = 0; k < buildingListMk2.length; k++){
					if(this.listeBatiment[i] == buildingListMk2[k].name){
						this.statBienEtre += buildingListMk2[k].bienEtre;
					}
				}
				for(let l = 0; l < buildingListMk3.length; l++){
					if(this.listeBatiment[i] == buildingListMk3[l].name){
						this.statBienEtre += buildingListMk3[l].bienEtre;
					}
				}
			}
		}
	}

	updatePop(){
		if(this.listeBatiment == null) {return 0;}
		else{
			this.Pop = 0;
			for(let i = 0; i < this.listeBatiment.length; i++){
				for(let j = 0; j < buildingListMk1.length; j++){
					if(this.listeBatiment[i] == buildingListMk1[j].name){
						this.Pop += buildingListMk1[j].pop;
					}
				}
				for(let k = 0; k < buildingListMk2.length; k++){
					if(this.listeBatiment[i] == buildingListMk2[k].name){
						this.Pop += buildingListMk2[k].pop;
					}
				}
				for(let l = 0; l < buildingListMk3.length; l++){
					if(this.listeBatiment[i] == buildingListMk3[l].name){
						this.Pop += buildingListMk3[l].pop;
					}
				}
			}
		}
	}

	updateBank(){
		this.Bank += this.Income;
	}

	getEconomie(){ return this.statEconomie; }

	getEcologie(){ return this.statEcologie; }

	getBienEtre(){ return this.statBienEtre; }

	getBank(){ return this.Bank; }

	getIncome(){ return this.Income; }

	getPop(){ return this.Pop; }

	getInfoBuilding(name){
		let info = [];
		for(let j = 0; j < buildingListMk1.length; j++){
			if(name == buildingListMk1[j].name){
				info[0] = buildingListMk1[j].name;
				info[1] = buildingListMk1[j].price;
				info[2] = buildingListMk1[j].income;
				info[3] = buildingListMk1[j].economie;
				info[4] = buildingListMk1[j].ecologie;
				info[5] = buildingListMk1[j].bienEtre;
				info[6] = buildingListMk1[j].pop;
				info[7] = buildingListMk1[j].description
				info[8] = buildingListMk1[j].nom;
			}
		}
		
		for(let k = 0; k < buildingListMk2.length; k++){
			if(name == buildingListMk2[k].name){
				info[0] = buildingListMk2[k].name;
				info[1] = buildingListMk2[k].price;
				info[2] = buildingListMk2[k].income;
				info[3] = buildingListMk2[k].economie;
				info[4] = buildingListMk2[k].ecologie;
				info[5] = buildingListMk2[k].bienEtre;
				info[6] = buildingListMk2[k].pop;
				info[7] = buildingListMk2[k].description;
				info[8] = buildingListMk2[k].nom;
			}
		}
		for(let l = 0; l < buildingListMk3.length; l++){
			if(name == buildingListMk3[l].name){
				info[0] = buildingListMk3[l].name;
				info[1] = buildingListMk3[l].price;
				info[2] = buildingListMk3[l].income;
				info[3] = buildingListMk3[l].economie;
				info[4] = buildingListMk3[l].ecologie;
				info[5] = buildingListMk3[l].bienEtre;
				info[6] = buildingListMk3[l].pop;
				info[7] = buildingListMk3[l].description;
				info[8] = buildingListMk3[l].nom;		
			}
		}
		return info;
	}

	setBank(price){
		this.Bank -= price;
	}

	getId(name){
		for(let i = 0; i < buildingListMk1.length; i++){
			if(name == buildingListMk1[i].name){
				return buildingListMk1[i].id;
			}
		}
	}
}