import express, { Router } from 'express'
import controller from '../controllers/AuthController'

const router: Router = express.Router()

router.post('/login', controller.login)
router.post('/register', controller.register)

export default router
