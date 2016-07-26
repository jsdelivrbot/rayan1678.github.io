var player;
var playerImage;

var enemy;
var enemy2;
var enemy3;
var enemeyImage;
var eix;

var projectile;
var projectileImage;

function preload() {
    eix = loadImage("eix.png");
}

function setup() {
    createCanvas(611, 800);
    background(150,200,250)
    player = createSprite(width/2, 800, 40,40);
    enemy = createSprite(width/2, 0, 60, 60);
    projectile = createSprite(width/2, 790, 20, 20);
    enemy2 = createSprite(width/2, 0, 60, 60);
    enemy3 = createSprite(width/2, 0, 60, 60);

}
 
function draw() {
    background(150, 200, 250);
    if (keyDown(UP_ARROW) && player.position. y > 0) {
        player.position.y = player.position.y -= 4;
    }
    if (keyDown(DOWN_ARROW) && player.position. y < height) {
        player.position.y = player.position.y += 4;
    }
    if (keyDown(RIGHT_ARROW) && player.position.x < width) {
        player.position.x = player.position.x += 4;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 0) {
        player.position.x = player.position.x -=4;
    }
    if (keyDown(32) && projectile.position.y < 0) {
        projectile.position.y = player.position.y -= 10;
        projectile.position.x = player.position.x;
    }
    projectile.position.x = projectile.position.x;
    projectile.position.y = projectile.position.y -= 10;
    
    enemy.position.y = enemy.position.y + 3;
if (enemy.position.y > height) {
    enemy.position.y = 0;
}
    enemy.position.x = enemy.position.x + 6;
if (enemy.position.x > width){
    enemy.position.x = 0;
}
    enemy2.position.y = enemy2.position.y + 3;
if (enemy2.position.y > height) {
    enemy2.position.y = 0;
}
    enemy2.position.x = enemy2.position.x + 6;
if (enemy2.position.x > width){
    enemy2.position.x = 0;
}
    enemy3.position.y = enemy3.position.y + 3;
if (enemy3.position.y > height) {
    enemy3.position.y = 0;
}
    enemy3.position.x = enemy3.position.x + 6;
if (enemy3.position.x > width){
    enemy3.position.x = 0;
}
if (projectile.overlap(enemy)){
    enemy.addImage(eix);
    enemy2 = createSprite(width/2, 0, 60, 60);
 }
 if (projectile.overlap(enemy2)){
    enemy2.addImage(eix);
    enemy3 = createSprite(width/2, 0, 60, 60);
 }
  if (projectile.overlap(enemy3)){
    enemy3.addImage(eix);
 }

    drawSprites();    
}