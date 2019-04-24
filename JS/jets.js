class jet_lv1 {

    constructor() {
        //set jet_lv1 vars
        this.speed = 5;
        this.imgModel = img_jet_lv1;
        this.size = createVector(75, 65);
        this.location = createVector(10, floor((screenHeight - this.size.y) * 0.5));
    }

    move(x, y) {
        this.location.x += x * this.speed;
        this.location.y += y * this.speed;
        //FIX MAX WIDTH
        if (this.location.x < 0) {
            this.location.x = 0;
        }
        if (this.location.x > screenWidth - this.size.x) {
            this.location.x = screenWidth - this.size.x;
        }
        //FIX MAX HIGHT
        if (this.location.y < 0) {
            this.location.y = 0;
        }
        if (this.location.y > screenHeight - this.size.y) {
            this.location.y = screenHeight - this.size.y;
        }
    }

    show() {
        //angleMode(DEGREES);
        //rotate(90);
        //imageMode(CORNER);
        //          NAME                  SW,              SH,          IW,         IH
        image(this.imgModel, this.location.x, this.location.y, this.size.x, this.size.y);
    }

    shoot() {
        //                   SW,  SH, IW,IH
        image(this.imgModel, 100, 300, 30, 8);
    }

}