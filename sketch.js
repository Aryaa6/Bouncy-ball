const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine 
var world,ground,ball
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create()
  world = engine.world 
  var options = { 
 isStatic: true
  }
  ground = Bodies.rectangle(400,380,800,20,options)
  World.add(world,ground)
  var options = { 
    restitution: 2.0
  }
  ball = Bodies.circle(400,200,50,options)
  World.add(world,ball)

}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)
}