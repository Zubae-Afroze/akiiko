import express from 'express'
import {
  getProfileByUid,
  createProfile,
  addShippingAddress,
  updateNameAndPhone,
} from '../controllers/profileController.js'

const router = express.Router()

router.route('/').post(createProfile)
router.route('/:uid').get(getProfileByUid)
router.route('/addshipping/:uid').post(addShippingAddress)
router.route('/updatename/:uid').put(updateNameAndPhone)

export default router
