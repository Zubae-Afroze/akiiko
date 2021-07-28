import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Profile',
    },
    orderItems: [
      {
        productName: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'MasterProducts',
        },
      },
    ],
    shippingAddress: {
      firstName: { type: String },
      lastName: { type: String },
      email: { type: String },
      address: { type: String, required: true },
      phoneNumber: { type: String },
      city: { type: String, required: true },
      state: { type: String },
      postalCode: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },

    razorpayOrderId: {
      type: String,
    },

    paymentResult: {
      payment_id: { type: String },
      status: { type: String },
      update_time: { type: String },
    },
    itemsPrice: {
      type: Number,
      default: 0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    shipRocketLink: {
      type: String,
    },
    deliveryStatus: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const OrderModel = mongoose.model('Order', orderSchema)

export default OrderModel
