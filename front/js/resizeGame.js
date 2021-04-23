class resizeGame extends Phaser.Scene {
  constructor() {
    super("resizeGame");
  }
  create() {
window.addEventListener('resize', resize);
    resize();

  }
   function resize() {
        var canvas = game.canvas, width = document.getElementsByClassName("parent-container")[0].offsetWidth, height = window.innerHeight;
    var wratio = width / height, ratio = canvas.width / canvas.height;

    if (wratio < ratio) {
        canvas.style.width = width + 'px';
        canvas.style.height = (width / ratio) + 'px';
    } else {
        canvas.style.width = (height * ratio) + 'px';
        canvas.style.height = height + 'px';
    }
}
 
}



