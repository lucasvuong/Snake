let Snake = [];
let direction = "right";
let oppositeDirection = "left";

function setup() {
    createCanvas(400, 400);
    Snake.push([200, 100], [190, 100]);
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
    if (direction == "up") {
        head[1] += 10;
    } else if (direction == "left") {
        head[0] -= 10;
    } else if (direction == "down") {
        head[1] -= 10;
    } else {
        head[0] += 10;
    }
}
