function Meses() {
   let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
 return(
   meses.map((mes, index)=>{
      {return(<li key={index}>{mes}</li>)}
       })
 )
}

export default Meses