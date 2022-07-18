import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useState } from "react";
import './App.css';
import Saludo from "./components/Saludo";

function App() {

  let [nombre, setNombre] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <>
            <input type="text"
              value={nombre}
              placeholder="nombre a añadir"
              onChange={(event) => (setNombre(event.target.value))} />
            <Link to={"/saludar/"+nombre}><button>saludar</button></Link>
          </>
        }/>
        <Route path="/saludar/:nombre" element={<Saludo/>}/>
        
      </Routes>
    </BrowserRouter>);
}

export default App;
