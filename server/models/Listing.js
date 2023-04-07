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
});


const Listing = model('Listing', listingSchema);

module.exports = Listing;
