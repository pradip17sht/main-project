	
var Move = Class.extend({
	 
  init: function(src, move,whichFighter){
    this.canvas = whichFighter.canvas;
    this.fighter = whichFighter;
    this.ctx = this.canvas.getContext('2d');
     this.startCoordinateX = whichFighter.startCoordinateX; 
     this.startCoordinateX1 = whichFighter.startCoordinateX;
     this.shurikenY = 450;
     this.startShuriken = this.startCoordinateX;
     this.startShurikenLeft = this.startShuriken + 150;
     this.startCoordinateY = 0;
     this.distanceX = move.distanceX;
     this.distanceY = move.distanceY;
     this.moveName = move.name;
     this.width = move.width;
     this.widthDistance = move.widthDistance;
     this.height = move.height;
     this.heightDistance = move.heightDistance;
     this.arrayCounter = move.arrayCounter;
     this.counter = 0;
     this.image = new Image();
     this.image.src = src;	
     this.hpBar = whichFighter.hpBar;
     this.nrg = whichFighter.nrg;
     this.score = whichFighter.score;
     this.F1 = game.gameObjects.fighters[0];
     this.F2 = game.gameObjects.fighters[1];	
   
 },
 collision :function (){
   var that = this;
   var endPoint;
   var colCurrent = false;
   var colPlayers1 = false;
   var colPlayers2 = false;
   var colCurrentBonusF1 = false;
   var colCurrentBonusF2 = false;
   var colShurikenF1 = false;
   var colShurikenF2 = false;
   
     var shurikenX = this.startShuriken;
     var shurikenY = 50;
     var shurikenLeft = this.startShurikenLeft;
     var longestFrame = Math.max.apply(Math, that.widthDistance);
     var pX1 = this.F1.startCoordinateX;
     var pX2 = this.F2.startCoordinateX;
     var pY1 = this.F1.startCoordinateY;
     var pY2 = this.F2.startCoordinateY;
     if (this.F1.orientation == "left"){
       endPoint = pX1+130;			 
       if(endPoint>=pX2){				  
         colCurrent = true;					
       }else{
         colCurrent = false;
             }
     }else if (this.F1.orientation == "right"){			  
       endPoint = pX2+120;			  
       if(endPoint>=pX1){				 
       colCurrent = true;										
       }else{
       colCurrent = false;
       }
     }	
     if (shurikenX > pX1 && shurikenX < pX1 + 106 && shurikenY > this.startCoordinateY || shurikenLeft > pX1 && shurikenLeft < pX1 + 106 && shurikenY > this.startCoordinateY) {
       colShurikenF1 = true;
       console.log("hit");
     } else if (shurikenX > pX2 && shurikenX < pX2 + 106 && shurikenY > this.startCoordinateY || shurikenLeft > pX2 && shurikenLeft < pX2 + 106 && shurikenY > this.startCoordinateY){
       colShurikenF2 = true;
       console.log("hit");
     }
   return [colCurrent,colCurrentBonusF1,colCurrentBonusF2,colShurikenF1,colShurikenF2];
 },
   draw :function() {		  
   var that = this;
     
     if(this.arrayCounter == 1){			  
        if(this.collision()[0]){					 
           if(this.F1.punch==0 && this.F2.punch==1){
             if(this.F1.move==0){
               if (this.F1.orientation == "left"){
                 this.F1.draw(this.F1.strike,Striked,this.F1);
               }else{
                 this.F1.draw(this.F1.strikeM,Striked,this.F1);
               }
               
               this.F1.hpBar.draw(this.F2.punchDmg,false);							
             }
          }						
          else if(this.F1.punch==1 && this.F2.punch==0){
           if(this.F2.move==0){
             if (this.F2.orientation == "right"){
               this.F2.draw(this.F2.strike,Striked,this.F2);
             }else{
               this.F2.draw(this.F2.strikeM,Striked,this.F2);
             }
             this.F2.hpBar.draw(this.F1.punchDmg,false);
           }
          }else if(this.F1.kick==0 && this.F2.kick==1){
             if(this.F1.move==0){								
               if (this.F1.orientation == "left"){
                 this.F1.draw(this.F1.strike,Striked,this.F1);
               }else{
                 this.F1.draw(this.F1.strikeM,Striked,this.F1);
               }
               this.F1.hpBar.draw(this.F2.kickDmg,false);
             }
                           
           }					
         else if(this.F1.kick==1 && this.F2.kick==0)	{
             if(this.F2.move==0){								
               if (this.F2.orientation == "right"){
                 this.F2.draw(this.F2.strike,Striked,this.F2);
               }else{
                 this.F2.draw(this.F2.strikeM,Striked,this.F2);
               }
               this.F2.hpBar.draw(this.F1.kickDmg,false);
             }
           }
           if(this.F1.hpBar.hasHP == false || this.F2.hpBar.hasHP == false ) {
             if(this.F1.hpBar.hasHP == false){
               
               if(this.F1.orientation == "left"){
                   this.F1.dead = sources.isDead;
                 this.F1.defeated = 1;
                 this.F1.draw(sources.isDead,Defeated,this.F1); 
               }else{
                 this.F1.dead = sources.isDeadM;
                 this.F1.defeated = 1;
                 this.F1.draw(sources.isDeadM,Defeated,this.F1);
               }
               var timeOut = setTimeout(function(){that.F1.end.setup()},3000);
             }
             if(this.F2.hpBar.hasHP == false){
               
               if(this.F2.orientation == "right"){
                   this.F2.dead = sources.isDead2;
                 this.F2.defeated = 1;
                 this.F2.draw(sources.isDead2,Defeated2,this.F2);									
               }else{
                 this.F2.dead = sources.isDead2M;
                 this.F2.defeated = 1;
                 this.F2.draw(sources.isDead2M,Defeated2,this.F2);
               }
               var timeOut = setTimeout(function(){that.F2.end.setup()},3000);
               }
                           
           }	
         }					 
     }
     if(this.arrayCounter==0){
       this.ctx.clearRect(0,0,900,600);
     }
     this.ctx.clearRect(this.startCoordinateX-this.distanceX[this.arrayCounter],
         this.canvas.height-this.heightDistance[this.arrayCounter]-this.startCoordinateY+this.distanceY[this.arrayCounter],
         this.widthDistance[this.arrayCounter-1]+50,
         this.heightDistance[this.arrayCounter]);
   
     this.ctx.drawImage(
         this.image,
         this.width[this.arrayCounter],
         this.height[this.arrayCounter],
         this.widthDistance[this.arrayCounter],
         this.heightDistance[this.arrayCounter],
         this.startCoordinateX,
         this.canvas.height-this.heightDistance[this.arrayCounter]-this.startCoordinateY,
         this.widthDistance[this.arrayCounter],
         this.heightDistance[this.arrayCounter]					
       );			
     if(this.arrayCounter>this.width.length-1){
       this.ctx.clearRect(this.startCoordinateX-this.distanceX[this.arrayCounter-1],
         this.canvas.height-this.heightDistance[this.arrayCounter-1]-this.startCoordinateY+this.distanceY[this.arrayCounter-1],
         this.widthDistance[this.arrayCounter-1],
         this.heightDistance[this.arrayCounter-1]);
       this.counter = 1;				
       this.arrayCounter = 0;		
     }	else {
       this.startCoordinateX += this.distanceX[this.arrayCounter];
       this.startCoordinateY += this.distanceY[this.arrayCounter];
       this.arrayCounter++;				
     }		
     
 },
 distanceAdd: function(){
   for(i=0;i<this.width.length;i++){
     this.startCoordinateX1+= this.distanceX[i]
   }
   return this.startCoordinateX1;
 },
 clearShuriken: function () {
   if (this.fighter.orientation == 'right') {
     this.ctx.clearRect(this.startShuriken - 20,this.shurikenY,50,50);
   }else if(this.fighter.orientation == 'left'){
     this.ctx.clearRect(this.startShurikenLeft + 20,this.shurikenY,50,50);
   }
   
 },
 
 drawShurikenFlight: function(){
   var that = this;

   
   if (this.fighter.orientation == 'right') {
   
     this.ctx.clearRect(this.startShuriken - 20,this.shurikenY,50,50);
     this.ctx.drawImage(this.image,this.startShuriken - 40,this.shurikenY,50,50);
     this.startShuriken -= 20;
    
   } else if (this.fighter.orientation == 'left') {
     
     this.ctx.clearRect(this.startShurikenLeft + 20,this.shurikenY,50,50);
     this.ctx.drawImage(this.image,this.startShurikenLeft + 40,this.shurikenY,50,50);
     this.startShurikenLeft += 20;
   }
   if (this.collision()[3] == true ) {
     this.F2.score.setup(10);
     this.F1.hpBar.draw(this.F2.shurikenDmg,false);
     if (this.F1.orientation == "left"){
       this.F1.draw(this.F1.strike,Striked,this.F1);
     }else{
       this.F1.draw(this.F1.strikeM,Striked,this.F1);
     }
     if(this.F1.hpBar.hasHP == false){
         
         if(this.F1.orientation == "left"){
             this.F1.dead = sources.isDead;
           this.F1.defeated = 1;
           this.F1.draw(sources.isDead,Defeated,this.F1); 
         }else if (this.F1.orientation == "right"){
           this.F1.dead = sources.isDeadM;
           this.F1.defeated = 1;
           this.F1.draw(sources.isDeadM,Defeated2,this.F1);
         }
         var timeOut = setTimeout(function(){that.F1.end.setup()},3000);
       }
     
   }
   if (this.collision()[4] == true ) {
     this.F1.score.setup(10);
     this.F2.hpBar.draw(this.F1.shurikenDmg,false);
     if (this.F2.orientation == "right"){
       this.F2.draw(this.F2.strike,Striked,this.F2);
     }else{
       this.F2.draw(this.F2.strikeM,Striked,this.F2);
     }
     if(this.F2.hpBar.hasHP == false){
         
         if(this.F2.orientation == "right"){
             this.F2.dead = sources.isDead2;
           this.F2.defeated = 1;
           this.F2.draw(sources.isDead2,Defeated2,this.F2);									
         }else{
           this.F2.dead = sources.isDead2M;
           this.F2.defeated = 1;
           this.F2.draw(sources.isDead2M,Defeated,this.F2);
         }
         var timeOut = setTimeout(function(){that.F2.end.setup()},3000);
         }
 
   }
 }

})	



