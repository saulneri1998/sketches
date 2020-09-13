class Particle {
    constructor(c) {
        this.pos = createVector(random(-20, width + 20), random(height));
        this.size = random(20, 50);
        this.ds = this.size < 30 ? 0.5 : -0.5;
        this.c = c;
    }

    update() {
        this.pos.y += 2;
        // this.size += this.ds;s

        if (this.size > 50 || this.size < 10) {
            this.ds *= -1
        }

        if (this.pos.x > width + this.size / 2) {
            this.pos.x = 0 - this.size / 2;
        }
        if (this.pos.y > height + this.size / 2) {
            this.pos.y = 0 - this.size / 2;
        }
    };

    show() {
        noStroke();
        fill(this.c);
        let nx = 40 * sin(map(this.pos.y, 0, height, 0, TWO_PI));
        ellipse(this.pos.x + nx, this.pos.y, this.size);
    }
}