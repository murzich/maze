import Vector from './js/vector.js';
import Grid from './js/grid.js';
import { fillWaves, fillZeros, getMazeRoute } from "./js/fill.js";
import { startPoint, endPoint, endSymbol, startSymbol, wallSymbol} from './js/const.js';

import './style.css';

//DOM interaction
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

mazeGrid.setValue(new Vector(1,0), wallSymbol);
mazeGrid.setValue(new Vector(1,1), wallSymbol);
mazeGrid.setValue(new Vector(0,3), wallSymbol);
mazeGrid.setValue(new Vector(1,3), wallSymbol);
mazeGrid.setValue(new Vector(2,3), wallSymbol);
mazeGrid.setValue(new Vector(3,3), wallSymbol);
mazeGrid.setValue(new Vector(3,2), wallSymbol);
mazeGrid.setValue(new Vector(4,4), wallSymbol);
// mazeGrid.setValue(new Vector(0,2), wallSymbol);

fillZeros(mazeGrid);
fillWaves(mazeGrid);
getMazeRoute(mazeGrid);
console.log(mazeGrid.space);