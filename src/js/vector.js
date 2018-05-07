export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
    plus(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    };
    get cross() {
        let x = this.x;
        let y = this.y;
        return [
            new Vector(x + 1, y),
            new Vector(x - 1, y),
            new Vector(x, y + 1),
            new Vector(x, y - 1)
        ]
    }
}
