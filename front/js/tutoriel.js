class tutoriel extends Phaser.Scene{
    constructor(){
        super('tutoriel');
    }
    
    create(){

        let intro = "Bonjour et Bienvenue à vous !" 
        let introText = "L’ancien maire a delaissé sa ville en embarquant toute l'économie ! Vous avez été donc choisi comme nouveau maire afin de la rebâtir et pour cela, vous ne disposerez que d'un an. Votre but étant d’en faire une ville la plus intelligente et durable possible. Pour ce faire, vous disposez de 3 statistiques : bien-être, économie et écologie, ainsi que de nombreux bâtiments que vous pourrez construire et/ou améliorer au fil de votre aventure et qui auront un impact très important sur le déroulement de votre partie!   "

        
        let start = this.add.image(450, 300, "tutorielStart");

        let sousMenuInfo = this.add.rectangle(1500, 450, 600, 500, 0xffffff);
        let sousMenuRec = this.add.rectangle(1500, 450, 600, 500);
        sousMenuRec.setStrokeStyle(3, 0x080808);
        this.titleText = this.add.text(1330,200, intro, { fill: 0xff0000, font: 'bold 26px system-ui' }).setShadow(2, 2, 0xffff00, 8).setWordWrapWidth(400);
        this.text = this.add.text(1260,300, introText, { fill: 0xffffff, font: 'bold 23px system-ui' }).setShadow(2, 2, 0xffff00, 8).setWordWrapWidth(520);


        //Navigate, go next
        this.flecheR = this.add.sprite(1800, 800, "flecheR");
        this.flecheR.setInteractive({  useHandCursor: true});
        this.flecheR.on('pointerdown', () => this.next());


    }
     next()
    {
    this.scene.stop();
    this.scene.launch('Tuto2')
    } 
    
}

class Tuto2 extends Phaser.Scene{
    create(){
    let menujour = this.add.rectangle(980, 330, 600, 400, 0x999999);
    let sousMenuRec = this.add.rectangle(980, 330, 600, 400);
    sousMenuRec.setStrokeStyle(4, 0x080808);


     let menustats = this.add.rectangle(980, 750, 600, 200, 0x999999);
    let sousMenuRec3 = this.add.rectangle(980, 750, 600, 200);
    sousMenuRec3.setStrokeStyle(4, 0x080808);

    this.jour = this.add.sprite(450,200, "tutorielJour");
    this.income = this.add.sprite(450, 400, "tutorielIncome");
    let jourincome = " Une indication concernant le jour sera présent donc surveillez bien votre calendrier! De plus, votre ville générera des revenus quotidiens. Cette donnée sera affichée à coté de votre somme d'argent et du nombre de population de la ville."
    this.jourText = this.add.text(700,250, jourincome, { fill: 0xffffff, font: 'bold 20px system-ui' }).setShadow(2, 2, 0xffff00, 8).setWordWrapWidth(520);


    let Title = this.add.text(850,0, "HUD" ,{ fill: 0xffffff, font: 'bold 90px system-ui' }).setShadow(2, 2, 0xffff00, 8);
    this.stats = this.add.sprite(450,750, "tutorielStats");


    let statText = "Voici les 3 statistiques qui vous aideront durant votre long périple. Ces stats seront affectées par la construction de bâtiments ou bien d'autres choses ! Néanmoins, si vous gardez une de ces statistiques dans le négatif pendant plus de 10 jours, vous serez destitué et la ville sera rasée de la carte :(."

    this.titleText = this.add.text(700,680, statText, { fill: 0xffffff, font: 'bold 20px system-ui' }).setShadow(2, 2, 0xffff00, 8).setWordWrapWidth(520);


        //Navigate, go next
    this.flecheR = this.add.sprite(1800, 800, "flecheR");
    this.flecheR.setInteractive({  useHandCursor: true});
    this.flecheR.on('pointerdown', () => this.next());

      // Navigate, go back
    this.flecheL = this.add.sprite(100, 800, "flecheL");
    this.flecheL.setInteractive({  useHandCursor: true});
    this.flecheL.on('pointerdown', () => this.previous());
  }

 next()
    {
    this.scene.stop();
    this.scene.launch('Tuto3')
    }
    previous()
  {
    this.scene.stop();
    this.scene.launch('tutoriel')
  }  
}

