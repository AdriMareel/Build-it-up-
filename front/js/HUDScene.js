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
	}

  update () {}
}