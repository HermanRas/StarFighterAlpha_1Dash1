class ammo_lv1 {

    constructor() {
        //set ammo_lv1 vars
        this.speed = 20;
        this.type = 'bullet';
        this.imgModel = img_ammo_lv1;
        this.size = createVector(2, 10);
        this.location = createVector();
    }
}

class bomb_lv1 {
    constructor() {
        //set ammo_lv1 vars
        this.speed = 6;
        this.type = 'bomb';
        this.imgModel = img_bomb_lv1;
        this.size = createVector(10, 10);
        this.location = createVector();
    }
}