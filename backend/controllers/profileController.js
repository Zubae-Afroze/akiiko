import asyncHandler from 'express-async-handler'
import Profile from '../models/profileModel.js'

//@desc Create user Profile
//@route POST /api/profile/create
//@access Private
const createProfile = asyncHandler(async (req, res) => {
  const { name, email, uid, photoUrl, phoneNumber, providerId } = req.body

  const profileExist = await Profile.findOneAndUpdate(
    { uid: uid },
    { name, email, uid, phoneNumber, photoUrl, providerId },
    { upsert: true }
    // function (err, doc) {
    //   if (err) return res.send(500, { error: err })
    //   return res.send('Succesfully saved.')
    // }
  )

  // if (profileExist) {
  //   res.status(400)
  //   throw new Error('Profile Already Exsists, not added')
  // }

  // const profile = await Profile.create({
  //   name,
  //   email,
  //   uid,
  //   phoneNumber,
  //   photoUrl,
  //   providerId,
  // })

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
const getProfileByUid = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ uid: req.params.uid })
  return res.json(profile)
})

//@desc add new sipping addres for specific User
//@route POST /api/profile/addshipping/:uid
//@acess Private
const addShippingAddress = asyncHandler(async (req, res) => {
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

//@desc update name of an exisiting user
//@route POST /api/profile/updatename/:uid
//@acess Private
const updateName = asyncHandler(async (req, res) => {
  const { name } = req.params.body

  const profile = await Profile.findOneAndUpdate(
    { uid: req.params.uid },
    { name },
    { upsert: true }
  )

  if (profile) {
    res.status(201).json(addOrUpdateShipping)
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

//@desc update name of an exisiting user
//@route POST /api/profile/updatename/:uid
//@acess Private
const updateName = asyncHandler(async (req, res) => {
  const { name } = req.params.body

  const profile = await Profile.findOneAndUpdate(
    { uid: req.params.uid },
    { name },
    { upsert: true }
  )

  if (profile) {
    res.status(201).json(updateName)
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

//@desc update name of an exisiting user
//@route POST /api/profile/updatephone/:uid
//@acess Private
const updatePhoneNumber = asyncHandler(async (req, res) => {
  const { phoneNumber } = req.params.body

  const profile = await Profile.findOneAndUpdate(
    { uid: req.params.uid },
    { phoneNumber },
    { upsert: true }
  )

  if (profile) {
    res.status(201).json(phoneNumber)
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

export {
  getProfileByUid,
  createProfile,
  addShippingAddress,
  updateName,
  updatePhoneNumber,
}
