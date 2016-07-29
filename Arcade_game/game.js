var player;
var mazeBorder1;


function setup() {
    createCanvas(600,400);
    background(150,200,250);
    player = createSprite(50, height/2, 40,40);
    mazeBorder1 = createSprite(0, height/2, 20, 400);
    
}

function draw() {
     background(150, 200, 250);
     if (keyDown(UP_ARROW) && player.position.y > 0){
         player.position.y = player.position.y -= 4;
     }
     if (keyDown(DOWN_ARROW) && player.position.y < height) {
         player.position.y = player.position.y += 4;
     }
     if (keyDown(LEFT_ARROW) && player.position.x > 0) {
         player.position.x = player.position.x -= 4
     }
     if (keyDown(RIGHT_ARROW) && player.position.x < width) {
         player.position.x = player.position.x += 4
     }
     drawSprites();
 }