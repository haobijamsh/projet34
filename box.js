class Box{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    {
        var pos = this.body.position;
        push();
        stroke("black");
        fill("red");
        translate(pos.x,pos.y)
        rectMode(CENTER);
        rect(0,0,this.width, this.height); 
        pop();
  }
}