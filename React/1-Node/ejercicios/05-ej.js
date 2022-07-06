let objeto = require("./funciones/05-funciones")

let arrayPaises = objeto.paises.a.concat(objeto.paises.b)
arrayPaises = arrayPaises.concat(objeto.paises.c)

console.log(`Los paises favoritos de ${objeto.nombre} son ${arrayPaises[objeto.favoritos[0]]}, ${arrayPaises[objeto.favoritos[1]]} y ${arrayPaises[objeto.favoritos[2]]}`)