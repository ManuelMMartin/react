import { useEffect, useState } from 'react'
import './App.css';

//components
import Cabecera from './components/Cabecera';

function App() {

  let [data, setData] = useState([])
  let [data2, setData2] = useState([])
  let [select, setSelect] = useState('')
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.magicthegathering.io/v1/sets')
      .then(res => res.json())
      .then(function (datos) {
        setData(datos.sets)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let puente = []
    console.log(data2)
    setLoading(true)
    fetch(`https://api.magicthegathering.io/v1/cards?set=${select != "" ? select : "undefined"}`)
      .then(res => res.json())
      .then(function (datos) {
        (datos.cards.map((cartas) => { puente.push(cartas) }))
        setLoading(false)
        setData2(puente)
      })
  }, [select])

  if (loading) {

    return (<>
      <Cabecera />
      <h1>Cargando...</h1>

    </>)

  } else {

    return (<>
      <Cabecera />

      <select className='select' onChange={(e) => (setSelect(e.target.value))}>
        <option selected >Selecciona un Set</option>
        {data.map((set, index) => {
          return <option id={set.name} value={set.code} key={index}>{set.name}</option>
        })}
      </select>

      <div>
        <div className='grid container'>
          {data2.map((carta, index) => {
            return (<>
              <div key={index} className='card'>
                <h2 >{carta.name}</h2>
                {carta.imageUrl ? <img src={carta.imageUrl} alt={carta.name} /> : <img src="https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/440px-Magic_the_gathering-card_back.jpg" alt={carta.name} />}
                <p>{carta.text}</p>
              </div>
            </>)
          })}
        </div>

      </div>
    </>);
  }
}

export default App;
