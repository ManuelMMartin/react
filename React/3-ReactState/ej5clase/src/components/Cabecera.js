function Cabecera(props) {
   return (
      <header className="cabecera">
         <h1>Biblioteca Publica</h1>
         <div>
            <p>{props.biblioteca.usuario.vip?"Buenos dias, "+props.biblioteca.usuario.nombre:props.biblioteca.usuario.nombre}</p>
            <img src={props.biblioteca.usuario.imagen} alt={props.biblioteca.usuario.nombre} />
         </div>
      </header>

   )


}

export default Cabecera