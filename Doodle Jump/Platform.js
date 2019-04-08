
const GRAVITY = 5;



function Platform(x, y, size, pcolor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.pcolor = pcolor;
}

/**
 * draws platform at y
 */
Platform.prototype.draw = function(y) {
    noStroke();
    fill(this.pcolor);
    rect(this.x, this.y, this.size, 10);
};

/**
 * returns whether passed Doodler hits the platform
 */
Platform.prototype.collidesWithDoodler = function() {
    return height/2 >= this.y;
};

Platform.prototype.positionRelativeTo = function(doodler) {
    if(doodler.isStanding()){
        doodler.fullJumpforce();
    }else{
        this.y -= GRAVITY;
        doodler.decreaseJumpforce();
    }
    this.y += doodler.getJumpforce();

};
