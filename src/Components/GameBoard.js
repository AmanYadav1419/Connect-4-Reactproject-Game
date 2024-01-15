import React, { useState } from 'react'
import GameCircle from './GameCircle'
import '../Game.css'

const NO_CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {

  const [gameBoard, setgameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  console.log(gameBoard);

  const initBoard = () => {
    const circles = [];
    for(let i = 0; i<NO_CIRCLES;i++){
      circles.push(renderCircle(i));
    }
    return circles;
  }
 
  const circleClicked = (id) => {
    console.log("circle clicked:"+id);

    setgameBoard(prev =>{
      return prev.map((circle,position)=>{
          if(position === id) return currentPlayer;
          return circle;
      })
    })

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    console.log(gameBoard);
    console.log(currentPlayer);
  }

  const renderCircle = id =>{
    return <GameCircle id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked}/>
  }

  return (
    <div className='gameboard'>
      {initBoard()};
    </div>
  )
}

export default GameBoard