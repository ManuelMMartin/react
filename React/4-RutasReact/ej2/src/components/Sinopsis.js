
function Sinopsis(props){
   return props.videoclub.peliculas.map((peli, index) => {
      return <>
         <div key={index} className="card">
            <p>{peli.sinopsis}</p>
         </div>
      </>
   })
}

export default Sinopsis