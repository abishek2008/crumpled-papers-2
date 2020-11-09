class Dustbin{

    constructor(x,y,width,height){

        var options={
        isStatic:true,
        friction:10.5  ,
        density:1.5
        }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.image = loadImage("dustbingreen.png");
     this.width=width
     this.height=height
     World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER)
        fill ("green");
       // rect(pos.x,pos.y,this.width,this.height)
        imageMode(CENTER);
        image(this.image, pos.x, pos.y-60, 150, 130);
    }
}