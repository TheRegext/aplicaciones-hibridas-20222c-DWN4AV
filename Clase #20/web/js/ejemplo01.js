const restar = document.getElementById('restar')
const sumar = document.getElementById('sumar')
const contador = document.getElementById('contador')

let cant = 0

restar.addEventListener('click', function () {
    cant--
    contador.innerText = cant
})

sumar.addEventListener('click', function () {
    cant++
    contador.innerText = cant
})