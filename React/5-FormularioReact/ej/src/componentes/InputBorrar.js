import { useState } from 'react'

function InputBorrar({ borrarNombre }) {
   let [inputBorrar, setInputBorrar] = useState('')

   function borrarNombreComponente() {
      borrarNombre(inputBorrar);
      setInputBorrar("");
   }
   return (
      <div>
         <input type="text"
            value={inputBorrar}
            placeholder="nombre a eliminar"
            onChange={(event) => (setInputBorrar(event.target.value))} />
         <button onClick={borrarNombreComponente}>Eliminar</button>
      </div>
   )
}

export default InputBorrar
