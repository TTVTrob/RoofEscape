
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 568);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
}



