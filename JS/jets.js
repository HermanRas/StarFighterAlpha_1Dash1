//set all Jet models
let img_jet_lv1;
//load models
function preload() {
    img_jet_lv1 = loadImage('IMG/Jet_lv1.png');
}

class jet_lv1 {

    constructor() {
        //set jet_lv1 vars
        this.speed = 5;
        this.imgModel = img_jet_lv1;
        this.size = createVector(65, 75);
        this.location = createVector((screenHeight / 2) - (this.size.x / 2), 0 - (this.size.y + 10));
    }

    move(x, y) {
        this.location.x += x * this.speed;
        this.location.y += y * this.speed;

        if (this.location.x < 0) {
            this.location.x = 0;
        }
        if (this.location.x > screenHeight - this.size.x) {
            this.location.x = screenHeight - this.size.x;
        }
        if (this.location.y + screenWidth + this.size.y > screenWidth) {
            this.location.y = 0 - this.size.y;
        }
        if (this.location.y + screenWidth < 0) {
            this.location.y = 0 - (screenWidth);
        }
    }

    show() {
        angleMode(DEGREES);
        rotate(90);
        imageMode(CORNER);
        image(this.imgModel, this.location.x, this.location.y, this.size.x, this.size.y);
    }

}