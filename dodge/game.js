var player;
var playerImage;
var enemy;
var enemyImage;
var isGameOver;
var backgroundImage;
var enemy2;
var enemy2Image;
 

function preload() {
    playerImage = loadImage("Pikachu_pic.png");
    enemyImage = loadImage("pokeball.png");
    backgroundImage = loadImage("Pokemon_stadium.png");
    enemy2Image = loadImage("pokeball.png");
    mySound = loadSound('feels_bad_man_k.mp3');
}

function setup() {

    createCanvas(638,834);
    player = createSprite(width/2, height-80, 50, 50);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 20, 30);
    enemy.addImage(enemyImage);
    enemy2 = createSprite(width/2, 0, 20, 30);
    enemy2.addImage(enemy2Image);
    isGameOver = false;
}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
    background(backgroundImage);
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))) {
        player.position.x = player.position.x += 45;
}
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
        player.position.x = player.position.x -= 45;
}    
    enemy.position.y = enemy.position.y + 20;
    enemy2.position.y = enemy.position.y + 20;
if (enemy.position.y > height) {
    enemy.position.y = 0;
    enemy.position.x = random(5, width-5); 
}
if (enemy2.position.y > height) {
    enemy2.position.y = 0;
    enemy2.position.x = random(5, width-5); 
}
if (enemy.overlap(player)) {
    isGameOver= true;
}
if (enemy2.overlap(player)) {
    isGameOver= true;
}
    drawSprites();
}
function gameOver() {
    background(0);
     textAlign(CENTER);
    textSize(20);
    fill("white");
    text("Feels Bad Man", width/2, height/4);
    text("Use left and right arrow keys to avoid getting caught", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/4);
    
}
}
function mouseClicked() {
    if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-80;
    enemy.position.x = width/2;
    enemy.position.y = 0;
    enemy2.position.x = width/2;
    enemy2.position.y = 0;
}
}
