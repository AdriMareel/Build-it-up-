let mapVar = new Array(30);
let batiments = new Array();
let isPlaced = new Array();

for(let i=0;i<30;i++){
    mapVar[i] = new Array(30);
}

for(bat in buildingListMk1){
    batiments[buildingListMk1[bat].name] = new Array(5);
    isPlaced[buildingListMk1[bat].name] = new Array(5);
}

for(bat in buildingListMk1){
    for(let i=0;i<5;i++){
        isPlaced[buildingListMk1[bat].name][i] = false;
    }
}

let positionY;
let positionX;

let flag = 0;

class MainScene extends Phaser.Scene{
	constructor(){
		super('MainScene');
	}

    moveBuilding(posX,posY,building){
        building.x = -(posX*grassTile.width/2)+grassTile.width/2+posY*grassTile.width/2;
        building.y = (posX+posY)*grassTile.height/2;
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
		this.input.on('pointermove', function (p){
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
        let bat_var = 0;
        while(batiments[building][bat_var] != undefined){
            bat_var ++;
        }
        if(bat_var > 5){
            return;
        }
        batiments[building][bat_var] = this.add.image(0,0,building);
        this.input.mouse.requestPointerLock();
        this.input.mouse.locked = true;

        for (let i=0;i<30;i++){ 
            for (let j=0;j<30;j++){
                mapVar[i][j].on("pointerover", () => {
                    if (isPlaced[building][bat_var] == false){
                        //console.log("X :" + j + " Y:" + i );
                        mapVar[i][j].y -= 30;
                        //console.log("bougé de 30px");
                        positionX = j;
                        positionY = i;
                    }   
                });
                mapVar[i][j].on("pointerout", () => {
                    if (isPlaced[building][bat_var] == false){
                        if(mapVar[i][j].y != this.getPosInPixels(j,i)[1]) mapVar[i][j].y += 30; 
                    } 
                });       
            }
        }

        this.input.on("pointerdown", () => { //Conditions placer batiments et placement si good
            if(!isPlaced[building][bat_var]){
                if(map[positionY][positionX] != 'ground'){ //condition si place déjà prise 
                    let scene = this.scene.get("HUDScene");
                    //scene.displayErrorTextBuilding();
                }
                else{
                    map[positionY][positionX] = building;
                    mapVar[positionY][positionX].y += 30;
                    isPlaced[building][bat_var] = true;
                    this.input.mouse.locked = false;
                    this.input.mouse.releasePointerLock();
                    this.moveBuilding(positionX,positionY,batiments[building][bat_var]);
                }
            }
        });

        this.input.on("pointermove", () => {
            if(isPlaced[building][bat_var] == false){ 
                cam.scrollX += pointer.event.movementX / cam.zoom;
                cam.scrollY += pointer.event.movementY / cam.zoom;
                
                //centre le batiment sur la map
                batiments[building][bat_var].x = cam.scrollX + pointer.x;
                batiments[building][bat_var].y = cam.scrollY + pointer.y;
                }                
        });

        batiments[building][bat_var].setInteractive();
        batiments[building][bat_var].on("pointerdown", () => {
            if(isPlaced[building][bat_var]){
                var scene = this.scene.get("ecologie");
                scene.getInfo(building);
                this.scene.launch('menu');
                if(building == buildingListMk1[13].name || building == buildingListMk2[13].name || building == buildingListMk3[13].name) { this.scene.launch('techno'); }
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




