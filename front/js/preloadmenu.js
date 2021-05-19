class preloadmenu extends Phaser.Scene{
    constructor(){
      super("preloadmenu");
    }
    preload(){
      // load all assets tile sprites
      this.load.image("skybg", "./images/skybg.jpg");
      this.load.image("city", "./images/city.png");
      this.load.image("exit", "./images/exit.png");
      this.load.image("play", "./images/play.png");
      this.load.image("options", "./images/options.png");
      
      // load spritesheet
      this.load.spritesheet("sonic", "./images/sonic.png",{
        frameWidth: 48,
        frameHeight: 44
      });

      //load game assets
      this.load.image('building','../images/building.png');
      this.load.image('building2','../images/building.png');
      this.load.image('build','../images/build.png');
      this.load.image("terre", "../images/terre.png");
      this.load.image('mairie1','../images/mairie/mairie1.png');
      this.load.image('mairie2','../images/mairie/mairie2.png');
      this.load.image('mairie3','../images/mairie/mairie3.png');
      this.load.image('maison1','../images/maison/maison1.png');
      this.load.image('maison2','../images/maison/maison2.png');
      this.load.image('maison3','../images/maison/maison3.png');
      this.load.image('caserne1','../images/bienetre/caserne/caserne1.png');
      this.load.image('caserne2','../images/bienetre/caserne/caserne2.png');
      this.load.image('caserne3','../images/bienetre/caserne/caserne3.png');
      this.load.image('commissariat1','../images/bienetre/commissariat/commissariat1.png');
      this.load.image('commissariat2','../images/bienetre/commissariat/commissariat2.png');
      this.load.image('commissariat3','../images/bienetre/commissariat/commissariat3.png');
      this.load.image('poste1','../images/bienetre/poste/poste1.png');
      this.load.image('poste2','../images/bienetre/poste/poste2.png');
      this.load.image('poste3','../images/bienetre/poste/poste3.png');
      this.load.image('hopital1','../images/bienetre/hopital/hopital1.png');
      this.load.image('hopital2','../images/bienetre/hopital/hopital2.png');
      this.load.image('hopital3','../images/bienetre/hopital/hopital3.png');
      this.load.image('centrale1','../images/bienetre/centrale/centrale1.png');
      this.load.image('centrale2','../images/bienetre/centrale/centrale2.png');
      this.load.image('centrale3','../images/bienetre/centrale/centrale3.png');
      this.load.image('parc1','../images/ecologie/parc/parc1.png');
      this.load.image('parc2','../images/ecologie/parc/parc2.png');
      this.load.image('parc3','../images/ecologie/parc/parc3.png');
      this.load.image('centrale_hydrolique1','../images/ecologie/centrale_hydrolique/centrale_hydrolique1.png');
      this.load.image('centrale_hydrolique2','../images/ecologie/centrale_hydrolique/centrale_hydrolique2.png');
      this.load.image('centrale_hydrolique3','../images/ecologie/centrale_hydrolique/centrale_hydrolique3.png');
      this.load.image('magasin1','../images/economie/magasin/magasin1.png');
      this.load.image('magasin2','../images/economie/magasin/magasin2.png');
      this.load.image('magasin3','../images/economie/magasin/magasin3.png');
      this.load.image('usine1','../images/economie/usine/usine1.png');
      this.load.image('usine2','../images/economie/usine/usine2.png');
      this.load.image('usine3','../images/economie/usine/usine3.png');
      this.load.image('usine_recyclage1','../images/ecologie/usine_recyclage/usine_recyclage1.png');
      this.load.image('usine_recyclage2','../images/ecologie/usine_recyclage/usine_recyclage2.png');
      this.load.image('usine_recyclage3','../images/ecologie/usine_recyclage/usine_recyclage3.png');
      this.load.image('panneau_solaire','../images/ecologie/panneau_solaire/panneau_solaire.png');
      this.load.image('ecole1','../images/bienetre/ecole/ecole1.png');
      this.load.image('ecole2','../images/bienetre/ecole/ecole2.png');
      this.load.image('ecole3','../images/bienetre/ecole/ecole3.png');
      this.load.image('banque1','../images/economie/banque/banque1.png');
      this.load.image('banque2','../images/economie/banque/banque2.png');
      this.load.image('banque3','../images/economie/banque/banque3.png');

      //load HUD
      this.load.image('Bâtiments', "../images/HUD/batiment.png")
      this.load.image('ecologie', "../images/HUD/ecologie.png");
      this.load.image('bienetre', "../images/HUD/bienetre.png");
      this.load.image('economie', "../images/HUD/economie.png");

      //Dialogue
      this.load.image('box', './images/dialog.png');
      this.load.image('girl', './images/girl.png');
    }
    
    create(){
      this.scene.start("playmenu");
    }
}