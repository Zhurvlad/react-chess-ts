import {Colors} from "../Colors";
import logo from '../../assets/black-bishop.png'
import {Cell} from "../Cell";

export enum FigureEnum {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Королева',
    ROOK = 'Ладья',
    BISHOP = 'Слон',
}

export class Figure {
    color: Colors
    logo: typeof logo | null
    cell: Cell
    name: FigureEnum
    id: number


    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this
        this.logo = null
        this.name = FigureEnum.FIGURE
        this.id = Math.random()
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color)
            return false
        if (target.figure?.name === FigureEnum.KING)
            return false

        return true
    }

    moveFigure(target: Cell) {

    }
}

