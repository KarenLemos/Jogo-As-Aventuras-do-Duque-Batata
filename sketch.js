var backgroundImg;
var gamestate = 0;
var invisibleGround, batata, batataImg;

function preload(){
  backgroundImg = loadImage("./assets/Background.png");
  batataImg = loadImage("./assets/DuqueBatata1.png")
}

function setup() {
  canvas = createCanvas(1350, 630);
  invisibleGround = createSprite(675,600,1350,160);
  //invisibleGround.visible = false;

  batata = createSprite(400,450,50,80);
//   batata.addImage("DuqueBatata",batataImg);
//   batata.scale = 0.25;
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  batata.velocityY = 0.8;
  moveBatata();
  batata.collide(invisibleGround);
  drawSprites();
}

function moveBatata() {
  if (keyDown(LEFT_ARROW)) {
    batata.x -= 5;
  }

 if (keyDown(RIGHT_ARROW)) {
    batata.x += 5;
  }
}