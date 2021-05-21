let mapVar = new Array(30);
let batiments = new Array();
let isPlaced = new Array();


for(let i=0;i<30;i++){
    mapVar[i] = new Array(30);
}

for(let i=0;i<10;i++){
    batiments[i] = new Array(10);
}

//console.log(batiments);
let positionY;
let positionX;


let flag = 0;

isPlaced["caserne1"] = false;
isPlaced["commissariat1"] = false;

class MainScene extends Phaser.Scene{
	constructor(){
		super('MainScene');
	}

    moveBuilding(posX,posY,building){
        building.x = -(posX*grassTile.width/2)+grassTile.width/2+posY*grassTile.width/2;
        building.y = (posX+posY)*grassTile.height/2 + 1/2*grassTile.height;
    }

    getPosInPixels(x,y){ //entre 0 et 30
        let tab = new Array(2);
        tab[0] = -(x*grassTile.width/2)+grassTile.width/2+y*grassTile.width/2;
        tab[1] = y * grassTile.height/2 + x*grassTile.height/2;
        return tab; 
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
	
	create(){
        var cam = this.cameras.main;
        //Map
        this.GenerateMap();

        let pointer = this.input.mousePointer;        
	
		this.count = 0;
    	
		//Gestion scroll
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

    displaybatiment(building){
        var cam = this.cameras.main;
        let pointer = this.input.mousePointer;  
        batiments[building] = this.add.image(0,0,building);
        this.input.mouse.requestPointerLock();
        this.input.mouse.locked = true;

        for (let i=0;i<30;i++){ 
            for (let j=0;j<30;j++){
                mapVar[i][j].on("pointerover", () => {
                    if (isPlaced[building] == false){
                        //console.log("X :" + j + " Y:" + i );
                        mapVar[i][j].y -= 30;
                        //console.log("bougé de 30px");
                        positionX = j;
                        positionY = i;
                    }   
                });
                mapVar[i][j].on("pointerout", () => {
                    if (isPlaced[building] == false){
                        mapVar[i][j].y += 30; 
                    } 
                });       
            }
        }

        this.input.on("pointerdown", () => {
            if(!isPlaced[building]){
                mapVar[positionY][positionX].y +=30;
                isPlaced[building] = true;
                this.input.mouse.locked = false;
                this.input.mouse.releasePointerLock();
                this.moveBuilding(positionX,positionY,batiments[building]);
            }
        });

        this.input.on("pointermove", () => {
            //console.log("X: "+pointer.x+ " Y: " + pointer.y);
            if(isPlaced[building] == false){ 
                cam.scrollX += pointer.event.movementX / cam.zoom;
                cam.scrollY += pointer.event.movementY / cam.zoom;
                
                //centre le batiment sur la map
                batiments[building].x = cam.scrollX + pointer.x;
                batiments[building].y = cam.scrollY + pointer.y;
                }                
            });
    }
    

	clickButton(){
        this.scene.pause();
        this.scene.launch('DialogBox');

	}

	update(){
	}
}




