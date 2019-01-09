function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(255);
  ellipse(mouseX, mouseY, 180, 180);
  console.log(frameRate);
}