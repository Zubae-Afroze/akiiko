import mongoose from 'mongoose';

const reviewsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
})

const masterProductsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productId: {
        type: String,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: true,
    },
    heroImage: {
        type: String,
        required: true,
    },
    images: [],
    group: {
        type: String,
        required: true
    },
    subGroup: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    groupDescription: {
        type: String,
        required: true
    },
    thickness: {
        type: String,
        requried: true
    },
    measurement: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    washingCare: {
        type: String,
        required:  true
    },
    mrpPrice: {
        type: String,
        required: true
    },
    price: {
        type: String,
        default: null
    },
    similarProducts: [],
    reviews: [reviewsSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    isOutOfStock: {
        type: Boolean,
    },
    metaTitle: {
        type: String,
    },
    metaDesc: {
        type: String,
    },
    keyWords: [],
}, 
{
    timestamps: true
})

const MasterProductsModel = mongoose.model('MasterProducts', masterProductsSchema);

export default MasterProductsModel;