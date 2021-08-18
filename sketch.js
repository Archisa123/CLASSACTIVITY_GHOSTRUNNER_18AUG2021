var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup=new Group()
  climbersGroup=new Group()
  ghost=createSprite(200,300)
  ghost.addImage(ghostImg)
  ghost.scale=0.3
  invisibleGroup=new Group()
}

function draw() {
  background(200);
  if(gameState=="play"){

  if(tower.y > 400){
      tower.y = 300
    }
    doorG()
    if(keyDown("right")){
      ghost.x=ghost.x+2
    }
    if(keyDown("left")){
      ghost.x=ghost.x-2
    }
    if(keyDown("space")){
      ghost.velocityY=-4
    }
    ghost.velocityY=ghost.velocityY+0.5
    if(ghost.isTouching(climbersGroup)){
      ghost.velocityY=0
    }
    if(ghost.isTouching(invisibleGroup)||ghost.y>600){
      ghost.destroy()
      gameState="end"
    }

    drawSprites()
}
if(gameState=="end"){
textSize(50)
text("GameOver!",200,300)
}}
function doorG (){
  if(frameCount%90==0){
    door=createSprite(300,90)
    door.x=Math.round(random(100,500))
    door.addImage(doorImg)
    door.velocityY=2
    doorsGroup.add(door)
    climber=createSprite(200,150)
    climber.x=door.x
    climber.addImage(climberImg)
    climber.velocityY=2
    climbersGroup.add(climber)
    invisible=createSprite(200,160,40,20)
    invisible.visible=false
    invisible.velocityY=2
    invisible.x=climber.x
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1
    invisibleGroup.add(invisible)
  }

}