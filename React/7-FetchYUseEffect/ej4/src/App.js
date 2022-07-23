import { useEffect, useState } from 'react'
import './App.css';

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
    setLoading(true)
    fetch(`https://api.magicthegathering.io/v1/cards?set=${select}`)
      .then(res => res.json())
      .then(function (datos) {
        setData2(datos)
        setLoading(false)
      })
  }, [select])

  if (loading) {
    
    return (<>
    <header>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/1280px-Magicthegathering-logo.svg.png'/>
      </header>
    <h1>Cargando...</h1>
    
    </>)
    
  } else {

    return (<>
      <header>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/1280px-Magicthegathering-logo.svg.png'/>
      </header>

      <select className='select' onChange={(e) => (setSelect(e.target.value))}>
        <option value="" selected >Selecciona un Set</option>
        {data.map((set, index) => {
          return <option value={set.code} key={index}>{set.name}</option>
        })}
      </select>
      <div>
        <div className='grid container'>
          {data2.cards.map((carta, index) => {
            return (<>
            <div className='card'>
            <h2 key={index}>{carta.name}</h2>
            {carta.imageUrl?<img src={carta.imageUrl} alt={carta.name}/>: <img src="https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/440px-Magic_the_gathering-card_back.jpg" alt={carta.name}/> }
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
