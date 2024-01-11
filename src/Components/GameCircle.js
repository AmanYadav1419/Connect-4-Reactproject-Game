import React from 'react'

const onClick = (events ,id, value) => {
    alert('on click' + id);
}

const GameCircle = ({id, value, children}) => {
  console.log(id);
  return (
    <div onClick={(events) => onClick(events, id, value)}>
        {children}
    </div>
  )
}

export default GameCircle