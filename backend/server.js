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
// app.get('/api/home_screen_bags_products/:id', (req, res) => {
//     const HomeScreenBagsProduct = HomeScreenBagsProducts.find(p => p.productId === req.params.id)
//     res.json(HomeScreenBagsProduct)
// })

//Getting All the Data from HomeScreenHomeProducts
app.get('/api/home_screen_home_products', (req, res) => {
    res.json(HomeScreenHomeProducts);
})

//Getting All the Data from HomeScreenStorageProducts
app.get('/api/home_screen_storage_products', (req, res) => {
    res.json(HomeScreenStorageProducts);
})

//Master Product fetch
app.get('/api/product', (req, res) => {
    res.json(MasterProducts);
})

app.get('/api/product/:id', (req, res) => {
    const product = MasterProducts.find(p => p.productId === req.params.id)
    res.json(product);
})

//Product Listing Fetches
app.get('/api/productlist/:group/:subGroup', (req, res) => {
    const productList = MasterProducts.filter(p => (p.group === req.params.group && p.subGroup === req.params.subGroup))
    res.json(productList)
})

//All Product Listing
// app.get('/api/allproducts/productlist/:group', (req, res) => {
//     const allProductList = MasterProducts.filter(p => p.group === req.params.group)
//     res.json(allProductList);
// })

app.listen(5000, console.log('Server running on port 5000'));