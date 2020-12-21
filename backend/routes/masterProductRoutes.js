import express, { json } from 'express';
import asyncHandler from 'express-async-handler';

import masterProductsModel from '../models/masterProductsModel.js'

const router = express.Router()

//Master Product fetch
router.get('/', asyncHandler(async(req, res) => {
    const MasterProducts = await masterProductsModel.find({})
    return res.json(MasterProducts);
}))

router.get('/:id', asyncHandler(async(req, res) => {
    const product = await masterProductsModel.findById(req.params.id)

    if(product) {
       return res.json(product)
    } else {
        return res.status(404).json({ message: 'Product not found'})
    }

    //res.json(product);
}))

//Product Listing Fetches
router.get('/:group/:subGroup', asyncHandler(async (req, res) => {
    //const productList = MasterProducts.filter(p => (p.group === req.params.group && p.subGroup === req.params.subGroup))

    const productList = await masterProductsModel.find({group: String(req.params.group), subGroup: String(req.params.subGroup)})
    return res.json(productList)
}))

export default router