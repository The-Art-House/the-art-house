const db = require("../config/connection");
const { Profile, Listing, Order } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const listingSeeds = require("./listingSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await Listing.deleteMany({});
    await Listing.create(listingSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
