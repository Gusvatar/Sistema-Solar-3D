class Vector extends Matrix{

    constructor(dim, elements) {
        super(dim, 1, elements)
        this.dim = dim
    }

    get(i) {
        if(this.rows > this.cols) {
            return super.get(i, 1)
        } else {
            return super.get(1, i)
        } 
    }

    set(i, value) {
        if(this.rows > this.cols) {
            super.set(i, 1, value)
        } else {
            super.set(1, i, value)
        }
    }
}