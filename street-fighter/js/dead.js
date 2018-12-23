var IsDead = Class.extend ({
	init: function (){
		this.canvasArr = [
		document.getElementById('game-canvas'),                  
		document.getElementById('canvas1'),
		document.getElementById('canvas2')
		]
		
	},
	setup:function() {	
		console.log(this.canvasArr)
		for (var i = 0; i<this.canvasArr.length;i++){
			this.canvasArr[i].style.visibility= 'hidden';
		}			
	},
	
})


var death = new IsDead();
