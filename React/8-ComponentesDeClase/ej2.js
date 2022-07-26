class Distancia{

   MillasAMetros(millas){
      return (`${millas * 1609.34} metros`)
   }
   MillasAKilometros(millas){
      return (`${millas * 1.60934} kilometros`)
   }


}

let num = new Distancia
 
console.log(num.MillasAMetros(24))
console.log(num.MillasAKilometros(12))