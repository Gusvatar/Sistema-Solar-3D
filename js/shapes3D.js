class Plane {

    constructor(x, y, z, w, h, l) {
        this.points = [
            new Vector(3, [x, y, z]),
            new Vector(3, [x + w, y, z]),
            new Vector(3, [x, y + h, z]),
            new Vector(3, [x + w, y + h, z]),
        ]
        this.transform = new Transformation()
    }

    rotate(angle) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.rotation3DY(this.points[i], angle * (Math.PI/180))
        }
    }
    
    translate(dx, dy, dz) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.translate3D(this.points[i], dx, dy, dz)
        }
    }

    draw() {

        beginShape(TRIANGLES);
        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));
        vertex(this.points[1].get(1,1), this.points[1].get(2,1), this.points[1].get(3,1));
        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));

        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));
        vertex(this.points[2].get(1,1), this.points[2].get(2,1), this.points[2].get(3,1));
        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));
        endShape(CLOSE);
    }
}

class Parallelogram {

    constructor(x, y, z, w, h, l) {
        this.points = [
            new Vector(3, [x, y, z]),
            new Vector(3, [x + w, y, z]),
            new Vector(3, [x + w, y + h, z]),
            new Vector(3, [x, y + h, z]),
            new Vector(3, [x, y, z + l]),
            new Vector(3, [x + w, y, z + l]),
            new Vector(3, [x + w, y + h, z + l]),
            new Vector(3, [x, y + h, z + l]),
        ]
        this.transform = new Transformation()
    }

    rotate(angle) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.rotation3DY(this.points[i], angle * (Math.PI/180))
        }
    }
    
    translate(dx, dy, dz) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.translate3D(this.points[i], dx, dy, dz)
        }
    }

    draw() {

        beginShape(TRIANGLES);
        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));
        vertex(this.points[1].get(1,1), this.points[1].get(2,1), this.points[1].get(3,1));
        vertex(this.points[2].get(1,1), this.points[2].get(2,1), this.points[2].get(3,1));

        vertex(this.points[2].get(1,1), this.points[2].get(2,1), this.points[2].get(3,1));
        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));
        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));

        vertex(this.points[4].get(1,1), this.points[4].get(2,1), this.points[4].get(3,1));
        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));
        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));
        
        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));
        vertex(this.points[7].get(1,1), this.points[7].get(2,1), this.points[7].get(3,1));
        vertex(this.points[4].get(1,1), this.points[4].get(2,1), this.points[4].get(3,1));

        vertex(this.points[5].get(1,1), this.points[5].get(2,1), this.points[5].get(3,1));
        vertex(this.points[4].get(1,1), this.points[4].get(2,1), this.points[4].get(3,1));
        vertex(this.points[7].get(1,1), this.points[7].get(2,1), this.points[7].get(3,1));

        vertex(this.points[7].get(1,1), this.points[7].get(2,1), this.points[7].get(3,1));
        vertex(this.points[6].get(1,1), this.points[6].get(2,1), this.points[6].get(3,1));
        vertex(this.points[5].get(1,1), this.points[5].get(2,1), this.points[5].get(3,1));

        vertex(this.points[1].get(1,1), this.points[1].get(2,1), this.points[1].get(3,1));
        vertex(this.points[5].get(1,1), this.points[5].get(2,1), this.points[5].get(3,1));
        vertex(this.points[6].get(1,1), this.points[6].get(2,1), this.points[6].get(3,1));

        vertex(this.points[6].get(1,1), this.points[6].get(2,1), this.points[6].get(3,1));
        vertex(this.points[2].get(1,1), this.points[2].get(2,1), this.points[2].get(3,1));
        vertex(this.points[1].get(1,1), this.points[1].get(2,1), this.points[1].get(3,1));

        vertex(this.points[4].get(1,1), this.points[4].get(2,1), this.points[4].get(3,1));
        vertex(this.points[5].get(1,1), this.points[5].get(2,1), this.points[5].get(3,1));
        vertex(this.points[1].get(1,1), this.points[1].get(2,1), this.points[1].get(3,1));

        vertex(this.points[1].get(1,1), this.points[1].get(2,1), this.points[1].get(3,1));
        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));
        vertex(this.points[4].get(1,1), this.points[4].get(2,1), this.points[4].get(3,1));

        vertex(this.points[6].get(1,1), this.points[6].get(2,1), this.points[6].get(3,1));
        vertex(this.points[7].get(1,1), this.points[7].get(2,1), this.points[7].get(3,1));
        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));

        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));
        vertex(this.points[2].get(1,1), this.points[2].get(2,1), this.points[2].get(3,1));
        vertex(this.points[6].get(1,1), this.points[6].get(2,1), this.points[6].get(3,1));
        endShape(CLOSE);
        }
}


