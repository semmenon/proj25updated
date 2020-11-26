class paper
{

    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x, y, r/2, options)
        this.x=y;
        this.y=y;
        this.r=r
        World.add(world, this.body);
        this.image = loadImage("sprites/paper.png");
    }

    display()
    {
        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255)
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop()
    }
}