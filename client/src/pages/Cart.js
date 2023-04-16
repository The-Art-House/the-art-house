import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams, Navigate } from "react-router-dom";

const Cart = () => {
  // let cart = JSON.parse(localStorage.getItem("cart"));
  const navigate = useNavigate();

  let tempCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  const styles = {
    img: {
      //   width: "250px",
      //   height: "100px",
      //   border: "1px solid black",
    },
    border: {
      border: "1px solid black",
    },
    cartDisplayContent: {
      width: "80%",
    },
  };

  function handleCheckout() {
    navigate("/checkout");
  }

  // old
  // function handleRemovedItem(event) {
  //   const itemId = event.target.id;
  //   const updatedCart = cart.filter((item) => item._id !== itemId);
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // }

  // new
  function handleRemovedItem(event) {
    const itemId = event.target.id;
    const index = cart.findIndex((item) => item._id === itemId);
    if (index > -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }
  

  // old
  // function totalPrice() {
  //   let total = 0;
  //   tempCart.forEach((item) => {
  //     total += item.price;
  //   });
  //   return total;
  // }

  // new
  function totalPrice() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total;
  }
  

  return (
    <div className="w-100">
      <div className="m-auto" style={styles.cartDisplayContent}>
        <h3>my cart</h3>
        {tempCart.map((item) => (
          <div className="cartContent d-flex flex-row justify-space-between-md">
            <div className="cartItemImg">
              <img src={item.imgURL} />
            </div>
            <div className="cartContents d-flex flex-row align-center flex-wrap">
              <div className="cartItemTitle m-2">
                <h3>{item.title}</h3>
              </div>
              <div className="cartItemQuantity m-2">
                <h3>quantity: {item.quantity}</h3>
              </div>
              <div className="cartItemPrice m-2">
                <h3>${item.price}</h3>
              </div>
              <button onClick={handleRemovedItem} id={item._id} className="btn btn-primary">
                remove
              </button>
            </div>
          </div>
        ))}
        <div className="d-flex flex-row justify-space-between-lg">
          <button onClick={handleCheckout} className="btn btn-light">
            checkout
          </button>
          <h3>Total: ${totalPrice()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
