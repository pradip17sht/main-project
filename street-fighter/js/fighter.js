var Fighter = GameObject.extend({
	move: null,
	
	init: function(settings) {
		this._super(settings);
	},
	
	draw: function(src,animation,whichFighter){		
		var x = new Move(src,animation,whichFighter);
		whichFighter.move = 1;

		if(animation.name =='punch'){
			whichFighter.punch = 1;
		}
		else if (animation.name == 'kickright'){
			game.gameObjects.fighters[1].kick = 1;
		}
		else if (animation.name == 'kick'){
			game.gameObjects.fighters[0].kick = 1;
		}
		
		function moveAnime(){	
			x.draw();
			if(x.counter>0 ){
				clearInterval(interval);
				whichFighter.move = 0;
				game.draw();
				x.counter = 0;

				whichFighter.kick = 0;
				whichFighter.punch = 0;
			}
		}	
		
		whichFighter.startCoordinateX = x.distanceAdd();

			var interval =  setInterval(moveAnime,50);	

	}	
});