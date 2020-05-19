class Pin {
    constructor(x, y, width, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          //isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      this.image = loadImage("sprites/pin.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(5);
      fill(80,80,80);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };