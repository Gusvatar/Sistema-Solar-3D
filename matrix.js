class Matrix {

    constructor(rows, cols, elements){
        
        if(rows == undefined || cols == undefined) {
            throw new Error("A quantidade de linhas e colunas deve ser informada")
        }
        
        if(rows < 0) {
            throw new Error("A quantidade de linhas deve ser maior ou igual a zero")
        }
        if(cols < 0) {
            throw new Error("A quantidade de colunas deve ser maior ou igual a zero")
        }
        
        this.rows = rows
        this.cols = cols
        
        let size = rows * cols
        
        if(elements == undefined) {
            this.elements = []
            while(this.elements.length != size) {
                this.elements.push(0)
            }
        } else {
            if(elements.length != size) {
                throw new Error("A quantidade de elementos é incompatível com a dimensão da matriz")
            }
            this.elements = elements
        }
    }

    get(i, j) {    
        this.#validateElementIndex(i, j)
        return this.elements[this.#getIndex(i, j)]
    }

    set(i, j, value) {
        this.#validateElementIndex(i, j)
        this.elements[this.#getIndex(i, j)] = value
    }

    #getIndex(i, j) {
        return (j-1) + (i-1) * this.cols
    }

    #validateElementIndex(i, j) { 
        if(i <= 0 || i > this.rows) {
            throw new Error(`O índice i deve estar entre 1 e ${this.rows}`)
        }
        
        if(j <= 0 || j > this.cols) {
            throw new Error(`O índice j deve estar entre 1 e ${this.cols}`)
        }
    }
}