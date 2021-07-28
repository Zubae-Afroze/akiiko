import asyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'

// @desc sending order summary email to the customer
// @route POST /api/mail/orderplaced
// @access Private Route
const orderPlacedMail = asyncHandler(async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {},
  })
})

export { orderPlacedMail }
