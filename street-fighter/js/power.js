var Shuriken = GameObject.extend({
	
	init: function(settings) {
		this._super(settings);
	},
	draw: function(src,animation,whichFighter){
	
		var x = new Move(src,animation,whichFighter);
		whichFighter.move = 1;
		
		function moveAnime(){	
			x.drawShurikenFlight();
			if(x.startShuriken < 0 
			|| x.startShuriken > 900 
			|| x.startShurikenLeft < 0 
			|| x.startShurikenLeft > 950 
			|| x.collision()[3] == true 
			|| x.collision()[4] == true ){
				whichFighter.shuriken = 0;
				clearInterval(interval);
				x.clearShuriken();
				

			}
		}


			var interval =  setInterval(moveAnime,42);	
		
	}
})