import express, { Router } from 'express'

const router: Router = express.Router()

router.post('/login')
router.post('/register')

export default router
