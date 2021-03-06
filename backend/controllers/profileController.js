import asyncHandler from 'express-async-handler'
import Profile from '../models/profileModel.js'

//@desc Create user Profile
//@route POST /api/profile/create
//@access Private
export const createProfile = asyncHandler(async (req, res) => {
  const { name, email, uid, photoUrl, phoneNumber, providerId } = req.body

  const profileExist = await Profile.findOneAndUpdate(
    { uid: uid },
    { name, email, uid, phoneNumber, photoUrl, providerId },
    { upsert: true }
  )

  if (profileExist) {
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
export const getProfileByUid = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ uid: req.params.uid })
  return res.json(profile)
})


//@desc Get User profile with using ID
//@route GET /api/profile/id/:id
//@acess Private
export const getProfileById = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ _id: req.params.id })
  return res.json(profile)
})

//@desc add new sipping addres for specific User
//@route POST /api/profile/addshipping/:uid
//@acess Private
export const addShippingAddress = asyncHandler(async (req, res) => {
  const addOrUpdateShipping = await Profile.findOneAndUpdate(
    { uid: req.params.uid },
    { $push: { shippingAddress: req.body } },
    { upsert: true }
  )

  if (addOrUpdateShipping) {
    res.status(201).json(addOrUpdateShipping)
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

//@desc update shipping address of an existing proflie
//@route PUT /api/profile/editshipping
//@acess Private
export const editShippingAddress = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ uid: req.params.uid })

  if (profile) {
    profile.shippingAddress = req.body

    const updatedProfile = await profile.save()

    res.json({
      shippingAddress: updatedProfile.shippingAddress,
    })
  } else {
    res.status(404)
    throw new Error('Profile not found')
  }
})

//@desc update name of an exisiting user
//@route PUT /api/profile/updatename/:uid
//@acess Private
export const updateName = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ uid: req.params.uid })

  if (profile) {
    profile.name = req.body.name || profile.name

    const updateProfile = await profile.save()

    res.json({
      _id: updateProfile._id,
      name: updateProfile.name,
      email: updateProfile.email,
      phoneNumber: updateProfile.phoneNumber,
      isAdmin: updateProfile.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('Profile Not Found')
  }
})

//@desc update name of an exisiting user
//@route PUT /api/profile/updatephone/:uid
//@acess Private
export const updatePhone = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ uid: req.params.uid })

  if (profile) {
    profile.phoneNumber = req.body.phoneNumber || profile.phoneNumber

    const updatePhone = await profile.save()

    res.json({
      _id: updatePhone._id,
      name: updatePhone.name,
      email: updatePhone.email,
      phoneNumber: updatePhone.phoneNumber,
      isAdmin: updatePhone.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('Profile not found')
  }
})
