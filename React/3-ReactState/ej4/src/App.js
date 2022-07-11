import './App.css';
import { useState } from 'react'

function App() {
  let [numero, setNumero] = useState(1)

  return (<>
  <div className= "container">
<button onClick={()=>setNumero(++numero)}>+</button><h1>{numero}</h1><button onClick={()=>setNumero(--numero)}>-</button>
</div>

  </>);
}

export default App;
