class LinearAlgebra {

    transpose(a) {

        let c;

        if (a instanceof Vector) {
            c = new Vector(a.rows)
            c.rows = a.cols
            c.cols = a.rows

            for (let i = 1; i <= c.dim; i++) {
                c.set(i, a.get(i))
            }

        } else if(a instanceof Matrix) {
            c = new Matrix(a.cols, a.rows);

            for(let i = 1; i <= a.rows; i++) {
                for(let j = 1; j <= c.cols; j++) {
                    c.set(i, j, a.get(j, i))
                }
            }
        } else {
            throw new Error("O parâmetro do função transpose deve ser um objeto da classe Matrix.")
        }

        return c;
    }

    sum (a, b) {
        if (!a instanceof Matrix || !b instanceof Matrix) {
            throw new Error("Os parâmetros devem ser objetos da classe Vector e Matrix.")
        }
        if (a.rows != b.rows || a.cols != b.cols) {
            throw new Error("As matrizes não possuem a mesma dimensão")
        }

        let c;

        if (a instanceof Vector && b instanceof Vector) {
            c = new Vector(a.dim)
            c.rows = a.rows
            c.cols = a.cols

            for (let i = 1; i <= a.dim; i++) {
                c.set(i, a.get(i) + b.get(i))
            }
        } else if (a instanceof Matrix && b instanceof Matrix) {
            c = new Matrix(a.rows, a.cols)

            for (let i = 1; i <= a.rows; i++) {
                for(let j = 1; j <= a.cols; j++) {
                    c.set(i, j, a.get(i, j) + b.get(i, j))
                }
            }
        }
        else {
            throw new Error("Os parâmetros devem ser objetos da classe Vector e Matrix.")
        }
        
        return c;
    }
    times (a, b) {
        
        let c;
        
        if (typeof (a) == "number") {
            if (!b instanceof Matrix) {
                throw new Error("O parâmetro b deve ser um objeto da classe Matrix ou Vector")
            }
            if (b instanceof Vector) {
                c = new Vector(b.dim)
                c.rows = b.rows
                c.cols = b.cols
                
                for (let i = 1; i <= b.dim; i++) {
                    c.set(i, a * b.get(i))
                }
            } else if (b instanceof Matrix) {
                c = new Matrix(b.rows, b.cols)

                for (let i = 1; i <= b.rows; i++) {
                    for(let j = 1; j <= b.cols; j++) {
                        c.set(i, j, a * b.get(i, j))
                    }
                }
            } else {
                throw new Error("Os parâmetros devem ser objetos da classe Vector e Matrix.")
            }
        } else {
            if (!a instanceof Matrix || !b instanceof Matrix) {
                throw new Error("Os parâmetros devem ser objetos da classe Vector e Matrix.")
            }
            if (a.rows != b.rows || a.cols != b.cols) {
                throw new Error("As matrizes não possuem a mesma dimensão")
            }

            if (a instanceof Vector && b instanceof Vector) {
                c = new Vector(a.dim)
                c.rows = a.rows
                c.cols = a.cols

                for (let i = 1; i <= a.dim; i++) {
                    c.set(i, a.get(i) * b.get(i))
                }
            } else if (a instanceof Matrix && b instanceof Matrix) {
                c = new Matrix(a.rows, a.cols)

                for (let i = 1; i <= a.rows; i++) {
                    for(let j = 1; j <= a.cols; j++) {
                        c.set(i, j, a.get(i, j) * b.get(i, j))
                    }
                }
            } else {
                throw new Error("Ambos os parâmetros devem ser objetos da classe Vector ou da classe Matrix ou um numero e um objeto da classe Matrix.")
            }

            return c;
        }
    }

    dot (a, b) {

        if (!a instanceof Matrix || !b instanceof Matrix) {
            throw new Error("Os parâmetros devem ser objetos da classe Vector e Matrix.")
        }
        if (a.cols != b.rows) {
            throw new Error("A quantidade de linhas da matriz A não é igual a quantidade de colunas da matriz B")
        }
        
        let c;
        
        if (a instanceof Vector && b instanceof Vector) {   
            c = 0;
                for (let i = 1; i <= a.dim; i++) {
                    c = c + a.get(i) * b.get (i);
                }
        } else {
            c = new Matrix(a.rows, b.cols)
            for (let i = 1; i <= a.rows; i++) {
                for (let j = 1; j <= b.cols; j++) {
                    for (let k = 1; k <= a.cols; k++) {
                        c.set (i, j, c.get(i, j) + a.get (i, k) * b.get(k, j))
                    }
                }
            }
        }

        return c;
    }

