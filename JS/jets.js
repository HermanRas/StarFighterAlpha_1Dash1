//set all Jet models
let img_jet_lv1;
//load models
function preload() {
    img_jet_lv1 = loadImage('IMG/Jet_lv1.png');
}

class jet_lv1 {

    constructor() {
        //set jet_lv1 vars
        this.speed = 0;
        this.imgModel = img_jet_lv1;
        this.location = createVector(screenHeight / 4, 100);
    }

    show() {
        if (this.speed > 0) {
            this.location.x += this.speed;
        }
        angleMode(DEGREES);
        let a = atan2(45, 45);
        rotate(a);
        imageMode(CORNER);
        image(this.imgModel, this.location.x, this.location.y);
    }

}