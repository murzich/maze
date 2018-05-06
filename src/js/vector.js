export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
    plus(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    };
    cross() {
        return [
            this.plus(new Vector(1,0)),
            this.plus(new Vector(0,1)),
            this.plus(new Vector(-1,0)),
            this.plus(new Vector(0,-1))
        ]
    }
}
