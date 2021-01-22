import express from 'express';
import { addOrderItems, getOrderById, createRazorpayOrder, orderPaymentComplete } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems)

router.route('/:id').get(protect, getOrderById)

router.route('/:id/pay').get(protect, createRazorpayOrder)

router.route('/:id/ordercomplete').post(protect, orderPaymentComplete)

// router.route('/:id/razorpay').get(getRazorpayObject)

// router.route('/:id/paid').post(updateOrderToPaid)

export default router