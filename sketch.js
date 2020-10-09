var wall,thickness;

var bullet,speed,weight;






function setup() {
  createCanvas(1600,400);


  thickness=random(22,83);
  speed=random(55,90);
  weight=random(30,52);
  


bullet=createSprite(50,200,100,20);
bullet.velocityX=speed/20;
bullet.shapeColor="white";

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background("black"); 
 if(hasCollided(bullet,wall)) {
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){

  wall.shapeColor=color(225,0,0);
}

if(damage<10){

  wall.shapeColor=color(0,225,0);
}

 }

  


  drawSprites();
}

function hasCollided(lbullet,lwall) {
bulletRightEdge=lbullet.x +bullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false


}