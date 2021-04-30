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
    scene: [preloadmenu,playmenu,MainScene,new DialogBox({key: 'DialogBox'}),new HUDScene({key: 'hud'}), /*new HUDStat({key: 'stat'}), new HUDBuildingListEco({key: 'eco'}), new HUDBuildingListMoral({key: 'moral'})*/]
  }
  game = new Phaser.Game(gameConfig);
}


//export default config;

