var game;

window.onload = function(){
  let gameConfig = {
    width : 1900,
	height : 910,
  backgroundColor : "4488AA",
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
    scene: [preloadmenu,playmenu,MainScene,new DialogBox({key: 'DialogBox'}),new HUDScene({key: 'hud'}), new HUDStat({key: 'stat'}), new HUDBuildingListEcologie({key: 'ecologie'}), new HUDBuildingListMoral({key: 'moral'},  new HUDBuildingListEconomie({key: 'economie'}))]
  }
  game = new Phaser.Game(gameConfig);
}

