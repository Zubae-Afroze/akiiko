import express from 'express';
//import asyncHandler from 'express-async-handler';
//import masterProductsModel from '../models/masterProductsModel.js'
import {getAllProducts, getProductsById, getProductLists} from '../controllers/masterProductController.js'

const router = express.Router()

//Master Product fetch
router.route('/').get(getAllProducts);

router.route('/:id').get(getProductsById)

router.route('/:group/:subgroup').get(getProductLists);

export default router