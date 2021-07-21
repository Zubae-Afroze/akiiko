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
    shippingAddress: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId },
        firstName: { type: String },
        lastName: { type: String },
        address: { type: String },
        mobile: { type: String },
        city: { type: String },
        state: { type: String },
        zipCode: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const ProfileModel = mongoose.model('Profile', profileSchema)

export default ProfileModel
