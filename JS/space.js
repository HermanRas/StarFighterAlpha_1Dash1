class space {

    constructor() {
        //set stars vars
        this.totalStars = 60;
        this.speed = -1;
        this.location = [];
        //fill star locations
        for (let i = 0; i < this.totalStars; i++) {
            this.location[i] = createVector(random(screenWidth), random(screenHeight));
        }
    }

    show() {
        noStroke();
        fill(255);
        for (let i = 0; i < this.totalStars; i++) {
            this.location[i].x += this.speed;
            if (this.location[i].x < 0) {
                this.location[i] = createVector(screenWidth, random(screenHeight));
            }
            circle(this.location[i].x, this.location[i].y, 5);
        }
    }

}