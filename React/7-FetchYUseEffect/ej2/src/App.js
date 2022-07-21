import { useEffect, useState } from 'react'
import './App.css';

function App() {
  let [data, setData] = useState([])
  let [data2, setData2] = useState([])
  let [data3, setData3] = useState([])
  let [loading, setLoading] = useState(true)
  let [select, setSelect] = useState('')

  //llamada a la API
  useEffect(() => {
    setLoading(true)
    fetch("https://swapi.dev/api/planets")
      .then(res => res.json())
      .then(datos => {
        setData(datos.results)
        setLoading(false)
      })
  }, [])

  //llamada a los residentes
  useEffect(() => {
    setLoading(true)
    fetch(select)
      .then(res => res.json())
      .then(datos => {
        setData2(datos.residents)
        data.length > 1 ? setLoading(false) : setLoading(true)
      })
  }, [select])

  useEffect(() => {
    setLoading(true)
    Promise.all(data2.map((url) => fetch(url)))
      .then((respuesta) => Promise.all(respuesta.map((res) => res.json())))
      .then((datos) => {
        setData3(datos)
        data.length > 1 ? setLoading(false) : setLoading(true)
      })
  }, [data2])

  if (loading) {
    return <h1>Cargando...</h1>
  } else {
    return (<>
      <header>
        <h1>Planetas de StarWars</h1>
      </header>
      <main>
        <select onChange={(event) => (setSelect(event.target.value))} >
          <option disabled selected >Selecciona un planeta</option>
          {data.map((planet, index) => {
            return <option value={planet.url} key={index}>{planet.name}</option>
          })}
        </select>

        <div>
          <ul>
            {data3.map((personaje, index) => { return <li key={index}>{personaje.name}</li> })}
          </ul>
        </div>
      </main>
    </>);
  }
}

export default App;
