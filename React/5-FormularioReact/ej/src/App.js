import { useState } from 'react'
import './App.css';
import InputBorrar from './componentes/InputBorrar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import InputAnyadir from './componentes/InputAnyadir';
import Listado from './componentes/Listado';
import Cabecera from './componentes/Cabecera';


function App() {


  let [nuevoInput, setNuevoInput] = useState("")
  let [borrar, setBorrar] = useState("")
  /* let [enviar, setEnviar] = useState("") */
  let [init, setInit] = useState([
    {
      nombre: 'Wolfgang Amadeus Mozart',
      fecha: 1756,
      canciones: ['Symphonie Nr 40', 'Don Giovanni']
    },
    {
      nombre: 'Ludwig van Beethoven',
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach',
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }
  ])
  function borrarNombre(borrar) {
    setInit(init.filter(item => item.nombre !== borrar));
    setBorrar("");
  }
  function anyadirNombre(nuevoInput) {
    let nuevo = { nombre: nuevoInput }
    let nuevoArray = [...init, nuevo];
    setInit(nuevoArray);
    setNuevoInput("");
  }

  return (
    <BrowserRouter>
    {/* Cabecera */}
      <Cabecera />
    {/* Cabecera */}
    {/* añadir */}
      <Routes>
        <Route path='/' element={<>
          <ul>
          <Listado init={init} />
          </ul>
          <InputAnyadir anyadirNombre={anyadirNombre} />
        </>}/>
     {/* añadir */}
     {/* eliminar */}
        <Route path='/eliminar' element={<InputBorrar borrarNombre={borrarNombre} />} />
      </Routes>
     {/* eliminar */}
    </BrowserRouter>);
}

export default App;

              {/* Cabecera */}
{/* <header>
  <ul>
    {init.map((compositor, index) => {
      return <li key={index}>{compositor.nombre}</li>
    })}
  </ul> 
  <Link to='/'>Inicio</Link>
  <Link to='/eliminar'>Eliminar</Link>
</header> */}
              {/* Cabecera */}

              {/* añadir */}
{/* <input type="text"
  value={nuevoInput}
  placeholder="nombre a añadir"
  onChange={(event) => (setNuevoInput(event.target.value))} />
<button
  onClick={nuevoInput !== "" ? anyadirNombre : ""}>
  añadir
</button> */}
              {/* añadir */}

              {/* eliminar */}
  {/* <input type="text"
value={borrar}
placeholder="nombre a eliminar"
onChange={(event) => (setBorrar(event.target.value))} /> */}
{/* <button
onClick={borrarNombre}>
eliminar
</button> */}
              {/* eliminar */}