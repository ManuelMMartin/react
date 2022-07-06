import './App.css';
import Cabecera from './Cabecera';
import Cards from './Cards';

function App() {
  return (<>
    <Cabecera titulo="Sprint VIDEO" />
    <div class="container grid">
      <Cards />
    </div>
  </>);
}

export default App;
