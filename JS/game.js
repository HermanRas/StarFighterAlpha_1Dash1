function setup() {
    screenWidth = 1000;
    screenHeight = 600;
    createCanvas(screenWidth, screenHeight);
    gameBg = new space();
    myJet = new jet_lv1();
}

function stillKeyDown() {
    if (keyIsDown(LEFT_ARROW)) {
        myJet.move(0, 1);
    } else if (keyIsDown(RIGHT_ARROW)) {
        myJet.move(0, -1);
    } else if (keyIsDown(UP_ARROW)) {
        myJet.move(-1, -0);
    } else if (keyIsDown(DOWN_ARROW)) {
        myJet.move(1, 0);
    }
}


function draw() {
    stillKeyDown();
    background(0);
    gameBg.show();
    myJet.show();
}