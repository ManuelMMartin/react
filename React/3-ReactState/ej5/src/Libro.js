import biblioteca from "./biblioteca"
import { useState } from 'react'
let libros = biblioteca.libros



function Libro() {
   let [stock, setNumero] = useState(3)
   let [mensaje, setMensaje] = useState("Stock")


   function añadir() {
      setNumero(stock - 1)
      setMensaje(mensaje, "Stock")
      if (stock === 0) {
         setNumero(stock, 0)
         setMensaje("Sin Stock")
      }
   }


   return libros.map((array, index) => {
      let id = array.id

      return (
         <div className="container" >
            <div key={array.id} className="container card">
               <h2>{array.title}</h2>
               <img src={array.formats["image/jpeg"]} alt={array.title} />
               <ul>
                  <li><h4>Autor: {array.authors.map((autor) => (autor.name))}</h4></li>
                  <li>ID: {id}</li>
                  <li>Genero: {array.subjects[index]}</li>
                  <li>Descargas: {array.download_count}</li>
                  <li>Lenguajes: {array.languages}</li>

               </ul>
               <p>{mensaje}: {stock}</p>
               <button id={array.id} onClick={añadir.bind(array.id)}>Añadir al carrito</button>
            </div>
         </div>
      )
   })

}
export default Libro