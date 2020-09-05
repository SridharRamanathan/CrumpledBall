const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var dustbin1,dustbin2,dustbin3,dustbinImage;

var paper;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	var canvas = createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new ground(600, 380, 1200, 20)
	paper = new Paper(100,200,50);

	dustbin1 = Bodies.rectangle(1000, 295, 150, 150,{isStatic:true});
	World.add(world, dustbin1);

	dustbin2 = Bodies.rectangle(925,320,20,100, {isStatic:true});
	World.add(world, dustbin2);

	dustbin3 = Bodies.rectangle(1075,320,20,100, {isStatic:true});
	World.add(world, dustbin3);


	
}


function draw() {

  background(210);
  Engine.update(engine);

  ground.display();
  paper.display();

  fill("orange");

  imageMode(CENTER);
  image(dustbinImage, dustbin1.position.x, dustbin1.position.y, 150, 150)

 
  drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x: 1.1, y: -1.1});

	}
}
