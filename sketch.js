var database;
var gameState=0,playerCount=0,form,game,player;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
   game=new Game();
   game.getstate();
   game.start();
   
}

function draw(){
    background("white");
   
}

