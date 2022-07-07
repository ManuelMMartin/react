import './App.css';
import persona from './persona';



function App() {
  return (<>
    <h1>{persona.nombre}</h1>
    <div>
    <p>Edad: {persona.edad}</p>
    <p>Nacimiento: {persona.nacimiento}</p>
      <div><h2>Direccion</h2></div>
      <p>Calle: {persona.direccion.calle}</p>
      <p>Numero: {persona.direccion.numero}</p>
      <p>Piso: {persona.direccion.piso}</p>
      <p>Ciudad: {persona.direccion.ciudad}</p>
    <p></p>

    </div>

  </>);
}

export default App;
