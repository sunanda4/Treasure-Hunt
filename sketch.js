var bg,bg2,form,system,code,security;
var score = 0;
var font;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  font = loadFont("AEA.TTF");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2);
    textFont(font);
    fill(255);
    textSize(60);
    text("TREASURE UNLOCKED",100, 200);
  }

  drawSprites();
}
