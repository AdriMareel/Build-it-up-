
var game;

window.onload = function(){
  let gameConfig = {
    width : 1800,
	height : 900,
	type : Phaser.AUTO,
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
          gravity: {
            y: 0
          }
      }
    },
    scene: [preloadmenu,playmenu,MainScene]
  }
  game = new Phaser.Game(gameConfig);
}


//export default config;