    gauss (a) {
        
        let c;
        
        c = new Matrix (a.rows, a.cols)

        for (let i = 1; i <= a.rows; i += 1) {
            for (let j = 1; j <= a.cols; j += 1) {
                c.set(i, j, a.get(i, j))
            }
        }

        let pivot;
        let aux;
        let h;

        for (let g = 1; g <= c.rows && g <= c.cols-1; g += 1) {
            pivot = Math.abs(c.get(g,g))
            h = g

            for (let f = g + 1; f <= c.rows; f += 1) {
                if (pivot < Math.abs(c.get(f,g))) {
                    pivot = Math.abs(c.get(f,g))
                    h = f
                }
            }

            for (let s = 1; s <= c.cols; s += 1) {
                aux = c.get(g,s);
                c.set(g, s, c.get(h,s));
                c.set(h, s, aux);
            }

            for (let i = g + 1; i <= c.rows; i += 1) {
                let k;
                k = (-1 *c.get(i,g))/ c.get(g,g)
                for (let j = 1; j <= c.cols; j += 1) {
                    c.set(i, j, (k*(c.get(g,j)) + c.get(i,j)))
                }
            }
        }

        return c;
    }

    solve (a) {

        let c;

        c = new Matrix (a.rows, a.cols)
        
        for (let i = 1; i <= a.rows; i += 1) {
            for (let j = 1; j <= a.cols; j += 1) {
                c.set(i, j, a.get(i, j))
            }
        }

        let pivot;
        let aux;
        let h;
        
        for (let g = 1; g <= c.rows && g <= c.cols-1; g += 1) {
            pivot = Math.abs(c.get(g,g))
            h = g

            for (let f = g + 1; f <= c.rows; f += 1) {
                if (pivot < Math.abs(c.get(f,g))) {
                    pivot = Math.abs(c.get(f,g))
                    h = f
                }
            }

            for (let s = 1; s <= c.cols; s += 1) {
                aux = c.get(g,s);
                c.set(g, s, c.get(h,s));
                c.set(h, s, aux);
            }

            for (let i = g + 1; i <= c.rows; i += 1) {
                let k;
                k = (-1 *c.get(i,g))/ c.get(g,g)
                for (let j = 1; j <= c.cols; j += 1) {
                    c.set(i, j, (k*(c.get(g,j)) + c.get(i,j)))
                }
            }
        }

        for (let g = c.rows && c.cols-1; g >= 1; g -= 1) {
            pivot = Math.abs(c.get(g,g))
            h = g

            for (let f = g - 1; f >= 1; f -= 1) {
                if (pivot < Math.abs(c.get(f,g))) {
                    pivot = Math.abs(c.get(f,g)) 
                    h = f
                }
            }

            for (let i = g - 1; i >= 1; i -= 1) {
                let k;
                k = (-1 *c.get(i,g))/ c.get(g,g)
                
                for (let j = c.cols; j >= 1; j -= 1) {
                    c.set(i, j, (k*(c.get(g,j)) + c.get(i,j)))
                }
            }
        }

        for (let i = 1; i <= c.rows; i += 1) {
            let pivot = c.get(i,i) 
            for(let j = 1; j <= c.cols; j += 1) {
                c.set(i, j, c.get(i, j) / pivot)
            }
        }

        return c;
    }

    det (a) {

        let c;
        
        c = new Matrix (a.rows, a.cols)

        for (let i = 1; i <= a.rows; i += 1) {
            for(let j = 1; j <= a.cols; j += 1) {
                c.set(i, j, a.get(i, j))
            }
        }

        let pivot;
        let aux;
        let h;

        for (let g = 1; g <= c.rows && g <= c.cols; g += 1) {
            pivot = c.get(g,g)
            aux = g

            for (let s = g + 1; s <= c.rows; s += 1) {
                if (pivot < c.get(s,g)) {
                    pivot = c.get(s,g)
                    aux = s
                }
            }

            for (let f = 1; f <= c.cols; f += 1) {
                h = c.get(g,f);
                c.set(g, f, c.get(aux,f));
                c.set(aux, f, h);
            }

            for (let i = g + 1; i <= c.rows; i += 1) {
                
                let k;

                k = (-1 *c.get(i,g)) / c.get(g,g)
                
                for (let j = 1; j <= c.cols; j += 1) {
                    c.set(i, j, (k*(c.get(g,j)) + c.get(i,j)))
                }
            }
        }

        let de;

        for (let i = 1; i <= c.rows; i += 1) {
            for (let j = 1; j <= c.cols; j += 1) {
                de = de * c.get(i,i)
            }
        }

        return de;
    }
}