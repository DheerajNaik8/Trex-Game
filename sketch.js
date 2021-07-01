var trex ,trex_running;
var ground,groundImage;
var invisibleGround;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;

 //create Groundsprite
 ground = createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x = ground.width/2;
 ground.velocityX = -4;

 // create invisibleground sprite
 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;
}

function draw(){
  //clears the background
  background("white");
 
  console.log(trex.y);

  //create trex jump
 if(keyDown("space")&& trex.y >= 161.5){
  trex.velocityY = -10;
 }

 //adds gravity
 trex.velocityY = trex.velocityY + 0.8; 
  
 //resets the ground
 if(ground.x<0){
  ground.x = ground.width/2;
 }

 //collides with invisibleGround 
 trex.collide(invisibleGround);

 drawSprites();
}
