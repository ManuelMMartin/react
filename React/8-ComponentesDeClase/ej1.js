class Cifras {
   constructor(valor) {
      this.valor = valor
   }
   esPar() {
      return this.valor % 2 === 0
   }
   sumaDigitos() {
      let suma = 0
      let num = this.valor.string()

      for (let i = 0; i < num.length; i++) {
         suma = suma + parseInt(num[i])
      } return suma
   }
}

let num = new Cifras("13")

console.log(num.esPar())
console.log(num.sumaDigitos())