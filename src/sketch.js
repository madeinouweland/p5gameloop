function preload() {
}

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

let angle = 0;
function update() {
  // your update logic goes here...

  // The system variable deltaTime contains the time difference
  // between the beginning of the previous frame and the beginning
  // of the current frame in milliseconds. (https://p5js.org/reference/#/p5/deltaTime)

  // use the deltaTime to update game object positions to
  // ensure smooth animations

  // angle is updated using the deltaTime
  angle += deltaTime * .008;
}

function draw() {
  update();
  background("#000");

  // Your drawing stuff goes here...
  draw_demo();
}

function draw_demo() {
  for (let i = 0; i < 8; i++) {
    fill(255, i * 20, i * 20);
    xx = Math.sin((angle - i) * .5) * 100;
    yy = Math.cos((angle - i) * .3) * 100;
    ellipse(windowWidth / 2 + xx, windowHeight / 2 + yy, 30 + i * 4, 30 + i * 4);
  }
}
