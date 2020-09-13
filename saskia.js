let n = 5;
let offset = 180;
let size;
let quads;

function setup() {
    createCanvas(700, 700);
    size = (width - 2 * offset) / n;

    setupQuads();
}

function draw() {
    background(0);
    quads.forEach(q => drawQuad(q));
    quads.map(q => alterQuad(q));
}

function mousePressed() {
    setupQuads();
}

function setupQuads() {
    quads = [];
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            let x = offset + j * size;
            let y = offset + i * size;
            let ang = random(TWO_PI);
            quads.push({
                p1: createVector(x, y),
                p2: createVector(x + size, y),
                p3: createVector(x + size, y + size),
                p4: createVector(x, y + size),
                col: random([
                    color(160, 218, 194, 190),
                    color(245, 133, 177, 190)
                ]),
                ang: ang,
                step: size / 2 * sin(ang) + size / 2,
                type: random([1, 2, 3, 4, 5, 6, 7, 8])
            });
        }
    }
}

function drawQuad(q) {
    noFill();
    stroke(q.col);
    strokeWeight(3);

    switch (q.type) {
        case 1:
            // stroke('red');
            quad(q.p1.x, q.p1.y + q.step,
                q.p2.x - q.step, q.p2.y,
                q.p3.x, q.p3.y,
                q.p4.x, q.p4.y);
            break;
        case 2:
            // stroke('green');
            quad(q.p1.x + q.step, q.p1.y,
                q.p2.x, q.p2.y + q.step,
                q.p3.x, q.p3.y,
                q.p4.x, q.p4.y);
            break;
        case 3:
            // stroke('blue');
            quad(q.p1.x, q.p1.y,
                q.p2.x - q.step, q.p2.y,
                q.p3.x, q.p3.y - q.step,
                q.p4.x, q.p4.y);
            break;
        case 4:
            // stroke('lime');
            quad(q.p1.x, q.p1.y,
                q.p2.x, q.p2.y + q.step,
                q.p3.x - q.step, q.p3.y,
                q.p4.x, q.p4.y);
            break;
        case 5:
            // stroke('lightblue');
            quad(q.p1.x, q.p1.y,
                q.p2.x, q.p2.y,
                q.p3.x, q.p3.y - q.step,
                q.p4.x + q.step, q.p4.y);
            break;
        case 6:
            // stroke('yellow');
            quad(q.p1.x, q.p1.y,
                q.p2.x, q.p2.y,
                q.p3.x - q.step, q.p3.y,
                q.p4.x, q.p4.y - q.step);
            break;
        case 7:
            // stroke('orange');
            quad(q.p1.x, q.p1.y + q.step,
                q.p2.x, q.p2.y,
                q.p3.x, q.p3.y,
                q.p4.x + q.step, q.p4.y);
            break;
        case 8:
            // stroke('white');
            quad(q.p1.x + q.step, q.p1.y,
                q.p2.x, q.p2.y,
                q.p3.x, q.p3.y,
                q.p4.x, q.p4.y - q.step);
            break;
    }
}

function alterQuad(q) {
    let x = q.ang + 0.04 * frameCount;
    q.step = size / 2 * sin(x) + size / 2;
}