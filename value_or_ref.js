// TIPOS DE DATOS

// PRIMITIVOS <-> VALOR
var number = 2
var string = "hola soy string"
var booleano = true || false 
var indefinido = undefined 
var vacio = null

var newNumber = number
newNumber = 999

console.log("number -> ", number)
console.log("newNumber -> ", newNumber)
// NO PRIMITIVOS <-> ESPECIALES <-> OBJETOS <-> REFERENCIA

const objeto = {} // Objeto Objeto
const array = [] // Array Objeto
const funcion = function(){
    return "hola 36b"
} // Function Objeto
funcion.obj= {}
funcion.texto= "sssss"


console.log("funcion -> ", funcion)
console.log("funcion -> ", funcion.texto)

const objOrigin = { // AAQ21
    a:1,
    b:2,
    c:[]
}
objOrigin.d = "world"
const cloneObj = {...objOrigin} // SD321
const newObj = objOrigin // AAQ21
newObj.c = "weee" // AAQ21

const arrayOrigin = [1,2,3]
const newArray = [...arrayOrigin]

console.log("objOrigin -> ", objOrigin)
console.log("newObj -> ", newObj)
console.log("cloneObj -> ", cloneObj)

/*
Ejemplos al copiar un valor vs copiar una referencia
*/

