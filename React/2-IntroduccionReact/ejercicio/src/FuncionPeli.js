function Peli(array) {
   return (
      <div class="flip-card">
         <div class="flip-card-inner">
            <div class="flip-card-front">
               <img src={array.cartel} class="img" alt="" />
            </div>
            <div class="flip-card-back">
               <h3>{array.titulo}</h3>
               <p>{array.sinopsis}</p>
            </div>
         </div>
      </div>
   )
}
export default Peli