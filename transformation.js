class Transformation extends LinearAlgebra {
    
    translate2D (vector, dx, dy) {

        let la;

        la = new LinearAlgebra();

        let v;

        v = new Vector (3,[vector.get(1), vector.get(2), 1]);

        let m;

        m = new Matrix (3,3);

        m.set(1,1, 1);
        m.set(2,2, 1);
        m.set(3,3, 1);
        m.set(1,3, dx);
        m.set(2,3, dy);

        let d = la.dot(m, v);
        
        let e = new Vector(2,[d.get(1,1), d.get(2,1)]);
        return e;
    }
    
    translate3D (vector, dx, dy, dz) {

        let la;

        la = new LinearAlgebra();

        let v;

        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;

        m = new Matrix (4,4);

        m.set(1,1, 1);
        m.set(2,2, 1);
        m.set(3,3, 1);
        m.set(4,4, 1);
        m.set(1,4, dx);
        m.set(2,4, dy);
        m.set(3,4, dz);

        let d;
        
        d = la.dot(m, v);
        
        let e;

        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)]);
        return e;
    }

    rotation2D (vector, angle) {   

        let la;
        
        la = new LinearAlgebra();

        let v;

        v = new Vector (3,[vector.get(1), vector.get(2), 1]);

        let m;

        m = new Matrix (3,3)

        m.set(1,1, Math.cos(angle));
        m.set (1,2, (- Math.sin(angle)));
        m.set (2,1, Math.sin(angle));
        m.set (2,2, Math.cos(angle));
        m.set(3,3, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(2,[d.get(1,1), d.get(2,1)]);
        return e;
    }

    rotation3DX (vector, angle) {

        let la;
        
        la = new LinearAlgebra();

        let v;

        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;

        m = new Matrix (4,4);

        m.set(1,1, 1);
        m.set(2,2, Math.cos(angle));
        m.set (2,3, (- Math.sin(angle)));
        m.set (3,2, Math.sin(angle));
        m.set (3,3, Math.cos(angle));
        m.set(4,4, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)]);
        return e;
    }

    rotation3DY (vector, angle) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;
        
        m = new Matrix (4,4);

        m.set(1,1, Math.cos(angle));
        m.set(1,3, Math.sin(angle));
        m.set (2,2, 1);
        m.set (3,1, (-Math.sin(angle)));
        m.set (3,3, Math.cos(angle));
        m.set(4,4, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)])
        return e;
    }

    rotation3DZ (vector, angle) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;
        
        m = new Matrix (4,4)

        m.set(1,1, Math.cos(angle));
        m.set(1,2, (-Math.sin(angle)));
        m.set(2,1, Math.sin(angle));
        m.set(2,2, Math.cos(angle));
        m.set(3,3, 1);
        m.set(4,4, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)]);
        return e;
    }

    reflection2DX (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (3,[vector.get(1), vector.get(2), 1]);

        let m;
        
        m = new Matrix (3,3);

        m.set(1,1,-1);
        m.set(2,2, 1);
        m.set(3,3, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(2,[d.get(1,1), d.get(2,1)]);
        return e;
    }

    reflection2DY (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (3,[vector.get(1), vector.get(2), 1]);

        let m;
        
        m = new Matrix (3,3);

        m.set(1,1, 1);
        m.set(2,2,-1);
        m.set(3,3, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(2,[d.get(1,1), d.get(2,1)]);
        return e;
    }

    reflection3DX (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;
        
        m = new Matrix (4,4);

        m.set(1,1,-1);
        m.set(2,2, 1);
        m.set(3,3, 1);
        m.set(4,4, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)]);
        return e;
    }

    reflection3DY (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;
        
        m = new Matrix (4,4);

        m.set(1,1, 1);
        m.set(2,2,-1);
        m.set(3,3, 1);
        m.set(4,4, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)]);
        return e;
    }

    reflection3DZ (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;
        
        m = new Matrix (4,4);

        m.set(1,1, 1);
        m.set(2,2, 1);
        m.set(3,3,-1);
        m.set(4,4, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)]);
        return e;
    }

    projection2DX (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (3,[vector.get(1), vector.get(2), 1]);

        let m;
        
        m = new Matrix (3,3);

        m.set(1,1, 1);
        m.set(3,3, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(2,[d.get(1,1), d.get(2,1)]);
        return e;
    }

    projection2DY (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (3,[vector.get(1), vector.get(2), 1]);

        let m;
        
        m = new Matrix (3,3);

        m.set(2,2, 1);
        m.set(3,3, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(2,[d.get(1,1), d.get(2,1)]);
        return e;
    }

    projection3DX (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;
        
        m = new Matrix (4,4);

        m.set(1,1, 1);
        m.set(4,4, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)]);
        return e;
    }

    projection3DY (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;
        
        m = new Matrix (4,4);

        m.set(2,2, 1);
        m.set(4,4, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)]);
        return e;
    }

    projection3DZ (vector) {

        let la;
        
        la = new LinearAlgebra();

        let v;
        
        v = new Vector (4,[vector.get(1), vector.get(2), vector.get(3), 1]);

        let m;
        
        m = new Matrix (4,4);

        m.set(3,3, 1);
        m.set(4,4, 1);

        let d;
        
        d = la.dot(m, v);
        
        let e;

        e = new Vector(3,[d.get(1,1), d.get(2,1), d.get(3,1)]);
        return e;
    }

    shearing2D (vector, kx, ky) {

        let la;

        la = new LinearAlgebra();

        let v;
        
        v = new Vector (3,[vector.get(1), vector.get(2), 1]);

        let m;
        
        m = new Matrix (3,3);

        m.set(1,1, 1);
        m.set (2,2, 1);
        m.set(1,2, ky);
        m.set(2,1, kx);

        let d;
        
        d = la.dot(m, v);
        
        let e;
        
        e = new Vector(2,[d.get(1,1), d.get(2,1)]);
        return e;
    }
}