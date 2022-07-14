
function Sinopsis(juego, index,) {

   return (<>
      <div key={index} className="card">
         <img src={juego.juego.cartel} alt={juego.juego.titulo} />
         <h2>{juego.juego.titulo}</h2>
         <p>{juego.juego.Argumento}</p>
      </div>
   </>
   )
}
export default Sinopsis