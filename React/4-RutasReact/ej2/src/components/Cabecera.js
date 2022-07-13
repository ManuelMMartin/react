import { Link } from 'react-router-dom'
function Cabecera() {
   return (<>
      <div className="cabecera">
         <h1>Sprint Video</h1>
         <nav>
            <Link to='/'>inicio</Link>
         </nav>
      </div>

   </>)
}

export default Cabecera