import { Link } from 'react-router-dom'
function Cabecera() {
   return (
      <header className='cabecera'>
         <h1>Videojuegos</h1>
         <Link to='/'>Inicio</Link>
      </header>

   )

}
export default Cabecera