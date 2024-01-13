import React from 'react'
import '../Game.css'

const onClick = (events ,id) => {
    alert('on click' + id);
}

const GameCircle = ({id, children}) => {


  return (
    <div className={`gamecircle ${id % 2 === 0 ? "odd" : "even"}`} onClick={(events) => onClick(events, id)}>
        {children}
    </div>
  )
}

export default GameCircle