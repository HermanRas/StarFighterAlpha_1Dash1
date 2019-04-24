
//set all ammo models
let img_ammo_lv1;
//set all Jet models
let img_jet_lv1;

//load models
function preload() {
    //load ammo
    img_ammo_lv1 = loadImage('IMG/Ammo_lv1.png');
    //load jets
    img_jet_lv1 = loadImage('IMG/Jet_lv1_.png');
}


function setup() {
    screenWidth = 1000;
    screenHeight = 600;
    createCanvas(screenWidth, screenHeight);
    gameBg = new space();
    myAmmo = new ammo_lv1();
    myJet = new jet_lv1();
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
}


function draw() {
    stillKeyDown();
    background(0);
    gameBg.show();
    myJet.show();

    //console.log(mouseY);
}