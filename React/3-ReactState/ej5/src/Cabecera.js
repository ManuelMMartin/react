import biblioteca from "./biblioteca"

let usuario = biblioteca.usuario

function Cabecera() {
   return (
      <header>
         <h1>Biblioteca de Alejandria</h1>
         <h3>Bienvenido {usuario.nombre}</h3>
         <img className="header__image" src={usuario.imagen}/>
      </header>
   )
}
export default Cabecera