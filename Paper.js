class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            mass:20,
        }

        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        
        fill("white");
        imageMode(RADIUS);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        
    }
}