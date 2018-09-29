function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(50);
  angleMode(DEGREES);
  frameRate(1000)
}

function draw() {
  // put drawing code here
    push()
    translate(width/2,height/2)
    rotate(frameCount*2)
    strokeWeight(1)
    stroke(199,21,123)
    noFill()
    translate(width/2,height/2)
    rotate(frameCount*8)
    line(width/3,height/3,0,0)
    if (frameCount == 300)
    noLoop();
    pop()
    push()
    var radius = (300);
    translate(width/2,height/2);
    stroke(lerpColor(color('#0afff5'), color('#1b1464'), frameCount/250));
    rotate(frameCount*4);
    strokeWeight(0.8);
    line(1,0,1,-radius*sin(frameCount*6,),radius*cos(frameCount*2,));
    if (frameCount == 500)
    noLoop();
    pop()
    push()
    var radius=(100)
    stroke(300)
    strokeWeight(0)
    translate(width/2,height/2);
    rotate(frameCount*2)
    noFill()
    strokeWeight(1)
    stroke(250)
    line(0,0,0,-radius*sin(frameCount*3),radius*cos(frameCount*3));
    line(0,0,0,radius*sin(frameCount*3),-radius*cos(frameCount*3));
    if(frameCount==175)
    noLoop();
    pop()
    noFill()
    push()
    translate(width/2,height/2);
    rotate(frameCount*3);
    strokeWeight(1)
    stroke(lerpColor(color('#0afff5'), color('#a31264'), frameCount/120));
    ellipse(0,0,50,20);
    if (frameCount == 300);
    pop()




}
