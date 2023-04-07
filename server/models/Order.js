const { Schema, model } = require('mongoose');


const orderSchema = new Schema({
  listings: [{
    type: Schema.Types.ObjectId,
    ref: 'Listing',
  }],
  payment: {
    type: Number,
  },
  isCompleted:
  {
    type: Boolean,
  },
});

// set up pre-save middleware to create password
const Order = model('Order', orderSchema);

module.exports = Order;
