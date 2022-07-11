import './App.css';
import biblioteca from './service/biblioteca';
import Cabecera from './components/Cabecera';
import Libro from './components/Libro'


function App() {
  return (<>
    <Cabecera biblioteca={biblioteca} />
    <main className="catalogo">
    {biblioteca.libros.map((librillo, index) => {
      return <Libro libro={librillo} />
    })}
    </main>


  </>);
}

export default App;
