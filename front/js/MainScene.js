building = "build";

let mapVar = new Array(30);

for(let i=0;i<30;i++){
    mapVar[i] = new Array(30);
}

let batVar = new Array(30);

let batiments = new Array();


let isPlaced = new Array();
isPlaced["caserne1"] = false;

class MainScene extends Phaser.Scene{
	constructor(){
		super('MainScene');
	}

    getPosInPixels(x,y){ //entre 0 et 30
        let tab = new Array(2);
        tab[0] = -(x*grassTile.width/2)+grassTile.width/2+y*grassTile.width/2;
        tab[1] = y * 193/2 + x*193/2 + 193/2;
        return tab; 
    }

    moveBuilding(posX,posY,building){// 0 < posX < 50 et 0 < posY < 50 Place le bâtiment en X Y 
        this.add.image( -(posX*386/2)+386/2+posY*386/2, posY*196/2 + posX*196/2 -196/2,building);
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
        //Map
        this.GenerateMap();

        let pointer = this.input.mousePointer;
        console.log(pointer.x);
        console.log(pointer.y);

        batiments['caserne1'] = this.add.image(0,0,"caserne1");

        if(isPlaced["caserne1"] == false){
            this.input.on("pointermove", () => {           
                batiments['caserne1'].x = pointer.x;
                batiments['caserne1'].y = pointer.y;
                this.input.on("pointerdown", () =>{
                    isPlaced["caserne1"] = true;
                });
            });
        }
                
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
	
		this.count = 0;
    	//Création Bâtiments
        let mairie = new Building(buildingList[0].id,155,155);
        let Commissariat = new Building(buildingList[2].id,155,155);
        let Poste = new Building(buildingList[3].id,155,155);
        let Hopital = new Building(buildingList[4].id,155,155);

        let maison = new Building(buildingList[1].id,155,155);
        let magasin = new Building(buildingList[9].id,155,155);

        let parc = new Building(buildingList[6].id,155,155);

        let CentraleCharbon = new Building(buildingList[5].id,155,155);
        let CentraleHydraulique = new Building(buildingList[7].id,155,155);
        let Usine = new Building(buildingList[8].id,155,155);

        var cam = this.cameras.main;
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

	clickButton(){
        this.scene.pause();
        this.scene.launch('DialogBox');
	}

	update(){
	}
}




