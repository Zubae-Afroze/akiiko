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
export const getProfileByUid = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ uid: req.params.uid })
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

//@desc update name of an exisiting user
//@route PUT /api/profile/updatename/:uid
//@acess Private
//   const { name } = req.params.body

//   const profile = await Profile.findOneAndUpdate(
//     { uid: req.params.uid },
//     { name },
//     { upsert: true }
//   )

//   if (profile) {
//     res.status(201).json(updateName)
//   } else {
//     res.status(400)
//     throw new Error('Invalid User Data')
//   }
// })

export const updateNameAndPhone = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne(req.params.uid)

  if (profile) {
    profile.name = req.body.name || profile.name
    profile.phoneNumber = req.body.phone || profile.phoneNumber

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
