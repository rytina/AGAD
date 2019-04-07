var player;
var platforms = [];

function setup() {
    createCanvas(250, 400);
    this.player = new Doodler(width/2, height/2, false, 20, color("#00FF00"));
    platforms.push(new Platform(100, 200, 50, color("#0000FF")));
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
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw();
        if(platforms[i].collidesWith(this.player)){
            this.player.setState(DoodlerStates.STANDING);
        }else{
            this.player.setState(DoodlerStates.JUMPING);
        }
    }
    this.player.updateLocation();
    this.player.draw();
}

