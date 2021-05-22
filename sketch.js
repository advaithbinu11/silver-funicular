var bob, hiimage,alienYellowWalkImage,alienYellowWalkLeftImage, arrowImage; 
var knifeImage, bobJumpImage;
var bobWalkImage,bobWalkLeftImage,bobDeadImage,bobDuckLeftImage;
var doorImage,guardStopImage,youWinImage
var guard,guardnum=0,downnum=0;
function preload(){
  hiimage = loadImage("images/BobSaysHi.png")
  alienYellowWalkImage = loadAnimation("images/alienYellowWalk_1_1.png","images/alienYellowWalk_1_2.png")
  alienYellowWalkLeftImage= loadAnimation("images/alienYellowleft_1.png","images/alienYellowleft_2.png")
  arrowImage = loadImage("images/arrow1.png")
  knifeImage = loadImage("images/knife_1.png")
  bobJumpImage = loadImage("images/bob_jump.png")
  bobWalkImage = loadAnimation("images/bob_walk_1.png","images/bob_walk_2.png")
  bobWalkLeftImage = loadAnimation("images/bob_walkleft_1.png","images/bob_walkleft_2.png")
  bobDeadImage = loadImage("images/bobDead.png")
  bobDuckImage = loadImage("images/bobduck.png")
  bobDuckLeftImage = loadImage("images/bobduckleft.png")
  doorImage=loadImage("images/door.png")
  youWinImage=loadImage("images/You Win!.png")
}
function setup() {
  createCanvas(800,400);
  bob=createSprite(68,336);
  bob.scale=0.8
  bob.addImage(hiimage);
  bob.x=58
  bob.y=80
  guard = createSprite(202,70);
  guard.addAnimation("guardwalkright", alienYellowWalkImage);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
/*
var gameState="intro";
playSound("sound://category_background/outback.mp3",false);
function draw() {
  createEdgeSprites();
  if (gameState==="intro"){
    background("yellow");
    textSize(20);
    text("Hi, my name is Bob. I was kidnapped by the ",10,150);
    textSize(20);
    text("evil yellow aliens. Help me escape!",10,180);
    textSize(20);
    text("The yellow button is for jumping.",10,210);
    textSize(20);
    text("The joystick is for walking...",10,240);
    textSize(20);
    text("But the bottom make me duck",10,280);
    textSize(20);
    text("Press the yellow button to continue",10,360);
        textSize(20);
    text("If I die, press the yellow button to restart",10,340);
    textSize(20);
    text("Go through the door to win!",10,300);
  }
  if(gameState==="intro"&&keyDown("space")){
    gameState="play";
         guard.x=30;
     guard.y=352;
    bob.x=58;
    bob.y=80;
  }
    if(gameState==="lose"&&keyDown("space")){
    playSound("sound://category_background/outback.mp3", false);
    gameState="play";
    bob.x=58;
    bob.y=80;
  }
  //what happens in playing
   if(gameState==="play"){
    var wall1=createSprite(150,148,380,40);
    var wall2=createSprite(250,268,380,40);
    var sword1=createSprite(250,148);
    var door=createSprite(198,342);
    door.setAnimation("door");
    door.scale=1.5;
    door.setCollider("rectangle",0,0,60,100);
    sword1.scale=0.6;
    sword1.setAnimation("knife_1");
    sword1.setCollider("rectangle",0,10,30,115);
    var sword2=createSprite(150,148);
    sword2.scale=0.6;
    sword2.setAnimation("knife_1");
    sword2.setCollider("rectangle",0,0,30,95);
    background("DarkSlateBlue");
    guard.depth=door.depth+1;
    //guard moves back and forth
    if(guardnum===0){
      guard.velocityX=2;
      guard.overlap(door);
      guard.setAnimation("alienYellow_walk_1");
    }
    if(guardnum===1){
      guard.velocityX=-2;
      guard.overlap(door);
      guard.setAnimation("alienYellowleft");
    }
    if(guard.x===390){
      guardnum=1;
    }
    if(guard.x===10){
      guardnum=0;
    }
    //down to duck
    if(keyDown(DOWN_ARROW)){
    bob.setAnimation("bobduck");
    downnum=1;
  }
  //space to jump
  if(keyDown("space")){
    bob.setAnimation("bob_jump");
    downnum=0;
    bob.velocityY=-10;        
  }
  //die if you touch an obstacle other than a wall
  if(bob.isTouching(sword1)||bob.isTouching(sword2)||bob.isTouching(guard)){
    stopSound("sound://category_background/outback.mp3");
    playSound("sound://category_male_voiceover/mission_failed_male.mp3", false);
    bob.velocityX=0;
    bob.velocityY=0;
    gameState="lose";
  }
  if(gameState==="lose"){
    background("DarkSlateBlue");
    bob.setAnimation("bobDead");
    guard.setAnimation("guardstop");
    guard.velocityX=0;
    
  }
  //gravity
   bob.velocityY = bob.velocityY + 0.8;
   //make bob stay on walls and in the game
  bob.collide(wall1);
  bob.collide(wall2);
  bob.collide(bottomEdge);
  bob.bounceOff(topEdge);
   bob.bounceOff(leftEdge);
    bob.bounceOff(rightEdge);
  
  if (keyDown(LEFT_ARROW)&&downnum===0){
    bob.x=bob.x-5;
    bob.setAnimation("bob_walk_left");
  }
  if (keyDown(LEFT_ARROW)&&downnum===1){
    bob.setAnimation("bobduckleft");
    bob.x=bob.x-5;
  }
  if(keyDown(RIGHT_ARROW)&&downnum===0){
    bob.x=bob.x+5;
    bob.setAnimation("bobwalk");
  }
   if(keyDown(RIGHT_ARROW)&&downnum===1){
     bob.setAnimation("bobduck");
    bob.x=bob.x+5;
  }
  if(bob.isTouching(door)){
    stopSound("sound://category_background/outback.mp3");
    playSound("sound://category_achievements/puzzle_game_achievement_02.mp3");
    
    gameState="Win!";
    bob.destroy();
    guard.setAnimation("guardstop");
    guard.velocityX=0;
    var win = createSprite(200,200);
    win.setAnimation("You Win!");
  }

}

drawSprites();
  
}


*/