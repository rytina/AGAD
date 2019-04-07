var player;

function setup() {

  createCanvas(250, 400);
  this.player = new Doodler(width/2, height/2, false, 20, color("#00FF00"));

}

function draw() {
  background(100);
  if(this.player.isAlive()){
      drawPlayer();
  } else {
      textSize(32);
      textAlign(CENTER);
      text('Game Over', width/2, height/2);
      fill(100, 0, 0);
  }
}

function drawPlayer(){
    this.player.update();
    this.player.draw();
}

