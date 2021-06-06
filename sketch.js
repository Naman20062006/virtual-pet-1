//Create variables here
var dog,dogImg,happyDogImg;
var database;
var foods,foodStock;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);

   dog = createSprite(250,250);
   dog.addImage(dogImg);
   dog.scale=0.2;

   database = firebase.database();
   
   foodstock = database.ref("Food")
   foodStock.on("value",readStock);

  
}


function draw() {  
background("white");

  if(keyWentDown(UP_ARROW)){
  
     writeStock(foods);
     dog.addImage(happyDogImg)
  }

  drawSprites();


   fill("red");
   textSize(20);
   text("Press UP_ARROW Key To Feed ",100,50)
   text("Food :"+foods,100,100)
}
 
  function readStocks(data){

    foods = data.val();
  }

 function writeStock(x){

  x = x-1;

  database.ref('/').update({
    Food:x
  })
 }



