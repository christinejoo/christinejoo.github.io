// let r = 10
// let a = 0
// let c = 20
let angle = 0
let art
var shapeCount = 0


function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
   myCanvas.parent("frame");

  art = createGraphics(400, 400)
    noStroke();
  art.fill(255,255,255);
  art.rect(0,0,420,420);


}


function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  art.beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    art.vertex(sx, sy);
  }
  art.endShape(CLOSE);
}

function draw() {
  if (shapeCount <= 100){
    art.fill(random(225), random(225), random(225))
    let x = random(400);
    let y = random(400);

    
   
      // let shape = random(['triangle', 'square', 'ellipse']);
      // if(shape === 'triangle') {
      //   art.triangle(x, y, x+random(80), y+random(80),x+random(80), y+random(80));
      // }else if(shape === 'square') {
      //   art.square(x,y,30)
      // }else {
      //   art.ellipse(x, y, 30,30);
      // }
      let npoints = random ([3,4,5,6]);
      polygon(x, y, 30, npoints);

    
  }
  // background(0,0,0,0);
//   push()
// //   translate(200, 200)
//   // let x = random(0, width)

//   // let y = random(0, height)

  
//   // c += 0.2
//   // a += 0.8
//   pop()

  push()
  texture(art)
    rotateX(frameCount * 0.01);
    rotate(frameCount*0.00);
  sphere(200)

  angle += 0.000;
  pop()

  shapeCount++

  
}