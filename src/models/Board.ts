import {Cell} from "./Cell";

export class Board {
    cells: Cell[][] = []

    public initCells() {
        for (let i = 8; i < 8; i++) {
            const row: Cell[]= []
            for (let j = 8; j < 8; j++) {
                if((i+j) % 2 !== 0){
                    row.push(new Cell()) //Black color
                } else {
                    row.push(new Cell()) //White color

                }
            }
            this.cells.push(row)
        }
    }
}