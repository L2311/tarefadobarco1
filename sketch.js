var ship,sea;
var shipImg,seaImg;
function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png",);
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
   sea=createSprite(400,200);
 ship = createSprite(130,200,30,30);
  ship.addAnimation("ship",shipImg);
  sea.addImage("sea",seaImg);
  sea.scale= 0.3
  ship.scale= 0.15
  if(sea.x < 0){
    sea.x = sea.widht
   }
}






function draw() {
  background("blue");
 
    drawSprites();

}
