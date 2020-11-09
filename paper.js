class Paper{

    constructor(x,y,radius){

        var options={
            isStatic:false,
            restitution:0,
            friction:17.5,
            density:1.3
        }
            this.body=Bodies.circle(x,y,radius,options);
            this.image = loadImage("paper.png");
            this.radius=radius
            World.add(world,this.body);
           }
           display(){
               var pos=this.body.position;
               fill ("white");
              //ellipseMode(RADIUS);
              //ellipse(pos.x,pos.y,this.radius);
              imageMode(CENTER);
              image(this.image, pos.x, pos.y, 40,40);
       
        
    }
}