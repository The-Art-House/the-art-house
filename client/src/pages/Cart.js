import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";

const Cart = () => {
  //   tempcart is a placeholder for the Cart State
  const tempCart = [
    {
      _id: "1",
      imgURL: "http://via.placeholder.com/250x200",
      title: "test artwork title",
      price: 10.0,
      quantity: 1,
    },
    {
      _id: "2",
      imgURL: "http://via.placeholder.com/250x200",
      title: "test artwork title",
      price: 10.0,
      quantity: 1,
    },
    {
      _id: "3",
      imgURL: "http://via.placeholder.com/250x200",
      title: "test artwork title",
      price: 10.0,
      quantity: 1,
    },
    {
      _id: "4",
      imgURL: "http://via.placeholder.com/250x200",
      title: "test artwork title",
      price: 10.0,
      quantity: 1,
    },
  ];

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
    alert("checked out!");
  }

  function handleRemovedItem() {
    alert("removed item!");
  }

  function totalPrice() {
    let total = 0;
    tempCart.forEach((item) => {
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
              <img src={"http://via.placeholder.com/250x200"} />
            </div>
            <div className="cartContents d-flex flex-row align-center flex-wrap">
              <div className="cartItemTitle m-2" style={styles.border}>
                <h3>{item.title}</h3>
              </div>
              <div className="cartItemQuantity m-2" style={styles.border}>
                <h3>quantity: {item.quantity}</h3>
              </div>
              <div className="cartItemPrice m-2" style={styles.border}>
                <h3>${item.price}</h3>
              </div>
              <button onClick={handleRemovedItem}>-</button>
            </div>
          </div>
        ))}
        <div className="d-flex flex-row justify-space-between-lg">
          <button onClick={handleCheckout}>checkout</button>
          <h3>Total: ${totalPrice()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
