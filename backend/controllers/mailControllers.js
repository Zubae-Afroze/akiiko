import asyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

// @desc sending order summary email to the customer
// @route POST /api/mail/orderplaced
// @access Private Route

/* 
  mailOptions:
    to: user.email
    subject: 'Akiiko order Summary for Id: order.id'
    text: req.body.content
    html: 
*/

dotenv.config()

const orderPlacedMail = asyncHandler(async (req, res) => {
  // let transporter = nodemailer.createTransport({
  //   host: 'mail.precisofashion.com',
  //   port: '587',
  //   secure: false,
  //   auth: {
  //     user: 'akiikoindia@gmail.com',
  //     pass: process.env.GMAIL_PASSWORD,
  //   },
  //   tls: {
  //     // do not fail on invalid certs
  //     rejectUnauthorized: false,
  //   },
  // })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akiikoindia@gmail.com',
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  const { totalPrice } = req.body

  const { _id } = req.body

  const { email } = req.body.shippingAddress
  const { firstName } = req.body.shippingAddress
  const { lastName } = req.body.shippingAddress

  const { createdAt } = req.body

  function returnFormatedDate(stringdate) {
    let date = new Date(
      stringdate.substring(0, 4),
      stringdate.substring(5, 7) === 0 ? 0 : stringdate.substring(5, 7) - 1,
      stringdate.substring(8, 10)
    )
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

    return `${day} ${month} ${year}`
  }

  const buildDate = returnFormatedDate(createdAt)

  const { orderItems } = req.body

  const orderItemsName = []

  orderItems.forEach((item) => {
    orderItemsName.push(
      '<span>' + item.productName + ' (qty: ' + item.qty + ')  ' + ' </span>'
    )
  })

  let mailOptions = {
    from: 'akiikoindia@gmail.com',
    to: email,
    replyTo: 'precisofashion@gmail.com',
    subject: `Your akiiko Order Summary from ${buildDate}`,
    text: '',
    html: `
          <html> 
          <head>
          <head>
          <body>
          <div>
            <p>Hello ${firstName},</p>
            <p>We would like to thank you for your appreciation of akiiko and value your contribution towards creating a more natural and eco-friendly world.<p>
            <p>Your order has been placed successfully and is being prepared for dispatch.</p>
            <span>You can track your order status by clicking </span><a href='https://www.akiiko.com/newProfile'>here.</a>
          </div>
          <div>
          <p><strong>Order Summary</strong></p>
          <p>Order Number: ${_id}</p>
          <p>Items: ${orderItemsName}</p>
          <p>Order Total Price: ${totalPrice}</p>
          <p>Placed On ${buildDate} </p>
          <p>You will receive updates from our shipping partner post dispatch. </p>
          <p>Regards, </p>
          <p>Team akiiko</p>
          <p>Division of Preciso Fashion</p>
          <div>
          `,
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).send({
        status: 'FAIL',
        message: 'Internal Error, mail not sent. ' + err,
      })
    } else {
      res.status(200).json({ status: 'OK', msg: 'Email sent', data: info })
    }
  })
})

export { orderPlacedMail }
