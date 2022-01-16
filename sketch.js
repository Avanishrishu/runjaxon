var trackImg, track;
var runnerImg, runner;
var leftboundary;
var rightboundary;

function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200);
  track.addImage(trackImg);
  track.velocityY = 4;
  track.scale = 1.2;

  if(track.y > 400){
    track.y = height/2;
  }

  runner = createSprite(200, 200);
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.1;

  rightboundary = createSprite( 370, 200, 30, 400);
  leftboundary = createSprite( 30, 200, 30, 400);

  leftboundary.visible = false;
  rightboundary.visible = false;
}


function draw() {
  background(0);

  if(track.y > 400){
    track.y = height/2;
  }
  
  runner.x = mouseX;

  drawSprites();

  runner.collide(leftboundary);
  runner.collide(rightboundary);

}
