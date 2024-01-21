import React from 'react'

const Footer = ({ onClickEvent }) => {
  return (
    <div className='panel footer'>
        <button onClick={onClickEvent}>NEW GAME</button>
    </div>
  )
}

export default Footer;