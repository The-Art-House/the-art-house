import React from "react";

const CreateListing = () => {
  const styles = {
    img: {},
    border: {},
  };
  return (
    <div className="d-flex flex-column align-center">
      <div className=" d-flex flex-row w-100 justify-space-between-lg" style={styles.border}>
        <div className="w-50 text-center" style={styles.border}>
          <div className="flex-row">
            <p>Title:</p>
            <input></input>
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
          <div>
            <button className="btn btn-light btn-cart">Create Listing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
