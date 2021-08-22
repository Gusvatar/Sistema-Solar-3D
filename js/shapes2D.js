class Line {

    constructor(x1, y1, x2, y2) {

        this.points = [
            new Vector(2, [x1, y1]),
            new Vector(2, [x2, y2]),
        ]
        this.transform = new Transformation()
    }

    rotate(angle) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.rotation2D(this.points[i], angle)
        }
    }

    translate(dx, dy) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.translate2D(this.points[i], dx, dy)
        }
    }

    draw() {

        beginShape(LINES)
        vertex(this.points[0].get(1,1), this.points[0].get(2,1))
        vertex(this.points[1].get(1,1), this.points[1].get(2,1))
        endShape(CLOSE)
    }
}

class Rectangle {

    constructor(x, y, w, h) {
        this.points = [
            new Vector(2, [x, y]),
            new Vector(2, [x + w, y]),
            new Vector(2, [x + w, y + h]),
            new Vector(2, [x, y + h]),
        ]
        this.transform = new Transformation()
    }

    rotate(angle) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.rotation2D(this.points[i], angle)
        }
    }

    translate(dx, dy) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.translate2D(this.points[i], dx, dy)
        }
    }

    draw() {

    beginShape(TRIANGLES);
    vertex(this.points[0].get(1,1), this.points[0].get(2,1));
    vertex(this.points[1].get(1,1), this.points[1].get(2,1));
    vertex(this.points[2].get(1,1), this.points[2].get(2,1));

    vertex(this.points[2].get(1,1), this.points[2].get(2,1));
    vertex(this.points[3].get(1,1), this.points[3].get(2,1));
    vertex(this.points[0].get(1,1), this.points[0].get(2,1));
    endShape(CLOSE);
    }
}

class Triangle {

    constructor(x1, y1, x2, y2, x3, y3) {

        this.points = [
            new Vector(2, [x1, y1]),
            new Vector(2, [x2, y2]),
            new Vector(2, [x3, y3]),
        ]
        this.transform = new Transformation()
    }

    rotate(angle) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.rotation2D(this.points[i], angle)
        }
    }

    translate(dx, dy) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.translate2D(this.points[i], dx, dy)
        }
    }

    draw() {

        beginShape(TRIANGLES)
        vertex(this.points[0].get(1,1), this.points[0].get(2,1))
        vertex(this.points[1].get(1,1), this.points[1].get(2,1))
        vertex(this.points[2].get(1,1), this.points[2].get(2,1))
        endShape(CLOSE)
    }
}

class Circle {

    constructor(x, y, r, t) {

        this.points = [t]
        this.r = r
        this.t = t
        this.angle = Math.PI/t * 2
        this.transform = new Transformation()

        for (var i = 0; i < this.t; i += 1) {
            let x = this.r * Math.sin(this.angle * i)
            let y = (-1 * this.r) * Math.cos(this.angle * i)
            this.points[i] = (new Vector(2, [x, y]))
        }
    }

    rotate(angle) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.rotation2D(this.points[i], angle)
        }
    }

    translate(dx, dy) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.translate2D(this.points[i], dx, dy)
        }
    }

    draw() {

        beginShape(TRIANGLE_FAN)
        for (var i = 0; i < this.t; i += 1) {
            vertex(this.points[i].get(1,1), this.points[i].get(2,1))
        }
        endShape(CLOSE)
    }
}
