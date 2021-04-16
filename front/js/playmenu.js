class playmenu extends Phaser.Scene {
  constructor() {
    super("playmenu");
  }
  create() {

    this.skybg = this.add.tileSprite(0, 0, game.config.width , game.config.height, "skybg");
    this.skybg.setOrigin(0, 0);
    this.skybg.setScrollFactor(0);


 

    // Add a second background layer. Repeat as in bg_1
    this.city = this.add.tileSprite(0, 0, game.config.width , game.config.height, "city");
    this.city.setOrigin(0, 0);
    this.city.setScrollFactor(0);
    // since this tile is shorter I positioned it at the bottom of he screen
    this.city.y = 21 * 22;
;
    

    // add sonic
    this.sonic = this.add.sprite(game.config.width * 1.5, game.config.height / 1.1, "sonic");
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
    update() {

 // move the sonic when the arrow keys are pressed
    /* if (this.cursors.left.isDown && this.sonic.x > 0) {
      this.sonic.x -= 3;
      this.sonic.scaleX = 1;

    } else if (this.cursors.right.isDown && this.sonic.x < game.config.width * 3) {
      this.sonic.x += 3;
      this.sonic.scaleX = -1;

    } */
    // scroll the texture of the tilesprites proportionally to the camera scroll

    this.city.tilePositionX += 0.6;
    this.skybg.tilePositionX += 0.3;




  }
 
}



