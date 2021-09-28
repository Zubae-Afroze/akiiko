import NewsletterUserModel from "../models/newsletterUser.js"
import asyncHandler from 'express-async-handler'



//@desc subscribe user
//@route POST /api/newsletter/usersubscribe
//@access Private
export const subcribeUser = asyncHandler(async (req, res) => {

    const { name, email } = req.body
  
    const profileExist = await NewsletterUserModel.findOneAndUpdate(
      { name, email },
      { upsert: true }
    )
  
    if (profileExist) {
      res.status(201).json({
        name: profile.name,
        email: profile.email
      })
    } else {
        const newsLetter = req.body 
        await newsLetter.save()
    }
})
  


//@desc subscribe user
//@route POST /api/newsletter/userunsubscribe
//@access Private
export const unSubcribeUser = asyncHandler(async (req, res) => {

    const { name, email } = req.body
  
    const profileExist = await NewsletterUserModel.findOneAndUpdate(
      { name, email },
      { upsert: true }
    )
  
    if (profileExist) {
      res.status(201).json({
        name: profile.name,
        email: profile.email,
        isSubscribed: false
      })
    } else {
        const newsLetter = req.body 
        await newsLetter.save()
    }
})
  