import asyncHandler from 'express-async-handler'
import Profile from '../models/profileModel.js'

//@desc Get User profile with using UID
//@route GET /api/users/profile/:uid
//@acess Private
const getProfileByUid = asyncHandler(async (req, res) => {
  const profile = await Profile.find({ udi: req.params.uid })
  return res.json(profile)
})

export { getProfileByUid }
