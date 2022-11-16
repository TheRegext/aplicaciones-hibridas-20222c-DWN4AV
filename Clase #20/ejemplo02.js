//Paradigma de programacion: procedural
function sumar(array) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }

    return suma
}

function sumarPares(array) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += (array[i] % 2 === 0) ? array[i] : 0
    }

    return suma
}

function sumarImpares(array) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += (array[i] % 2 !== 0) ? array[i] : 0
    }

    return suma
}

const numeros = [1, 2, 3, 4, 5]

let suma = sumar(numeros);
let sumaPar = sumarPares(numeros)
let sumaImpar = sumarImpares(numeros)

console.log("Todos:", suma) // 15
console.log("Pares: ", sumaPar)
console.log("Impares: ", sumaImpar)