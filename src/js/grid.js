import Vector from './vector';

export default class Grid {
    constructor(width = 10, height = 10) {
        this.width = width;
        this.height = height;
        this.space = new Array(width * height);
    };

    isInside(vector) {
        return vector.x >= 0 && vector.x < this.width &&
            vector.y >= 0 && vector.y < this.height;
    }
    getValue(vector) {
        return this.space[vector.x + this.width * vector.y];
    }
    setValue(vector, value) {
        this.space[vector.x + this.width * vector.y] = value;
    }
    clearSpace() {
        this.space = this.space.fill(0);
    }
    getVector(index) {
        return new Vector( index % this.width, Math.floor(index / this.width));
    }
    getVectorsWithValue(value) {
        let vectorsArray = [];
        this.space.forEach((element, index) => {
            if (element === value) {
            vectorsArray.push(this.getVector(index));
            }
        });
        return vectorsArray;
    }
}