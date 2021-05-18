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

      //Boutton qui bloque la camera
      this.buttonFl = this.add.sprite(800, 750, "fleche");
      this.buttonFl.displayWidth = 200;
      this.buttonFl.scaleY = this.buttonFl.scaleX;
      this.buttonFl.depth = 100;

      this.buttonFl.setInteractive({  useHandCursor: true});
      this.buttonFl.on('pointerdown', () => this.lockCam());

      this.buttonFl.setOrigin(-3, 0);

      this.buttonFl.setScrollFactor(0);
      this.buttonFl.fixedToCamera = true;
  	}

  	openBuildingList(){
      this.scene.launch('stat');
	}

    lockCam(){
      check(true);
    }

  update () {}

}


class HUDStat extends Phaser.Scene{
  create(){
    let sousMenu1 = this.add.rectangle(960, 450, 600, 350, 0xffffff);
    //Menu Ecologie
    this.buttonEcologie = this.add.sprite(460, 375, 'ecologie');
    this.buttonEcologie.displayWidth = 200;
    this.buttonEcologie.scaleY = this.buttonEcologie.scaleX;
    this.buttonEcologie.depth = 100;
    this.buttonEcologie.setInteractive({  useHandCursor: true});
    this.buttonEcologie.on('pointerdown', () => this.openBuildingListEcologie());

    this.buttonEcologie.setOrigin(-3, 0);

    this.buttonEcologie.setScrollFactor(0);
    this.buttonEcologie.fixedToCamera = true;

    //Menu Moral
    this.buttonMoral = this.add.sprite(270,375, 'bienetre');
    this.buttonMoral.displayWidth = 200;
    this.buttonMoral.scaleY = this.buttonMoral.scaleX;
    this.buttonMoral.depth = 100;
    this.buttonMoral.setInteractive({  useHandCursor: true});
    this.buttonMoral.on('pointerdown', () => this.openBuildingListMoral());

    this.buttonMoral.setOrigin(-3, 0);

    this.buttonMoral.setScrollFactor(0);
    this.buttonMoral.fixedToCamera = true;

    //Menu Economie
    this.buttonEconomie = this.add.sprite(60, 375, 'economie');
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
    let sousMenuEcologie = this.add.rectangle(960, 450, 1000, 1000, 0xffff00);

    this.buttonBuildingEcologie = this.add.image(-1000,100, 'building');

    this.buttonBuildingEcologie.setInteractive({  useHandCursor: true});
    this.buttonBuildingEcologie.on('pointerdown', () => this.placeBuildingEcologie());

    this.buttonBuildingEcologie.setOrigin(-3, 0);

    this.buttonBuildingEcologie.setScrollFactor(0);
    this.buttonBuildingEcologie.fixedToCamera = true;
  }

  placeBuildingEcologie(){
    this.scene.stop('ecologie').stop('stat');
      //var building = this.add.image(30,30, "building");
      //building.setInteractive();
      //this.input.on('pointerdown', this.startDrag, this); 
  }
}

class HUDBuildingListMoral extends Phaser.Scene{
    create(){
      let sousMenuMoral = this.add.rectangle(960, 450, 1000, 1000, 0xff0000);
      this.buttonBuildingMoral = this.add.image(-1000,100, 'building');


      this.buttonBuildingMoral.setInteractive({  useHandCursor: true});
      this.buttonBuildingMoral.on('pointerdown', () => this.placeBuildingMoral());

      this.buttonBuildingMoral.setOrigin(-3, 0);

      this.buttonBuildingMoral.setScrollFactor(0);
      this.buttonBuildingMoral.fixedToCamera = true;
    }

    placeBuildingMoral(){
      this.scene.stop('moral').stop('stat');
      //var building = this.add.image(30,30, "building");
      //building.setInteractive();
      //this.input.on('pointerdown', this.startDrag, this);
    }
}

class HUDBuildingListEconomie extends Phaser.Scene{
    create(){
      let sousMenuEconomie = this.add.rectangle(960, 450, 1000, 1000, 0xfff000);
      this.buttonBuildingEconomie = this.add.image(-1000,100, 'building');


      this.buttonBuildingEconomie.setInteractive({  useHandCursor: true});
      this.buttonBuildingEconomie.on('pointerdown', () => this.placeBuildingEconomie());

      this.buttonBuildingEconomie.setOrigin(-3, 0);

      this.buttonBuildingEconomie.setScrollFactor(0);
      this.buttonBuildingEconomie.fixedToCamera = true;
  }

  placeBuildingEconomie(){
    this.scene.stop('economie').stop('stat');
      //var building = this.add.image(30,30, "building");
      //building.setInteractive();
      //this.input.on('pointerdown', this.startDrag, this); 
    }
}