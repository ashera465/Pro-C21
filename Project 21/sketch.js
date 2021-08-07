
var ball, groundObj, leftObj, rightObj ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);
	var ball_options =  {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball = Bodies.circle(100,0,20,ball_options);
	World.add(world, ball);
  	

	groundObj = new ground(width/2, 670, width, 20);
	leftObj = new ground(900, 600, 20, 120);
	rightObj = new ground(1100, 600, 20, 120);
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(255);
stroke("black");
	fill("black");
	
	ellipse(ball.position.x, ball.position.y, 35, 35);
	
	fill("white");
  groundObj.display();
  leftObj.display();
  rightObj.display();
  drawSprites();
 Engine.update(engine);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:ball.position.x, y:ball.position.y}, {x:80, y:-80});

		
	}
}



