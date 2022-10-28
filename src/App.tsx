import React from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";

function App() {
    // Создаём функцию и стэйт и рестартим игру пре загрузки приложения
    const [board, setBoard] = React.useState( new Board())

    React.useEffect(() => {
        restart()
    }, [])

    function restart () {
        const newBoard = new Board()
        newBoard.initCells()
        setBoard(newBoard)
        newBoard.addFigure()
    }


  return (
    <div className={'app'}>
        <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
