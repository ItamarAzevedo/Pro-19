var chao,boy,leftBoundary,rightBoundary;
var chaoImg,boyImg;
var i;


function preload(){
chaoImg = loadImage("chao.jpg");
boyImg = loadAnimation("boy.jpeg");
}

function setup(){
 createCanvas(400,400);

chao=createSprite(200,200);
chao.addImage(chaoImg);
chao.velocityY=4;
chao.scale=1.2;

boy=createSprite(180,340,30,30);
boy.addAnimation(boyImg);
boy.scale=1.5;
 
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}


function draw() {
background(0);
chao.velocityY = 4;

edges= createEdgeSprites();
boy.x=World.mouseX
boy.collide(edges[3]);



 if(chao.y>400){
     chao.y=height/2
 }



 drawSprites();

 }
