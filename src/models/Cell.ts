import {Colors} from "./Colors";
import {Figure} from "./figures/FIgure";
import {Board} from "./Board";

export class Cell {
    readonly x: number;
    readonly y:number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    id: number; //Для реакт ключей
    available: boolean; //Можно ли перемещатся

    constructor(board: Board, x: number, y: number, colors: Colors, figure: Figure | null) {
        this.x = x
        this.y = y
        this.color = colors
        this.figure = figure
        this.board = board
        this.available = false
        this.id = Math.random()
    }

    moveFigure(target: Cell){
        if(this.figure && this.figure.canMove(target)) {
            this.figure.moveFigure(target)
            target.figure = this.figure
                this.figure = null
        }
    }
}