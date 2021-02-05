const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var score
var scores
var x
var engine, world



function setup() {

    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    scores = 0
    x = [10, "samar"]

    stand =new Ground(400, 390, 400, 20)
    ball =new Polygon(100, 300, 50, 50)
    line1 =new Slingshot(ball.body, {x:100, y:300})
    b1 =new Box(420, 340, 30, 50)
    b2 =new Box(450, 340, 30, 50)
    b3 =new Box(480, 340, 30, 50)
    b4 =new Box(510, 340, 30, 50)
    b5 =new Box(540, 340, 30, 50)
    b6 =new Box(570, 340, 30, 50)
    b7 =new Box(435, 290, 30, 50)
    b8 =new Box(465, 290, 30, 50)
    b9 =new Box(495, 290, 30, 50)
    b10 =new Box(525, 290, 30, 50)
    b11 =new Box(555, 290, 30, 50)
    b12 =new Box(450, 240, 30, 50)
    b13 =new Box(480, 240, 30, 50)
    b14 =new Box(510, 240, 30, 50)
    b15 =new Box(540, 240, 30, 50)
    b16 =new Box(465, 190, 30, 50)
    b17 =new Box(495, 190, 30, 50)
    b18 =new Box(525, 190, 30, 50)
    b19 =new Box(480, 140, 30, 50)
    b20 =new Box(510, 140, 30, 50)
    b21 =new Box(495, 90, 30, 50)

}

function draw() {

    background("black")
    Engine.update(engine)

    fill("white")
    text("Score:"+scores,100, 100)

    stand.display()
    ball.display()
    line1.display()
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()
    b17.display()
    b18.display()
    b19.display()
    b20.display()
    b21.display()

    b1.score()
    b2.score()
    b3.score()
    b4.score()
    b5.score()
    b6.score()
    b7.score()
    b8.score()
    b9.score()
    b10.score()
    b11.score()
    b12.score()
    b13.score()
    b14.score()
    b15.score()
    b16.score()
    b17.score()
    b18.score()
    b19.score()
    b20.score()
    b21.score()

    console.log(scores)
}

function mouseDragged() {

Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})

}

function mouseReleased() {

line1.fly()

}