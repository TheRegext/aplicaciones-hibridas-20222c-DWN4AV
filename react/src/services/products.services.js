async function find() {
    return fetch('http://localhost:2022/api/products')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('Error en la llamada')
            }
        })
}

async function findById(id) {
    return fetch(`http://localhost:2022/api/products/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('Error en la llamada')
            }
        })
}
export {
    find,
    findById
}