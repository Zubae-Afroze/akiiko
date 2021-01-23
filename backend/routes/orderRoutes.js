import express from 'express';
import { addOrderItems, getOrderById, createRazorpayOrder, orderPaymentComplete, getMyOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems)

router.route('/myorders').get(protect, getMyOrders)

router.route('/:id').get(protect, getOrderById)

router.route('/:id/pay').get(protect, createRazorpayOrder)

router.route('/:id/ordercomplete').post(protect, orderPaymentComplete)

// router.route('/:id/razorpay').get(getRazorpayObject)

// router.route('/:id/paid').post(updateOrderToPaid)

export default router