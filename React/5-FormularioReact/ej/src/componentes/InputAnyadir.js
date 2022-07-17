import { useState } from 'react'

function InputAnyadir({ anyadirNombre }, init) {
   let [nuevoInputC, setNuevoInputC] = useState("")

   function anyadirNombreComponente() {
      anyadirNombre(nuevoInputC);
      setNuevoInputC("");
   }

   return (
      <div>
         <input type="text"
            value={nuevoInputC}
            placeholder="nombre a añadir"
            onChange={(event) => (setNuevoInputC(event.target.value))} />
         <button
            onClick={nuevoInputC !== "" ? anyadirNombreComponente : ""}>Añadir</button>
      </div>
   )
}

export default InputAnyadir