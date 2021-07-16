import mongoose from 'mongoose'

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    providerId: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    photoUrl: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    shippingAddress: [],
  },
  {
    timestamps: true,
  }
)

const ProfileModel = mongoose.model('Profile', profileSchema)

export default ProfileModel
