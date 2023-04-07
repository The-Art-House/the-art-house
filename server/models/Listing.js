const { Schema, model } = require('mongoose');

const listingSchema = new Schema({

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
  },
  imgURL: {
    type: String,
  },
  title:
  {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});


const Listing = model('Listing', listingSchema);

module.exports = Listing;
