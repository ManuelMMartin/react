import './App.css';
import { useState } from 'react'

function App() {
  let [numero, setNumero] = useState(1)

  function sumar() {
    setNumero(numero + 1)
  }
  function restar() {
    setNumero(numero - 1)
  }
  return (<>
  <div className= "container">
<button onClick={sumar}>+</button><h1>{numero}</h1><button onClick={restar}>-</button>
</div>

  </>);
}

export default App;
