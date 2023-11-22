
import {  useState } from 'react';
import './App.css';
import Board from './Components/Board';
import Resetbutton from './Components/Resetbutton';
import sound from "./assets/click.mp3"
import gameOverSound from "./assets/gameOver.mp3"


function App() {
 
  const [data, setdata] = useState(Array(9).fill(null))
  const [xPlayer, setXplayer] = useState(true)
  const [winner, setWinner] = useState(null)
  const [gameOver, setGameover] = useState(false)
  const WinnerConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 4, 8], [2, 4, 6], [0, 3, 6],
  [1, 4, 7], [2, 5, 8]]
  const reset = () => {
    setGameover(false)
    setWinner(null)
    setdata(Array(9).fill(null))}
    

  const gameSound = new Audio(gameOverSound)
   
  gameSound.volume=0.1
 
  const Winner = (data) => {
    for (let i = 0; i < WinnerConditions.length; i++) {
      const [x, y, z] = WinnerConditions[i]
      if (data[x] && data[x] === data[y] && data[y] === data[z]) {
        setGameover(true)
        return setWinner(data[x])
      }
      const b=data.every(a=>a)
      b && !winner && setWinner("berabere") }}
    
    const handleTileClick = (ind) => {
    
    const clicksound= new Audio(sound)
    clicksound.volume=0.1;
    clicksound.play()
    
   

    const updateddata = data.map((value, index) => {
      if (index === ind) {
        return xPlayer ? "X" : "O"
      }
      
      else { 
        return value }




    })
   



    setdata(updateddata)
    setXplayer(a => !a)
    Winner(updateddata)}
    //useEffect(()=>{ setTimeout(()=>{} ,5000)},[] )



  return (
    <div className=" App ">
   
      <h1 className='text'> Tic Tac Toe</h1>
     <Board   data={data} onClick={gameOver ? reset : handleTileClick} />
      {winner && gameSound.play() && <p className='winner animate__animated animate__backInUp '>{(winner==="X"&& "kazanan X")||(winner==="O" && "kazanan O" )||( winner==="berabere"&& "Berabere")
        } </p>   }
      
      <Resetbutton winner={winner} disabled={winner === null} reset={reset} />







    </div>
  );
}

export default App;
