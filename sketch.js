var balls = [];
var mic; 
var  angle = 0;
var  rotr=0;
var mymouth = 0;
var x = 0;
var y = 80;
var speed = 1
var shards = [];
function setup(){
 let cnv = createCanvas(500, 500);
  cnv.mousePressed(userStartAudio);
    textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  angleMode(DEGREES);
    r = random(210);
  g = random(180);
  b = random(150);
  for (let i= 0; i < 10; i++){
    let x = 20 + 100 * i;
 balls[i] = new Ball(x,180,20);

  }
}

function draw(){
       x = x + speed
     y = y + speed
if (y > 120 || y < 0) {
      speed = speed * -1
} 
  if (rotr<360){
    rotr++
  }else if (rotr==360){rotr=0};

  background(255, 170, 100);
   for (let i= 0; i< balls.length; i++) {
 balls[i] = new Ball(200,180,30);
   balls[i].move();
   balls[i].show();
 }
    text('Press to start', width/2, 20);
  legf1();
  legf2();
  legb1();
  legb2();
  body();
  Head();
  others();
  lips();
  hat();
  
  let y1 = map(mic.getLevel(), 0, 0.3, 250, 190);
 let x1 = map(mic.getLevel(), 0, .3, 140, 50);
  ellipse(x1, y1, 50, 50);
 
  mymouth = map(mic.getLevel(), 0, 0.3, 50,10)
}

class Ball {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-300,300);
    this.y = this.y + random(-300,300);
    
  }

show(){
  fill(255);
  ellipse(this.x, this.y, 24,24);
  
  
}
}
  
function legf1(xpos,ypos){
  push();
  translate(320, 300);
  rotate(rotr);
  stroke(200, 0, 0);
  strokeWeight(4);
  fill(65)
  rect(0, 0, 10, 70);
  pop();
  
}
function legf2(){
  push();
  translate(280, 300);
  rotate(rotr);
  stroke(200, 0, 0);
  strokeWeight(4);
  fill(65)
  rect(0, 0, 10, 70);
  pop();
}

function legb1(){
  push();
  translate(190, 300);
  rotate(rotr);
  stroke(200, 0, 0);
  strokeWeight(4);
  fill(65)
  rect(0, 0, 10, 70);
  pop();
  
}

function legb2(){
  push();
  translate(220,300);
  rotate(rotr);
  stroke(200, 0, 0);
  strokeWeight(4);
  fill(65)
  rect(0, 0, 10, 70);
  pop();
  
}

function body(){

  noStroke();
  fill(0, 200, 0)
  ellipse(250,250,180,150);
  push();
   
  ellipse(300,300,50,50);
  ellipse(270,310,50,50);
  ellipse(240,310,50,50);
  ellipse(210,305,50,50);
  ellipse(190,290,50,50);
  ellipse(180,272,50,50);
  ellipse(170,272,50,50);
  ellipse(170,240,50,50);
  ellipse(180,220,50,50);
  ellipse(200,200,50,50);
  ellipse(220,190,50,50);
  ellipse(240,185,50,50);
  ellipse(260,185,50,50);
  ellipse(270,190,50,50);
  ellipse(280,190,50,50);
  ellipse(320,280,50,50);
  ellipse(320,250,50,50);
  pop();
  
  
}


function Head(){
    push();
  translate(320,190);
  rotate(mymouth);
  noStroke();
    fill(r, g, b, 190);
  ellipse(0,0,100,100);
  pop();
}
function others(){
  push();  // Eye 
  fill(65);
  ellipse(340,170,25,25);
  //mouth
  stroke(65)
  pop();
}
function lips(){
   push(); 
  fill(65)
  translate(330, 190)
  rotate(mymouth)
   rect(0, 0, 43, 5)
  pop();
}
function mousePressed() {
  var d = dist(mouseX, mouseY, 320, 190);
  if (d < 100) {
  r = random(210);
  g = random(180);
  b = random(150);
  }
}
function hat(){
   push();
  stroke(65)
  fill(65);
  triangle(310, y, 350, 150, 290, 150);
  x = x + speed
     y = y + speed
    pop();
  }