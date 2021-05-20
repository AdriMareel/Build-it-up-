building = "build";
let isMovingCamera = false;

let mapVar = new Array(30);

for(let i=0;i<30;i++){
    mapVar[i] = new Array(30);
}

let batVar = new Array(30);

let batiments = new Array();

let flag = 0;

let isPlaced = new Array();
isPlaced["caserne1"] = false;

class MainScene extends Phaser.Scene{
	constructor(){
		super('MainScene');
	}

    moveBuilding(posX,posY){ // x et y entre 0 et 30
        building.x = posX;
        building.y = posY;
    }

    getPosInPixels(x,y){ //entre 0 et 30
        let tab = new Array(2);
        tab[0] = -(x*grassTile.width/2)+grassTile.width/2+y*grassTile.width/2;
        tab[1] = y * grassTile.height/2 + x*grassTile.height/2 + grassTile.height/2;
        return tab; 
    }

    getPosInCoord(x,y){ //x et y en pixels
        let coordX = - (toInteger(x/grassTile.width/2) - 1);
        let coordY;
        y = toInteger(y/grassTile.height/2);

        for (let i=0; i < y; i++){
            coordY++;
            coordX++;
        }
        let tab = new Array(2);
        tab[0] = coordX;
        tab[1] = coordY;

        return tab;
    }

    getPosInNumber(x,y){ //x et y pixels
        let tab = new Array(2);
    }

    GenerateMap(){
        //Map Gen
        for (let i=0;i<30;i++){
            for (let j=0;j<30;j++){
                if(map[i][j] == 'ground'){
                    mapVar[i][j] = this.add.image(this.getPosInPixels(j,i)[0],this.getPosInPixels(j,i)[1],"terre").setInteractive({useHandCursor: true});
                }
            }
        }
    }
	displaybatiment(building){
		console.log("test");
		building = this.add.image(30,30, building);
		building.depth = 0;
		building.setInteractive();
	}
	
	create(){
        var cam = this.cameras.main;
        //Map
        this.GenerateMap();

        let pointer = this.input.mousePointer;

        batiments['caserne1'] = this.add.image(0,0,"caserne1");

            
        this.input.on('pointermove', function (p) {

        }, this);


        if(isPlaced["caserne1"] == false){

            let posBatX;
            let posBatY;

            batiments['caserne1'].x = pointer.x;
            batiments['caserne1'].y = pointer.y;

            this.input.mouse.requestPointerLock();

            for (let i=0;i<30;i++){ 
                for (let j=0;j<30;j++){
                    mapVar[i][j].on("pointerover", () => {
                        console.log("X :" + j + " Y:" + i );
                        mapVar[i][j].y -= 30;
                    });
                    mapVar[i][j].on("pointerout", () => {
                        mapVar[i][j].y += 30;
                    });
                }
            }

            if(!this.input.mouse.locked && isPlaced["caserne1"] == false){
                        isPlaced["caserne1"] == true;
                        console.log("ok");
                        console.log(map);
                    }

            this.input.on("pointermove", () => {
                if (!this.input.mouse.locked) return;  
                cam.scrollX += pointer.movementX / cam.zoom;
                cam.scrollY += pointer.movementY / cam.zoom;
                      
                batiments['caserne1'].x = cam.scrollX + 950;
                batiments['caserne1'].y = cam.scrollY + 450;                
            });


            
        }
              

        
	
		this.count = 0;
        var cam = this.cameras.main;
		//Gestion scroll
		this.input.on('pointermove', function (p) {
            if (!p.isDown) return;
                cam.scrollX -= (p.x - p.prevPosition.x) / cam.zoom;
                cam.scrollY -= (p.y - p.prevPosition.y) / cam.zoom;  
        });



		//Zoom
		this.input.on("wheel",  (pointer, gameObjects, deltaX, deltaY) => {
            isMovingCamera = true;
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
		//var building = this.add.image(30,30, "building");
		//var build = this.add.image(100,30, "build");
		//building.depth = 0;
		//build.depth = 1;
		//building.setInteractive();
		//build.setInteractive();
        
	   
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

	clickButton(){
        this.scene.pause();
        this.scene.launch('DialogBox');
	}

	update(){
	}
}




