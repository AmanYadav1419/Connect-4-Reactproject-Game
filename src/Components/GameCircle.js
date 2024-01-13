import React from 'react'
import '../Game.css'


const GameCircle = ({id, children, onCircleClicked}) => {
  
  return (
    <div className={`gamecircle ${id % 2 === 0 ? "odd" : "even"}`} onClick={() => onClick(id)}>
        {children}
    </div>
  )
}


export default GameCircle
