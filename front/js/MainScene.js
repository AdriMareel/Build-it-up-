class MainScene extends Phaser.Scene{
	constructor(){
		super('MainScene');
	}
	preload(){
    	//affichage Grass
		this.load.image('building','../images/building.png');
		this.load.image('build','../images/build.png');
		this.load.image("tiles", "images/terre.png");
    	this.load.tilemapTiledJSON("map", "images/mapFinale.json");
	}

	create(){
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
		

		//zoom

		this.input.on("wheel",  (pointer, gameObjects, deltaX, deltaY) => {
			//this.cameras.main.setZoom(0.3);
			if (deltaY > 0) {
				console.log(cam.zoom);
				if(cam.zoom > 0.35){
					cam.zoom -= .02;
					console.log(cam.zoom);
				}
			
			
			}
		  
			if (deltaY < 0) {
				if(cam.zoom < 1){
					cam.zoom += .02;
					console.log(cam.zoom);
				}
				//console.log(cam.zoom);


			}

		  });


		var building = this.add.image(30,30, "building");
		var build = this.add.image(100,30, "build");
		building.setInteractive();
		build.setInteractive();
		this.input.on('pointerdown', this.startDrag, this);	
	}

	update(){}

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



