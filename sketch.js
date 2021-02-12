
var dog,happyDog;
var database1;
var foodS,foodStock;

function preload()
{
	hdog = loadImage("images/dogImg.png")
  dog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database1 = firebase.database();
  foodStock= database1.ref('Food');
  foodStock.on("value",readStock);
  //foodS = 0;
  dog1 = createSprite(250,250)
  dog1.addImage(dog)
  dog1.scale = 0.2;
  reset()
}


function draw() {  
 background(46,139,87)
 fill("black")
 textSize(15)
 stroke(2)
 text("Note: Press UP_ARROW Key To Feed Drago Milk!",100,90)
 text("Food remaining : "+foodS,180,150)
 
  if(keyWentDown(UP_ARROW)){
    foodS = foodS-1
    writeStock(foodS);
    dog1.addImage(hdog);
    
  }
  
  drawSprites();
  //add styles 

}
//function to read values from database
function readStock(data){
  foodS = data.val();
}
//function to write values in database
function writeStock(x){
  database1.ref('/').update({
  Food:x
  })

}
function reset(){
  database1.ref('/').set({
    Food:20
    })
  
}


