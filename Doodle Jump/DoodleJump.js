var player;
var platforms = [];
const PLATFORM_COUNT = 1;

function setup() {
    createCanvas(250, 400);
    this.player = new Doodler(false, 20, color("#00FF00"));
    for(var i=0; i<PLATFORM_COUNT; i++){
        var section = height/PLATFORM_COUNT;
        platforms.push(
            new Platform( random(width),
                          random(section * i, section * (i+1)),
                          width/5, color("#0000FF")) );
    }
}

function draw() {
  background(100);
  this.player.update(this.platforms);
  if(this.player.isAlive()){
      drawObjects();
  } else {
      textSize(32);
      textAlign(CENTER);
      text('Game Over', width/2, height/2);
      fill(100, 0, 0);
  }
}

function drawObjects(){
    for(var i=0; i<platforms.length; i++){
        platforms[i].draw();
    }
    this.player.draw();
}

