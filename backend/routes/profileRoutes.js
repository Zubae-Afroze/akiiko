import express from 'express'
import {
  getProfileByUid,
  createProfile,
} from '../controllers/profileController.js'

const router = express.Router()

router.route('/').post(createProfile)

export default router
