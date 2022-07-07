import { useState } from 'react'

function Tarjeta(props) {
   let [stock, setStock] = useState(3)
   let [mensaje, setMensaje] = useState("Stock")

   function añadir() {
      setStock(stock - 1)
      setMensaje(mensaje, "Stock")
      if (stock === 0) {
         setStock(stock, 0)
         setMensaje("Sin Stock")
      }
   }


   let id = props.id
   return (
      <div className="container" >
         <div className="container card">
            <h2>{props.title}</h2>
            <img src={props.formats["image/jpeg"]} alt={props.title} />
            <ul>
               <li><h4>Autor: {props.authors.map((autor) => (autor.name))}</h4></li>
               <li>ID: {id}</li>
               <li>Genero: {props.subjects[0]}</li>
               <li>Descargas: {props.download_count}</li>
               <li>Lenguajes: {props.languages}</li>

            </ul>
            <p>{mensaje}: {stock}</p>
            <button onClick={añadir}>Añadir al carrito</button>
         </div>
      </div>
   )
}


function Main(props) {
   console.log(props)
   return <main>{props.libros.map((libro, index) => {
      
      return (<Tarjeta
         titulo={libro.title}
         imagen={libro.formats["image/jpeg"]}
         autor={libro.authors.map((autor) => (autor.name))}
         id={libro.id}
         genero={libro.subjects[index]}
         descargas={libro.download_count}
         lenguages={libro.languages} />
      )
   })}</main>
}

export default Main

