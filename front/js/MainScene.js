let isDragging = false;
building = "build";

class MainScene extends Phaser.Scene{
	constructor(){
		super('MainScene');
	}

	doDrag(pointer){
        this.dragObj.x = pointer.x;
        this.dragObj.y = pointer.y;
    }

    stopDrag(){      

		//this.dragObj.depth =- this.count;      
        this.input.on('pointerdown', this.startDrag, this);
        this.input.off('pointermove', this.doDrag, this);
        this.input.off('pointerup', this.stopDrag, this);
    }

    startDrag(pointer, targets){
        this.input.off('pointerdown', this.startDrag, this);
        this.dragObj = targets[0];
		//this.dragObj.depth = 100 + this.count;
        console.log(this.dragObj);
        if(this.dragObj != undefined){
            isDragging = true;
            this.input.on('pointermove', this.doDrag, this);
            this.input.on('pointerup', this.stopDrag, this);
        }
        else {
            isDragging = false;
            this.stopDrag();
        }
    }
    moveBuilding(posX,posY,building){// 0 < posX < 50 et 0 < posY < 50 Place le bâtiment en X Y 
        this.add.image( -(posX*386/2)+386/2+posY*386/2, posY*196/2 + posX*196/2 -196/2,building);
    }



	displaybatiment(building){
		console.log("test");
		building = this.add.image(30,30, building);
		building.depth = 0;
		building.setInteractive();
	}
	
	create(){
		//Map
		var cam = this.cameras.main;
	
		this.count = 0;
		const map = this.make.tilemap({ key: "map" });
    	const tileset = map.addTilesetImage("terre", "tiles");
    	const layer = map.createStaticLayer("Calque de Tuiles 1", tileset, 0, 0);
        let mapCoord = layer.layer;
        console.log(mapCoord);
        console.log("X: " + mapCoord.data[0][0].pixelX + " Y: " + mapCoord.data[0][0].pixelY);
        console.log("X: " + mapCoord.data[1][0].pixelX + " Y: " + mapCoord.data[1][0].pixelY);
        console.log("X: " + mapCoord.data[2][0].pixelX + " Y: " + mapCoord.data[2][0].pixelY);
        console.log(layer);

    	let maison = new Building(buildingList[1].name,buildingList[1].price,buildingList[1].income,buildingList[1].economie,buildingList[1].ecologie,buildingList[1].bienEtre,155,155);
		console.log(maison);

		//Gestion scroll
		this.input.on('pointermove', function (p) {
            if (!p.isDown) return; 
            if (isDragging) return; 
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
			if (deltaY < 0){
				if(cam.zoom < 1){
					cam.zoom += .02;
				}
			}
		});

		this.displaybatiment(building);
		//var building = this.add.image(30,30, "building");
		//var build = this.add.image(100,30, "build");
		//building.depth = 0;
		//build.depth = 1;
		//building.setInteractive();
		//build.setInteractive();
		this.input.on('pointerdown', this.startDrag, this);	
		

        
		this.input.on('pointerdown', this.startDrag, this);
        
	   
		//ChatBox
		this.options = this.add.sprite(game.config.width * 0.47, game.config.height * 0.60, "options");
        this.options.displayWidth = 200;
        this.options.scaleY = this.options.scaleX;
    	this.options.depth = 100;
    	this.options.setInteractive({useHandCursor: true});
  		this.options.on('pointerdown', () => this.clickButton());

        this.events.on('pause', function () {
            console.log('MainScene paused');
        })

        this.events.on('resume', function () {
            console.log('MainScene resumed');
        })
		
    }

	clickButton() {
        this.scene.pause();
        this.scene.launch('DialogBox');
	}

	update(){
	}
}



