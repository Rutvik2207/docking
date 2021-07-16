var iss;
var spacebg, spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var bg,bgImg


function preload(){
  issImg=loadImage("Docking-undocking/iss.png");
  spacebgImg=loadImage("Docking-undocking/spacebg.jpg");
  spacecraft1Img=loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2Img=loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3Img=loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4Img=loadImage("Docking-undocking/spacecraft4.png");


}
function setup() {
  createCanvas(800,400);
  iss=createSprite(200,100,25,25);
  iss.addImage("issImg");
  iss.scale=0.3;
  
}
 
function draw() {
  background(0);  
  if(!hasDocked){

  }
  if(keyIsDown(LEFT_ARROW))
  

  drawSprites();
}