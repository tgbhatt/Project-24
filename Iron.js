class Iron{
	constructor(x,y)
	{
	var options = {
		'restitution':0.8,
		'friction':3,
		'density':30
	}
	
        this.width = 30;
        this.height = 30;
	    this.body = Bodies.rectangle(x, y, 30, 30, options);
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER);
			rect(0,0,this.width, this.height);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");

			pop()
	}

}