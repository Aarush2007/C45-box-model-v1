var balloon, ball;
var square1, square2, square3, square4, square5; 

function preload(){
   
}

function setup(){
    var canvas = createCanvas(500,800);

    balloon = createSprite(250,700,40,40);
    ball = createSprite(250,630,20,20);
    }


function draw(){
    background(0);
    spawn_squares();
    drawSprites();
}

function mouseDragged(){
    ball.x = mouseX;
    ball.y = mouseY;
}

function spawn_squares(){
    if (frameCount % 300 === 0){
        square1 = createSprite(50, -200, 30,30);
        square2 = createSprite(150, -200, 30,30);
        square3 = createSprite(250, -200, 30,30);
        square4 = createSprite(350, -200, 30,30);
        square5 = createSprite(450, -200, 30,30);

        square1.velocityY = 6;
        square2.velocityY = 6;
        square3.velocityY = 6;
        square4.velocityY = 6;
        square5.velocityY = 6;

        square1.velocityX = 1;
        square2.velocityX = 1;
        square3.velocityX = 1;
        square4.velocityX = 1;
        square5.velocityX = 1;
    }
}