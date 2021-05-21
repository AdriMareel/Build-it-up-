class gameStat{
	constructor(){
		this.Income = 0;
		this.Bank = 10000;
		this.Pop = 0;
		this.statEcologie = 0;
		this.statEconomie = 0;
		this.statBienEtre = 0;
		this.listeBatiment = [];
	}

	saveBatiment(name){
		this.listeBatiment.push(name);
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
			}
		}
		
		for(let k = 0; k < buildingListMk2.length; k++){
			if(name == buildingListMk2[k].name){
				info[0] = buildingListMk2[j].name;
				info[1] = buildingListMk2[j].price;
				info[2] = buildingListMk2[j].income;
				info[3] = buildingListMk2[j].economie;
				info[4] = buildingListMk2[j].ecologie;
				info[5] = buildingListMk2[j].bienEtre;
				info[6] = buildingListMk2[j].pop;
			}
		}
		for(let l = 0; l < buildingListMk3.length; l++){
			if(name == buildingListMk3[l].name){
				info[0] = buildingListMk3[j].name;
				info[1] = buildingListMk3[j].price;
				info[2] = buildingListMk3[j].income;
				info[3] = buildingListMk3[j].economie;
				info[4] = buildingListMk3[j].ecologie;
				info[5] = buildingListMk3[j].bienEtre;
				info[6] = buildingListMk3[j].pop;				
			}
		}
		return info;
	}
}