import biblioteca from "./biblioteca"

let usuario = biblioteca.usuario

function Cabecera() {

   if (usuario.vip===false) {
      return (
         <header>
            <h1>Biblioteca de Alejandria</h1>
            <h3>¿tu otra vez {usuario.nombre}? a ver si te haces con el VIP</h3>
            
         </header>
      )
   }else{
      return (
         <header>
            <h1>Biblioteca de Alejandria</h1>
            <h3>Bienvenido Don {usuario.nombre}, ¿quiere caviar? </h3>
            
            
         </header>
      )
   }
   
}
export default Cabecera
