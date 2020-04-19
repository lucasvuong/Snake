let Snake = [];

function setup() {
    createCanvas(400, 400);
    Snake.push([200, 100]);
}

function draw() {
    background(0);
    Snake.forEach(element => {
        fill(255);
        noStroke();
        rect(element[0], element[1], 10, 10);
    });
}
