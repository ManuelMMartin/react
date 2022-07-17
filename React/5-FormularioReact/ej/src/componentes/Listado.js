function Listado({ init }) {
   return init.map((compositor, index) => {
      return <li key={index}>{compositor.nombre}</li>
   })
}

export default Listado