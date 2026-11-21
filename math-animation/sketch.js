let angle = 0;
let radius = 120;
let speed = 0.03;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(20);

    //center of the canvas
    let centerX = width / 2;
    let centerY = height / 2;

    // the dot's position
    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;

    //center point
    fill(255);
    circle(centerX, centerY, 15);

    //orbiting dot
    fill(0, 200, 255);
    circle(x, y, 25);

    //updating the angle
    angle = angle + speed;

    //instructions
    fill(255);
    textSize(14);
    text("Press UP to increase speed", 20, 30);
    text("Press DOWN to decrease speed", 20, 50);
}

// Keyboard controls
function keyPressed() {
    if (keyCode === UP_ARROW) {
        speed = speed + 0.01;
    }

    if (keyCode === DOWN_ARROW) {
        speed = speed - 0.01;

        if (speed < 0) {
            speed = 0;
        }
    }
}
