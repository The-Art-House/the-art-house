import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useCartContext, CartProvider } from "../utils/cartContext";

//Heavy lifitng of cart action within this script

import { QUERY_SINGLE_LISTING } from "../utils/queries";

const Home = () => {
  // state
  const [state, dispatch] = useCartContext();

  const { listingId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_LISTING, { variables: { listingId: listingId } });
  const listing = data?.listing || [];

  const styles = {
    img: {
      width: "550px",
      height: "400px",
      "background-color": "gray",
    },
    border: {
      border: "1px solid black",
    },
  };

  function addtoCart() {
    console.log(state);
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: listing._id,
        item: listing.title,
        price: listing.price,
        quantity: 1,
      },
    });
    console.log(state);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="d-flex flex-column align-center">
      <div className=" d-flex flex-row w-100 justify-space-between-lg" style={styles.border}>
        <div className="listingImage" style={styles.border}>
          <img src={listing.imgURL} alt={listing.title} style={styles.img} />
        </div>
        <div className="w-50 text-center" style={styles.border}>
          <div className="flex-row">
            <p>Title:</p>
            <p>{listing.title}</p>
          </div>
          <div className="flex-row">
            <p>Artist:</p>
            <p>{listing.userId.name}</p>
          </div>
          <div className="flex-row">
            <p>Price:</p>
            <p>{listing.price}</p>
          </div>
          <div className="flex-row">
            <p>Quantity:</p>
            <p>{listing.quantity}</p>
          </div>
          <div>
            <button className="btn btn-light btn-cart" onClick={addtoCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
