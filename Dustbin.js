class Dustbin{
  constructor(x,y,width,height){
    var options={restitution:1,isStatic:true}
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    this.image=loadImage("dustbin.png")
    World.add(world,this.body)
  }
  display(){
  var dustbinpos=this.body.position;
  push()
  translate(dustbinpos.x,dustbinpos.y)
  imageMode(CENTER)
  image(this.image,0,-90,200,200)
  pop()

  }
}