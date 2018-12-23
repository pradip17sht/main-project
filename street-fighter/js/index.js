	var game;
	var button = document.getElementById("start");
	button.addEventListener("click", function () {
		button.style.visibility = "hidden";

	if (loadResources(sources) == true){
		game = new Game();		
		game.drawOnKeyDownPlayer1();
	}	
	
	},false);

