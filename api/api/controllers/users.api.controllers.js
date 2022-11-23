import jwt from 'jsonwebtoken'

import * as userService from '../../services/users.services.js'

function login(req, res) {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    userService.login(user)
        .then(user => {
            const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, 'CLAVE_SECRETA')

            res.json({ token, user })

        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}


function find(req, res) {
    const filter = {}

    const token = req.headers['auth-token']

    if (!token) {
        return res.status(401).json({ message: 'No enviaste el token' })
    }

    try {
        const payload = jwt.verify(token, 'CLAVE_SECRETA')
    }
    catch (err) {
        return res.status(401).json({ message: 'Token inválido' })
    }

    userService.find(filter)
        .then(users => res.json(users))
}

function create(req, res) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    userService.create(user)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

function remove(req, res) {
    const id = req.params.id

    userService.remove(id)
        .then(() => res.json({ message: 'Usuario eliminado' }))
        .catch(err => res.status(400).json({ message: err.message }))
}

export {
    find,
    create,
    remove,
    login
}