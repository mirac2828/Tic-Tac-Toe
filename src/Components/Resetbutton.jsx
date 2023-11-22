import React from 'react'
import "./ResetButton.css"

const Resetbutton = ({reset,winner,disabled}) => 
{
  return (
    <button className='btn' disabled={disabled}
     onClick={reset}>Reset </button>

     
  )
}

export default Resetbutton



