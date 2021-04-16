export default class MainScene extends Phaser.Scene{
	constructor(){
		super('MainScene');
	}
	preload(){
    	//affichage Grass
		this.load.image('building','../images/building.png');
		this.load.image("tiles", "images/terre.png");
    	this.load.tilemapTiledJSON("map", "images/map.json");
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

		var building = this.add.image(30,30, "building");
		building.setInteractive();
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

