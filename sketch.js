var paper1, rect1, rect2, rect3, ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dustbinImage = loadImage ("sprites/dustbingreen.png")
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper (100,610,70,70);
	rect1 = new trash (width/2+200, 640, 200, 20);
	rect2 = new trash (700, 605, 20, 100);
	rect3 = new trash (500, 605, 20, 100);
	ground1 = new Ground (width/2, 650, width, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  rect1.display();
  rect2.display();
  rect3.display();
  image (dustbinImage,480,450,250,200)
  ground1.display();
  //drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:170,y:-170});
	 }
   }




