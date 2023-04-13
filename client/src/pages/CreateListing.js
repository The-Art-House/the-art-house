import React, { useState } from "react";

const CreateListing = () => {
  const styles = {
    img: {},
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

  function handleChange(event) {
    setImageState(event.target.value);
  }

  return (
    // <div className="">
    <div>
      <div className="d-flex flex-column align-center">
        <h3 className="" style={styles.border}>
          create new listing
        </h3>
        {/* <div className=" d-flex flex-row w-75 justify-space-between-lg" style={styles.border}> */}
        <div className=" d-flex flex-row w-75 justify-space-around-md text-center" style={styles.border}>
          <div className="left-input w-50 text-center">
            <div className="flex-row">
              <p>Title:</p>
              <input type=""></input>
            </div>
            <div className="flex-row">
              <p>Description:</p>
              <input></input>
            </div>
            <div className="flex-row">
              <p>Price:</p>
              <input></input>
            </div>
            <div className="flex-row">
              <p>Quantity:</p>
              <input></input>
            </div>
            <div className="flex-row">
              <p>Image URL:</p>
              <input></input>
            </div>
          </div>

          {/* image preview */}
          <div className="right-box w-25 align-center" style={styles.imgPreview}></div>
        </div>
        <div>
          <button className="btn btn-light btn-cart">Create Listing</button>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
