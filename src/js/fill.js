import { startPoint, endPoint, startSymbol, endSymbol, wallSymbol } from "./const";

export const fillZeros = (grid) => {
    // fill undefined elements by zeros;
    for (let i = grid.space.length - 1; i >= 0; i--) {
        if (grid.space[i] !== wallSymbol
            && grid.space[i] !== startSymbol
            && grid.space[i] !== endSymbol)
        {
            grid.space[i] = 0;
        }
    }
    return grid;
};


export const fillWaves = (grid) => {

    startPoint.cross().forEach(firstTurnVector => {
        if (grid.isInside(firstTurnVector) && grid.getValue(firstTurnVector) === 0) {
            grid.setValue(firstTurnVector, 1);
        }
    });

    for (let turnNumber = 1; grid.space.includes(0); turnNumber++) {
        grid.getVectorsWithValue(turnNumber).forEach( vectorPrev => {
            vectorPrev.cross().forEach( vector => {
                    if (grid.isInside(vector) && grid.getValue(vector) === 0) {
                        grid.setValue(vector, turnNumber + 1);
                    }
                    // else if (grid.getValue(vector) === endSymbol) {
                    //     break;
                    // }
                }
            )
        });
    }
};
