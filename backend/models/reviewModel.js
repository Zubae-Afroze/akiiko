import mongoose from 'mongoose'
import ProfileModel from './profileModel'

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    uid: {
      type: String,
    },
    message: {
      type: String,
    },
    rating: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const ReviewModel = mongoose.model('Review', reviewSchema)

export default ReviewModel
