//Create variables here
var dog, happyDog, dogImg;
var database;
var foodS, foodStock

function preload() {
  //load images here
  happyDog = loadImage("images/dogImg1.png");
  dogImg = loadImage("images/dogImg");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(400,250,15,15);
  dog = addImage(happyDog);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.ddImage(happyDog);
  }

  drawSprites();
  //add styles here
  stroke("white");
  fill("white");
  textSize(20);
  text("foodStock:"+foodStock,30,30)

  stroke("white");
  fill("white");
  textSize(20);
  text("Press The Up Arrow To Feed The Dog!",470,30)

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if (x<=0){
    x=0
  }else{
    x=x-1;
  } 

  
   database.ref('/').update({
    Food:x
 })
}