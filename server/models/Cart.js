const { Schema, model } = require('mongoose');


const cartSchema = new Schema({
  cart: [{
    listing: {
      type: Schema.Types.ObjectId,
      ref: 'Listing'
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  }],
  total_price: {
    type: Number,
    required: true,
    min: 0
  },
  payment: {
    type: Number,
  },
  isCompleted:
  {
    type: Boolean,
  },
});

// set up pre-save middleware to create password
const Cart = model('Cart', cartSchema);

module.exports = Cart;
