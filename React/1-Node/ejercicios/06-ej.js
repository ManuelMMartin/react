let factorial = require("./funciones/06-funciones")
let supervillains = require("supervillains")

let miarray = Array.from({length: 4}, () => parseInt(Math.random() * 5 + 1))
miarray.forEach(function(item){
   console.log(supervillains.all[factorial(item)]);
})
