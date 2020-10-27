var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime = 0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
 bananaGroup = new Group();
  obstacleGroup = new Group();
 
  
  
}


function draw() {
background(224);
  
  spawnGround();
  spawnBanana();
  spawnObstacle();
  score();
  
  monkey.velocityY= monkey.velocityY = 5;
  
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  
  
  
  
  
  drawSprites();
}

function spawnGround(){
  
   ground = createSprite(400,350,900,10);
   ground.x=ground.width/2;
  ground.velocityX=-4;
  
}

function spawnBanana(){
  
  if(frameCount % 80 ===0){
  banana = createSprite(400,Math.round(random(120,200)),50,50);
  banana.addImage(bananaImage);
  banana.velocityX=-4;
  banana.scale=0.1;
    banana.lifetime=300;
    bananaGroup.add(banana);
  }
  
}

function spawnObstacle(){
  
  if(frameCount % 300 ===0){
  obstacle = createSprite(410,326,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-4;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
  }
}

function score(){
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 100, 50);
  
}


