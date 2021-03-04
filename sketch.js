const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg;
var sh;
var monster;
var b1,b2,b3,b4,b5;
var b6,b7,b8,b9,b10;

function preload() {
bg = loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
    world = engine.world;

    sh = new Superhero(200,170,400,300);
    ground = new Ground(300,height,1200,150);
    monster = new Monster(800,170,300,400);

    b1 = new Box(500,200,50,50);
    b2 = new Box(540,200,50,50);
    b3 = new Box(580,200,50,50);
    b4 = new Box(620,200,50,50);
    b5 = new Box(660,200,50,50);
    b6 = new Box(500,200,50,50);
    b7 = new Box(540,200,50,50);
    b8 = new Box(580,200,50,50);
    b9 = new Box(620,200,50,50);
    b10 = new Box(660,200,50,50);

}

function draw() {
  background(bg);
   
   Engine.update(engine);

   sh.show();
   ground.show();
   monster.show();

   b1.show();
   b2.show();
   b3.show();
   b4.show();
   b5.show();
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(sh.body,b1.body.position,{x:0.5,y:0});
  }
}
