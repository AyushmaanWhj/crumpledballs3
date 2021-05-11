class Paper{
  constructor(x,y,){
    var options={
       'isStatic':false,
       'restitution':0.3,
       'friction':10000,
       'density':1.2
    }
      this.x=x;
      this.y=y;
      this.image=loadImage("paper.png")
      this.body=Bodies.circle(this.x,this.y,30,options)
      World.add(world,this.body)
  }
  display(){
    var paperpos=this.body.position;
    push()
    translate(paperpos.x, paperpos.y);
    imageMode(CENTER)
    image(this.image,0,7,70,70)
    
    

   // ellipse(5,5);
    pop()
 }


}