var Punch = {
 name: 'punch',
 arrayCounter: 0,
 width: [21,145,271,397,518],
 widthDistance: [106,101,108,102,115],
 height: [0,0,0,0,0],
 heightDistance : [150,150,150,150,150],
 distanceX: [0,0,0,0,0],
 distanceY: [0,0,0,0,0]
};

var Kick = {
 name: 'kick',
 arrayCounter: 0,
 width: [0,120,242,425,602,0,154,278],
 widthDistance: [120,122,188,177,159,154,124,112],
 height: [22,22,22,22,22,195,198,194],
 heightDistance : [160,160,160,160,160,160,160,160],
 distanceX: [0,0,0,0,0,0,0,0],
 distanceY: [0,0,0,0,0,0,0,0]	
};

var KickRight = {
   name: 'kickright',
   arrayCounter: 0,
   width: [0,120,242,425,602,0,154,278],
   widthDistance: [120,122,188,177,159,154,124,112],
   height: [22,22,22,22,22,195,198,194],
   heightDistance : [160,160,160,160,160,160,160,160],
   distanceX: [-20,-20,-20,-30,20,20,20,30],
   distanceY: [0,0,0,0,0,0,0,0]	
};



var WalkRight = {
   name: 'walkright',
   arrayCounter: 0,
   width: [12,179,320,442,578,705],
   widthDistance: [130,112,107,102,92,95],
   height: [0,0,0,0,0,0,0],
   heightDistance : [145,145,145,145,145,145],
   distanceY: [0,0,0,0,0,0],	
   distanceX: [10,10,10,10,10,10]
 };

