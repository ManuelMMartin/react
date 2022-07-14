import { Link } from 'react-router-dom'


function Tarjeta(juego, index) {
   
      return (<>
         <div key={index} className="card">
            <img src={juego.juego.cartel} alt={juego.juego.titulo} />
            <Link to={juego.juego.titulo.replaceAll(" ", "-")}><p>{juego.juego.titulo}</p></Link>
         </div>
      </>
      )


}
export default Tarjeta