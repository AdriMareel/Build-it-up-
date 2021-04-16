export default class MainScene extends Phaser.Scene{
	constructor(){
		super('MainScene');
	}
	preload(){
    	//affichage Grass
		this.load.image('building','../images/building.png');
		this.load.image('grass','../images/grass.png');
	}

	create(){
		let grassWidth = 386;
		let grassHeight = 193;
		//Gestion scroll
		var cam = this.cameras.main;

		this.input.on('pointermove', function (p) {
        	if (!p.isDown) return;
            	cam.scrollX -= (p.x - p.prevPosition.x) / cam.zoom;
            	cam.scrollY -= (p.y - p.prevPosition.y) / cam.zoom;
    	});
    
		for(let i=0;i<15;i++) this.add.image(i*grassWidth/2,i*grassHeight/2,'grass');
		for(let i=0;i<15;i++) this.add.image(i*grassWidth/2,i*grassHeight/2+grassHeight,'grass');
		for(let i=0;i<15;i++) this.add.image(i*grassWidth/2,i*grassHeight/2-grassHeight,'grass');
		for(let i=0;i<15;i++) this.add.image(i*grassWidth/2,i*grassHeight/2-2*grassHeight,'grass');	

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

//import config from './app.js';

