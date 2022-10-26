import {Colors} from "./Colors";
import {FIgure} from "./figures/FIgure";
import {Board} from "./Board";

export class Cell {
    readonly x: number;
    readonly y:number;
    readonly color: Colors;
    figure: FIgure | null;
    board: Board;
    id: number;
    available: boolean; //Можно ли перемещатся
}