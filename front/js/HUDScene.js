class HUDScene extends Phaser.Scene{
	create () {
      //Boutton qui gère la liste des bâtiments
		  this.button = this.add.sprite(1070, 750, "Bâtiments");
      this.button.displayWidth = 200;
      this.button.scaleY = this.button.scaleX;
      this.button.depth = 100;
      this.button.setInteractive({  useHandCursor: true});
      this.button.on('pointerdown', () => this.openBuildingList());
      this.button.setOrigin(-3, 0);
      this.button.setScrollFactor(0);
      this.button.fixedToCamera = true;

  	   //timer      
       this.counter = 0;
       this.timer = this.time.addEvent({
          delay: 24000,
          callback:this.updateDay,
          callbackScope:this,
          repeat: 100000
      });

       this.timerMAJ = this.time.addEvent({
          delay: 100,
          callback:this.updateEverything,
          callbackScope:this,
          repeat: 100000
      });

      this.text = this.add.text(10, 860, 'Jour 0', { fill: 0xffffff, font: 'bold 36px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //Affichage Stat
      //Economie
      this.barEconomie = new Phaser.GameObjects.Graphics(this);
      this.add.existing(this.barEconomie);
      this.barEconomie.fillStyle(0xFF9900);
      this.textEconomie = this.add.text(15, 24, 'Economie', { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      this.rEconomie = this.add.rectangle(160, 34, 300, 20);
      this.rEconomie.setStrokeStyle(2, 0x080808);
      this.lineEconomie = this.add.line(50, -30, 110, 65, 110, 85, 0x080808);

      //Ecologie
      this.barEcologie = new Phaser.GameObjects.Graphics(this);
      this.add.existing(this.barEcologie);
      this.barEcologie.fillStyle(0x38761D);
      this.textEcologie = this.add.text(15, 74, 'Ecologie', { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      this.rEcologie = this.add.rectangle(160, 84, 300, 20);
      this.rEcologie.setStrokeStyle(2, 0x080808);
      this.lineEcologie = this.add.line(50, -30, 110, 115, 110, 135, 0x080808);

      //Bien Etre
      this.barBienEtre = new Phaser.GameObjects.Graphics(this);
      this.add.existing(this.barBienEtre);
      this.barBienEtre.fillStyle(0x0B5394);
      this.textBienEtre = this.add.text(15, 124, 'Bien être', { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      this.rBienEtre = this.add.rectangle(160, 134, 300, 20);
      this.rBienEtre.setStrokeStyle(2, 0x080808);
      this.lineBienEtre = this.add.line(50, -30, 110, 165, 110, 185, 0x080808);

      //Income
      this.iconeIncome = this.add.sprite(1770, 50, "income");
      this.iconeIncome.displayWidth = 60;
      this.iconeIncome.scaleY = this.iconeIncome.scaleX;
      this.iconeIncome.depth = 100;
      this.textIncome = this.add.text(1820, 40, '0', { fill: 0xffffff, font: 'bold 30px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //bank
      this.iconeBank = this.add.sprite(1610, 60, "bank");
      this.iconeBank.displayWidth = 60;
      this.iconeBank.scaleY = this.iconeBank.scaleX;
      this.iconeBank.depth = 100;
      this.textBank = this.add.text(1635, 42, '0', { fill: 0xffffff, font: 'bold 30px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //pop
      this.iconePopulation = this.add.sprite(1770, 120, "pop");
      this.iconePopulation.displayWidth = 75;
      this.iconePopulation.scaleY = this.iconePopulation.scaleX;
      this.iconePopulation.depth = 100;
      this.textPopulation = this.add.text(1820, 102, '0', { fill: 0xffffff, font: 'bold 30px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    }

    openBuildingList(){
      this.scene.launch('stat');
    }

    updateDay(){
      this.counter++;
      statistiques.updateBank();
      //if(this.counter >= 365){ this.endGame(); }
    }

    updateEverything(){
      statistiques.updateIncome();
      statistiques.updateEconomie();
      statistiques.updateEcologie();
      statistiques.updateBienEtre();
      statistiques.updatePop();

    }

    updateBar(){
      this.barEconomie.fillRect(160,25, 0, 20);
      this.barEcologie.fillRect(160,75, 0, 20);
      this.barBienEtre.fillRect(160,125, 0, 20);

      let econo = statistiques.getEconomie(), ecolo = statistiques.getEcologie(), bienE = statistiques.getBienEtre();

      //Economie
      if(econo*1.5 > 150){ this.barEconomie.fillRect(160,25, 150, 20);}
      else if(150 < econo*1.5 < 150){ this.barEconomie.fillRect(160,25, statistiques.getEconomie()*1.5, 20);}
      else if(econo*1.5 <= -150){ this.barBienEconomie.fillRect(160,125, -150, 20);}

      //Ecologie
      if(ecolo*1.5 > 150){ this.barEcologie.fillRect(160,75, 150, 20); }
      else if(150 < ecolo*1.5 < 150){ this.barEcologie.fillRect(160,75, statistiques.getEcologie()*1.5, 20); }
      else if(ecolo*1.5 <= -150){ this.barBienEcologie.fillRect(160,125, -150, 20);}
      //Bien Etre
      if(bienE*1.5 > 150){ this.barBienEtre.fillRect(160,125, 150, 20); }
      else if(150 < bienE*1.5 < 150){ this.barBienEtre.fillRect(160,125, statistiques.getBienEtre()*1.5, 20); }
      else if(bienE*1.5 <= -150){ this.barBienEtre.fillRect(160,125, -150, 20);}
    }

    update () {
      this.text.setText('Jour ' + this.counter.toFixed(0));
      this.textBank.setText(statistiques.getBank()/1000 + 'k');
      this.textIncome.setText(statistiques.getIncome()/1000 + 'k');
      this.textPopulation.setText(statistiques.getPop()/1000 + 'k');
      this.updateBar();
    }

}


class HUDStat extends Phaser.Scene{
  create(){
    let sousMenu1 = this.add.rectangle(960, 450, 600, 300, 0xffffff);

    //Close bouton
    this.closeButton = this.add.sprite(1230, 325, 'close');
    this.closeButton.displayWidth = 50;
    this.closeButton.scaleY = this.closeButton.scaleX;
    this.closeButton.depth = 200;
    this.closeButton.setInteractive({  useHandCursor: true});
    this.closeButton.on('pointerdown', () => this.close());

    //Menu Ecologie
    this.buttonEcologie = this.add.sprite(460, 370, 'ecologie');
    this.buttonEcologie.displayWidth = 200;
    this.buttonEcologie.scaleY = this.buttonEcologie.scaleX;
    this.buttonEcologie.depth = 200;
    this.buttonEcologie.setInteractive({  useHandCursor: true});
    this.buttonEcologie.on('pointerdown', () => this.openBuildingListEcologie());
    this.buttonEcologie.setOrigin(-3, 0);
    this.buttonEcologie.setScrollFactor(0);
    this.buttonEcologie.fixedToCamera = true;

    //Menu Moral
    this.buttonMoral = this.add.sprite(270,350, 'bienetre');
    this.buttonMoral.displayWidth = 200;
    this.buttonMoral.scaleY = this.buttonMoral.scaleX;
    this.buttonMoral.depth = 100;
    this.buttonMoral.setInteractive({  useHandCursor: true});
    this.buttonMoral.on('pointerdown', () => this.openBuildingListMoral());
    this.buttonMoral.setOrigin(-3, 0);
    this.buttonMoral.setScrollFactor(0);
    this.buttonMoral.fixedToCamera = true;

    //Menu Economie
    this.buttonEconomie = this.add.sprite(60, 340, 'economie');
    this.buttonEconomie.displayWidth = 200;
    this.buttonEconomie.scaleY = this.buttonEconomie.scaleX;
    this.buttonEconomie.depth = 100;
    this.buttonEconomie.setInteractive({  useHandCursor: true});
    this.buttonEconomie.on('pointerdown', () => this.openBuildingListEconomie());
    this.buttonEconomie.setOrigin(-3, 0);
    this.buttonEconomie.setScrollFactor(0);
    this.buttonEconomie.fixedToCamera = true;
  }
  
  openBuildingListMoral(){
    this.scene.launch('moral');
    this.scene.stop('stat');
  }

  openBuildingListEcologie(){
    this.scene.launch('ecologie');
    this.scene.stop('stat');
  }

  openBuildingListEconomie(){
    this.scene.launch('economie');
    this.scene.stop('stat');
  }

  close(){
    this.scene.stop('stat');
  }
}

class HUDBuildingListEcologie extends Phaser.Scene{
  create(){
    let sousMenuEcologie = this.add.rectangle(960, 450, 1500, 800, 0xffffff);

    //Close bouton
    this.closeButton = this.add.sprite(1680, 80, 'close');
    this.closeButton.displayWidth = 50;
    this.closeButton.scaleY = this.closeButton.scaleX;
    this.closeButton.depth = 200;
    this.closeButton.setInteractive({  useHandCursor: true});
    this.closeButton.on('pointerdown', () => this.close());

    //Text Bank 2
    this.textBank2 = this.add.text(1500, 70, "Vous avez : " + statistiques.getBank()/1000 + 'k', { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

    //Panneau Solaire
    this.buttonBuildingPSolaire = this.add.image(-1100,100, 'panneau_solaire');
    this.buttonBuildingPSolaire.setInteractive({  useHandCursor: true});
    this.buttonBuildingPSolaire.on('pointerdown', () => this.placeBuildingEcologie('panneau_solaire'));
    this.buttonBuildingPSolaire.setOrigin(-3, 0);
    this.buttonBuildingPSolaire.setScrollFactor(0);
    this.buttonBuildingPSolaire.fixedToCamera = true;
    this.prixPS = this.add.text(630, 460, buildingListMk1[7].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    this.textPS = this.add.text(590, 480, "Panneau Solaire", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

    //Centrale Hydrolique
    this.buttonBuildingCentraleHydrolique = this.add.image(-50,110, 'centrale_hydrolique1');
    this.buttonBuildingCentraleHydrolique.setInteractive({  useHandCursor: true});
    this.buttonBuildingCentraleHydrolique.on('pointerdown', () => this.placeBuildingEcologie('centrale_hydrolique1'));
    this.buttonBuildingCentraleHydrolique.setOrigin(-3, 0);
    this.buttonBuildingCentraleHydrolique.setScrollFactor(0);
    this.buttonBuildingCentraleHydrolique.fixedToCamera = true;
    this.prixHydro = this.add.text(1300, 460, buildingListMk1[6].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    this.textHydro = this.add.text(1240, 480, "Centrale Hydrolique", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

    //Parc
    this.buttonBuildingParc = this.add.image(-200,500, 'parc1');
    this.buttonBuildingParc.setInteractive({  useHandCursor: true});
    this.buttonBuildingParc.on('pointerdown', () => this.placeBuildingEcologie('parc1'));
    this.buttonBuildingParc.setOrigin(-3, 0);
    this.buttonBuildingParc.setScrollFactor(0);
    this.buttonBuildingParc.fixedToCamera = true;
    this.prixParc = this.add.text(620, 740, buildingListMk1[8].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    this.textParc = this.add.text(625, 760, "Parc", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

    //Usine Recyclage
    this.buttonBuildingUsineRecyclage = this.add.image(500,520, 'usine_recyclage1');
    this.buttonBuildingUsineRecyclage.setInteractive({  useHandCursor: true});
    this.buttonBuildingUsineRecyclage.on('pointerdown', () => this.placeBuildingEcologie('usine_recyclage1'));
    this.buttonBuildingUsineRecyclage.setOrigin(-3, 0);
    this.buttonBuildingUsineRecyclage.setScrollFactor(0);
    this.buttonBuildingUsineRecyclage.fixedToCamera = true;
    this.prixRecy = this.add.text(1340, 740, buildingListMk1[9].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    this.textRecy = this.add.text(1300, 760, "Usine Recyclage", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
  }

  placeBuildingEcologie(name){
    this.scene.stop('ecologie').stop('stat');
    statistiques.saveBatiment(name);
    var scene = this.scene.get("MainScene");
    var bat = scene.displaybatiment(name);
  }

  close(){
    this.scene.stop('ecologie').stop('stat');
  }
}

class HUDBuildingListMoral extends Phaser.Scene {
    create(){
      let sousMenuMoral = this.add.rectangle(960, 450, 1500, 800, 0xffffff);

      //Close bouton
      this.closeButton = this.add.sprite(1680, 80, 'close');
      this.closeButton.displayWidth = 50;
      this.closeButton.scaleY = this.closeButton.scaleX;
      this.closeButton.depth = 200;
      this.closeButton.setInteractive({  useHandCursor: true});
      this.closeButton.on('pointerdown', () => this.close());

      //Text Bank 2
      this.textBank2 = this.add.text(1500, 70, "Vous avez : " + statistiques.getBank()/1000 + 'k', { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //Caserne
      this.buttonBuildingCaserne = this.add.image(650,180, 'caserne1');
      this.buttonBuildingCaserne.setInteractive({useHandCursor: true});
      this.buttonBuildingCaserne.on('pointerdown', () => this.placeBuildingMoral('caserne1'));
      this.buttonBuildingCaserne.setOrigin(-3, 0);
      this.buttonBuildingCaserne.setScrollFactor(0);
      this.buttonBuildingCaserne.fixedToCamera = true;
      this.prixCaserne = this.add.text(1500, 440, buildingListMk1[0].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
      this.textCaserne = this.add.text(1492, 460, "Caserne", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //Maison
      this.buttonBuildingMaison = this.add.image(150, 500, 'maison1');
      this.buttonBuildingMaison.setInteractive({useHandCursor: true});
      this.buttonBuildingMaison.on('pointerdown', () => this.placeBuildingMoral('maison1'));
      this.buttonBuildingMaison.setOrigin(-3, 0);
      this.buttonBuildingMaison.setScrollFactor(0);
      this.buttonBuildingMaison.fixedToCamera = true;
      this.prixMaison = this.add.text(970, 750, buildingListMk1[14].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
      this.textMaison = this.add.text(965, 770, "Maison", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //Centrale
      this.buttonBuildingCentrale = this.add.image(500,500, 'centrale1');
      this.buttonBuildingCentrale.setInteractive({useHandCursor: true});
      this.buttonBuildingCentrale.on('pointerdown', () => this.placeBuildingMoral('centrale1'));
      this.buttonBuildingCentrale.setOrigin(-3, 0);
      this.buttonBuildingCentrale.setScrollFactor(0);
      this.buttonBuildingCentrale.fixedToCamera = true;
      this.prixCentrale = this.add.text(1350, 750, buildingListMk1[1].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
      this.textCentrale = this.add.text(1340, 770, "Centrale", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //Commissariat
      this.buttonBuildingCommissariat = this.add.image(250,180, 'commissariat1');
      this.buttonBuildingCommissariat.setInteractive({useHandCursor: true});
      this.buttonBuildingCommissariat.on('pointerdown', () => this.placeBuildingMoral('commissariat1'));
      this.buttonBuildingCommissariat.setOrigin(-3, 0);
      this.buttonBuildingCommissariat.setScrollFactor(0);
      this.buttonBuildingCommissariat.fixedToCamera = true;
      this.prixCommi = this.add.text(1100, 440, buildingListMk1[2].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
      this.textCommi = this.add.text(1070, 460, "Commissariat", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //Ecole
      this.buttonBuildingEcole = this.add.image(-250,500, 'ecole1');
      this.buttonBuildingEcole.setInteractive({useHandCursor: true});
      this.buttonBuildingEcole.on('pointerdown', () => this.placeBuildingMoral('ecole1'));
      this.buttonBuildingEcole.setOrigin(-3, 0);
      this.buttonBuildingEcole.setScrollFactor(0);
      this.buttonBuildingEcole.fixedToCamera = true;
      this.prixEcole = this.add.text(550, 750, buildingListMk1[3].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
      this.textEcole = this.add.text(552, 770, "Ecole", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //Hopital
      this.buttonBuildingHopital = this.add.image(-450,180, 'hopital1');
      this.buttonBuildingHopital.setInteractive({useHandCursor: true});
      this.buttonBuildingHopital.on('pointerdown', () => this.placeBuildingMoral('hopital1'));
      this.buttonBuildingHopital.setOrigin(-3, 0);
      this.buttonBuildingHopital.setScrollFactor(0);
      this.buttonBuildingHopital.fixedToCamera = true;
      this.prixHopital = this.add.text(350, 440, buildingListMk1[4].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
      this.textHopital = this.add.text(345, 460, "Hopital", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

      //Poste
      this.buttonBuildingPoste = this.add.image(-100,180, 'poste1');
      this.buttonBuildingPoste.setInteractive({useHandCursor: true});
      this.buttonBuildingPoste.on('pointerdown', () => this.placeBuildingMoral('poste1'));
      this.buttonBuildingPoste.setOrigin(-3, 0);
      this.buttonBuildingPoste.setScrollFactor(0);
      this.buttonBuildingPoste.fixedToCamera = true;
      this.prixPoste = this.add.text(750, 440, buildingListMk1[5].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
      this.textPoste = this.add.text(752, 460, "Poste", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    }

    placeBuildingMoral(name){
      this.scene.stop('moral').stop('stat');
      statistiques.saveBatiment(name);
      var scene = this.scene.get("MainScene");
      var bat = scene.displaybatiment(name);
   }

  close(){
    this.scene.stop('moral').stop('stat');
  }
}

class HUDBuildingListEconomie extends Phaser.Scene{
    create(){
    let sousMenuEconomie = this.add.rectangle(960, 450, 1500, 700, 0xffffff);

    //Close bouton
    this.closeButton = this.add.sprite(1680, 130, 'close');
    this.closeButton.displayWidth = 50;
    this.closeButton.scaleY = this.closeButton.scaleX;
    this.closeButton.depth = 200;
    this.closeButton.setInteractive({  useHandCursor: true});
    this.closeButton.on('pointerdown', () => this.close());

    //Text Bank 2
    this.textBank2 = this.add.text(1500, 120,"Vous avez : " + statistiques.getBank()/1000 + 'k', { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

    //Banque
    this.buttonBuildingBanque = this.add.image(-750,150, 'banque1');
    this.buttonBuildingBanque.setInteractive({  useHandCursor: true});
    this.buttonBuildingBanque.on('pointerdown', () => this.placeBuildingEconomie('banque1'));
    this.buttonBuildingBanque.setOrigin(-3, 0);
    this.buttonBuildingBanque.setScrollFactor(0);
    this.buttonBuildingBanque.fixedToCamera = true;
    this.prixBanque = this.add.text(970, 650, buildingListMk1[10].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    this.textBanque = this.add.text(960, 675, "Banque", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

    //Magasin
    this.buttonBuildingMagasin = this.add.image(-350,300, 'magasin1');
    this.buttonBuildingMagasin.setInteractive({  useHandCursor: true});
    this.buttonBuildingMagasin.on('pointerdown', () => this.placeBuildingEconomie('magasin1'));
    this.buttonBuildingMagasin.setOrigin(-3, 0);
    this.buttonBuildingMagasin.setScrollFactor(0);
    this.buttonBuildingMagasin.fixedToCamera = true;
    this.prixMagasin = this.add.text(500, 550, buildingListMk1[11].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    this.textMagasin = this.add.text(490, 575, "Magasin", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);

    //Usine
    this.buttonBuildingUsine = this.add.image(550,300, 'usine1');
    this.buttonBuildingUsine.setInteractive({  useHandCursor: true});
    this.buttonBuildingUsine.on('pointerdown', () => this.placeBuildingEconomie('usine1'));
    this.buttonBuildingUsine.setOrigin(-3, 0);
    this.buttonBuildingUsine.setScrollFactor(0);
    this.buttonBuildingUsine.fixedToCamera = true;
    this.prixUsine = this.add.text(1400, 550, buildingListMk1[12].price +"$", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    this.textUsine = this.add.text(1400, 575, "Usine", { fill: 0xffffff, font: 'bold 18px system-ui' }).setShadow(2, 2, 0xffff00, 8);
  }

  placeBuildingEconomie(name){
    this.scene.stop('economie').stop('stat');
    statistiques.saveBatiment(name);
    var scene = this.scene.get("MainScene");
    var bat = scene.displaybatiment(name); 
  }

  close(){
    this.scene.stop('economie').stop('stat');
  }
}
