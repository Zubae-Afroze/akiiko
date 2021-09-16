import express from 'express'
import { createReview } from '../controllers/reviewController.js'

const router = express.Router()

router.route('/post').post(createReview)

export default router
