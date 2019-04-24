//set all Jet models
let img_ammo_lv1;
//load models
function preload() {
    img_ammo_lv1 = loadImage('IMG/Ammo_lv1.png');
}

class ammo_lv1 {

    constructor() {
        //set ammo_lv1 vars
        this.speed = 20;
        this.imgModel = img_ammo_lv1;
        this.size = createVector(2, 10);
        this.location = createVector();
    }

    show() {
        image(this.imgModel, 10, 10, 80, 300);
    }

}
