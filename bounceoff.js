//add movingrect and fixedrect sprite

var movingcircle,fixedcircle;


function setup() {
  createCanvas(1200,800);

  //ceate movingrect sprite
  movingcircle=createSprite(400,800,80,30);
  movingcircle.shapeColor="green";

  //ceate fixedrect sprite
  fixedcircle=createSprite(400,100,50,80);
  fixedcircle.shapeColor="green";

  //set velocity to both the objects
  movingcircle.velocityY=-5;
  fixedcircle.velocityY=+5;
}

function draw() 
{
  //clear the background
  background(0);  

  //call the bounceoff function
  bounceOff(fixedcircle,movingcircle);
  
  //draw the sprites
  drawSprites();

}

