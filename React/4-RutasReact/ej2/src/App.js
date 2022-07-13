import './App.css';
import Main from './components/Main';
import Cabecera from './components/Cabecera';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sinopsis from './components/Sinopsis';
import videoclub from './sevices/videoclub';
import { useState } from 'react'


function App() {
  let [arrayPeliculas] = useState(videoclub)
  return (<>
    <BrowserRouter>
      <Cabecera />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main videoclub={arrayPeliculas} />} />
          <Route path='/sinopsis' element={<Sinopsis videoclub={arrayPeliculas} />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>)
}

export default App;
