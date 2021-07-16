import asyncHandler from 'express-async-handler'
import Profile from '../models/profileModel.js'

//@desc Create user Profile
//@route POST /api/profile/create
//@access Private
const createProfile = asyncHandler(async (req, res) => {
  const { name, email, uid, photoUrl, phoneNumber, providerId } = req.body

  const profileExist = await Profile.findOne({ uid })

  if (profileExist) {
    res.status(400)
    throw new Error('Profile Already Exsists, not added')
  }

  const profile = await Profile.create({
    name,
    email,
    uid,
    phoneNumber,
    photoUrl,
    providerId,
  })

  if (profile) {
    res.status(201).json({
      _id: profile._id,
      name: profile.name,
      email: profile.email,
      isAdmin: profile.isAdmin,
      phoneNumber: profile.phoneNumber,
      photoUrl: profile.photoUrl,
      providerId: profile.providerId,
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

//@desc Get User profile with using UID
//@route GET /api/profile/:uid
//@acess Private
const getProfileByUid = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ uid: req.params.uid })
  return res.json(profile)
})

//@desc update sipping addres for specific User
//@route POST /api/profile/addshipping/:uid
//@acess Private
const addShippingAddress = asyncHandler(async (req, res) => {
  const profile = await Profile.updateOne({ uid: req.params.uid },
    { $push: {shippingAddress: req.body.shippingAddress}}
    )

  // if (profile) {
  //   profile.shippingAddress = profile.shippingAddress.push(
  //     req.body.shippingAddress
  //   )

  //   const updatedProfile = await profile.save()

  //   res.json({
  //     updatedProfile,
  //   })
  // } else {
  //   res.status(404)
  //   throw new Error('Profile with UID Not Found')
  // }
})

const updateProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ uid: req.params.uid })
})

export { getProfileByUid, createProfile, addShippingAddress }
