var game;

window.onload = function(){
  let gameConfig = {
    width : 1900,
	height : 910,
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
    scene: [preloadmenu,playmenu,MainScene,new HUDScene({key: 'hud'})]
  }
  game = new Phaser.Game(gameConfig);
}


//export default config;