class Pyramid {

    constructor(x, y, z, w, h, hp) {
        this.points = [
            new Vector(3, [x, y, z]),
            new Vector(3, [x + w, y, z]),
            new Vector(3, [x, y + h, z]),
            new Vector(3, [x + w, y + h, z]),
            new Vector(3, [x + (w/2), y + (h/2), hp])
        ]
        this.transform = new Transformation()
    }

    rotate(angle) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.rotation3DY(this.points[i], angle * (Math.PI/180))
        }
    }
    
    translate(dx, dy, dz) {
        for (var i = 0; i < this.points.length; i += 1) {
            this.points[i] = this.transform.translate3D(this.points[i], dx, dy, dz)
        }
    }

    draw() {

        beginShape(TRIANGLES);
        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));
        vertex(this.points[1].get(1,1), this.points[1].get(2,1), this.points[1].get(3,1));
        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));

        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));
        vertex(this.points[2].get(1,1), this.points[2].get(2,1), this.points[2].get(3,1));
        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));

        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));
        vertex(this.points[4].get(1,1), this.points[4].get(2,1), this.points[4].get(3,1));
        vertex(this.points[1].get(1,1), this.points[1].get(2,1), this.points[1].get(3,1));

        vertex(this.points[1].get(1,1), this.points[1].get(2,1), this.points[1].get(3,1));
        vertex(this.points[4].get(1,1), this.points[4].get(2,1), this.points[4].get(3,1));
        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));

        vertex(this.points[3].get(1,1), this.points[3].get(2,1), this.points[3].get(3,1));
        vertex(this.points[4].get(1,1), this.points[4].get(2,1), this.points[4].get(3,1));
        vertex(this.points[2].get(1,1), this.points[2].get(2,1), this.points[2].get(3,1));

        vertex(this.points[2].get(1,1), this.points[2].get(2,1), this.points[2].get(3,1));
        vertex(this.points[4].get(1,1), this.points[4].get(2,1), this.points[4].get(3,1));
        vertex(this.points[0].get(1,1), this.points[0].get(2,1), this.points[0].get(3,1));
        endShape(CLOSE);
    }
}

class Sphere {

    constructor(x, y, z, r, se, st) {
        this.r = r
        this.se = se
        this.st = st
        this.points = new Array(se + 1)
        this.transform = new Transformation()
        
        for (var  i = 0; i < this.points.length; i += 1) {
            this.points[i] = new Array(st + 1)
        }

        for (var i = 0; i <= this.st; i += 1) {
            let phi;
            phi = (Math.PI/2) - (Math.PI * (i/this.st))
    
            for (let j= 0; j <= this.se; j += 1) {
                let theta;
                theta = (2 * Math.PI) * (j/this.se)

                let xx, yy, zz;
                xx = (this.r * Math.cos(phi)) * Math.sin(theta)
                yy = (this.r * Math.sin(phi))
                zz = (this.r * Math.cos(phi)) * Math.cos(theta)

                this.points[i][j] = (new Vector(3, [xx, yy, zz]))
            }
        }
        for (var i = 0; i < this.points.length; i += 1) {
            for (var j = 0; j < this.points.length; j += 1) {
                this.points[i][j] = this.transform.translate3D(this.points[i][j], x, y, z)
            }
        }
    }

    rotate(angle) {
        for (var i = 0; i < this.points.length; i += 1) {
            for (var j = 0; j < this.points.length; j += 1) {
                this.points[i][j] = this.transform.rotation3DY(this.points[i][j], angle * (Math.PI/180))
            }
        }
    }
    
    translate(dx, dy, dz) {
        for (var i = 0; i < this.points.length; i += 1) {
            for (var j = 0; j < this.points.length; j += 1) {
                this.points[i][j] = this.transform.translate3D(this.points[i][j], dx, dy, dz)
            }
        }
    }

    draw() {

    for (let i = 0; i < this.st; i += 1) {
        beginShape(TRIANGLE_STRIP)
        for(let j= 0; j <= this.se; j += 1) {
            vertex(this.points[i][j].get(1,1), this.points[i][j].get(2,1), this.points[i][j].get(3,1))
            vertex(this.points[i + 1][j].get(1,1), this.points[i + 1][j].get(2,1), this.points[i + 1][j].get(3,1))
        }
        endShape(CLOSE)
        }
    }
}