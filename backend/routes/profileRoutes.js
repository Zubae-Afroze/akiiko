import express from 'express'
import {
  getProfileByUid,
  createProfile,
  addShippingAddress,
  updateName,
  updatePhone,
} from '../controllers/profileController.js'

const router = express.Router()

router.route('/').post(createProfile)
router.route('/:uid').get(getProfileByUid)
router.route('/addshipping/:uid').post(addShippingAddress)
router.route('/updatename/:uid').put(updateName)
router.route('/updatephone/:uid').put(updatePhone)

export default router
