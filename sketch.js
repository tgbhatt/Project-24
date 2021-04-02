const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,60);
    hammer = new Hammer(10,100);
    rubber = new Rubber(600,375,30);
    stone = new Stone(400,375,50,50);
    iron = new Iron(800,375,30,30);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();


    
 
}