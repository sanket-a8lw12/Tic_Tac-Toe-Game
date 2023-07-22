import React, {useState} from 'react';

import './App.css';

import { Board } from './component/Board';

import { ResetButton } from './component/resetButton';

function App() {
  const win_condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [onePLayer, setOnePlayer] = useState(true);
  const [gameOver, setGameOver] = useState('');
  // const [scores, setScore] = useState({xScore:0, oScore:0});
  // const [gameWinner, setGameWinner] = useState('');
  
  function handleClickBox(boxIdx){ // on every click it will update the state of the board
    const updatedBoard = board.map((value, idx)=>{
      if(idx === boxIdx){
        return onePLayer === true ? "X" : "O";
      }
      else{
        return value;
      }
    })

    const winner = checkWinner(updatedBoard);

   

    setBoard(updatedBoard);
    setOnePlayer(!onePLayer);
  }

  function checkWinner(board){
    for(let index = 0; index < win_condition.length; index++){
      const[x, y, z] = win_condition[index];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(board[x]);
        console.log("Winner " + board[x]);
        return board[x];
      }
      
    }
  }

  function resetBoard(){
    setGameOver('');
    setBoard(Array(9).fill(null));

  }

  return (
    <div className="App">
      {gameOver !==''  && <h2>Winner: {gameOver}</h2>}
      
      <Board board={board} onClick={gameOver ? resetBoard : handleClickBox} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
