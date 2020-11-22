const Engine  = Matter.Engine;
const World   = Matter.World;
const Bodies  = Matter.Bodies

var engine,world,ground,width,height,ball;

function setup() {
  createCanvas(400,400);

  engine  = Engine.create();
  world   = engine.world;

  var ground_options = {
    isStatic:true
  };
  ground  = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  width  =400;
  height = 20;

  var ball_options = {
    restitution:true
  };

  ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER); 
  fill("brown");  
  rect(ground.position.x,ground.position.y,width,height);
  
  ellipseMode(RADIUS);
fill("yellow");
ellipse(ball.position.x,ball.position.y,20,20)

}

