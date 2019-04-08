
const DoodlerStates = {
  STANDING: 1,
  JUMPING: 2,
  DEAD: 3
};

var state = DoodlerStates.STANDING;

const JUMP_FORCE = 15;

var jumpForce = JUMP_FORCE;

function Doodler(enemy, size, color) {
    this.enemy = enemy;
    this.size = size;
    this.color = color;
}


Doodler.prototype.update = function(platforms) {
   this.state = DoodlerStates.JUMPING;
    for (var i = 0; i < platforms.length; i++) {
        if(platforms[i].collidesWithDoodler()){
            this.state = DoodlerStates.STANDING;
        }
    }
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].positionRelativeTo(this);
    }
}

/**
 * changes location based upoon the game physics.
 */
/*Doodler.prototype.updateLocation = function() {
    this.y = this.y + GRAVITY;
    if(this.isStanding()){
        jumpForce = JUMP_FORCE;
    }else{
        jumpForce = jumpForce - 0.5;
    }
    this.y = this.y - jumpForce;
};
*/

/**
 * returns true if this doodler is alive, otherwise false.
 */
Doodler.prototype.isAlive = function() {
    return true;
}


/**
 * returns whether or not the doodler is standing on a platform
 */
Doodler.prototype.isStanding = function() {
    return this.state == DoodlerStates.STANDING;
};


/**
 * draws the doodler with specific altitiude translation
 */
Doodler.prototype.draw = function() {
    stroke(255);
    strokeWeight(3);
	fill(this.color);

    ellipse(width/2, height/2, this.size);
};

Doodler.prototype.fullJumpforce = function() {
    this.jumpForce = JUMP_FORCE;
};

Doodler.prototype.decreaseJumpforce = function() {
    if(this.jumpForce > 0.5){
        this.jumpForce -= 0.5;
    }else{
        this.jumpForce = 0;
    }
};

Doodler.prototype.getJumpforce = function() {
    return this.jumpForce;
}