const PRODUCTOS = [
    { nombre: "Silla", precio: 25000 },
    { nombre: "Mesa", precio: 35000 },
    { nombre: "Mesa de luz", precio: 15000 },
    { nombre: "Sillón", precio: 45000 },
    { nombre: "Escritorio", precio: 55000 },
    { nombre: "Cama", precio: 75000 },
    { nombre: "Cómoda", precio: 65000 },
    { nombre: "Biblioteca", precio: 85000 },
    { nombre: "Banco", precio: 95000 },
]

const TIPOS = [
    { nombre: "Paris", factor: 0.1 },
    { nombre: "Roma", factor: 0.2 },
    { nombre: "Londres", factor: 0.22 },
    { nombre: "Nueva York", factor: 0.3 },
    { nombre: "Tokio", factor: 0.15 },
    { nombre: "Kloster", factor: 0.4 },
]
]


// mersh de dos arrays
console.log("Nombre, Precio")
for (let i = 0; i < PRODUCTOS.length; i++) {
    let precio = Math.floor(Math.random() * 100000) + 10000;
    for (let j = 0; j < TIPOS.length; j++) {
        precio = PRODUCTOS[i].precio * j / 10 + 1
        console.log(PRODUCTOS[i].nombre + " " + TIPOS[j] + ", " + precio)
    }
}