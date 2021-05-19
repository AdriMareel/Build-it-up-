class HUDScene extends Phaser.Scene{
	create () {
      this.counter = 0;
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
       this.timer = this.time.addEvent({
          delay: 24000,
          callback:this.updateDay,
          callbackScope:this,
          paused: false,
          repeat: 10000
      });

      this.text = this.add.text(10, 10, 'Jour : 0', { fill: 0xffffff, font: 'bold 36px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    }

    openBuildingList(){
      this.scene.launch('stat');
    }

    updateDay(){
      this.counter++;
      if(this.counter >= 365){this.endGame();}
    }

    update () {
      this.text
      .setText('Jour : ' + this.counter.toFixed(0));
    }
}


class HUDStat extends Phaser.Scene{
  create(){
    let sousMenu1 = this.add.rectangle(960, 450, 600, 300, 0xffffff);
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
}

class HUDBuildingListEcologie extends Phaser.Scene{
  create(){
    let sousMenuEcologie = this.add.rectangle(960, 450, 1500, 800, 0xffffff);

    //Panneau Solaire
    this.buttonBuildingPSolaire = this.add.image(-800,100, 'panneau_solaire');
    this.buttonBuildingPSolaire.setInteractive({  useHandCursor: true});
    this.buttonBuildingPSolaire.on('pointerdown', () => this.placeBuildingEcologie('panneau_solaire'));
    this.buttonBuildingPSolaire.setOrigin(-3, 0);
    this.buttonBuildingPSolaire.setScrollFactor(0);
    this.buttonBuildingPSolaire.fixedToCamera = true;

    //Centrale Hydrolique
    this.buttonBuildingCentraleHydrolique = this.add.image(50,100, 'centrale_hydrolique1');
    this.buttonBuildingCentraleHydrolique.setInteractive({  useHandCursor: true});
    this.buttonBuildingCentraleHydrolique.on('pointerdown', () => this.placeBuildingEcologie('centrale_hydrolique1'));
    this.buttonBuildingCentraleHydrolique.setOrigin(-3, 0);
    this.buttonBuildingCentraleHydrolique.setScrollFactor(0);
    this.buttonBuildingCentraleHydrolique.fixedToCamera = true;

    //Parc
    this.buttonBuildingParc = this.add.image(-400,200, 'parc1');
    this.buttonBuildingParc.setInteractive({  useHandCursor: true});
    this.buttonBuildingParc.on('pointerdown', () => this.placeBuildingEcologie('parc1'));
    this.buttonBuildingParc.setOrigin(-3, 0);
    this.buttonBuildingParc.setScrollFactor(0);
    this.buttonBuildingParc.fixedToCamera = true;

    //Usine Recyclage
    this.buttonBuildingUsineRecyclage = this.add.image(100,500, 'usine_recyclage1');
    this.buttonBuildingUsineRecyclage.setInteractive({  useHandCursor: true});
    this.buttonBuildingUsineRecyclage.on('pointerdown', () => this.placeBuildingEcologie('usine_recyclage1'));
    this.buttonBuildingUsineRecyclage.setOrigin(-3, 0);
    this.buttonBuildingUsineRecyclage.setScrollFactor(0);
    this.buttonBuildingUsineRecyclage.fixedToCamera = true;
  }

  placeBuildingEcologie(name){
    this.scene.stop('ecologie').stop('stat');
    var scene = this.scene.get("MainScene");
    var bat = scene.displaybatiment(name);
  }
}

class HUDBuildingListMoral extends Phaser.Scene {
    create(){
      let sousMenuMoral = this.add.rectangle(960, 450, 1500, 800, 0xffffff);

      //Caserne
      this.buttonBuildingCaserne = this.add.image(600,200, 'caserne1');
      this.buttonBuildingCaserne.setInteractive({useHandCursor: true});
      this.buttonBuildingCaserne.on('pointerdown', () => this.placeBuildingMoral('caserne1'));
      this.buttonBuildingCaserne.setOrigin(-3, 0);
      this.buttonBuildingCaserne.setScrollFactor(0);
      this.buttonBuildingCaserne.fixedToCamera = true;

      //Maison
      this.buttonBuildingMaison = this.add.image(100, 50, 'maison1');
      this.buttonBuildingMaison.setInteractive({useHandCursor: true});
      this.buttonBuildingMaison.on('pointerdown', () => this.placeBuildingMoral('maison1'));
      this.buttonBuildingMaison.setOrigin(-3, 0);
      this.buttonBuildingMaison.setScrollFactor(0);
      this.buttonBuildingMaison.fixedToCamera = true;

      //Centrale
      this.buttonBuildingCentrale = this.add.image(50,250, 'centrale1');
      this.buttonBuildingCentrale.setInteractive({useHandCursor: true});
      this.buttonBuildingCentrale.on('pointerdown', () => this.placeBuildingMoral('centrale1'));
      this.buttonBuildingCentrale.setOrigin(-3, 0);
      this.buttonBuildingCentrale.setScrollFactor(0);
      this.buttonBuildingCentrale.fixedToCamera = true;

      //Commissariat
      this.buttonBuildingCommissariat = this.add.image(-1100,350, 'commissariat1');
      this.buttonBuildingCommissariat.setInteractive({useHandCursor: true});
      this.buttonBuildingCommissariat.on('pointerdown', () => this.placeBuildingMoral('commissariat1'));
      this.buttonBuildingCommissariat.setOrigin(-3, 0);
      this.buttonBuildingCommissariat.setScrollFactor(0);
      this.buttonBuildingCommissariat.fixedToCamera = true;

      //Ecole
      this.buttonBuildingEcole = this.add.image(-400,200, 'ecole1');
      this.buttonBuildingEcole.setInteractive({useHandCursor: true});
      this.buttonBuildingEcole.on('pointerdown', () => this.placeBuildingMoral('ecole1'));
      this.buttonBuildingEcole.setOrigin(-3, 0);
      this.buttonBuildingEcole.setScrollFactor(0);
      this.buttonBuildingEcole.fixedToCamera = true;

      //Hopital
      this.buttonBuildingHopital = this.add.image(700,500, 'hopital1');
      this.buttonBuildingHopital.setInteractive({useHandCursor: true});
      this.buttonBuildingHopital.on('pointerdown', () => this.placeBuildingMoral('hopital1'));
      this.buttonBuildingHopital.setOrigin(-3, 0);
      this.buttonBuildingHopital.setScrollFactor(0);
      this.buttonBuildingHopital.fixedToCamera = true;

      //Poste
      this.buttonBuildingPoste = this.add.image(-400,500, 'poste1');
      this.buttonBuildingPoste.setInteractive({useHandCursor: true});
      this.buttonBuildingPoste.on('pointerdown', () => this.placeBuildingMoral('poste1'));
      this.buttonBuildingPoste.setOrigin(-3, 0);
      this.buttonBuildingPoste.setScrollFactor(0);
      this.buttonBuildingPoste.fixedToCamera = true;
    }

    placeBuildingMoral(name){
      this.scene.stop('moral').stop('stat');
      var scene = this.scene.get("MainScene");
      var bat = scene.displaybatiment(name);
   }
}

class HUDBuildingListEconomie extends Phaser.Scene{
    create(){
    let sousMenuEconomie = this.add.rectangle(960, 450, 1500, 700, 0xffffff);

    //Banque
    this.buttonBuildingBanque = this.add.image(-800,200, 'banque1');
    this.buttonBuildingBanque.setInteractive({  useHandCursor: true});
    this.buttonBuildingBanque.on('pointerdown', () => this.placeBuildingEconomie('banque1'));
    this.buttonBuildingBanque.setOrigin(-3, 0);
    this.buttonBuildingBanque.setScrollFactor(0);
    this.buttonBuildingBanque.fixedToCamera = true;

    //Magasin
    this.buttonBuildingMagasin = this.add.image(-400,300, 'magasin1');
    this.buttonBuildingMagasin.setInteractive({  useHandCursor: true});
    this.buttonBuildingMagasin.on('pointerdown', () => this.placeBuildingEconomie('magasin1'));
    this.buttonBuildingMagasin.setOrigin(-3, 0);
    this.buttonBuildingMagasin.setScrollFactor(0);
    this.buttonBuildingMagasin.fixedToCamera = true;

    //Usine
    this.buttonBuildingUsine = this.add.image(550,300, 'usine1');
    this.buttonBuildingUsine.setInteractive({  useHandCursor: true});
    this.buttonBuildingUsine.on('pointerdown', () => this.placeBuildingEconomie('usine1'));
    this.buttonBuildingUsine.setOrigin(-3, 0);
    this.buttonBuildingUsine.setScrollFactor(0);
    this.buttonBuildingUsine.fixedToCamera = true;
  }

  placeBuildingEconomie(name){
    this.scene.stop('economie').stop('stat');
    var scene = this.scene.get("MainScene");
    var bat = scene.displaybatiment(name); 
    }
}

