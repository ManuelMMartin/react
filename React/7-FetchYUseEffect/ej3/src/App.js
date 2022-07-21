import { useEffect, useState } from 'react'
import './App.css';

function App() {

  let [data, setData] = useState([])
  let [select, setSelect] = useState('')
  let [pokemons, setPokemons] = useState([])

  //llamada a la API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then(res => res.json())
      .then(function (datos) {
        setData(datos.results)
      })
  }, [])


  //llamada a la seleccion del usuario
  useEffect(() => {
    fetch(select)
      .then(res => res.json())
      .then(function (datos) {
        let data2 = datos.pokemon //puede declararse variable por que solo se usa en este ambito
        let pokemonsRND = []
        for (let i = 0; i < 3; i++) {
          let rnd = Math.floor(Math.random() * data2.length)
          pokemonsRND.push(data2[rnd].pokemon.name)
        }
        setPokemons(pokemonsRND)
      })
  }, [select])


  return (<>
    <header>
      <h1>Tipos de Pokemon</h1>
    </header>
    <select onChange={(event) => (setSelect(event.target.value))}>
      <option disabled selected >Selecciona un tipo</option>
      {data.map((tipo, index) => {
        return (<option value={tipo.url} key={index}>{tipo.name}</option>)

      })}
    </select>

    <ul>
      {pokemons.map((poke, index) => { return <li key={index}>{poke}</li> })}
    </ul>
  </>)
}


export default App;
