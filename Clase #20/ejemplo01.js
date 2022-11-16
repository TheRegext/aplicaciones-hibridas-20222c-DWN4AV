/*

    i++ => i += 1 => i = i + 1
    ++i
*/
/*
j  = 7
//k = j++ // j = 8, k = 7
k = ++j // k = 8, j = 8
*/

//Paradigma de programacion: estructurada
const numeros = [1, 2, 3, 4, 5]
const numeros2 = [2, 5, 6]

let suma = 0

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
}

let suma2 = 0

for (let i = 0; i < numeros2.length; i++) {
    suma2 += numeros2[i]
}

console.log(suma) // 15
console.log(suma2)