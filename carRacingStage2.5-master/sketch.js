var canvas, backgroundImage;
var smiley,smileyImg,desk,deskImg;
var gameState = 0;
var playerCount;
var allPlayers;


function preload(){
smileyImg = loadImage("images/smiley.png");
deskImg = loadImage("images/desk.png");

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  smiley = createSprite(20,50,100,100);
  desk = createSprite(700,700,100,100);
  smiley.addImage("smiley",smileyImg);
  desk.addImage("desk",deskImg);
}



}
function quiz(questions,container,results,submit)
{
  

}
