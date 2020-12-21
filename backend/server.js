import express from 'express';
import dotenv from 'dotenv';

import HomeScreenBagsProducts from './data/HomeScreenBagsProducts.js';
import HomeScreenHomeProducts from './data/HomeScreenHomeProducts.js';
import HomeScreenStorageProducts from './data/HomeScreenStorageProducts.js';

import connectDb from './config/db.js';

import masterProductRoutes from './routes/masterProductRoutes.js';

dotenv.config();

connectDb();

const app = express();

//Getting All the Data from HomeScreenBagProducts
app.get('/api/home_screen_bags_products', (req, res) => {
    res.json(HomeScreenBagsProducts);
})

//Getting All the Data from HomeScreenHomeProducts
app.get('/api/home_screen_home_products', (req, res) => {
    res.json(HomeScreenHomeProducts);
})

//Getting All the Data from HomeScreenStorageProducts
app.get('/api/home_screen_storage_products', (req, res) => {
    res.json(HomeScreenStorageProducts);
})

app.use('/api/product', masterProductRoutes)

app.use('/api/productlist', masterProductRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));