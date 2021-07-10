import express from 'express'
import { getProfileByUid } from '../controllers/profileController.js'

const router = express.Router()

router.route('/:uid').get(getProfileByUid)

export default router
