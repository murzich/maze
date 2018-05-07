import Vector from "./vector";
import Grid from './grid';

export const startPoint = new Vector(0,0);
export const endPoint   = new Vector(9,9);

// Symbol definitions
export const startSymbol = 'S',
    endSymbol = 'E',
    wallSymbol = 'W',
    routeSymbol = 'R';

export var mazeGrid = new Grid;