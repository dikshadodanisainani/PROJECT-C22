var movingcircle,fixedcircle;

function setup() {
    createCanvas(1200,800);
  
    //ceate movingcircle sprite
    movingcircle=createSprite(400,800,80);
    movingcircle.shapeColor="green";
    movingcircle.debug=true;

    //change collider to circle
    movingcircle.setCollider("circle",0,0,20);
  
    //ceate fixedrect sprite
    fixedcircle=createSprite(400,100,50);
    fixedcircle.shapeColor="green";
    fixedcircle.debug=true;

       //change collider to circle
       fixedcircle.setCollider("circle",0,0,20);
  
    
  }
  
  function draw() 
  {
    //clear the background
    background(0);  
  
    //give control to movingrect
    movingcircle.x=World.mouseX;
    movingcircle.y=World.mouseY;

    //change the x-axis of both the object when they touch each other
  if(collide(movingcircle,fixedcircle))
  {
    movingcircle.shapeColor="red";
    fixedcircle.shapeColor="red";

  }
       else{
    movingcircle.shapeColor="green";
    fixedcircle.shapeColor="green";
  }


  drawSprites();

  }









  function collide(object1,object2)
{
    if(object1.x-object2.x<object1.width/2+object2.width/2
        && object2.x-object1.x<object1.width/2+object2.width/2
        &&object1.y-object2.y<object1.height/2+object2.height/2
        && object2.y-object1.y<object1.height/2+object2.height/2 )
    {
        return true;
    }
        else
    {
        return false;
    }
}
