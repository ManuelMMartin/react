import videoclub from "./index";
import Peli from "./FuncionPeli";
function Cards() {
   return videoclub.peliculas.map((array) => {
      return (Peli(array))
   })
}

export default Cards