const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
  var base1 
  var base2
  var bridge1


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base1 = new Base(1500,300,10,700);
  base2 = new Base(10,300,10,700);
  bridge1 = new Bridge(15,{x:10,y:10});
}

function draw() {
  background(51);
  Engine.update(engine);
  base1.show();
  base2.show()
  bridge1.show()
}
