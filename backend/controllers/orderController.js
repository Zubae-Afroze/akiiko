import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js'

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

// @desc UPDATE order isPaid
// @route GET /api/orders/:id/pay
// @access Private Route
const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address
        }

        const updatedOrder = await order.save()

        res.json(updatedOrder)

    } else {
        res.status(404)
        throw new Error('Order not Found');
    }
})



export { addOrderItems, getOrderById, updateOrderToPaid }