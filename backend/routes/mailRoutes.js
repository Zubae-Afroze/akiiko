import express from 'express'
import { orderPlacedMail, newsLetterTest } from '../controllers/mailControllers.js'

const router = express.Router()

router.route('/orderplaced').post(orderPlacedMail)
router.route('/newslettertest').post(newsLetterTest)

export default router
 