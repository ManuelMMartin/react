import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"


function Operaciones() {

   let parametros = useParams()
   return (<div>
      <p>Suma: {parseInt(parametros.num1) + parseInt(parametros.num2)} </p>
      <p>Resta: {parseInt(parametros.num1) - parseInt(parametros.num2)}</p>
      <p>Multiplicacion: {parseInt(parametros.num1) * parseInt(parametros.num2)}</p>
      <p>Division: {parseInt(parametros.num1) / parseInt(parametros.num2)}</p>
      <p>Resto: {parseInt(parametros.num1) % parseInt(parametros.num2)}</p>

      <Link to='/'><button>Volver</button></Link>
   </div>
   )

}

export default Operaciones