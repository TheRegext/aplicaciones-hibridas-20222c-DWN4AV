// funciones constructoras (pueden tener un contexto)
// functiones 
function nombre(param1, param2) {
    console.log(this)
    return valor
}

nombre()

// funcion anonima
function () {

}

// expresion funcional
let variable = function () {
    return 10
}
console.log(variable())

    // IIFE
    (async function () {

    })()


    // flecha - funciones lambda
    // no tienen contexto
    // siempre es una expresion funcional
    ((valor1, valor2) => {
        return valor1 + valor2
    })(5, 5)

async (valor1, valor2) => {
    return valor1 + valor2
}

const f = (g) => {
    return g * 2
}

const f = (g) => g * 2

const f = g => g * 2