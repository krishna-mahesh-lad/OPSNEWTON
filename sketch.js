const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1, b2, b3, b4, b5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob (302,500,30);
	b2 = new Bob (364,500,30);
	b3 = new Bob (426,500,30);
	b4 = new Bob (488,500,30);
	b5 = new Bob (550,500,30);
	roof = new Roof (426,200,325,50);
	rope3 = new Rope (b3.body,roof.body);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  roof.display();
  rope3.display();
};



