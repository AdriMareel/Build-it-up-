class preloadmenu extends Phaser.Scene{
    constructor(){
      super("preloadmenu");
    }
    preload(){
      // load all assets tile sprites
      this.load.image("skybg", "./images/skybg.jpg");
      this.load.image("city", "./images/city.png");
      this.load.image("exit", "./images/exit.png");
      this.load.image("play", "./images/play.png");
      this.load.image("options", "./images/options.png");
      // load spritesheet
      this.load.spritesheet("sonic", "./images/sonic.png",{
        frameWidth: 48,
        frameHeight: 44
      });

      //load game assets
      this.load.image('building','../images/building.png');
      this.load.image('build','../images/build.png');
      this.load.image("tiles", "images/terre.png");
      this.load.tilemapTiledJSON("map", "images/mapFinale.json");

      //load HUD
      this.load.image('Bâtiments', "images/batiment.png")
      this.load.image('ecologie', "images/eco.jpg");
      this.load.image('bienetre', "images/bienetre.jpg");
      this.load.image('economie', "images/economie.jpg");

      //Dialogue
      this.load.image('box', './images/dialog.png');
      this.load.image('girl', './images/girl.png');
    }
    
    create(){
      this.scene.start("playmenu");

    }
}
