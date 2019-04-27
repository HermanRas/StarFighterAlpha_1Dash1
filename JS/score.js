class score {

    constructor() {
        //set score vars
        this.size = createVector(150, 20);
        this.location = createVector(0, 0);
        this.currentScore = 0;
    }

    show() {
        textSize(20);
        fill(255, 0, 255);
        text('Score : ' + this.currentScore, (screenWidth) - this.size.x, this.location.y, this.size.x, this.size.y);
        fill(0, 255, 255);
        text('Lives : ' + lives, (screenWidth * 0.5), this.location.y, this.size.x, this.size.y);
        fill(255, 255, 0);
        text('Health : ' + health, this.location.x, this.location.y, this.size.x, this.size.y);
        fill(255, 255, 0);
        text('Bomb : ' + bombs, this.location.x, (screenHeight) - this.size.y, this.size.x, this.size.y);
    }

    addScore(points) {
        this.currentScore += points;
    }

}