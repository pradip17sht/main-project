var Game = Class.extend({
	context: {},
	stage: {},
	gameObjects: {
		fighters:[],
		shuriken: null
	},
	pressedKeys: {},
	
	init: function(){		
		// creating the objects
		this.initObjects();		
		// draw the objects on the canvas
		this.draw();		
		//this.start();
		this.strike = sources.Strike;
		this.strike2 = sources.Strike2;
  	},
  	
  	initObjects: function() {
  		this.stage = new Stage();
  		
  		this.gameObjects.fighters[0] = new Fighter(Settings.fighters.first);
  		this.gameObjects.fighters[1] = new Fighter(Settings.fighters.second);
   		this.gameObjects.shuriken = new Shuriken(Settings.shuriken);
  		
  		var hpBarOne = document.getElementById("hpBar1");
  		hpBarOne.style.display = "inline";
  		var hpBarTwo = document.getElementById("hpBar2");
  		hpBarTwo.style.display = "inline"; 
  		// var nrgBarOne = document.getElementById("nrg1");
  		// nrgBarOne.style.display = "inline";
  		// var nrgBarTwo = document.getElementById("nrg2");
  		// nrgBarTwo.style.display = "inline";
  		// var clockFrame = document.getElementById("container");
  		// clockFrame.style.display = "inline";
	},
	
	draw: function () {
		if(this.gameObjects.fighters[0].defeated == 0 && this.gameObjects.fighters[0].move ==0){
			this.gameObjects.fighters[0].drawIdle(this.gameObjects.fighters[0]);
		}
		else if (this.gameObjects.fighters[0].defeated == 1){
			this.gameObjects.fighters[0].drawDead(this.gameObjects.fighters[0]);
		}
		if(this.gameObjects.fighters[1].defeated == 0 && this.gameObjects.fighters[1].move ==0){
			this.gameObjects.fighters[1].drawIdle(this.gameObjects.fighters[1]);
		}
		else if (this.gameObjects.fighters[1].defeated == 1) {
			this.gameObjects.fighters[1].drawDead(this.gameObjects.fighters[1]);
		}
	},

	gameObjectReference : function(){
		var gref = this.gameObjects;
		return gref;
	},
	drawOnKeyDownPlayer1: function(){
		var that = this;
		var gameO = this.gameObjectReference();
		var map1 = [];
		var Defeated1;
		var Idle1;
		var Punch1;
		var Kick1;
		var Jump1;
		var Walk1;
		var Defeated2;
		var Idle2;
		var Punch2;
		var Kick2;
		var Jump2;
		var Walk2;
		var Turn1;
		var Turn2;
		var Turn1M;
		var Turn2M;
		var Endure1;
		var Endure2;
		var Endure1M;
		var Endure2M;
		var mirror =0;
		var F1 = gameO.fighters[0];
		var F2 = gameO.fighters[1];
		var shuriken = gameO.shuriken;
		
		onkeydown = onkeyup = function(e){
		    map1[e.keyCode] = e.type == 'keydown';
		    if(F1.startCoordinateX > 1096){
		    	F1.startCoordinateX = 1096;
		    } else if(F1.startCoordinateX < 10){
		    	F1.startCoordinateX = 0;
		    }
		    if(F2.startCoordinateX > 1096){
		    	F2.startCoordinateX =1096;
		    } else if(F2.startCoordinateX < 10){
		    	F2.startCoordinateX = 0;
		    }
		    if(900-F2.startCoordinateX<900-F1.startCoordinateX){
		    	
		    	console.log(false)
				F1.orientation = 'left';
				F2.orientation = 'right';
				Endure1 = sources.Endure;		    	
		    Endure2 = sources.Endure2;		    	
				Turn1 = sources.Turn;
				Turn1M = sources.TurnM;
				Turn2M = sources.Turn2M;
				Turn2 = sources.Turn2;
		    F1.idle = sources.Idle;
				F2.idle = sources.Idle2;
				this.strike = sources.Striked;				
				this.strikeM = sources.Striked2;
				console.log(this.strike, this.strikeM)
				if(mirror == 1){					
			    	console.log(sources.Striked,sources.Striked2)
					if(F1.orientation == 'left' && F1.move==0){
						F1.draw(Turn1,Turn,F1);
			    		}
			    		if(F1.orientation =='right' && F1.move==0){
						F1.draw(Turn1M,Turn,F1);
			    		}
			    		if(F2.orientation == 'left' && F2.move==0){
			    			F2.draw(Turn2,Turn,F2);
			    		}
			    		if(F2.orientation =='right' && F2.move==0){
			    			F2.draw(Turn2M,Turn,F2);
			    		}
					
				}
				Idle1 = sources.Idle;   	
				Idle2 = sources.Idle2;
				Defeated1 = sources.isDead;
				Punch1 = sources.Punch;
				Kick1 = sources.Kick;
				Jump1 = sources.Jump;
				Walk1 = sources.Walk;
				ShurikenT1 = sources.ShurikenT;
				Defeated2 = sources.isDead2;
				Punch2 = sources.Punch2;
				Kick2 = sources.Kick2;
				Jump2 = sources.Jump2;
				Walk2 = sources.Walk2;
				ShurikenT2 = sources.ShurikenT2;
		    mirror = 0;
		    	
			}
			else {
				var temp = sources.StrikedM;
				console.log(true)
				Turn1 = sources.Turn;
		    Turn1M = sources.TurnM;
		    Turn2M = sources.Turn2M;
		    Turn2 = sources.Turn2;
		    Endure1 = sources.Endure;
		    Endure1M = sources.EndureM;
		    Endure2 = sources.Endure2;
		    Endure2M = sources.Endure2M;
		    Idle1 = sources.IdleM;		    	
				Defeated1 = sources.isDeadM;
				Punch1 = sources.PunchM;
				Kick1 = sources.KickM;
				Jump1 = sources.JumpM;
				Walk1 = sources.WalkM;
				ShurikenT1 = sources.ShurikenTM;
				Defeated2 = sources.isDead2M;
				Idle2 = sources.Idle2M;
				Punch2 = sources.Punch2M;
				Kick2 = sources.Kick2M;
				Jump2 = sources.Jump2M;
				Walk2 = sources.Walk2M;
				ShurikenT2 = sources.ShurikenT2M;
		    F1.idle = sources.IdleM;
				F2.idle = sources.Idle2M;
				F1.orientation = 'right';
				F2.orientation = 'left';
				this.strike = sources.StrikedM;
	    	this.strikeM = sources.Striked2M;	
	    	console.log(this.strike, this.strikeM)		    	
		    	if(mirror == 0){  
		    		
		    		if(F1.orientation == 'left' && F1.move==0){
		    			F1.draw(Turn1M,Turn,F1);
		    		}
		    		if(F1.orientation =='right' && F1.move==0){
		    			F1.draw(Turn1,Turn,F1);
		    		}
		    		if(F2.orientation == 'left' && F2.move==0){
		    			F2.draw(Turn2M,Turn,F2);
		    		}
		    		if(F2.orientation =='right' && F2.move==0){
		    			F2.draw(Turn2,Turn,F2);
		    		}

		    	}
		    	mirror = 1;		    	
			}

		    if(map1[74] && map1[73] && F1.move == 0 ){
				F1.draw(Jump1,JumpLeft,F1);
		    }else if(map1[76] && map1[73] && F1.move == 0){
				F1.draw(Jump1,JumpRight,F1);
		    }
		    else if(map1[76] && F1.move == 0){ 
				F1.draw(Walk1,WalkRight,F1);
			}else if(map1[73] && F1.move == 0){
					F1.draw(Jump1,Jump,F1);					
			  }
		    else if(map1[74] && F1.move == 0){ 
				F1.draw(Walk1,WalkLeft,F1);
		    }else if(map1[68] && F1.move == 0){
				F1.draw(Kick1,Kick,F1);
		    }else if(map1[83] && F1.move == 0){
				F1.draw(Punch1,Punch,F1);
		    }else if(map1[65] && F1.move == 0 && F1.hasNrg == true){
				F1.draw(ShurikenT1,ShurikenT,F1);
				shuriken.draw(sources.Shuriken,ShurikenT,F1);
				
				
			}
		    else if(map1[37] && map1[38] && F2.move == 0 ){ 
				F2.draw(Jump2,JumpLeft,F2);
		    }else if(map1[39] && map1[38] && F2.move == 0){ 
				F2.draw(Jump2,JumpRight,F2);
		    }else if(map1[39] && F2.move == 0){ 
				
					F2.draw(Walk2,WalkRight,F2);
				
			}else if(map1[38] && F2.move == 0){
					F2.draw(Jump2,Jump,F2);
			  }
		    else if(map1[37] && F2.move == 0){ 
				F2.draw(Walk2,WalkLeft,F2);
				
		    }else if(map1[100] && F2.move == 0){
				F2.draw(Kick2,KickRight,F2);
		    }else if(map1[101] && F2.move == 0){
				F2.draw(Punch2,Punch,F2);
		    }else if(map1[102] && F2.move == 0 && F2.hasNrg == true){
				F2.draw(ShurikenT2,ShurikenT,F2);
				shuriken.draw(sources.Shuriken,ShurikenT,F2);
		
				
			}		    
		}
			
	}

});

