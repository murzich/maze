import {fillWaves, fillZeros, getMazeRoute, insertRoute} from "./fill";
import {endPoint, endSymbol, mazeGrid, startPoint, startSymbol} from "./const";

export const clickHandlerField = e => {
    const target = e.target;
    if (target.className !== 'maze__cell') return;
    let dataset = target.dataset;
    if (dataset.value === "W") {
        dataset.value = "";
        mazeGrid.space[dataset.index] = 0;
    } else {
        dataset.value = "W";
        mazeGrid.space[dataset.index] = 'W';
    }
    fillZeros(mazeGrid);
    display(mazeGrid);
};

export const buttonHandler = e => {
    const target = e.target;
    if (target.tagName !== 'BUTTON') return;
    switch (target.id) {
        case 'run':
            run();
            display(mazeGrid);
            break;
        case 'reset':
            reset();
            break;
    }
};

export const display = (grid) => {
    let mazeCells = document.getElementById('maze').children;
    grid.space.forEach( (value, i) => {
        mazeCells[i].dataset.value = value;
    });
};

const run = () => {
    fillZeros(mazeGrid);
    fillWaves(mazeGrid);
    let route = getMazeRoute(mazeGrid);
    insertRoute(route);
    document.getElementById('answer').innerText = route ? route.length : '##';
};

const reset = () => {
    mazeGrid.clearSpace();
    mazeGrid.setValue(startPoint, startSymbol);
    mazeGrid.setValue(endPoint, endSymbol);
    display(mazeGrid);
};
