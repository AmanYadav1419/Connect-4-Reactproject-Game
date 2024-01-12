import React from 'react'
import '../Game.css'

const onClick = (events ,id) => {
    alert('on click' + id);
}

const GameCircle = ({id, color, children}) => {

  const style = {
    backgroundColor: color, 
  }

  // console.log(id);
  return (
    <div className='gamecircle' style={style} onClick={(events) => onClick(events, id)}>
        {children}
    </div>
  )
}

export default GameCircle