import {Colors} from "./Colors";
import {FIgure} from "./figures/FIgure";
import {Board} from "./Board";

export class Cell {
    readonly x: number;
    readonly y:number;
    readonly color: Colors;
    figure: FIgure | null;
    board: Board;
    id: number; //Для реакт ключей
    available: boolean; //Можно ли перемещатся

    constructor(board: Board, x: number, y: number, colors: Colors, figure: FIgure | null) {
        this.x = x
        this.y = y
        this.color = colors
        this.figure = figure
        this.board = board
        this.available = false
        this.id = Math.random()
    }
}