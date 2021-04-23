import MainScene from './MainScene.js';

const config = {
	width : 1800,
	height : 900,
	type : Phaser.AUTO,
	parent : 'phaser-game',
	scene : [MainScene]	
	
}



var game = new Phaser.Game(config);
//export default config;

