var wall, thickness;
var speed, weight, bullet;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,80,20);
  bullet.shapeColor="white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  thickness=random(22,83);
}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor="red";
    }

    if(damage<10){
      wall.shapeColor="green";
    }
  }


  drawSprites();
}

function hasCollided(bullet,wall){
  var bulletRightEdge = bullet.x + bullet.width/2;
  var wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}