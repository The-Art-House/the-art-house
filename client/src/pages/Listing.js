import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_LISTING } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_SINGLE_LISTING);
  const listing = data?.listing || [];

  const styles = {
    img: {
      width: "100px",
      height: "100px",
    },
  };

  return (
    <div className="d-flex flex-column">
      <div className="card-body d-flex flex-column align-center">
        <img src={listing.imgURL} alt={listing.title} style={styles.img} />
        <div className="flex-row">
          <p>Title:</p>
          <p>{listing.title}</p>
        </div>
        <div className="flex-row">
          <p>Artist:</p>
          <p>{listing.username}</p>
        </div>
        <div className="flex-row">
          <p>Description:</p>
          <p>{listing.description}</p>
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
          <button className="btn btn-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
