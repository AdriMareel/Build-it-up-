const config = {
	width : 1000,
	height : 700,
	type : Phaser.AUTO,
	scene : {
		preload : preload,
		create : create,
		update : update
	}
}

var game = new Phaser.Game(config);

function preload(){
	this.load.image('building','images/building.png');
}

function create(){
	this.add.image(300,300,'mario');
}

function update(){

}