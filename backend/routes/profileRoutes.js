import express from 'express'
import {
  getProfileByUid,
  getProfileById,
  createProfile,
  addShippingAddress,
  editShippingAddress,
  updateName,
  updatePhone,
} from '../controllers/profileController.js'

const router = express.Router()

router.route('/').post(createProfile)
router.route('/:uid').get(getProfileByUid)
router.route('/id/:id').get(getProfileById)
router.route('/addshipping/:uid').post(addShippingAddress)
router.route('/editshipping/:uid').put(editShippingAddress)
router.route('/updatename/:uid').put(updateName)
router.route('/updatephone/:uid').put(updatePhone)

export default router
