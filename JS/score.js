class score {

    constructor() {
        //set score vars
        this.size = createVector(200, 20);
        this.location = createVector(0, 0);
        this.currentScore = 0;
    }

    show() {
        fill(255, 255, 0);
        textSize(20);
        text('Score : ' + this.currentScore, this.location.x, this.location.y, this.size.x, this.size.y);
    }

}