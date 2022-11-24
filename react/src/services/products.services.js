async function find() {
    return fetch('http://localhost:2022/api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
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
    return fetch(`http://localhost:2022/api/products/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
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