import {/* BrowserRouter, Route, Routes, */ Link } from 'react-router-dom'
/* import videoclub from "../sevices/videoclub" */
import Sinopsis from './Sinopsis'


function Main(props) {
   return props.videoclub.peliculas.map((peli, index) => {
      return <>
         <div key={index} className="card">
            <img src={peli.cartel} alt={peli.titulo} />
            <p><Link onClick={Sinopsis} to='./sinopsis'>{peli.titulo}</Link></p>
         </div>
      </>
   })
}
export default Main
