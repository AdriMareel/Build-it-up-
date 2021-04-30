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

  	}

  	openBuildingList(){
		  console.log("clicked");
      let sousMenu1 = this.add.rectangle(960, 450, 600, 350, 0xffffff);
      //this.scene.launch('stat');
	}
  update () {}
}

/*
class HUDStat extends Phaser.Scene{
  create(){
    let sousMenu1 = this.add.rectangle(960, 450, 600, 350, 0xffffff);

    this.buttonEco = this.add.sprite(1070, 375, 'eco');
    this.buttonEco.displayWidth = 200;
    this.buttonEco.scaleY = this.button.scaleX;
    this.buttonEco.depth = 100;
    this.buttonEco.setInteractive({  useHandCursor: true});
    this.buttonEco.on('pointerdown', () => this.openBuildingListEco());

    this.buttonEco.setOrigin(-3, 0);

    this.buttonEco.setScrollFactor(0);
    this.buttonEco.fixedToCamera = true;


    this.buttonMoral = this.add.sprite(1000,375, 'bienetre');
    this.buttonMoral.displayWidth = 200;
    this.buttonMoral.scaleY = this.button.scaleX;
    this.buttonMoral.depth = 100;
    this.buttonMoral.setInteractive({  useHandCursor: true});
    this.buttonMoral.on('pointerdown', () => this.openBuildingListMoral());

    this.buttonMoral.setOrigin(-3, 0);

    this.buttonMoral.setScrollFactor(0);
    this.buttonMoral.fixedToCamera = true;
  }
  
  openBuildingListMoral(){
    this.scene.launch('moral');
  }

  openBuildingListMoral(){
    this.scene.launch('eco');
  }
}

class HUDBuildingListEco extends Phaser.Scene{
  create(){
    let sousMenuEco = this.add.rectangle(960, 450, 600, 350, 0xffff00);
  }
}

class HUDBuildingListMoral{
    create(){
    let sousMenuMoral = this.add.rectangle(960, 450, 600, 350, 0xff0000);
  }
}
*/