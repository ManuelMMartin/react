import { Link } from 'react-router-dom'
function Cabecera(){
return <>
<header>
        <h1>Compositores</h1>
        <div className="container">
        <Link to='/'>Inicio</Link>
        <Link to='/eliminar'>Eliminar</Link>
        </div>
        </header>
      </>
}
export default Cabecera
