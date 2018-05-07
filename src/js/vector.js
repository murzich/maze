export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
    get cross() {
        return [
            new Vector(this.x + 1, this.y),
            new Vector(this.x - 1, this.y),
            new Vector(this.x, this.y + 1),
            new Vector(this.x, this.y - 1)
        ]
    }
}
