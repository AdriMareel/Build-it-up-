class gameStat{
	constructor(){
		this.Income = 0;
		this.Bank = 10000;
		this.statEcologie = 0;
		this.statEconomie = 0;
		this.statBienEtre = 0;
		this.listeBatiment = [];
		this.Pop = 0;

	}

	saveBatiment(name){
		this.listeBatiment.append(name);
	}

	updateIncome(){
		if(this.listeBatiment == null) {return 0;}
		else{
			for(let i = 0; i < this.listeBatiment.length; i++){
				for(let j = 0; j < buildingListMk1.length; j++){
					if(this.listeBatiment[i] == buildingListMk1[j].name){
						this.income += buildingListMk1[j].income;
					}
				}
				for(let k = 0; k < buildingListMk2.length; k++){
					if(this.listeBatiment[i] == buildingListMk2[k].name){
						this.income += buildingListMk2[k].income;
					}
				}
				for(let l = 0; l < buildingListMk2.length; l++){
					if(this.listeBatiment[i] == buildingListMk3[l].name){
						this.income += buildingListMk3[l].income;
					}
				}
			}
		}
	}

	updateEcologie(){
		if(this.listeBatiment == null) {return 0;}
		else{
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
				for(let l = 0; l < buildingListMk2.length; l++){
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
				for(let l = 0; l < buildingListMk2.length; l++){
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
				for(let l = 0; l < buildingListMk2.length; l++){
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
				for(let l = 0; l < buildingListMk2.length; l++){
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
}