class Polygon {

    constructor(x,y,width,height){
    
this.body=Bodies.rectangle(x,y,width/2,height/2);
World.add(world,this.body);

this.image=loadImage("polygon.png");
this.width=width;
this.height=height;

}

display(){

push ();
translate(this.body.position.x,this.body.position.y);
rotate (this.body.angle);
image (this.image,0,0,this.width,this.height);
pop ();

}

}