var WalkLeft = {
   name: 'walkleft',
   arrayCounter: 0,
   width: [12,177,318,440,576,705],
   widthDistance: [129,112,107,102,92,95],
   height: [0,0,0,0,0,0,0],
   heightDistance : [145,145,145,145,145,145],
   distanceY: [0,0,0,0,0,0],	
   distanceX: [-10,-10,-10,-10,-10,-10]
};

var Jump = {
 name: 'jump',
 arrayCounter: 0,
 width: [135,273,400,531,660,788],
 widthDistance: [107,104,104,104,104,130,106],
 height: [0,0,0,0,0,0,0],
 heightDistance : [183,183,280,202,183,183,183],
 distanceX: [0,0,0,0,0,0,0],//jumping over the other player; [0,0,0,0,0,0,0] for normal jump;
 distanceY: [100,100,100,-75,-75,-75,-75]
};



var JumpRight = {
   name: 'jumpright',
   arrayCounter: 0,
   width: [135,273,400,531,660,788],
   widthDistance: [107,104,104,104,104,130,106],
   height: [0,0,0,0,0,0,0],
   heightDistance : [183,183,280,202,183,183,183],
   distanceX: [20,20,20,60,60,60,60],//jumping over the other player; [0,0,0,0,0,0,0] for normal jump;
   distanceY: [80,80,80,-60,-60,-60,-60]
 };


