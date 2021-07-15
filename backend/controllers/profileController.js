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
  const profile = await Profile.findOne({ udi: req.params.uid })
  return res.json(profile)
})

export { getProfileByUid, createProfile }
