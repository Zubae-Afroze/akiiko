import express from 'express'
import {
  getProfileByUid,
  createProfile,
  addShippingAddress,
  updateName,
  updatePhoneNumber,
} from '../controllers/profileController.js'

const router = express.Router()

router.route('/').post(createProfile)
router.route('/:uid').get(getProfileByUid)
router.route('/addshipping/:uid').post(addShippingAddress)
router.route('/updatename/:uid').post(updateName)
router.route('/updatephone/:uid').post(updatePhoneNumber)

export default router