class Tuto3 extends Phaser.Scene{
    create(){
    let menujour = this.add.rectangle(980, 330, 600, 400, 0x999999);
    let sousMenuRec = this.add.rectangle(980, 330, 600, 400);
    sousMenuRec.setStrokeStyle(4, 0x080808);


     let menustats = this.add.rectangle(980, 750, 600, 200, 0x999999);
    let sousMenuRec3 = this.add.rectangle(980, 750, 600, 200);
    sousMenuRec3.setStrokeStyle(4, 0x080808);

    let Title = this.add.text(850,0, "SHOP" ,{ fill: 0xffffff, font: 'bold 90px system-ui' }).setShadow(2, 2, 0xffff00, 8);

    this.shop = this.add.sprite(450,200, "tutorielShop");
    this.shopIn = this.add.sprite(400, 450, "tutorielShopping");
    this.bat = this.add.sprite(450,750, "tutorielBat");


    let shopText = "Voici la fonctionnalité que vous utiliserez le plus! Enfin, j'espère. C'est tout simplement l'outil de construction qui vous donnera accès à 3 catalogues possèdant chacun des bâtiments.                                Par exemple pour construire une usine, il suffit de cliquer sur le bouton Bâtiments, puis sur l’image « Economie », enfin cliquez sur l’image « Usine ». Vous pouvez ensuite la placer où vous le souhaitez."
    this.shopDesc = this.add.text(700,250, shopText, { fill: 0xffffff, font: 'bold 20px system-ui' }).setShadow(2, 2, 0xffff00, 8).setWordWrapWidth(520);


let statText = "Vous pouvez voir que cette usine a un impact sur chaque statistiques, elle fait grandement augmenter l’économie et les revenus mais est très polluante, faisant donc beaucoup baisser l’écologie. "

    this.titleText = this.add.text(700,680, statText, { fill: 0xffffff, font: 'bold 20px system-ui' }).setShadow(2, 2, 0xffff00, 8).setWordWrapWidth(520);


    //Navigate, go next
    this.flecheR = this.add.sprite(1800, 800, "flecheR");
    this.flecheR.setInteractive({  useHandCursor: true});
    this.flecheR.on('pointerdown', () => this.next());


    // Navigate, go back
    this.flecheL = this.add.sprite(100, 800, "flecheL");
    this.flecheL.setInteractive({  useHandCursor: true});
    this.flecheL.on('pointerdown', () => this.previous());
  }
    next()
    {
    this.scene.stop();
    this.scene.launch('Tuto4')
    }
   previous()
  {
    this.scene.stop();
    this.scene.launch('Tuto2')
  }  
}


class Tuto4 extends Phaser.Scene{
    create(){
    let menujour = this.add.rectangle(980, 330, 600, 400, 0x999999);
    let sousMenuRec = this.add.rectangle(980, 330, 600, 400);
    sousMenuRec.setStrokeStyle(4, 0x080808);


     let menustats = this.add.rectangle(1200, 750, 600, 200, 0x999999);
    let sousMenuRec3 = this.add.rectangle(1200, 750, 600, 200);
    sousMenuRec3.setStrokeStyle(4, 0x080808);

    let Title = this.add.text(850,0, "MAIRIE" ,{ fill: 0xffffff, font: 'bold 90px system-ui' }).setShadow(2, 2, 0xffff00, 8);

  

    this.mairie = this.add.sprite(450,200, "tutorielMairie");
    this.techno = this.add.sprite(500, 720, "tutorielTechno");

    let shopText = "Voici la fonctionnalité que vous utiliserez le plus! Enfin, j'espère. C'est tout simplement l'outil de construction qui vous donnera accès à 3 catalogues possèdant chacun des bâtiments.                                Par exemple pour construire une usine, il suffit de cliquer sur le bouton Bâtiments, puis sur l’image « Economie », enfin cliquez sur l’image « Usine ». Vous pouvez ensuite la placer où vous le souhaitez."
    this.shopDesc = this.add.text(700,250, shopText, { fill: 0xffffff, font: 'bold 20px system-ui' }).setShadow(2, 2, 0xffff00, 8).setWordWrapWidth(520);


let statText = "Vous pouvez voir que cette usine a un impact sur chaque statistiques, il fait grandement augmenter l’économie et les revenus mais est très polluant, faisant donc beaucoup baisser l’écologie. "

    this.titleText = this.add.text(950,680, statText, { fill: 0xffffff, font: 'bold 20px system-ui' }).setShadow(2, 2, 0xffff00, 8).setWordWrapWidth(520);


    // Play button to start the game
    this.play = this.add.sprite(1500,100, "play");
    //set the width of the sprite
            this.play.displayWidth = 270;
            //scale evenly
            this.play.scaleY = this.play.scaleX;

    this.play.depth = 100;

    this.play.setInteractive({  useHandCursor: true});
    this.play.on('pointerdown', () => this.startTheGame());
    this.play.setOrigin(0, 0);
    this.play.setScrollFactor(0);


    // Navigate through the tutorial
    this.flecheL = this.add.sprite(100, 800, "flecheL");
    this.flecheL.setInteractive({  useHandCursor: true});
    this.flecheL.on('pointerdown', () => this.previous());
 

  }

  startTheGame()
  {
   this.scene.launch('MainScene').launch('hud').stop();
  }
  previous()
  {
    this.scene.stop();
    this.scene.launch('Tuto3')
  }
}