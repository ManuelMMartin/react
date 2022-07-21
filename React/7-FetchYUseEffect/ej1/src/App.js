import { useEffect, useState } from "react";
import './App.css';

function App() {

  let [datos, setDatos] = useState({})
  let [url, setUrl] = useState("https://rickandmortyapi.com/api/character")
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(datos => setDatos(datos))
  }, [url])

console.log(datos)

  return (
    <>
       <div>
        {datos.results.map((persona, index) => {
          return (
            <div key={index} class="card">
      <div class="container">
         <h4><b>{persona.name}</b></h4>
         <img src={persona.image}/>
      </div>
   </div>
          )
        })}
      </div> 
      <button onClick={() => setUrl(datos.info.next)}>Pagina siguiente</button>
      <button onClick={() => setUrl(datos.info.prev)}>Pagina anterior</button>
    </>
  );
}

export default App;
