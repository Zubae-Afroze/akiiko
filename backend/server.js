import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import enforce from 'express-sslify'

import HomeScreenBagsProducts from './data/HomeScreenBagsProducts.js'
import HomeScreenHomeProducts from './data/HomeScreenHomeProducts.js'
import HomeScreenStorageProducts from './data/HomeScreenStorageProducts.js'

import connectDb from './config/db.js'

import masterProductRoutes from './routes/masterProductRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import mailRoutes from './routes/mailRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// import router from './routes/masterProductRoutes.js'

// git commands
// heroku git:remote -a akiiko
// git push heroku master
// git push origin
// git remote add origin https://github.com/Zubae-Afroze/akiiko-ver-1.05-fullstack.git

dotenv.config()

connectDb()

const app = express()

// app.use(enforce.HTTPS({ trustProtoHeader: true }))

app.use(express.json())

//Getting All the Data from HomeScreenBagProducts
app.get('/api/home_screen_bags_products', (req, res) => {
  res.json(HomeScreenBagsProducts)
})

//Getting All the Data from HomeScreenHomeProducts
app.get('/api/home_screen_home_products', (req, res) => {
  res.json(HomeScreenHomeProducts)
})

//Getting All the Data from HomeScreenStorageProducts
app.get('/api/home_screen_storage_products', (req, res) => {
  res.json(HomeScreenStorageProducts)
})

app.use('/api/product', masterProductRoutes)
app.use('/api/productlist', masterProductRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/mail', mailRoutes)
app.use('/api/review', reviewRoutes)

// app.get('/api/config/razorpay', (req, res) => res.send(process.env.RAZOR_PAY_KEY))

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
