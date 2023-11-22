import React from 'react'
import "../App.css"
import Tiles from './tiles'

function Board({data,onClick}) {
 
   
 
    
   
  return (
    <div className="container">
       
      {data.map((value,index)=>{ 

         return <Tiles  key={index} tile={value} onClick={()=>  {
         

             value===null&&   onClick(index)}} className= "border-right " />



       } )}
        
        
        


    </div>
  )
 
 }
export default Board