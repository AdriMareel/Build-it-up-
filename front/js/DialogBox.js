class DialogBox extends Phaser.Scene{
	constructor(){
		super('DialogBox');
	}

    create(){
        this.girl = this.add.sprite(game.config.width * 0.15, game.config.height * 0.70, "girl");
        this.girl.displayWidth = 500;
        this.girl.scaleY = this.girl.scaleX;

        this.girl.depth = 100;
 
		    let content = [
        "je suce des bites"
        ];

        this.box = this.add.sprite(game.config.width * 0.20, game.config.height * 0.50, "box");
        this.box.displayWidth = 500;
        this.box.scaleX = 1;
        this.box.depth = 120;
        this.box.setOrigin(0,0);

        let graphics = this.make.graphics();

        graphics.fillRect(152, 133, 320, 250);

        let mask = new Phaser.Display.Masks.GeometryMask(this, graphics);

        let text = this.add.text(500, 600, content, {  font: '60px Arial', color: '#000000', wordWrap: { width: 310 } }).setOrigin(0);
        text.setMask(mask);


        this.input.once('pointerdown', function () {
            this.scene.sleep('DialogBox');
            this.scene.resume('MainScene');
        }, this);
    }
};

