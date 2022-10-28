import React from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({setBoard, board}) => {

    const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null)

    function click(cell: Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell)
           setSelectedCell(null)
        } else {
           setSelectedCell(cell)
        }

      if(cell.figure) {
          setSelectedCell(cell)
      }
    }

    React.useEffect(() => {
        highLightCells()
    }, [selectedCell])

    //Функция которая показывает доступные ходы
    function highLightCells() {
        board.highLightCells(selectedCell)
        updateBoard()
    }

    //Функция для явного обновления состояния
    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className={'board'}>
            {/*
            Итерируем двумерный масив тем самым отрисовывая доску
*/}
            {board.cells.map((row, i) =>
                <React.Fragment key={i}>
                    {row.map(cell =>
                        <CellComponent
                            click={click}
                            cell={cell}
                            key={cell.id}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;