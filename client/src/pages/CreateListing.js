import React, { useState } from "react";
import { ADD_LISTING } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";

const CreateListing = () => {
  const styles = {
    img: {
      width: "250px",
      height: "200px",
    },
    border: {
      border: "1px solid black",
    },
    imgPreview: {
      border: "1px solid black",
      width: "250px",
      height: "200px",
    },
  };

  const [imageState, setImageState] = useState();

  const [formState, setFormState] = useState({
    title: "",
    tags: "",
    price: "",
    quantity: "",
    imgURL: "",
  });
  const [addListing, { error, items }] = useMutation(ADD_LISTING);

  // function handleChange(event) {
  //   setImageState(event.target.value);
  // }

  // function handleClicked(event) {
  //   navigate(`/listing/${event.target.id}`);
  // }

  // update state based on form input changes
  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "price" || name === "quantity") {
      value = parseInt(value);
    }
    setFormState({
      ...formState,
      [name]: value,
    });
    if (name === "imgURL") {
      setImageState(value);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addListing({
        variables: { ...formState },
      });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    // <div className="">
    <div>
      <div className="d-flex flex-column align-center">
        <h3 className="" style={styles.border}>
          Create New Listing
        </h3>
        {/* <div className=" d-flex flex-row w-75 justify-space-between-lg" style={styles.border}> */}
        <div className=" d-flex flex-row w-75 justify-space-around-md text-center" style={styles.border}>
          <div>
            <form className="d-flex flex-column">
              <label>Title</label>
              <input type="text" name="title" onChange={handleChange} value={formState.title} />
              <label>Tags</label>
              {/* Will need JS function splitting the tags by comma */}
              <input type="string" name="tags" onChange={handleChange} value={formState.tags} />
              <label>Price</label>
              <input type="number" name="price" onChange={handleChange} value={formState.price} />
              <label>Quantity</label>
              <input type="number" name="quantity" onChange={handleChange} value={formState.quantity} />
              <label>Image URL</label>
              <input name="imgURL" onChange={handleChange} value={formState.imgURL} />
              {/* <button type="submit" onClick={handleFormSubmit}> */}
              {/* Submit */}
              {/* </button> */}
            </form>
          </div>

          {/* image preview */}
          <div className="right-box w-25 align-center" style={styles.imgPreview}>
            <img className="w-100 h-full" src={imageState} alt="preview" />
          </div>
        </div>
        <div>
          <button type="submit" onClick={handleFormSubmit} className="btn btn-primary btn-cart">
            Create Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
