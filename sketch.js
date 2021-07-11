const Bodies = Matter.Bodies
const World = Matter.World
const Constraint =  Matter.Constraint

var myengine, world;
var box, ground;


function setup() {
  createCanvas(800,400);
  
  myengine = Matter.Engine.create()
  world = myengine.world

    ground = new Ground(width/2,height,width,30)
  ball = new Ball (200,height-200,50)
  rope = new SlingShot(ball.body,{x:200,y:10}) 
  box1 =  new Box (350,350,50,50)
    box2 =  new Box (350,300,50,50)
    box3 =  new Box (350,250,50,50)
}

function draw() {
  background(006,255,215);  
  Matter.Engine.update(myengine)
ground.display()
ball.display()
rope.display()
box1.display()
box2.display()
box3.display()
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}