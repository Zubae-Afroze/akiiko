import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Razorpay from 'razorpay';

// @desc Create new order
// @route POST /api/orders
// @access Private Route
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, totalPrice } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No Order Items')
        return
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            totalPrice
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

// @desc Get order by id
// @route GET /api/orders/:id
// @access Private Route
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user')

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not Found');
    }
})

// @desc GET razor pay instanciation
// @route GET /api/orders/:id/razorpay
// @access Private Route
const getRazorpayObject = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user')

    const razorInstance = new Razorpay({
        key_id: process.env.RAZOR_PAY_KEY,
        key_secret: process.env.RAZOR_PAY_SECRET
    })

    const payment_capture = 1
    const receipt = (order._id).toString()
    const currency = "INR"
    const amount = (order.totalPrice * 100).toString()

    const razorResponse = await razorInstance.orders.create({
        amount,
        currency,
        receipt,
        payment_capture
    })
    if (order) {
        res.json({
            id: razorResponse.id,
            amount_due: razorResponse.amount_due,
            amount_paid: razorResponse.amount_paid,
            attempts: razorResponse.attempts,
            currency: razorResponse.currency,
            receipt: razorResponse.receipt,
            razor_key: process.env.RAZOR_PAY_KEY,
            razor_secret: process.env.RAZOR_PAY_SECRET
        })
    } else {
        res.status(404)
        throw new Error('Order not Found');
    }

})

// @desc UPDATE order isPaid
// @route GET /api/orders/:id/pay
// @access Private Route
const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()

        const updatedOrder = await order.save()

        res.json(updatedOrder)

    } else {
        res.status(404)
        throw new Error('Order not Found');
    }
})



export { addOrderItems, getOrderById, updateOrderToPaid, getRazorpayObject }