import Vector from './js/vector.js';
import { fillWaves, fillZeros } from "./js/fill.js";
import { mazeGrid, startPoint, endPoint, endSymbol, startSymbol, wallSymbol} from './js/const.js';
import { clickHandlerField, buttonHandler, display } from "./js/browser.js";

import './style.css';

document.getElementById('control').addEventListener('click', buttonHandler);
document.getElementById('maze').addEventListener('click', clickHandlerField);

mazeGrid.setValue(startPoint, startSymbol);
mazeGrid.setValue(endPoint, endSymbol);

mazeGrid.setValue(new Vector(1,0), wallSymbol);
mazeGrid.setValue(new Vector(1,1), wallSymbol);

fillZeros(mazeGrid);
fillWaves(mazeGrid);
display(mazeGrid);
