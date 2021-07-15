import express from 'express'
import {
  getProfileByUid,
  createProfile,
  addShippingAddress,
} from '../controllers/profileController.js'

const router = express.Router()

router.route('/').post(createProfile)
router.route('/:uid').get(getProfileByUid)
router.route('/addshipping/:uid').post(addShippingAddress)

export default router
