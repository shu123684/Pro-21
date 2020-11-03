var wall, thickness;
var speed, weight, bullet;

function setup() {
  // creates the world/canvas
  createCanvas(1600,400);

  // sets a random value for speed and weight
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  // creates the sprite for variable wall
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "white";

  // creates the sprite for variable car
  bullet = createSprite(200, 200, 100, 30);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
}

function draw() {
  // sets the background color
  background("black");

  // if/else logic statement for deformation
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    let damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage < 10){
      wall.shapeColor = "green";
    }else if (damage > 10){
      wall.shapeColor = "red";
    }
  }

  // draws the sprites
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lwall.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}