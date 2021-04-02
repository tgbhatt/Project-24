class Stone{
	constructor(x,y)
	{
	var options = {
		'restitution':0.8,
		'friction':0.9,
		'density':12
	}
	
        this.width = 50;
        this.height = 50;
	    this.body = Bodies.rectangle(x, y, 50, 50, options);
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER);
			rect(0,0,this.width, this.height);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");

			pop()
	}

}