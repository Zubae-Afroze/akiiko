import express from 'express'
import {
  getProfileByUid,
  createProfile,
} from '../controllers/profileController.js'

const router = express.Router()

router.route('/').post(createProfile)
router.route('/:uid').get(getProfileByUid)
router.route('/addshipping/:uid').post()

export default router
