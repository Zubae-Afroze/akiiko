import asyncHandler from 'express-async-handler'
import Review from '../models/reviewModel.js'

//@desc Submit Review
//@route POST /api/review/post
//@access Private
export const createReview = asyncHandler(async (req, res) => {
  const { name, email, uid, message, rating } = req.body

  const reviewExist = await Review.findOneAndUpdate(
    { uid: uid },
    { name, email, uid, message, rating },
    { upsert: true }
  )

  if (reviewExist) {
    res.status(201).json({
      uid: uid,
      name: name,
      email: email,
      message: message,
      rating: rating,
    })
  } else {
    res.status(404)
    throw new Error('Invalid Review')
  }
})
