class Rectangulo {
   constructor(largo, ancho) {
      this.largo = largo
      this.ancho = ancho
   }

   calcularArea() {
      return (this.largo * this.ancho)
   }

   calcularPerimetro() {
      return (2*(this.largo + this.ancho))
   }
}

let rectangulo = new Rectangulo(12, 8);

console.log(rectangulo.calcularArea(), rectangulo.calcularPerimetro())