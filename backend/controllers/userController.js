import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

import generateToken from '../utils/generateToken.js'

//@desc Auth user and get token
//@route POST /api/users/login
//@access Public 
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            phoneNumber: user.phoneNumber,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

//@desc Get User profile
//@route GET /api/users/profile
//@acess Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401)
        throw new Error('User not found')
    }
})

//@desc Update user profile
//@route PUT /api/users/profile
//@acess Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phoneNumber: updateUser.phoneNumber,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        })

    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

//@desc Register a new user
//@route POST  /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phoneNumber } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User Alrady exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        phoneNumber,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            phoneNumber: user.phoneNumber,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

export { authUser, getUserProfile, registerUser, updateUserProfile }