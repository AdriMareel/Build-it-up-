class MainScene extends Phaser.Scene{
	constructor(){
		super('MainScene');
	}

	create(){
		//Map
		const map = this.make.tilemap({ key: "map" });
    	const tileset = map.addTilesetImage("terre", "tiles");
    	const layer = map.createStaticLayer("Calque de Tuiles 1", tileset, 0, 0);


		//Gestion scroll
		var cam = this.cameras.main;

		this.input.on('pointermove', function (p) {
        	if (!p.isDown) return;
            	cam.scrollX -= (p.x - p.prevPosition.x) / cam.zoom;
            	cam.scrollY -= (p.y - p.prevPosition.y) / cam.zoom;
    	});
	
		//Zoom
		this.input.on("wheel",  (pointer, gameObjects, deltaX, deltaY) => {
			if (deltaY > 0) {
				if(cam.zoom > 0.35){
					cam.zoom -= .02;
				}
			}
			if (deltaY < 0) {
				if(cam.zoom < 1){
					cam.zoom += .02;
				}
			}
		});


		var building = this.add.image(30,30, "building");
		var build = this.add.image(100,30, "build");
		building.setInteractive();
		build.setInteractive();
		this.input.on('pointerdown', this.startDrag, this);	


		//ChatBox
		this.options = this.add.sprite(game.config.width * 0.47, game.config.height * 0.60, "options");
        this.options.displayWidth = 200;
        this.options.scaleY = this.options.scaleX;
    	this.options.depth = 100;
    	this.options.setInteractive({  useHandCursor: true});
  		this.options.on('pointerdown', () => this.clickButton());

        this.events.on('pause', function () {
            console.log('MainScene paused');
        })

        this.events.on('resume', function () {
            console.log('MainScene A resumed');
        })
    }

	clickButton() {
        this.scene.pause();
        this.scene.launch('DialogBox');
	}

	update(){}

	//Fonctions Drag&Drop 
	startDrag(pointer, targets){
		this.input.off('pointerdown', this.startDrag, this);
		this.dragObj = targets[0];
		this.input.on('pointermove', this.doDrag, this);
		this.input.on('pointerup', this.stopDrag, this);
	}

	doDrag(pointer){
		this.dragObj.x = pointer.x;
		this.dragObj.y = pointer.y;
	}

	stopDrag(){			
		this.input.on('pointerdown', this.startDrag, this);
		this.input.off('pointermove', this.doDrag, this);
		this.input.off('pointerup', this.stopDrag, this);
	}
}



