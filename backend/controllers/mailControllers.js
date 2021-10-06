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


// @desc sending order summary email to the customer
// @route POST /api/mail/newslettertest
// @access Private Route
const newsLetterTest = asyncHandler(async (req, res) => {

  console.log('******************** News Letter Test API called **************** ')
  console.log(req.body.email)

  

  // cid:img2

  // nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: 'janis.crist71@ethereal.email', // generated ethereal user
              pass: 'Eeh1EWzjHX2SQS2cYp'  // generated ethereal password
          }
      });



      let mailOptions = {
        from: 'janis.crist71@ethereal.email',
        to: ['samsurya336@gmail.com', 'amegosha97@gmail.com'],
        // replyTo: 'precisofashion@gmail.com',
        subject: `Your akiiko Order Summary from Now`,
        text: 'Text Field',
        // attachments: [
        //     {
        //       filename: 'BE002.jpg',
        //       path: '../../../NewsLetter/BE002.jpg',
        //       cid: 'img1' 
        //     },
        //     {
        //       filename: 'BE003.jpg', 
        //       path: '../../../NewsLetter/BE003.jpg',
        //       cid: 'img2' 
        //     },
        // ],

        html: req.body.htmlBody,
        // html: `
        // <html lang="en">
        // <head>
        //     <meta charset="UTF-8">
        //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //     <title>Document</title>
        //     <style>
        //         *{
        //             box-sizing: border-box;
        //         }
                
        //         body{
        //             display: flex;
        //             justify-content: center;
        //             flex-direction: column;
        //         }
        
        
        //         .heading{
        //             margin-bottom: 0;
        //             color: #3e3331;
        //             letter-spacing: 0.08rem;
        //             word-spacing: 0.15rem;
        //         }
        
        //         .content{
        //             color: #473f3d;
        //             letter-spacing: 0.08rem;
        //             word-spacing: 0.15rem;
        //         }
        
        //         .product_card_wrapper{
        //             border: 1px solid rgb(201, 201, 201);
        //             background-color: #f6f1ea;
        //             display: flex;
        //             flex-direction: column;
        //             width: 100%;
        //             max-width: 450px;
        //             margin-bottom: 3rem;
        //         }
        
        //         .product_card_wrapper > p {
        //             margin-left: 1rem;
        //             margin-right: 1rem;
        //             letter-spacing: 0.08rem;
        //             word-spacing: 0.15rem;
        //             color: #3e3331;
        //         }
        
        //         .product_card_wrapper button {
        //             margin-left: 1rem;
        //             margin-right: 1rem;
        //             margin-bottom: 1rem;
        //             padding: 0.3rem 1rem 0.3rem 1rem;
        //             border: none;
        //             color: #f6f1ea;
        //             background-color: #977257;
        //             letter-spacing: 0.08rem;
        //             word-spacing: 0.15rem;
        //         }
        //     </style>
        // </head>
        // <body>
        //     <h2 class='heading'>New Products Has been Launched</h2>
        //     <p class='content'>We have launched 6 new products have a look at it</p>
        //     <div class='product_card_wrapper'>
              
        //       <img src="https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FBE003.jpg?alt=media&token=b2a9161c-034d-4147-9132-17e4b695eee3" alt='Image 1' />
        //         <p>Original Sandwich Bag (pack of 3)</p>
        //         <a href="/product"> 
        //             <button>SHOP NOW</button>
        //         </a>
        //     </div>
        
        //     <div class='product_card_wrapper'>
        //     <img src="https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FBE002.jpg?alt=media&token=1a98f2d0-0b95-4f93-b0cd-0456f24bfba5" alt='Image 2' />
        //         <p>Original Sandwich Bag (pack of 2)</p>
        //         <a href="/product"> 
        //             <button>SHOP NOW</button>
        //         </a>
        //     </div>
        
        //     </div>
        // </body>
        // </html>
        //       `,
      }

      
      //<img src="cid:img1" alt='Image 1' />
      //<img src="https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FBE003.jpg?alt=media&token=b2a9161c-034d-4147-9132-17e4b695eee3" alt='Image 1' />

      // <img src="https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FBE002.jpg?alt=media&token=1a98f2d0-0b95-4f93-b0cd-0456f24bfba5" alt='Image 2' />
    
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.status(500).send({
            status: 'FAIL',
            message: 'Internal Error, mail not sent. ' + err,
          })
          console.log( __dirname + err)
        } else {
          res.status(200).json({ status: 'OK', msg: 'Email sent', data: info })
          console.log('Email Sent' )
        }
      })


  // });

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'akiikoindia@gmail.com',
  //     pass: process.env.GMAIL_PASSWORD,
  //   },
  // })

  // const { totalPrice } = req.body

  // const { _id } = req.body

  // const { email } = req.body.shippingAddress
  // const { firstName } = req.body.shippingAddress
  // const { lastName } = req.body.shippingAddress

  // const { createdAt } = req.body

  // function returnFormatedDate(stringdate) {
  //   let date = new Date(
  //     stringdate.substring(0, 4),
  //     stringdate.substring(5, 7) === 0 ? 0 : stringdate.substring(5, 7) - 1,
  //     stringdate.substring(8, 10)
  //   )
  //   let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  //   let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
  //   let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

  //   return `${day} ${month} ${year}`
  // }

  // const buildDate = returnFormatedDate(createdAt)


  
 
  
})

 
export { orderPlacedMail, newsLetterTest }
