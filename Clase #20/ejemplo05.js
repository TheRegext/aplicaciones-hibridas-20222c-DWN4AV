//Paradigma de programacion: funcional
// callback
function sumar(array, criterio) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += criterio(array[i])
    }

    return suma
}

const numeros = [1, 2, 3, 4, 5]

let suma = sumar(numeros, e => e);
let sumaPar = sumar(numeros, valor => (valor % 2 === 0) ? valor : 0)
let sumaImpar = sumar(numeros, valor => (valor % 2 !== 0) ? valor : 0)

console.log("Todos:", suma) // 15
console.log("Pares: ", sumaPar)
console.log("Impares: ", sumaImpar)
