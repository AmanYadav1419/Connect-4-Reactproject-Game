import React, { useState } from 'react'
import GameCircle from './GameCircle'
import '../Game.css'

const GameBoard = () => {

  const [gameBoard, setgameBoard] = useState(Array(16).fill(0));
 
  const circleClicked = (id) => {
    console.log("circle clicked:"+id);

    gameBoard[id] = 1;
    setgameBoard(gameBoard);
  }

  return (
    <div className='gameboard'>
        <GameCircle id={1} className="player_1" onCircleClicked={circleClicked}>

        </GameCircle>
        <GameCircle id={2} className="player_2" onCircleClicked={circleClicked}>

        </GameCircle>
        <GameCircle id={3} onCircleClicked={circleClicked}>

        </GameCircle>
        <GameCircle id={4} onCircleClicked={circleClicked}>

        </GameCircle>
        <GameCircle id={5} onCircleClicked={circleClicked}>

        </GameCircle>
        <GameCircle id={6} onCircleClicked={circleClicked}>

        </GameCircle>
        <GameCircle id={7}>

        </GameCircle>
        <GameCircle id={8}>

        </GameCircle>
        <GameCircle id={9}>

        </GameCircle>
        <GameCircle id={10}>

        </GameCircle>
        <GameCircle id={11}>

        </GameCircle>
        <GameCircle id={12}>

        </GameCircle>
        <GameCircle id={13}>

        </GameCircle>
        <GameCircle id={14}>

        </GameCircle>
        <GameCircle id={15}>

        </GameCircle>
        <GameCircle id={16}>

        </GameCircle>
    </div>
  )
}

export default GameBoard