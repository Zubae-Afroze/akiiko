import asyncHandler from 'express-async-handler';
import masterProductsModel from '../models/masterProductsModel.js';


//All Products Fetch
const getAllProducts = asyncHandler (async (req, res) => {
    const MasterProducts = await masterProductsModel.find({})
    return res.json(MasterProducts);
})


// @desc Fetch single Product by id
// @route GET /api/product/:id
// @access Public Route
const getProductsById = asyncHandler (async (req, res) => {
    const product = await masterProductsModel.findById(req.params.id)

    if(product) {
       res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }
})

// @desc Fetch Product Lists by subGroups
// @route GET /api/product/:group/:subGroup
// @acess Public Route
const getProductLists = asyncHandler (async (req, res) => {
    const productList = await masterProductsModel.find({group: String(req.params.group), subGroup: String(req.params.subGroup)})
    return res.json(productList)
})

export {
    getAllProducts,
    getProductsById,
    getProductLists
}