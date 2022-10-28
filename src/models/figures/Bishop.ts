import {Figure, FigureEnum} from "./FIgure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'

//Создаём для каждой фигуры конструктор

export class Bishop extends Figure {


    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureEnum.BISHOP
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        return true
    }
}