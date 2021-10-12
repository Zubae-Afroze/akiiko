import express from 'express';
//import asyncHandler from 'express-async-handler';
//import masterProductsModel from '../models/masterProductsModel.js'
import {getAllProducts, getProductsById, getProductLists, getProductsByProductid} from '../controllers/masterProductController.js'

const router = express.Router()

//Master Product fetch
router.route('/').get(getAllProducts);

router.route('/:id').get(getProductsById)

router.route('/redirect/:prodId').get(getProductsByProductid)

router.route('/:group/:subgroup').get(getProductLists);

export default router