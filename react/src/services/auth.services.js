async function login(email, password) {
    return fetch('http://localhost:2022/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
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
    login
}