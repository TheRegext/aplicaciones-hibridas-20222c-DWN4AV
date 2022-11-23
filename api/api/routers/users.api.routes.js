import express from 'express'
import * as userController from '../controllers/users.api.controllers.js'

const router = express.Router()


// api/account/session
router.route('/api/users/login')
    .post(userController.login)

router.route('/api/users')
    .get(userController.find)
    .post(userController.create) // registro


router.route('/api/users/:id')
    .delete(userController.remove)

export default router