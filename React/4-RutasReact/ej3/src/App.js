import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import videojuegos from './datos/datos';
import { useState } from 'react'
import Tarjeta from './componentes/Tarjeta';
import Cabecera from './componentes/Cabecera';
import Sinopsis from './componentes/Sinopsis';

function App() {
  const [juegos] = useState(videojuegos)
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>

        <Route path="/" element={<div className='container'>{juegos.map((juego, index) => {
          return <Tarjeta full={true} juego={juego} index={index} />
        })}</div>} />
        {juegos.map((juego, index) => {
          return <Route path={'/' + juego.titulo.replaceAll(" ", "-")} element={<Sinopsis juego={juego} index={index} />} />
        })}
      </Routes>

    </BrowserRouter>

  );
}

export default App;
