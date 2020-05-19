const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,sling
var ground,wall,post1,post2,post3
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(100,350,25,25);
    sling= new Slingshot(ball.body,{x:100,y:300});
    ground = new Ground(600,380,1200,20);
    wall = new Ground(1190,300,20,200);
    post1 = new Poster(200,100,150,200);
    post2 = new Poster(1000,100,150,200);
    post3 = new Poster(600,100,150,200);
    p1 = new Pin(800,300,25,100,PI/2);
    p2 = new Pin(830,330,25,100,PI/2);
    p3 = new Pin(860,330,25,100,PI/2);
    p4 = new Pin(890,330,25,100,PI/2);
    p5 = new Pin(920,330,25,100,PI/2);
    p6 = new Pin(950,330,25,100,PI/2);
    p7 = new Pin(980,330,25,100,PI/2);
    p8 = new Pin(1010,330,25,100,PI/2);
    p9 = new Pin(1040,330,25,100,PI/2);
    p10 = new Pin(1070,330,25,100,PI/2);
}

function draw(){
    background(78,232,255);
    
    Engine.update(engine);
    strokeWeight(4)
    ball.display();
    ground.display();
    sling.display();
    wall.display();
    post1.display();
    post2.display();
    post3.display();
    p1.display();
    p2.display();
    p3.display();
    p4.display();
    p5.display();
    p6.display();
    p7.display();
    p8.display();
    p9.display();
    p10.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
   }
   
   
   function mouseReleased(){
   sling.fly();
   }