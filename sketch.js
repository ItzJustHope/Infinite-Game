var spaceImg, space;
var meteorImg, meteor, meteorGroup;
var rocket, rocketImg;
var gameState = "play"

function preload(){
  spaceImg = loadImage("space.avif");
  meteorImg = loadImage("meteor.png");
  rocketImg = loadImage("rocket.jpg");
}

function setup() {
  createCanvas(600, 600);
  space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;
  rocket = createSprite(300, 300, 30, 30);
  rocket.addImage(rocketImg);
  rocket.scale = 0.09
  meteorGroup=new Group()
}

function draw() {
  
  background(200);

  drawSprites();
  
  if(space.y > 400){
      space.y = 300
    }
   
    if(keyDown("space")){
    rocket.velocityY = -2
    }

    rocket.velocityY=rocket.velocityY+0.8

    if(keyDown("right_arrow")){
      rocket.x=rocket.x+3
    }

    if(keyDown("left_arrow")){
      rocket.x=rocket.x-3
    }

    meteorf()

   if(meteorGroup.isTouching(rocket) ||rocket.y>600){
    rocket.destroy()
    meteor.destroy()
    textSize(50)
    fill("white")
    text("Game Over!", 200, 200)
    text("Your rocket has crashed", 20, 250)
  
   }

}



function meteorf(){
if(frameCount % 200===0){
  meteor= createSprite(200, 10)
  meteor.x=Math.round(random(100, 400))
  meteor.addImage(meteorImg)
  meteor.velocityY=1
  meteor.scale=0.07
  rocket.depth=meteor.depth
  meteor.depth=meteor.depth+1
  meteor.lifetime=800
  meteorGroup.add(meteor)
}
}