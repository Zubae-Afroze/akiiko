import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import Razorpay from 'razorpay'
import crypto from 'crypto'

// @desc Create new order
// @route POST /api/orders
// @access Private Route
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice,
    user,
    shippingPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No Order Items')
    return
  } else {
    const order = new Order({
      orderItems,
      user,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      totalPrice,
      shippingPrice,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

// @desc Get order by id
// @route GET /api/orders/:id
// @access Private Route
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('profile')

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not Found')
  }
})

// @desc POST razor pay instanciation
// @route POST /api/orders/:id/pay
// @access Private Route
const createRazorpayOrder = asyncHandler(async (req, res) => {
  const razorInstance = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY,
    key_secret: process.env.RAZOR_PAY_SECRET,
  })

  const order = await Order.findById(req.params.id).populate('profile')

  if (!order) {
    res.status(404)
    throw new Error('Order not Found')
  }

  const receipt = order._id.toString()
  const currency = 'INR'
  const amount = (order.totalPrice * 100).toString()

  const razorResponse = await razorInstance.orders.create({
    amount,
    currency,
    receipt,
  })

  order.razorpayOrderId = razorResponse.id

  try {
    await order.save()
  } catch (error) {
    res.status(500)
    throw new Error('Razorpay Order Id, Update failed')
  }

  res.json({
    id: razorResponse.id,
    amount: razorResponse.amount_due,
    attempts: razorResponse.attempts,
    currency: razorResponse.currency,
    receipt: razorResponse.receipt,
    razor_key: process.env.RAZOR_PAY_KEY,
  })
})

// @desc UPDATE order if paid
// @route GET /api/orders/:id/ordercomplete
// @access Private Route
const orderPaymentComplete = asyncHandler(async (req, res) => {
  const { payment_id, razorpay_order_id, signature } = req.body

  const order = await Order.findOne({ razorpayOrderId: razorpay_order_id })

  if (!order) {
    res.status(404)
    throw new Error('Order not Found')
  }

  const hmac = crypto.createHmac('sha256', process.env.RAZOR_PAY_SECRET)

  hmac.update(razorpay_order_id + '|' + payment_id)
  const generatedSignature = hmac.digest('hex')

  //const genSign = hmac_sha256(razorpay_order_id + "|" + payment_id, process.env.RAZOR_PAY_SECRET)

  console.log(generatedSignature)

  if (generatedSignature === signature) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      payment_id: payment_id,
      status: 'sucesss',
      update_time: Date.now(),
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(401)
    throw new Error(generatedSignature)
  }
})

//@desc Get logged in user orders
//@route GET /api/orders/myorders/:profile
//@access Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.params.profile })

  res.json(orders)
})

//@desc Get All Orders for Admin panel
//@route GET /api/orders/allorders/:page
//@access Private
// const getAllOrders = asyncHandler(async (req, res) => {
//   const perPage = 20
//   const page = Math.max(0, req.params.page)

//   const orders = await Order.find({})
//     .limit(perPage)
//     .skip(page * perPage)
//     .sort({ createdAt: 'desc' })

//   return res.json(orders)
// })

export {
  addOrderItems,
  getOrderById,
  createRazorpayOrder,
  orderPaymentComplete,
  getMyOrders,
  //getAllOrders,
}
