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
    }
    create(){
      this.scene.start("playmenu");

    }
}
