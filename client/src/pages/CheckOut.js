import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  let tempCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const error = "Please fill all fields!";
  const navigate = useNavigate();
  let readyToCheckout = false;

  const [formState, setFormState] = useState({
    name: "",
    address: "",
    email: "",
    creditCard: "",
    expDate: "",
    cvv: "",
    zipCode: "",
  });

  const styles = {
    imgDiv: {
      // width: "150px",
      // height: "100px",
    },
    img: {},
    border: {
      border: "1px solid black",
    },
    cartDisplayContent: {
      width: "80%",
    },
  };

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

  function totalPrice() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  function handleCheckout() {
    // navigate("/checkout");
  }

  function validateForm(event) {
    return false;
  }

  function handleSubmit(event) {
    setFormState({
      name: "",
      address: "",
      email: "",
      creditCard: "",
      expDate: "",
      cvv: "",
      zipCode: "",
    });
    localStorage.setItem("cart", JSON.stringify([]));
    tempCart = JSON.parse(localStorage.getItem("cart"));
    setCart(JSON.parse(localStorage.getItem("cart")));

    navigate(`/cart`);

    toast.success(`Thank you! Order placed`, {
      position: "bottom-center",
      autoClose: 3000,
      closeOnClick: true,
      theme: "dark",
    });
    console.log(event);

    // event.preventDefault();
  }

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "name") {
      if (value.length < 1) {
        event.target.style.backgroundColor = "red";
      } else {
        event.target.style.backgroundColor = "white";
      }
    }

    if (name === "address") {
      if (value.length < 1) {
        event.target.style.backgroundColor = "red";
      } else {
        event.target.style.backgroundColor = "white";
      }
    }

    if (name === "email") {
      if (!value.includes("@")) {
        event.target.style.backgroundColor = "red";
      } else {
        event.target.style.backgroundColor = "white";
      }
    }
    if (name === "creditCard") {
      if (value.length < 16) {
        event.target.style.backgroundColor = "red";
        // console.log(event);
      } else {
        event.target.style.backgroundColor = "white";
      }
    }
    if (name === "expDate") {
      if (value.length < 5 && !value.includes("/")) {
        event.target.style.backgroundColor = "red";
      } else {
        event.target.style.backgroundColor = "white";
      }
    }
    if (name === "cvv") {
      if (value.length < 3) {
        event.target.style.backgroundColor = "red";
      } else {
        event.target.style.backgroundColor = "white";
      }
    }
    if (name === "zipCode") {
      if (value.length < 5) {
        event.target.style.backgroundColor = "red";
      } else {
        event.target.style.backgroundColor = "white";
      }
    }
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  function displayCart() {
    return (
      <div className="w-50">
        <h3 className="w-25 text-center">my cart</h3>
        {tempCart.map((item) => (
          <div className="cartContent d-flex flex-dolumn justify-space-between-md">
            <div>
              <div className="cartItemImg" style={styles.imgDiv}>
                <img src={item.imgURL} style={styles.img} />
              </div>
            </div>
            <div className="cartContents d-flex flex-row align-center flex-wrap justify-space-between">
              <div className="cartItemTitle">
                <p>{item.title}</p>
              </div>
              <div className="d-flex flex-row">
                <div className="cartItemQuantity m-2">
                  <p>quantity: 1</p>
                </div>
                <div className="cartItemPrice m-2">
                  <p>${item.price}</p>
                </div>
                <button onClick={handleRemovedItem} id={item._id} className="btn btn-primary m-2">
                  remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex flex-row justify-space-between-lg">
          <h3>Total: ${totalPrice()}</h3>
        </div>
      </div>
    );
  }

  function displayCardForm() {
    return (
      <div className="w-50">
        <form className="d-flex flex-column w-100">
          <h3>information</h3>
          <input className="form-input" type="string" placeholder="name" name="name" onChange={handleChange} required></input>
          <input className="form-input" type="string" placeholder="address" name="address" onChange={handleChange} required></input>
          <input className="form-input" type="email" placeholder="email" name="email" onChange={handleChange} required></input>
          <input className="form-input" type="string" placeholder="credit card" name="creditCard" onChange={handleChange} required></input>
          <input className="form-input" type="string" placeholder="expiration date" name="expDate" onChange={handleChange} required></input>
          <input className="form-input" type="string" placeholder="cvv" name="cvv" onChange={handleChange} required></input>
          <input className="form-input" type="string" placeholder="billing zip" name="zipCode" onChange={handleChange} required></input>
          <button className="btn btn-light" type="" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-100">
      <div className="m-auto w-full">
        <div className="d-flex flex-row">
          {displayCart()}
          {displayCardForm()}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
