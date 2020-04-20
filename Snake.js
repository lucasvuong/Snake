let Snake = [];
let direction = "right";
let oppositeDirection = "left";
let foodPos = [];
let previousTail;
let gameOver = false;

function setup() {
    createCanvas(400, 400);
    Snake.push([200, 100], [190, 100]);

    foodPos.push(floor(random(39)) * 10, floor(random(39)) * 10);
    frameRate(5);
}

function draw() {
    background(0);
    if (!gameOver) {
        Snake.forEach((element) => {
            fill(255);
            noStroke();
            rect(element[0], element[1], 10, 10);
        });
        fill(255, 0, 0);
        rect(foodPos[0], foodPos[1], 10, 10);
        moveSnake();
        if (foodGotEaten()) {
            Snake.push(previousTail);
            foodPos = [floor(random(39)) * 10, floor(random(39)) * 10];
        }
        if (snakeCrashedIntoWall()) {
            gameOver = true;
            if (promt("Game Over. Play again? (yes/no)") == "yes") {
                gameOver = false;
            }
        }
        previousTail = [
            0 + Snake[Snake.length - 1][0],
            0 + Snake[Snake.length - 1][1],
        ];
    }
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

function foodGotEaten() {
    return foodPos[0] == Snake[0][0] && foodPos[1] == Snake[0][1];
}

function snakeCrashedIntoWall() {
    return (
        Snake[0][0] < 0 ||
        Snake[0][0] > 400 ||
        Snake[0][1] < 0 ||
        Snake[0][1] > 400
    );
}
