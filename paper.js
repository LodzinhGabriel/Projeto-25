class paper {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 1.0,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();
    }
}