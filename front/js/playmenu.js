class playmenu extends Phaser.Scene {
  constructor() {
    super("playmenu");
  }

  create() {

    this.play = this.add.sprite(game.config.width * 0.47, game.config.height * 0.40, "play");
    //set the width of the sprite
            this.play.displayWidth = 200;
            //scale evenly
            this.play.scaleY = this.play.scaleX;

    this.play.depth = 100;

    this.play.setInteractive({  useHandCursor: true});
    this.play.on('pointerdown', () => this.clickButton());


    this.exit = this.add.sprite(game.config.width * 0.47, game.config.height * 0.50, "exit");
    //set the width of the sprite
            this.exit.displayWidth = 200;
            //scale evenly
            this.exit.scaleY = this.play.scaleX;

    this.exit.depth = 100;


    this.options = this.add.sprite(game.config.width * 0.47, game.config.height * 0.60, "options");
    //set the width of the sprite
            this.options.displayWidth = 200;
            //scale evenly
            this.options.scaleY = this.options.scaleX;

    this.options.depth = 100;


    this.play.setOrigin(0, 0);
    this.play.setScrollFactor(0);
    this.exit.setOrigin(0, 0);
    this.exit.setScrollFactor(0);
    this.options.setOrigin(0, 0);
    this.options.setScrollFactor(0);

    this.skybg = this.add.tileSprite(0, 0, game.config.width , game.config.height, "skybg");
    this.skybg.setOrigin(0, 0);
    this.skybg.setScrollFactor(0);


 

    // Add a second background layer. Repeat as in bg_1
    this.city = this.add.tileSprite(0, 0, game.config.width , game.config.height, "city");
    this.city.setOrigin(0, 0);
    this.city.setScrollFactor(0);
    // since this tile is shorter I positioned it at the bottom of he screen
    this.city.y = 21 * 22;
    

    // add sonic
    this.sonic = this.add.sprite(game.config.width * 1.5, game.config.height / 1.07, "sonic");
    //set the width of the sprite
            this.sonic.displayWidth = 200;
            //scale evenly
            this.sonic.scaleY = this.sonic.scaleX;


    // create an animation for the sonic
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers('sonic', { frames: [ 5, 6, 7] }),
      frameRate: 60,
      repeat: -1
    });
    this.sonic.play("run");
    // allow key inputs to control the sonic
    this.cursors = this.input.keyboard.createCursorKeys();

    this.myCam = this.cameras.main;
    this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);

    // making the camera follow the sonic
    this.myCam.startFollow(this.sonic);

    
  



  }
  clickButton() {
    this.scene.switch('MainScene');
}

    update() {

 // move the sonic when the arrow keys are pressed
     if (this.cursors.left.isDown && this.sonic.x > 0) {
      this.sonic.x -= 3;
      this.sonic.scaleX = 1;

    } else if (this.cursors.right.isDown && this.sonic.x < game.config.width * 3) {
      this.sonic.x += 3;
      this.sonic.scaleX = -1;

    } 
    // scroll the texture of the tilesprites proportionally to the camera scroll

      this.city.tilePositionX += 2;
    this.skybg.tilePositionX += 1;




  }
 
}


