import { useState } from 'react'

function Tarjeta(props) {
   let [stock, setStock] = useState(3)

   return (
      <div className="container" >
         <div className="container card">
            <h2>{props.libro.title}</h2>
            <img src={props.libro.formats["image/jpeg"]} alt={props.libro.title} />
            <ul>
               <li><h4>Autor: {props.libro.authors.map((autor) => (autor.name))}</h4></li>
               <li>ID: {props.libro.id}</li>
               <li>Genero: {props.libro.subjects[0]}</li>
               <li>Descargas: {props.libro.download_count}</li>
               <li>Lenguajes: {props.libro.languages}</li>

            </ul>
            <p>{stock<=0?"sin stock":"stock: " +stock}</p>
            <button onClick={()=>setStock(stock -1)}>Añadir al carrito</button>
         </div>
      </div>
   )
}
function Main(props) {
   return <main>{props.libros.map((libro, index) => {
      
      return (<Tarjeta
      key ={index}
      libro={libro}
         />
      )
   })}</main>
}

export default Main

