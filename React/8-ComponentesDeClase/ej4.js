class Finanzas {
   dolaresToEuros(num){
      return (`${num} dolares son ${num * 0.99} euros`) 
   }

   eurosToDolares(num){
      return (`${num} euros son ${num * 1.01} dolares`) 
   }
}

let operacion = new Finanzas  

console.log(operacion.dolaresToEuros(25))
console.log(operacion.eurosToDolares(50))