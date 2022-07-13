import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Cabecera from './components/Cabecera';
import Meses from './components/Meses';
import Dias from './components/Dias';

function App() {
  return (<>
  <BrowserRouter>
  <Cabecera/>
  <Routes>
    <Route path="/meses" element={<ol><Meses/></ol>}/>
    <Route path="/dias" element={<ul><Dias/></ul>}/>
  </Routes>
  </BrowserRouter>
  </>);
}

export default App;
