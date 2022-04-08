var Original_Bob;
var Bob,Bob2,Bob3;
var Bob_slides,Bob_jumps;
var Bob_shield,Bob_rocket;
var wall1,wall2;
var rocket,shield;
var Base,base_false,Base_broken;
var clouds;
var autoestima,bob_standing;
var kevin,keving_punch;
var bob_kick;
var fondo;
var gamestate=0;

function preload()
{
Bob=loadAnimation("Stickman_1.png","Stickman_1.5.png","Stickman_2.png");
clouds=loadImage("storm-clouds-from-above.jpg");

}




function setup()
{  
createCanvas(800,600);
//console.log(windowWidth)
fondo=createSprite(600,400,1200,800);
Original_Bob=createSprite(400,200,10,50);
Original_Bob.addAnimation("Running",Bob);
Original_Bob.scale=.1;
kevin=createSprite(200,350,20,500);
fondo.addImage(clouds);
}



function draw()
{
background("white");
fondo.velocityX=-3;
if(fondo.x<0)
{
    fondo.x=fondo.width/2;
}
drawSprites();
}

if(keyDown("space"))//&&T_rex.y>=330)
{
Original_Bob.velocityY=-20;
}

//Original_Bob.velocityY=Original_Bob.velocityY+1;//La gravedad



function mousePressed()
{
gamestate=1;
//fondo.velocityX=-1;
console.log("holalalalallalal")
}