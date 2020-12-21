import express, { json } from 'express';
import asyncHandler from 'express-async-handler';

import masterProductsModel from '../models/masterProductsModel.js'

const router = express.Router()

//Master Product fetch
router.get('/', asyncHandler(async(req, res) => {
    const MasterProducts = await masterProductsModel.find({})
    res.json(MasterProducts);
}))

router.get('/:id', asyncHandler(async(req, res) => {
    const product = await masterProductsModel.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Product not found'})
    }

    res.json(product);
}))

//Product Listing Fetches
router.get('/productlist/:group/:subGroup', (req, res) => {
    const productList = MasterProducts.filter(p => (p.group === req.params.group && p.subGroup === req.params.subGroup))
    res.json(productList)
})

export default router