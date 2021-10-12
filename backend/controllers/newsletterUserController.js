import NewsletterUserModel from "../models/newsletterUser.js"
import asyncHandler from 'express-async-handler'


// @desc Fetch All users by email
// @route GET /api/newsletter/newsletterusers/
// @access Public Route
export const getNewsletterUsers = asyncHandler(async (req, res) => {

  
  const newsLetterUsers = await NewsletterUserModel.find({})

  if (newsLetterUsers) {
    res.json(newsLetterUsers)
  } else {
    res.status(404)
    throw new Error('user not subscribed')
  }
})


// @desc Fetch single user by email
// @route GET /api/newsletter/newsletteruser/:email
// @access Public Route
export const getNewsletterUser = asyncHandler(async (req, res) => {

  console.log('API called')
  
  console.log(req.params.email)

  const email = req.params.email


  const newsLetterUser = await NewsletterUserModel.findOne({ email : email })

  if (newsLetterUser) {
    res.json(newsLetterUser)
  } else {
    res.status(404)
    throw new Error('user not subscribed')
  }
})



//@desc subscribe user
//@route POST /api/newsletter/usersubscribe
//@access Private
export const subcribeUser = asyncHandler(async (req, res) => {

    const { name, email } = req.body

  
    const profileExist = await NewsletterUserModel.findOne({ email : email })

  
    if (profileExist && profileExist.isSubscribed) {
      res.status(201).json({
        name: name,
        email: email,
        isSubscribed: true
      })
    } else if(profileExist && !profileExist.isSubscribed) {
      profileExist.isSubscribed = true;
        const result = await profileExist.save()

        res.json({
          result: result,
        })
    } else {

      const newsLetter = new NewsletterUserModel({
        name: name,
        email: email,
        isSubscribed: true
      })
  
      const result = await newsLetter.save()

      res.json({
        result: result,
      })
    }
})
  


//@desc subscribe user
//@route POST /api/newsletter/userunsubscribe
//@access Private
export const unSubcribeUser = asyncHandler(async (req, res) => {

    const { email } = req.body
   
    const profileExist = await NewsletterUserModel.findOne({ email: email })
  
    if (profileExist) {

      profileExist.isSubscribed = false
  
      const result = await profileExist.save()

      res.status(201).json({...result})

    } else {
      res.status(404)
      throw new Error('user does not exist')
    }
})
  