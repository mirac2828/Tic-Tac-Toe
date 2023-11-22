import React, { useState } from 'react'
import "../App.css"



const Tiles = ({className,tile,onClick} ) => {
  console.log(className)
  
  

  const style=tile==="X" ?"class_x":"class_o"    
  return (
    <div onClick={()=>onClick() }
       
        style={{width:"50px", height:"25px",}}
   
    className={`${className}${style}`}>{tile} </div>
  )
}

export default Tiles