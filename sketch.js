function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(0);
  frameRate(500);
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here

  //rosa
    push()
    translate(width/2,height/2)
    rotate(frameCount*2)
    strokeWeight(1)
    stroke(199,21,123,120)
    noFill()
    translate(width/2,height/2)
    rotate(frameCount*8)
    line(width/4,height/4,0,0)
    if (frameCount == 400)
    noLoop();
    pop()

    //blanco
        push();
        var radius=(100)
        stroke(255)
        strokeWeight(3)
        translate(width/2,height/2);
        rotate(frameCount*1)
        noFill()
        strokeWeight(1)
        stroke(500)
        line(0,0,1,-radius*sin(frameCount*1),radius*cos(frameCount*2));
        line(0,0,0,radius*sin(frameCount*1),-radius*cos(frameCount*2));
        line(0,0,-1,-radius*cos(frameCount*1),radius*sin(frameCount*2));
        line(0,0,-0,radius*cos(frameCount*1),-radius*sin(frameCount*2));
        if(frameCount==180)
        noLoop();
        pop();

//azul
    push();
    var radius = (300);
    translate(width/2,height/2);
    stroke(lerpColor(color('#0afff5'), color('#1b1464'), frameCount/600));
    rotate(frameCount*4);
    strokeWeight(1);
    line(1,0,1,-radius*sin(frameCount*6,),radius*cos(frameCount*2,));
    if (frameCount == 300)
    noLoop();
    pop();

//circulo
    push();
    noFill()
    translate(width/2,height/2);
    rotate(frameCount*5);
    strokeWeight(2)
    stroke(lerpColor(color('#0afff5'), color('#a31264'), frameCount/120));
    ellipse(0,0,50,20);
    if (frameCount == 300);
    pop();





}
