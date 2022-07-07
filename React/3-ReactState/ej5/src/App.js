import './App.css';
import Libro from './Libro';
import Cabecera from './Cabecera';
function App() {
  return (<>
<Cabecera/>
<div className='grid--3-cols grid'>
<Libro />
</div>

  </>);
}

export default App;
