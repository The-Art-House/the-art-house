import React, { useState } from "react";

const CheckOut = () => {
  let tempCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  return (
    <div>
      <h2>Checkout</h2>
      <div>

      </div>
    </div>
  );
};

export default CheckOut;
