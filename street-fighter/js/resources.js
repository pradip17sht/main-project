var sources  = {			
			
			 Punch   : './images/punch.png',			 
			 PunchM   : './images/punchM.png',			 
			 Punch2  : './images/punch2.png',			 
			 Punch2M  : './images/punch2M.png',

			 Kick  : './images/kick.png',			 
			 KickM  : './images/kickM.png',			 
			 Kick2  : './images/kick2.png',			 
			 Kick2M  : './images/kick2M.png',

			 Walk  : './images/walk.png',			
			 WalkM  : './images/walkM.png',			 
			 Walk2  : './images/walk2.png',			
			 Walk2M  : './images/walk2M.png',

			 Idle  : './images/idle.png',			
			 IdleM  : './images/idleM.png',			 
			 Idle2  : './images/idle2.png',			 
			 Idle2M  : './images/idle2M.png',

			 Jump  : './images/jump.png',			
			 JumpM : './images/jumpM.png',			
			 Jump2  : './images/jump2.png',			
			 Jump2M : './images/jump2M.png',

			 Endure : './images/striked.png',			 
			 EndureM : './images/strikedM.png',
			 Endure2 : './images/striked2.png',
			 Endure2M : './images/striked2M.png',
			 
			 isDead  : './images/defeated.png',
			 isDeadM : './images/defeatedM.png',			 
			 isDead2 : './images/defeated2.png',			 
			 isDead2M : './images/defeated2M.png',

			 Striked : './images/Striked.png',
			 StrikedM : './images/StrikedM.png',
			 Striked2 : './images/Striked2.png',
			 Striked2M : './images/Striked2M.png',
			 
			 ShurikenT : './images/shurikentoss.png',			 
			 ShurikenTM : './images/shurikentossM.png',			 
			 ShurikenT2 : './images/shurikentoss2.png',			 
			 ShurikenT2M : './images/shurikentoss2M.png',			 
			 Shuriken : './images/shuriken.png',
				
			 Turn: './images/turn.png',
			 TurnM: './images/turnm.png',
			 Turn2: './images/turn2.png',
			 Turn2M: './images/turn2m.png',
			 
			 ArenaBg1 : './images/backgrounds/desertWinds.gif',
			 ArenaBg2 : './images/backgrounds/initialBackground.gif',	 
			 ArenaBg3 : './images/backgrounds/moonCastle.gif',
			 ArenaBg4 : './images/backgrounds/background2.gif',
			 ArenaBg5 : './images/backgrounds/background3.gif',
			 
			 HealthBar : './images/bar.gif'			 	
		}
		
		var audioSrc = {
				
		};

 
function loadResources(sources) {
		var start = false;
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for (var src in sources) {
            numImages++;
        }
        for (var src in sources) {
            images[src] = new Image();
            images[src].onload = function(){
                if (++loadedImages >= numImages) {                		
                   
                   
                }
            };
            images[src].src = sources[src];
            start = true;
        }        
        return start;
    } 