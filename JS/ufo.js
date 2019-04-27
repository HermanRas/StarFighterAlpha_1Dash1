class ufo_lv1 {

    constructor() {
        //set ufo_lv1 vars
        this.speed = 3;
        this.imgModel = img_ufo_lv1;
        this.size = createVector(66, 65);
        this.location = createVector(screenWidth - 10, floor((screenHeight - this.size.y) * 0.5));
        this.projectiles = [];
    }

    move() {
        //this.location.x += x * this.speed;
        this.location.y -= this.speed;
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
        //add projectiles
        for (let i = 0; i < this.projectiles.length; i++) {
            image(this.projectiles[i][0].imgModel, this.projectiles[i][1], this.projectiles[i][2], this.projectiles[i][0].size.y, this.projectiles[i][0].size.x);
        }

        //add jet
        //          NAME                  SW,              SH,          IW,         IH
        image(this.imgModel, this.location.x, this.location.y, this.size.x, this.size.y);
    }

    shoot(ammo) {
        //                                  image,     SW,     SH,          IW,          IH
        this.projectiles.push([ammo, this.location.x + (this.size.x * 0.5), this.location.y + (this.size.y * 0.5)]);
    }

    projectilesUpdate() {
        for (let i = 0; i < this.projectiles.length; i++) {
            this.projectiles[i][1] += this.projectiles[i][0].speed;
            if (this.projectiles[i][1] > screenWidth) {
                this.projectiles.splice(i, 1);
            }
        }
    }

}