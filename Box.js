class Box {

    constructor(x,y,width,height){
    
    
        var options={
            restitution:0.4,
            friction:0.001
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    
    
    this.width=width;
    this.height=height;
    this.visibility=255

    }
    
    score() {

        if(this.visibility<0 && this.visibility>-105) {

            scores++

            console.log(scores)
        }
    }
    
    display(){

    if(this.body.speed<4) {

        push ();
    translate(this.body.position.x,this.body.position.y);
    rotate (this.body.angle);
    rect (0,0,this.width,this.height);
    pop ();

    }
    else {
        push ()
        World.remove(world,this.body)
        this.visibility=this.visibility-5
    tint(255, this.visibility)
    pop ()
    }
    
    }

    
}