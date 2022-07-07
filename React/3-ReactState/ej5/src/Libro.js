import biblioteca from "./biblioteca"
import Card from "./Main"
let libros = biblioteca.libros

function Libro() {
   return libros.map((array) => {
      return (<Card libro={array}/>
   )})
}

export default Libro