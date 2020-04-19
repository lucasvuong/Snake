let Snake = [];
let direction = "right";
let oppositeDirection = "left";

function setup() {
    createCanvas(400, 400);
    Snake.push([200, 100], [190, 100]);
    frameRate(2);
}

function draw() {
    background(0);
    Snake.forEach((element) => {
        fill(255);
        noStroke();
        rect(element[0], element[1], 10, 10);
    });
    moveSnake();
}

function moveSnake() {
    for (let i = 1; i < Snake.length; i++) {
        Snake[i] = Snake[i - 1];
    }
    let head = Snake[0];
    switch (direction) {
        case "up":
            head[1] -= 10;
        case "left":
            head[0] -= 10;
        case "down":
            head[1] += 10;
        case "right":
            head[0] += 10;
    }
}

function keyPressed() {
    if (oppositeDirection != key) {
        if (key == "ArrowUp") {
            direction = "up";
        } else if (key == "ArrowLeft") {
            direction = "left";
        } else if (key == "ArrowDown") {
            direction = "down";
        } else if (key == "ArrowRight") {
            direction = "right";
        }
    }
}
