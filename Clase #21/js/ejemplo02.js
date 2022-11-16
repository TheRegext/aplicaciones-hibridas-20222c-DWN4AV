function crearContador(padre) {
    let cant = 0

    const restar = document.createElement('button');
    const sumar = document.createElement('button');
    const contador = document.createElement('label');

    restar.textContent = '-';
    sumar.textContent = '+';
    contador.textContent = 0;

    restar.addEventListener('click', function () {
        cant--
        contador.innerText = cant
    })

    sumar.addEventListener('click', function () {
        cant++
        contador.innerText = cant
    })

    padre.appendChild(restar);
    padre.appendChild(contador);
    padre.appendChild(sumar);
}


crearContador(document.getElementById('contador1'));

crearContador(document.getElementById('contador2'));

