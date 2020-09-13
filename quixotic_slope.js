class Circ {
    constructor(r, s, x, y) {
        this.r = r;
        this.s = s;
        this.x = x;
        this.y = y;
    }

    draw(sections, prev) {
        strokeWeight(this.s);
        if (prev == null) {
            return;
        }
        for (let i = 0; i < sections; i++) {
            let angle = TWO_PI / sections * i;
            line(prev.x + prev.r * cos(angle), prev.y + prev.r * sin(angle),
                this.x + this.r * cos(angle), this.y + this.r * sin(angle));
        }
    }

    update(x, y) {
        this.x = map(x - width / 2, -width / 2, width / 2, -this.r, this.r);
        this.y = map(y - height / 2, -height / 2, height / 2, -this.r, this.r);
    }
}

let c1 = new Circ(80, 0, 200, 200);
let c2 = new Circ(140, 1, 200, 200);
let c3 = new Circ(200, 2, 200, 200);
let c4 = new Circ(250, 3, 200, 200);
let sections = 90;
let step = 0;

function setup() {
    createCanvas(700, 700);
    noCursor();
}

function draw() {
    translate(width / 2, height / 2);
    background(40);
    stroke(220);

    c1.draw(sections, null);
    c2.draw(sections, c1);
    c3.draw(sections, c2);
    c4.draw(sections, c3);


    c1.update(mouseX, mouseY);
    c2.update(mouseX, mouseY);
    c3.update(mouseX, mouseY);
    c4.update(mouseX, mouseY);

}