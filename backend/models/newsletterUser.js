import mongoose from 'mongoose'

const newsletterUserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    isSubscribed: {
        type: Boolean,
        default: true,
    }
})


const NewsletterUserModel = mongoose.model('NewsletterUser', newsletterUserSchema)

export default NewsletterUserModel

