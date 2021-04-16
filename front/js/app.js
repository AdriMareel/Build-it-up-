const config = {
	width : 1800,
	height : 900,
	type : Phaser.AUTO,
	scene : {
		preload : preload,
		create : create,
		update : update
	}
}

var game = new Phaser.Game(config);

let grassWidth = 386;
let grassHeight = 193;

function preload(){
	this.load.image('building','images/building.png');
	this.load.image('grass','images/grass.png');
}

function create(){
	for(let i=0;i<15;i++) this.add.image(i*grassWidth/2,i*grassHeight/2,'grass');
	for(let i=0;i<15;i++) this.add.image(i*grassWidth/2,i*grassHeight/2+grassHeight,'grass');
	for(let i=0;i<15;i++) this.add.image(i*grassWidth/2,i*grassHeight/2-grassHeight,'grass');
	for(let i=0;i<15;i++) this.add.image(i*grassWidth/2,i*grassHeight/2-2*grassHeight,'grass');	
}

function update(){

}
