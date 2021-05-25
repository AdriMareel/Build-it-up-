let statistiques = new gameStat();

let gameConfig = {
  width : 1900,
    height : 910,
  backgroundColor : "4488AA",
    type : Phaser.AUTO,
  scene: [preloadmenu,playmenu,MainScene,
  new DialogBox({key: 'DialogBox'}),
  new HUDScene({key: 'hud'}), 
  new HUDStat({key: 'stat'}), 
  new HUDBuildingListEcologie({key: 'ecologie'}), 
  new HUDBuildingListMoral({key: 'moral'}),  
  new HUDBuildingListEconomie({key: 'economie'}), 
  new Info({key: 'info'}), 
  new buildingMenu({key: 'menu'}), 
  new showUpgrade({key:'showUpgrade'}), 
  new techno({key: 'techno'}),
  new infoTechno({key: 'infoTechno'}),
  new Bought({key:'Bought'}),
  new End({key: 'end'}),
  new conditionsNonRemplies({key: 'CNR'})]
}


let game = new Phaser.Game(gameConfig);
