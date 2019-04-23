function setup() {
    screenWidth = 1000;
    screenHeight = 600;
    createCanvas(screenWidth, screenHeight);
    gameBg = new space();
    myJet = new jet_lv1();
}

function draw() {
    background(0);
    gameBg.show();
    myJet.show();
}