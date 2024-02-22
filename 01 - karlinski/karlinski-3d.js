// Initialize time variable
let t = 0;
// Initialize direction variable
let direction = 1;

// Setup function runs once when the program starts
function setup() {
  // Create a canvas that fills the window
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Set color mode to HSB
  colorMode(HSB, 360, 100, 100);
}

// Draw function runs continuously after setup
function draw() {
  // Set background color to white
  background(255);
  // Increment time variable
  t += 0.01 * direction;

  // Add an ambient light
  ambientLight(85);


  // Draw overlapping boxes
  for (let i = -width / 2; i <= width / 2; i += 70) {
    for (let j = -height / 2; j <= height / 2; j += 70) {
      let x = i + 30 * sin(t + i / 100);
      let y = j + 30 * cos(t + j / 100);
      // Calculate hue and alpha values based on time and position
      let hue = (map(sin(t + i / 100), -1, 1, 0, 360) + 180) % 360;
      let alpha = map(sin(t + i / 100), -1, 1, 50, 100);
      // Set the color of the box
      fill(hue, 70, 70, alpha);
      // Save the current transformation matrix
      push();
      // Move the origin to the position of the box
      translate(x, y);
      // Rotate the box
      rotateX(t);
      rotateY(t);
      // Draw a 3D box
      box(50);
      // Restore the transformation matrix
      pop();
    }
  }

  // Draw overlapping spheres
  for (let i = -width / 2; i <= width / 2; i += 60) {
    for (let j = -height / 2; j <= height / 2; j += 60) {
      let x = i + 30 * sin(t + i / 100);
      let y = j + 30 * cos(t + j / 100);
      // Calculate hue and alpha values based on time and position
      let hue = map(sin(t + i / 100), -1, 1, 0, 360);
      let alpha = map(sin(t + i / 100), -1, 1, 50, 100);
      // Set the color of the sphere
      fill(hue, 70, 70, alpha);
      // Save the current transformation matrix
      push();
      // Move the origin to the position of the sphere
      translate(x, y);
      // Draw a 3D sphere
      sphere(30);
      // Restore the transformation matrix
      pop();
    }
  }

  // Draw 3D lines
  push();
  for (let i = 0; i <= width; i += 50) {
    let x = i + 100 * sin(t + i / 100);
    let y = 100 * cos(t + i / 100);
    let z = 0; // z-coordinate of the line
    let lineLength = height - 2 * y; // length of the line
    let lineWidth = 2; // width of the line
    let lineHeight = 2; // height of the line
    // Move the origin to the position of the line
    translate(x - width / 2, y - height / 2, z);
    // Rotate the line
    rotateX(t);
    rotateY(t);
    // Draw a 3D line
    box(lineLength, lineWidth, lineHeight);
    // Move the origin back to its original position
    translate(-(x - width / 2), -(y - height / 2), -z);
  }
  pop();
}

// When the mouse is clicked, change the direction of movement
function mouseClicked() {
  direction *= -1;
}

// When the window is resized, resize the canvas to fill the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}