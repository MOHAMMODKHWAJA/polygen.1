const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine,world;

function preload()
{
	
}

function setup() {
    createCanvas(1200, 700);
    
    polygen1 = new polygon(200,400)
    engine.run(Engine);
    world = engine.world;
}
function draw () {



polygen1.display();

    Engine.update(engine);
}