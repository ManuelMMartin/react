import vecindario from "./casas"

let casas = vecindario.casas

function Casa() {
   return casas.map((array, index) => {
      return (
         <div className="container" >
            <div key={index} className="container card">
               <h1>{array.id}</h1>
               <ul>
                  <li>Metros: {array.metros} m2 </li>
                  <li>Nº Habitaciones: {array.habitaciones}</li>
                  <li>Garaje: {array.garaje}</li>
                  <li>Precio: {array.precio}€</li>
               </ul>
            </div>
         </div>
      )
   })

}
export default Casa