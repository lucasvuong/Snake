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
    for (let i = Snake.length - 1; i >= 1; i--) {
        Snake[i][0] = 0 + Snake[i - 1][0];
        Snake[i][1] = 0 + Snake[i - 1][1];
    }
    switch (direction) {
        case "up":
            Snake[0][1] -= 10;
            break;
        case "left":
            Snake[0][0] -= 10;
            break;
        case "down":
            Snake[0][1] += 10;
            break;
        case "right":
            Snake[0][0] += 10;
            break;
    }
}

function keyPressed() {
    if (key == "ArrowUp" && oppositeDirection != "up") {
        direction = "up";
        oppositeDirection = "down";
    } else if (key == "ArrowLeft" && oppositeDirection != "left") {
        direction = "left";
        oppositeDirection = "right";
    } else if (key == "ArrowDown" && oppositeDirection != "down") {
        direction = "down";
        oppositeDirection = "up";
    } else if (key == "ArrowRight" && oppositeDirection != "right") {
        direction = "right";
        oppositeDirection = "left";
    }
}
