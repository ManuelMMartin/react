function Card({persona}, {index}) {
   return (
     
      <div key={index} class="card">
      <div class="container">
         <h4><b>{persona.name}</b></h4>
         <img src={persona.image}/>
      </div>
   </div>

   )
      
}

export default Card

