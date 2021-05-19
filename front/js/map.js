let map = new Array(30);
let grassTile = {width: 386,height : 193};

for(let i=0;i<30;i++){
    map[i] = new Array(30);
}

for(let x=0;x<30;x++){
	for(let y=0;y<30;y++){
		map[x][y] = 'ground';
	}
}











/*var grid = [];

for(var i = 0; i < 1000; i++)
{
    var row = [];
    
    for(var j = 0; j < 1000; j++)
    {
        var posX = (j - i) * 32;
        var posY = (j + i) * 16;
        var sprite = this.game.add.sprite(posX, posY, grass);
        row.push(sprite);
    }
    
    grid.push(row);
}*/