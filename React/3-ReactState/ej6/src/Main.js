import { useState } from 'react'
import './App.css';

function Main() {

   let tableroInicial = Array(9).fill('')
   let [tablero, setTablero] = useState(tableroInicial)
   let [turno, setState] = useState("X")
   let botones = []
   for (let i = 0; i < 9; i++) {
      botones.push(<button key={i} className="button" onClick={() => cambiar(i)}>{tablero[i]}</button>)
      
   } return botones
   

   function cambiar(i) {
      let nuevoTablero = [...tablero]
      if (nuevoTablero[i] === "") {
         nuevoTablero[i] = turno
         setState(turno === "X" ? turno = "O" : turno = "X")
         setTablero(nuevoTablero)
         /* if (nuevoTablero[0, 1, 2] === "X" || nuevoTablero[3, 4, 5] === "X" || nuevoTablero[6, 7, 8] === "X" || nuevoTablero[0, 4, 8] === "X" || nuevoTablero[0, 3, 6] === "X" || nuevoTablero[2, 4, 6] === "X" || nuevoTablero[1, 4, 7] === "X"|| nuevoTablero[2, 5, 8] === "X") {
            alert("Ganan las X")
         } else if (nuevoTablero[0, 1, 2] === "O" || nuevoTablero[3, 4, 5] === "O" || nuevoTablero[6, 7, 8] === "O" || nuevoTablero[0, 4, 8] === "O"|| nuevoTablero[0, 3, 6] === "O" || nuevoTablero[2, 4, 6] === "O" || nuevoTablero[1, 4, 7] === "O"|| nuevoTablero[2, 5, 8] === "O") {
            alert("Ganan las O")
         } */
      }
   }



}

export default Main