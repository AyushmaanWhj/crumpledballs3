
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,200);
 
	ground=new Ground(600,height-20,1400,20)

	d1=new Dustbin(1150,height-40,200,15)
	d2=new Dustbin(1050,height-83,15,230)
	d3=new Dustbin(1250,height-83,15,230)

	launcher=new Launcher(paper.body,{x:200,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(152, 180, 212);
  

  
  ground.display()
  d1.display();
  paper.display();

  drawSprites();
 
}

//function keyPressed(){
  //if(keyDown("UP_ARROW")){
	//Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-170})
//  }

//}
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
    if(keyCode===32){
    launcher.attach(paper.body);
    }
}

