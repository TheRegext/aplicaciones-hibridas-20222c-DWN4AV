async function A() {
    console.log('Muestro A');
    // throw 'Error en A' // dispara una excepción
    return 10
}

async function B() {
    console.log('B');
    return 20
}

async function C() {
    console.log('C');
    return B()
}

C()
    .then(function (data) {
        console.log('C terminó', data);
    })


/*
A()
    .then(function (data) {
        console.log("TODO BIEN!", data)
        return data * 2
    })
    .then(function (data) {
        console.log("TODO BIEN 2!", data)
        return data * 2
    })
    .catch(function (data) {
        console.log("TODO MAL!", data)
        return -1
    })
    .then(function (data) {
        console.log("TODO BIEN 3!", data)
    })
    .finally(function () {
        console.log("FINALLY")
    })

console.log("A: Termine de ejecutar")
// console.log("B: ", B())
//console.log("C: ", C())
*/