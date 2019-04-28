class jet_lv1 {

    constructor() {
        //set jet_lv1 vars
        this.speed = 5;
        this.imgModel = img_jet_lv1;
        this.size = createVector(75, 65);
        this.location = createVector(10, floor((screenHeight - this.size.y) * 0.5));
        this.projectiles = [];
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
        //add projectiles
        for (let i = 0; i < this.projectiles.length; i++) {
            image(this.projectiles[i].imgModel, this.projectiles[i].location.x, this.projectiles[i].location.y, this.projectiles[i].size.y, this.projectiles[i].size.x);
        }

        //add jet
        //          NAME                  SW,              SH,          IW,         IH
        image(this.imgModel, this.location.x, this.location.y, this.size.x, this.size.y);
    }

    shoot(ammo) {
        ammo.location.x = this.location.x + (this.size.x * 0.5);
        ammo.location.y = this.location.y + (this.size.y * 0.5);
        this.projectiles.push(ammo);
    }

    projectilesUpdate() {
        for (let i = 0; i < this.projectiles.length; i++) {
            this.projectiles[i].location.x += this.projectiles[i].speed;
            if (this.projectiles[i].location.x > screenWidth) {
                this.projectiles.splice(i, 1);
            } else if (this.projectiles[i].type === 'bomb' && this.projectiles[i].location.x > (screenWidth - floor(screenWidth * 0.35))) {
                this.projectiles.splice(i, 1);
                ufos.bigBoom();
            }
        }
    }

}