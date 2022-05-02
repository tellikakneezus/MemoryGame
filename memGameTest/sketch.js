function setup() {
  createCanvas(windowWidth, windowHeight);
  var number;
  font = "30px Arial";
  fillstyle = "white";
  
  
  
}

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max-min)) + min;
  
}

function draw() {
  background(0);
  
  textAlign("center");
  text(getRandomInt(0,10), width/2, height/2);
  
}