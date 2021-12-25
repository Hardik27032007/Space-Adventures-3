var bg_img,bg,player;
var enemy_img,player_img;
var score,score1;
var b1,bulletGroup,enemyGroup;

function preload(){
  bg_img = loadImage("images/background.jpg");
  player_img = loadImage("images/player.png");
  enemy_img = loadImage("images/spaceship.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2-60,height/2-60);
  bg.addImage("background",bg_img);
  bg.scale = 0.25;

  player = createSprite(width/2-250,height/2-100);
  player.addImage("spaceship",player_img);
  player.scale = 0.6;

bulletGroup = new Group();
enemyGroup = new Group();

  edges = createEdgeSprites();
}

function draw() {
  
 if (keyDown(UP_ARROW)) {
   player.y = player.y-7;
 }
 if (keyDown(DOWN_ARROW)) {
   player.y = player.y+7;
 }
 if (keyDown(RIGHT_ARROW)) {
   player.x = player.x+7;
 }
 if (keyDown(LEFT_ARROW)) {
   player.x =player.x-7;
 }

 if (keyDown("space")) {
   createBullets(); 
 }

 createEnemy();
if (bulletGroup.isTouching(enemyGroup)) {
  console.log("collided");
  bulletGroup.destroyEach();
}

 player.bounceOff(edges[0]);
 player.bounceOff(edges[1]);
 player.bounceOff(edges[2]);
 player.bounceOff(edges[3]);

  drawSprites();
}

function createBullets(){
  var bullet = createSprite(player.x+170,player.y,30,20);
  bullet.velocityX = 8;
  bulletGroup.add(bullet);
}

function createEnemy(){
 var enemy = createSprite(width/2+250,height/2+100);
  enemy.addImage("spaceship",enemy_img);
  enemy.scale = 0.8;
  enemy.setCollider("rectangle",0,0,100,260);
  enemyGroup.add(enemy);

}