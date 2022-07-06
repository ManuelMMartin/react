import videoclub from ".";
import Peli from "./FuncionPeli";
function Cards() {
   videoclub.peliculas.map((array) => {
      return (Peli(array))
   })
}

export default Cards