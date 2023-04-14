const { Schema, model } = require('mongoose');


const cartSchema = new Schema({
  cart: [{
    listing: {
      type: Schema.Types.ObjectId,
      ref: 'Listing'
    },
    quantity: {
      type: Int,
      required: true,
      min: 1,
    },
    price: {
      type: Schema.Types.ObjectId,
      ref: 'Listing.price'
      required: true,
      min: 1,
    },
  }],
  payment: {
    type: Int,
  },
  isCompleted:
  {
    type: Boolean,
  },
});

// set up pre-save middleware to create password
const Cart = model('Cart', cartSchema);

module.exports = Cart;
