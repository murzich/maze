import Vector from './js/vector.js';
import Grid from './js/grid.js';
import { fillWaves, fillZeros } from "./js/fill.js";
import { startPoint, endPoint, endSymbol, startSymbol, wallSymbol} from './js/const.js';

import './style.css';

// empty cell = 0;
// wall cell = W;
// start cell = S;
// end cell = E;

// лічільник кроків
// let stepsSolving = 0;

// create maze field
// const mazeGrid = new Grid();
// mazeGrid.clearSpace();
// mazeGrid.setValue(new Vector( 0, 0 ), 'S');
// mazeGrid.setValue(new Vector( 9, 9 ), 'E');
// const mazeCellDOMArray = document.querySelectorAll('[data-index]');

const clickHandler = e => {
    const target = e.target;
    if (target.className !== 'maze__cell') return;
    let dataset = target.dataset;
    if (dataset.value === undefined || dataset.value === "empty") {
        dataset.value = "wall";
        mazeGrid.space[dataset.index] = 'W';
    } else {
        dataset.value = "empty";
        mazeGrid.space[dataset.index] = 0;
    }
};

// const maze = document.querySelectorAll('#maze');
maze.addEventListener('click', clickHandler);


// Test definitions
let mazeGrid = new Grid;

// main CODE;
mazeGrid.setValue(startPoint, startSymbol);
mazeGrid.setValue(endPoint, endSymbol);

fillZeros(mazeGrid);
fillWaves(mazeGrid);
console.log(mazeGrid.space);