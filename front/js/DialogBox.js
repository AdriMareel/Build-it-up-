class DialogBox extends Phaser.Scene{
	constructor(){
		super('DialogBox');
	}
    
    create(){
        this.girl = this.add.sprite(game.config.width * 0.15, game.config.height * 0.70, "girl");
        this.girl.displayWidth = 500;
        this.girl.scaleY = this.girl.scaleX;
        this.girl.depth = 100;
 
        let label = 'salut les mecs';
        let label2 = 'vous etes trop beau wouhou';

        let line = [];

        this.label = this.add.text(500, 600).setWordWrapWidth(400);

        this.typewriteTextWrapped(label);

        this.box = this.add.sprite(game.config.width * 0.20, game.config.height * 0.50, "box");
        //set the width of the sprite
        this.box.displayWidth = 500;
        //scale evenly
        this.box.scaleX = 1;
        this.box.depth = 120;
        this.box.setOrigin(0,0);

        this.input.once('pointerdown', function () {
            this.label.setVisible(false);
        });


        this.input.once('pointerdown', function () {
            this.scene.sleep('DialogBox');
            this.scene.resume('MainScene');

        }, this);
    }
        
    typewriteText(text){
        const length = text.length;
        let i = 0;
        this.time.addEvent({
            callback: () => {
                this.label.text += text[i];
                ++i;
        },
        repeat: length - 1,
        delay: 100
    });

}
    typewriteTextWrapped(text){
        const lines = this.label.getWrappedText(text)
        const wrappedText = lines.join('\n')
        this.typewriteText(wrappedText)
}

    nextLine(){}
}