var JumpLeft = {
   name: 'jumpleft', 
   arrayCounter: 0,
   width: [135,273,400,531,660,788],
   widthDistance: [107,104,104,104,104,130,106],
   height: [0,0,0,0,0,0,0],
   heightDistance : [183,183,280,202,183,183,183],
   distanceX: [-20,-20,-20,-60,-60,-60,-60],//jumping over the other player; [0,0,0,0,0,0,0] for normal jump;
   distanceY: [80,80,80,-60,-60,-60,-60]
 };


var ShurikenT = {
 name: 'shurikent',
 arrayCounter: 0,
 width: [0,156,357],
 widthDistance: [156,201,150],
 height: [0,0,0],
 heightDistance : [160,160,160],
 distanceX: [0,0,0],
 distanceY: [0,0,0]
};


var Defeated = {
 name: 'defeated',
 arrayCounter: 0,
 width: [0,122,274,434,590],
 widthDistance: [114,134,129,129,160],
 height: [0,0,0,0,0,0],
 heightDistance : [140,140,140,140,140],
 distanceX: [-10,-10,-10,-10,-10],
 distanceY: [0,0,0,0,0]	
   
}

var Defeated2 = {
   name: 'defeated',
   arrayCounter: 0,
   width: [0,122,274,434,590],
   widthDistance: [114,134,129,129,150],
   height: [0,0,0,0,0,0],
   heightDistance : [140,140,140,140,140],
   distanceX: [10,10,10,10,10],
   distanceY: [0,0,0,0,0]	
     
 }


var Striked = {
 arrayCounter: 0,
 width: [0,135,281],
 widthDistance: [135,146,145],
 height: [0,0,0],
 heightDistance : [160,160,160,160,160],
 distanceX: [0,0,0],
 distanceY: [0,0,0]	
}


var Turn = {
 name: 'turn',
 arrayCounter: 0,
 width: [3,113],
 widthDistance: [106,106],
 height: [0,0],
 heightDistance : [139,139],
 distanceX: [0,0],
 distanceY: [0,0]
}

