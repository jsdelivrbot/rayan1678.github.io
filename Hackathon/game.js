var player1;
var player1Image;
var player2;
var player2Image;
var projectile1;
var projectile2;
var backgroundImage;
var isGameOver;
var background;
var projectile1Image;
var projectile2Image;

function preload(){
    player1Image = loadImage("Primal_Panda.png");
    player2Image = loadImage("pancham___gen_vi_pokemon_sprite_by_spalding004-d64vsve.png");
    projectile1Image = loadImage("1318.png");
    projectile2Image = loadImage("pokeballsprite.png");
    backgroundImage = loadImage("Pokemon_stadium.png");
}
function setup() {
    createCanvas(800, 611);
    isGameOver = false;
    player1 = createSprite(0, height / 2, 40, 40);
    player1.addImage(player1Image);
    player2 = createSprite(800, height / 2, 40, 40);
    player2.addImage(player2Image);
    projectile1 = createSprite(0, height / 2, 26, 18);
    projectile1.addImage(projectile1Image);
    projectile2 = createSprite(800, height / 2, 26, 18);
    projectile2.addImage(projectile2Image);
}

function draw() {
    if (isGameOver) {
        gameOver();
    }
    else {
        background(backgroundImage);
        if (keyDown(68) && player1.position.x < width/2) {
            player1.position.x = player1.position.x += 4;
        }
        if (keyDown(65) && player1.position.x > 0) {
            player1.position.x = player1.position.x -= 4;
        }
        if (keyDown(87) && player1.position.y > 0) {
            player1.position.y = player1.position.y -= 4;
        }
        if (keyDown(83) && player1.position.y < height) {
            player1.position.y = player1.position.y += 4;
        }
        if (keyDown(UP_ARROW) && player2.position.y > 0) {
            player2.position.y = player2.position.y -= 4;
        }
        if (keyDown(DOWN_ARROW) && player2.position.y < height) {
            player2.position.y = player2.position.y += 4;
        }
        if (keyDown(RIGHT_ARROW) && player2.position.x < width) {
            player2.position.x = player2.position.x += 4;
        }
        if (keyDown(LEFT_ARROW) && player2.position.x > width/2) {
            player2.position.x = player2.position.x -= 4;
        }
       
        if (projectile1.position.x > width) {
            projectile1.position.x = player1.position.x;
            projectile1.position.y = player1.position.y;
    
        }
        if (projectile2.position.x < 0) {
            projectile2.position.x = player2.position.x;
            projectile2.position.y = player2.position.y;
        }
        
        if (projectile1.overlap(player2)){
            isGameOver = true;
        }
        if (projectile2.overlap(player1)){
            isGameOver = true;
        }
        projectile1.position.x = projectile1.position.x + 10
        projectile2.position.x = projectile2.position.x - 10;

        drawSprites();
    }
}
function gameOver(){
    background(0);
    textAlign(CENTER);
    textSize(40);
    fill("white");
    if (projectile2.overlap(player1)){
            isGameOver = true;
    text("Player 2 Won!",width/ 2, height/2);
    text("Click Anywhere to Rematch",width/2,3*height/4)
    }
    if (projectile1.overlap(player2)){
            isGameOver = true;
            fill("white");
    text("Player 1 Won!",width/ 2, height/2);
    text("Click Anywhere to Rematch",width/2,3*height/4)
}
}
function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player1.position.x = 0;
        player1.position.y = height/2;
        player2.position.x = width;
        player2.position.y = height/2;
        projectile1.position.x = player1.position.x;
        projectile1.position.y = player1.position.y;
        projectile2.position.x = player2.position.x;
        projectile2.position.y = player2.position.y;
    }
}