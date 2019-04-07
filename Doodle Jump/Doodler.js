const GRAVITY = 5;
const JUMP_FORCE = 15;
var jumpForce = JUMP_FORCE;

function Doodler(x, y, enemy, size, color) {
    this.x = x;
    this.y = y;
    this.enemy = enemy;
    this.size = size;
    this.color = color;
}

/**
 * changes location based upoon the game physics.
 */
Doodler.prototype.update = function() {
    this.y = this.y + GRAVITY;
    if(this.isStanding()){
        jumpForce = JUMP_FORCE;
    }else{
        jumpForce = jumpForce - 0.5;
    }
    this.y = this.y - jumpForce;
};

/**
 * returns true if this doodler is alive, otherwise false.
 */
Doodler.prototype.isAlive = function() {
    return this.y < height;
}



/**
 * returns whether or not the doodler collides with another doodler
 */
Doodler.prototype.collidesWith = function(doodler) {

};

/**
 * returns whether or not the doodler is standing on a platform
 */
Doodler.prototype.isStanding = function() {
    return this.y === 200;
};
/**
 * draws the doodler with specific altitiude translation
 */
Doodler.prototype.draw = function() {
    stroke(255);
    strokeWeight(3);
	fill(this.color);

    ellipse(this.x, this.y, this.size);
};