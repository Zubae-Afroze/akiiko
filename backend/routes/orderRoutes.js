import express from 'express'
import {
  addOrderItems,
  getOrderById,
  createRazorpayOrder,
  orderPaymentComplete,
  getMyOrders,
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(addOrderItems)

router.route('/:id').get(getOrderById)

router.route('/myorders/:profile').get(getMyOrders)

router.route('/:id/pay').get(createRazorpayOrder)

router.route('/:id/ordercomplete').post(orderPaymentComplete)

// router.route('/:id/razorpay').get(getRazorpayObject)

// router.route('/:id/paid').post(updateOrderToPaid)

export default router
