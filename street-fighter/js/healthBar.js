
var HpBar = Class.extend ({
	init: function(idNumber,floatStyle){
		this.idNumber = idNumber;
		this.floatStyle = floatStyle;
		this.hpBar = document.getElementById('hpBar' + idNumber);
		this.lostHp = document.getElementById('lostHP' + idNumber);
		this.hpLeft = document.getElementById('hpLeft' + idNumber);
		this.hasHP = true;
		
	},	
	draw: function (hp,bonus){
		var that = this;
		var stopper = false;		
			this.damage = (hp*2.5) + parseInt(this.lostHp.style.width);
			
			this.bonus = bonus;			
			if (this.bonus === false) {	
				if(this.hasHP){
					var dmg = document.createElement('div');
					dmg.style.width = (hp*2.5)+'px';
					dmg.style.textAlign = 'center';
					dmg.style.lineHeight = '35px';
					dmg.style.height = '35px';
					dmg.style.float= this.floatStyle;
					dmg.innerHTML = '<div id= "hp-minus' + this.idNumber+ '" style="opacity:0.5; position: absolute; top :20; left:40; z-index:10; width:'+(hp*2.5)+'px; height:35px; background-color:rgb(224, 18, 18);"></div>'
					dmg.innerHTML += '<div id= "numbers' + this.idNumber+ '" float:right; z-index:10; width:'+(hp*2.5)+'px; height:35px;">'+hp+ '</div>';
					this.lostHp.appendChild(dmg);
					if(this.lostHp.childNodes.length>1){
						this.lostHp.childNodes[0].remove();
					}
					var interval = setTimeout(function () {					 
						document.getElementById('hp-minus'+ idNumbr()).style.opacity='0';
						document.getElementById('numbers' + idNumbr()).style.transform = 'translate(100px,-100px)';
						document.getElementById('numbers'+ idNumbr()).style.transition = 'all 1s';			
					},800)
				}	
				this.lostHp.style.width = this.damage +'px';				
				this.hpLeft.style.width = parseInt(this.hpBar.style.width)- this.damage +'px';						
				if(this.damage >= parseInt(this.hpBar.style.width) && this.bonus === false){
					this.lostHp.style.width = parseInt(this.hpBar.style.width) +'px';
					this.hpLeft.style.width = 0 +'px';
					this.hasHP = false;
				}
								
				var idNumb = this.idNumber;
				function idNumbr() {					  
					return idNumb;
				}					
			}else{				
				this.lostHp.style.width =parseInt(this.lostHp.style.width) - (hp*2.5) +'px';				
				this.hpLeft.style.width = parseInt(this.hpLeft.style.width) + (hp*2.5) +'px';
				if((parseInt(this.hpLeft.style.width) + (hp*2.5))> 250){				
					this.lostHp.style.width = 0;
					this.hpLeft.style.width = 250 + 'px';					
				}
			}
		}
})


