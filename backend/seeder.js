import mongoose from 'mongoose'
import dotenv from 'dotenv'

import users from './data/users.js';
import MasterProducts from './data/MasterProducts.js';

import UserModel from './models/userModel.js';
import MasterProductsModel from './models/masterProductsModel.js';
import OrderModel from './models/orderModel.js';

import connectDb from './config/db.js';


dotenv.config() 
connectDb()

const importData = async () => {
    try {
        await OrderModel.deleteMany()
        await MasterProductsModel.deleteMany()
        await UserModel.deleteMany()

        const createdUsers = await UserModel.insertMany(users)

        const adminUser = createdUsers[0]._id

        const initialMasterProducts = MasterProducts.map(product => {
            return { ...product, user: adminUser}
        })

        await MasterProductsModel.insertMany(initialMasterProducts)

        console.log('Data Imported Successfully')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit()
    }
}

const destroyData = async () => {
    try {
        await OrderModel.deleteMany()
        await MasterProductsModel.deleteMany()
        await UserModel.deleteMany()

        console.log('Data Sucessfully Purged')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit()
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}