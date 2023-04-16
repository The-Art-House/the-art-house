import React, { useState } from "react";
import { useQuery } from "@apollo/client";
// import { useParams } from "react-router-dom";
import { useCartContext, CartProvider } from "../utils/cartContext";
import { currentCart, setCurrentCart } from "../utils/cartContext";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Heavy lifitng of cart action within this script

import { QUERY_SINGLE_LISTING } from "../utils/queries";
import { UPDATE_LISTING_QUANTITY } from "../utils/mutations";

const Home = () => {
  // state
  // const [state, dispatch] = useCartContext();
  const [currentCart, setCurrentCart] = useState([]);

  const { listingId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_LISTING, { variables: { listingId: listingId } });
  const listing = data?.listing || [];
  const navigate = useNavigate();

  // const {loadingUpdateListingQuantity, dataUpdateListingQuantity} = useMutation(UPDATE_LISTING_QUANTITY, {variables: {listingId: listingId, quantity: listing.quantity - 1}});

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
    let cartStorage = JSON.parse(localStorage.getItem("cart"));
    cartStorage.push(listing);
    localStorage.setItem("cart", JSON.stringify(cartStorage));

    toast.success(`Added to cart!`, {
      position: "bottom-center",
      autoClose: 7000,
      closeOnClick: true,
      theme: "dark",
    });
  }
  function goToCart() {
    navigate(`/cart`);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="d-flex flex-column align-center">
      <div className=" d-flex flex-row w-100 justify-space-between-lg">
        <div className="listingImage">
          <img src={listing.imgURL} alt={listing.title} style={styles.img} />
        </div>
        <div className="d-flex flex-column justify-space-between w-50">
          <div className="card w-75 m-auto">
            <div className="w-50 m-auto text-center">
              {/* <h5>Title:</h5> */}
              <h1>{listing.title}</h1>
            </div>
            <div className="flex-row m-3">
              <h5>Artist:</h5>
              <h5>{listing.userId.name}</h5>
            </div>
            <div className="flex-row m-3">
              <h5>Price:</h5>
              <h5>${listing.price}.00</h5>
            </div>
            <div className="flex-row m-3">
              <h5>Quantity:</h5>
              <h5>{listing.quantity}</h5>
            </div>
          </div>

          <div className="d-flex flex-row w-75 justify-space-between m-auto">
            <button className="btn btn-primary btn-cart m-auto" onClick={addtoCart}>
              Add to Cart
            </button>
            {/* <button className="btn btn-light btn-cart" onClick={goToCart}>
              Go to Cart
            </button> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
