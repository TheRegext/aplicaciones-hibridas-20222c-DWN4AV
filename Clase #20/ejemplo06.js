const numeros = [1, 2, 3, 4, 5]

let suma = numeros.reduce((prev, actual) => prev + actual, 0)
let sumaPar = numeros.reduce((prev, actual) => prev + ((actual % 2 === 0) ? actual : 0), 0)
let sumaImpar = numeros.reduce((prev, actual) => prev + ((actual % 2 !== 0) ? actual : 0), 0)

console.log("Todos:", suma) // 15
console.log("Pares: ", sumaPar)
console.log("Impares: ", sumaImpar)