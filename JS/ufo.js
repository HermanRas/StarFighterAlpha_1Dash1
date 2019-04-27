class ufo_lv1 {

    constructor() {
        //set ufo_lv1 vars
        this.speed = 3;
        this.imgModel = img_ufo_lv1;
        this.size = createVector(66, 65);
        this.location = createVector(screenWidth + random(screenWidth), random(floor((screenHeight - this.size.y))));
        this.projectiles = [];
        this.hitScore = 2;
    }

    move() {
        this.location.x -= this.speed;
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

class ufos {

    constructor({ level }, { enemyCount }) {
        //set ufos vars
        this.enemyCount = enemyCount;
        this.planes = [];
    }

    update() {
        if (this.planes.length < this.enemyCount) {
            this.planes.push(new ufo_lv1());
        }
        for (let i = 0; i < this.planes.length; i++) {
            let updatePlane = true;
            if (this.planes[i].location.x < 0) {
                this.planes.splice(i, 1);
                updatePlane = false;
            } else {
                for (let n = 0; n < myJet.projectiles.length; n++) {
                    let bullet = myJet.projectiles[n];
                    let activeUfo = this.planes[i];

                    if (bullet[1] > activeUfo.location.x && bullet[1] < activeUfo.location.x + activeUfo.size.x && bullet[2] > activeUfo.location.y && bullet[2] < activeUfo.location.y + activeUfo.size.y) {
                        this.planes.splice(i, 1);
                        myJet.projectiles.splice(n, 1);
                        updatePlane = false;
                        myScore.addScore(activeUfo.hitScore);
                        break;
                    };
                }
            }

            //if all check are good show plane
            if (updatePlane) {
                this.planes[i].move();
                this.planes[i].show();
            }
        }
    }

    bigBoom() {
        for (let i = 0; i < this.planes.length; i++) {
            if (this.planes[i].location.x < screenWidth) {
                myScore.addScore(this.planes[i].hitScore);
            }
        }

        this.planes = [];
    }

}