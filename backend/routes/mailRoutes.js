import express from 'express'
import { orderPlacedMail } from '../controllers/mailControllers.js'

const router = express.Router()

router.route('/orderplaced').post(orderPlacedMail)

export default router
