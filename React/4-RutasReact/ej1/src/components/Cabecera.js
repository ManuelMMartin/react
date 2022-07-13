import {Link} from 'react-router-dom'

function Cabecera() {
   return (<>
      <h1>Calendario</h1>
      <nav>
      <ul>
         <li><Link to="/meses" >Meses</Link></li>
         <li><Link to="/dias">Dias</Link></li>
      </ul>
      </nav>
   </>
   )

}

export default Cabecera