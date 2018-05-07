import {startPoint, endPoint, startSymbol, endSymbol, wallSymbol, mazeGrid, routeSymbol} from "./const";

export const fillZeros = (grid) => {
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

    startPoint.cross.forEach(firstTurnVector => {
        if (grid.isInside(firstTurnVector) && grid.getValue(firstTurnVector) === 0) {
            grid.setValue(firstTurnVector, 1);
        }
    });

    for (let turnNumber = 1; grid.space.includes(0); turnNumber++) {
        let prevVectorsArray = grid.getVectorsWithValue(turnNumber);
        let targetVectorsArray = [];
        let targetValuesArray = [];

        prevVectorsArray.forEach(vectorPrev => {
            targetVectorsArray = targetVectorsArray.concat(vectorPrev.cross);
        });
        targetVectorsArray.forEach( vector => {
            if (grid.isInside(vector)) {
                targetValuesArray.push(grid.getValue(vector));
            }
        });
        if (targetValuesArray.indexOf(0) === -1 ) {
            // alert("This maze doesn't have solutions");
            break;
        }
        if (targetValuesArray.indexOf(endSymbol) !== -1) {
            // alert("Shortest way reached!");
            break;
        }

        targetVectorsArray.forEach( vector => {
            if (grid.isInside(vector) && grid.getValue(vector) === 0) {
                grid.setValue(vector, turnNumber + 1);
            }
        });
    }
};

export const getMazeRoute = (filledGrid) => {
    let route = [];
    let prevStep;
    let prevStepValue = Infinity;

    prevStep = endPoint.cross.find(vector => {
        if (!filledGrid.isInside(vector)) return false;

        let value = filledGrid.getValue(vector);

        if (!Number.isInteger(value) || value === 0) return false;

        prevStepValue = Math.min(prevStepValue, value);
        return prevStepValue === value;
    });

    if (prevStep === undefined) {
        alert('This maze doesn\'t have solutions');
        route = [];
        return;
    }
    route.unshift(prevStep);

    while (prevStepValue > 1) {
        prevStep = prevStep.cross.find( vector => {
            if (!filledGrid.isInside(vector)) return false;

            let value = filledGrid.getValue(vector);

            if (!Number.isInteger(value) || value === 0) return false;

            prevStepValue = Math.min(prevStepValue, value);
            return prevStepValue === value;
        });
        route.unshift(prevStep);
    }
    return route;
};

export const insertRoute = (routeArray) => {
    if (!routeArray) {
        // alert('This maze doesn\'t have solutions');
        return;
    }
    routeArray.forEach(vector => {
        mazeGrid.setValue(vector, routeSymbol);
    })
};