import React from "react";

const Cart = () => {
  //   tempcart
  const tempCart = [
    {
      _id: "1",
      imgURL: "http://via.placeholder.com/250x200",
      title: "test artwrok 1",
      price: 10.0,
      quantity: 1,
    },
    {
      _id: "2",
      imgURL: "http://via.placeholder.com/250x200",
      title: "test artwrok 2",
      price: 10.0,
      quantity: 1,
    },
    {
      _id: "3",
      imgURL: "http://via.placeholder.com/250x200",
      title: "test artwrok 3",
      price: 10.0,
      quantity: 1,
    },
    {
      _id: "4",
      imgURL: "http://via.placeholder.com/250x200",
      title: "test artwrok 4",
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
  };

  function handleCheckout() {
    alert("checked out!");
  }

  return (
    <div className="w-75">
      <div className="m-auto">
        {tempCart.map((item) => (
          <div className="cartContent d-flex flex-row justify-space-between-md">
            <div className="cartItemImg">
              <img src={"http://via.placeholder.com/250x200"} />
            </div>
            <div className="cartItemTitle" style={styles.border}>
              <h3>{item.title}</h3>
            </div>
            <div className="cartItemQuantity" style={styles.border}>
              <h3>{item.quantity}</h3>
            </div>
            <div className="cartItemPrice" style={styles.border}>
              <h3>{item.price}</h3>
            </div>
            <button>-</button>
          </div>
        ))}
        <button onClick={handleCheckout}>checkout</button>
      </div>
    </div>
  );
};

export default Cart;
