//Criando variáveis
var arco;
  var flecha;
var fundo;
  var imgarco;
var imgflecha;
  var imgGball;
var imgRball;
  var imgPball;
var imgBball;
  var imgfundo;
var score=0;

function preload(){

//Carregando imagens
  imgfundo=loadImage("background0.png");
    imgflecha=loadImage("arrow0.png");
  imgarco=loadImage("bow0.png");
    imgGball=loadImage("green_balloon0.png");
  imgPball=loadImage("pink_balloon0.png");
    imgBball=loadImage("blue_balloon0.png");
  imgRball=loadImage("red_balloon0.png");

}


function setup() {
  //Canvas
    createCanvas(400, 400);
  
  //Criando fundo
    fundo = createSprite(0,0,400,400);
      fundo.addImage(imgfundo);
    fundo.scale = 2.5
  
  //Criando arco
    arco = createSprite(380,220,20,50);
      arco.addImage(imgarco); 
    arco.scale = 1;
      score = 0
}

function draw() {
 background(0);
  //Chão se mexendo
    fundo.velocityX = -3 

    if (fundo.x < 0){
      fundo.x = fundo.width/2;
    }
  
  //Arco se movendo
  arco.y = World.mouseY
  
  //Atirar flecha
  if (keyDown("space")) {
    criarFlecha();
  }
  
  //Criando balões infinitamente
 
  var rndbalao = Math.round(random(1,4));
  if (World.frameCount % 100 == 0) {
    if (rndbalao == 1) {
      redBalloon();
    } else if (rndbalao == 2) {
      greenBalloon();
    } else if (rndbalao == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  drawSprites();
  //Texto pontuação
  text("Pontuação: "+ score, 300,50)
}


//Criando flechas
 function criarFlecha() {
  var flecha= createSprite(100, 100, 60, 10);
    flecha.addImage(imgflecha);
  flecha.x = 360;
    flecha.y=arco.y;
  flecha.velocityX = -4;
    flecha.lifetime = 100;
  flecha.scale = 0.3;
}



 function redBalloon() {
   var red = createSprite(Math.round(random(20, 370)),50, 10, 10);
    red.addImage(imgRball);
   red.velocityX = 3;
    red.lifetime = 150;
   red.scale = 0.1;
 }


function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(imgBball);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(imgGball);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(imgPball);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
}
