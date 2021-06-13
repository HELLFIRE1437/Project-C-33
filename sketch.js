var snowArray = [];

function preload(){
  bgImg = loadImage("images/background.jpg");
  snow1Img = loadImage("images/snow1.png");
  snow2Img = loadImage("images/snow2.png");
}

function setup() {
  createCanvas(675,420);
  bg = createSprite(width/2,height/2);
  bg.addImage("bg",bgImg);
  bg.scale = 1.1 ;

  for(var i = 0 ; i < 30 ; i++){
    snowArray.push(new SnowFlake(random(10,665),random(-20,height)));
  }

}

function draw() {
  background("lightgreen");  
  drawSprites();
  for(var i = 0 ; i < 30 ; i++){
    snowArray[i].update();
  }
}