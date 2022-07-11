import {useState} from 'react'


function Libro (props){
   let [stock, setStock]= useState(3)
return(
   <div className="card">
      <img src={props.libro.formats['image/jpeg']} alt={props.libro.title}/>
      <div className="container">
         <h1>{props.libro.title}</h1>
         {props.libro.authors.map((autor)=><h4>{autor.name}</h4>)}
         <p>{stock >0?"Stock: "+stock:"No hay stock"}</p>
         {stock>0?<button onClick={()=>setStock(--stock)}>Añadir al carrito</button>:""}
      </div>
   </div>
)

}

export default Libro