//vet global vars
health = 100;
lives = 3;
bombs = 1;

//set all ammo models
let img_ammo_lv1;
let img_bomb_lv1;
//set all Jet models
let img_jet_lv1;
let img_ufo_lv1;

//load models
function preload() {
    //load ammo
    img_ammo_lv1 = loadImage('IMG/Ammo_lv1.png');
    img_bomb_lv1 = loadImage('IMG/Bomb_lv1.png');
    //load jets
    img_jet_lv1 = loadImage('IMG/Jet_lv1_.png');
    img_ufo_lv1 = loadImage('IMG/Ufo_lv1.png');
}

function setup() {
    screenWidth = 1000;
    screenHeight = 600;
    createCanvas(screenWidth, screenHeight);
    gameBg = new space();
    myAmmo = new ammo_lv1();
    myBomb = new bomb_lv1();
    myJet = new jet_lv1();
    myScore = new score();
    ufos = new ufos({ level: 1 }, { enemyCount: 5 });
}

function stillKeyDown() {
    if (keyIsDown(LEFT_ARROW)) {
        myJet.move(-1, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        myJet.move(1, -0);
    }
    if (keyIsDown(UP_ARROW)) {
        myJet.move(0, -1);
    }
    if (keyIsDown(DOWN_ARROW)) {
        myJet.move(0, 1);
    }
    // http://keycode.info/
    // if (keyIsDown(32)) {
    //     myJet.shoot(myAmmo);
    // }
}

function keyPressed() {
    if (key === ' ') {
        myJet.shoot(myAmmo);

    } else if (key === 'b') {
        if (bombs >= 1) {
            myJet.shoot(myBomb);
            bombs--;
        }
    }
}

function draw() {
    if (lives > 0) {
        stillKeyDown();
        background(0);
        myScore.show();
        gameBg.show();
        myJet.show();
        myJet.projectilesUpdate();
        ufos.update();
    } else {
        background(0);
        fill(0, 255, 0);
        textSize(72);
        text('Game Over !', screenWidth * 0.3 + 72, screenHeight * 0.5 - 150, screenWidth, 72);
        fill(255, 0, 255);
        textSize(48);
        text('Score : ' + myScore.currentScore, screenWidth * 0.3 + 150, screenHeight * 0.5, screenWidth, 72);
    }
}
