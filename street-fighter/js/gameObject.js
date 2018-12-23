var GameObject = Class.extend({

	init: function(settings) {
		this.idle = settings.idle;
		this.canvas = settings.canvas;
		this.startCoordinateX = settings.startCoordinateX;
		this.startCoordinateY = settings.startCoordinateY;
		this.width = settings.width;
		this.height = settings.height;
		this.move = settings.move;
		this.punch = settings.punch;
		this.kick = settings.kick;
		this.punchDmg = settings.punchDmg;
		this.kickDmg = settings.kickDmg;
		this.shurikenDmg = settings.shurikenDmg;
		this.hpBar = settings.hpBar;
		this.defeated = settings.defeated;
		this.orientation = settings.orientation;
		this.end = settings.end;
		this.strike = settings.strike;
		this.strikeM = settings.strikeM;
	
	},
	
	drawIdle: function(fighter) {
		this.image = new Image();
		this.image.src = this.idle;
		this.x = fighter.startCoordinateX;
		this.y = fighter.startCoordinateY;
		this.ctx = this.canvas.getContext('2d');
		var that = this;
		
		this.image.onload = function(){that.ctx.drawImage(that.image,
				0,
				0,
				106,
				139,
				that.x,
				that.y,
				106,
				139	
				)
			}	
		
		},
		
		drawDead: function(fighter) {
			this.image = new Image();
			this.image.src = this.dead;
			this.x = fighter.startCoordinateX;
			this.y = fighter.startCoordinateX;
			this.ctx = this.canvas.getContext('2d');
			var that = this;

			this.image.onload = function(){that.ctx.drawImage(that.image,
				591,
				0,
				154,
				125,
				that.x,
				460,
				154,
				125
				)
			}
		},
	
	
	deleteIdle : function(fighter){
		
		this.ctx.clearRect(this.x,this.y,110,140);
	}
	
});

