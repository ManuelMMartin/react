import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from 'react'
import './App.css';
import Operaciones from "./components/Operaciones";

function App() {
  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)

  return (
    <BrowserRouter>
    <div className="container">
            <button onClick={() => (setNum1(++num1))}>Sumar</button>
            <p>{num1}</p>
            <button onClick={() => (setNum1(--num1))}>Restar</button>
          </div>
          <div className="container">
            <button onClick={() => (setNum2(++num2))}>Sumar</button>
            <p>{num2}</p>
            <button onClick={() => (setNum2(--num2))}>Restar</button>
          </div>
          <div className="container">
            <button onClick={() => (
              setNum2(0),
              setNum1(0))}>Reset</button>
          </div>
          <div>
          <Link to={`/operaciones/numero_1/${num1}/numero_2/${num2}`}>{<button>OPERACIONES</button>}</Link>
          </div>
      <Routes>
        <Route path='/operaciones/numero_1/:num1/numero_2/:num2' element={<Operaciones/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
