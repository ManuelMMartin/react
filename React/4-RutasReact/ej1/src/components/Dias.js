function Dias() {
   let dias = {
      enero: 31,
      febrero: 28,
      marzo: 31,
      abril: 30,
      mayo: 31,
      junio: 30,
      julio: 31,
      agosto: 31,
      septiembre: 30,
      octubre: 31,
      noviembre: 30,
      diciembre: 31,
   }
   let diasMes = []
   for (let mes in dias) {
      diasMes.push(<li>{mes}: {dias[mes]}</li>)
   } return diasMes
}

export default Dias