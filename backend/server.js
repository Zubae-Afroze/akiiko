const express = require('express');
const HomeScreenBagsProducts = require('./data/HomeScreenBagsProducts');
const HomeScreenHomeProducts = require('./data/HomeScreenHomeProducts');
const HomeScreenStorageProducts = require('./data/HomeScreenStorageProducts');
const MasterProducts = require('./data/MasterProducts');

const app = express();

//Getting All the Data from HomeScreenBagProducts
app.get('/api/home_screen_bags_products', (req, res) => {
    res.json(HomeScreenBagsProducts);
})

// Getting Single Product from HomeScreenBagProducts
app.get('/api/home_screen_bags_products/:id', (req, res) => {
    const HomeScreenBagsProduct = HomeScreenBagsProducts.find(p => p.productId === req.params.id)
    res.json(HomeScreenBagsProduct)
})

//Getting All the Data from HomeScreenHomeProducts
app.get('/api/home_screen_home_products', (req, res) => {
    res.json(HomeScreenHomeProducts);
})

// Getting Single Product from HomeScreenHomeProducts
app.get('/api/home_screen_home_prodcuts/:id', (req, res) => {
    const HomeScreenHomeProduct = HomeScreenHomeProducts.find(p => p.productId === req.params.id)
    res.json(HomeScreenHomeProduct)
})

//Getting All the Data from HomeScreenStorageProducts
app.get('/api/home_screen_storage_products', (req, res) => {
    res.json(HomeScreenStorageProducts);
})

// Getting Single Product from HomeScreenStorageProducts
app.get('/api/home_screen_storage_products/:id', (req, res) => {
    const HomeScreenStorageProduct = HomeScreenStorageProducts.find(p => p.productId === req.params.id)
    res.json(HomeScreenStorageProduct);
})

//Master Product test fetch
app.get('/api/products', (req, res) => {
    res.json(MasterProducts);
})

app.get('/api/products/:id', (req, res) => {
    const product = MasterProducts.find(p => p.productId === req.params.id)
    res.json(product);
})

app.listen(5000, console.log('Server running on port 5000'));