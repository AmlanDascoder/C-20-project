var cat;
var ci;
var mouse;
var mi;
var ci2;
var ci3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    ci = loadImage("images/cat1.png");
    ci3 = loadAnimation("images/cat4.png");

    mi = loadImage("images/mouse2.png");
    ci2 = loadAnimation("images/cat2.png", "images/cat3.png" )

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(600, 500, 50, 50);
cat.addImage(ci);
cat.scale = 0.1;
mouse = createSprite(300, 500, 50, 50)
mouse.addImage(mi);
mouse.scale = 0.1;
mouse.debug = true;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    
    
    if(cat.isTouching(mouse)) {
        cat.velocityX = 0;
        cat.addAnimation("cat_lastImage", ci3)
cat.changeAnimation("cat_lastImage")

    }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW) {
cat.velocityX = -5;
cat.addAnimation("cat_running", ci2)
cat.changeAnimation("cat_running")
}
  //For moving and changing animation write code here


}
