import React, { useState } from "react";
import { ADD_LISTING } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { useNavigate, useParams, Navigate } from "react-router-dom";

const CreateListing = () => {
  const [imageState, setImageState] = useState("https://placehold.co/350x300?text=Preview");
  const navigate = useNavigate();
  // const [login, { error, data }] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({
    title: "",
    tags: "",
    price: "",
    quantity: "",
    imgURL: "",
  });
  const [addListing, { error, items, data }] = useMutation(ADD_LISTING);

  const styles = {
    img: {
      width: "350px",
      height: "300px",
    },
    border: {
      border: "1px solid black",
    },
    imgPreview: {
      // border: "1px solid black",
      width: "350px",
      height: "300px",
    },
    imgPreviewBox: {
      "background-image": `url(${imageState})`,
    },
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "price" || name === "quantity") {
      if (isNaN(value) || value === "") {
        value = 0;
      }
      value = parseInt(value);
    }
    if (name === "imgURL") {
      setImageState(value);
    }
    if (name === "imgURL" && value === "") {
      setImageState("https://placehold.co/250x200?text=Preview");
    }
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addListing({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      // window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  const handleReturn = () => {
    navigate(`/me`);
  };
  return (
    <div>
      <div className="d-flex flex-column align-center">
        <h3 className="">Create New Listing</h3>

        <div className=" d-flex flex-row w-75 justify-space-around-md text-center">
          <div className="w-50">
            {data ? (
              <div>
                <p>Success! You created a new listing!</p>
                <button type="button" onClick={handleReturn} className="btn btn-primary btn-cart">
                  Return to My Listings
                </button>
              </div>
            ) : (
              <form className="d-flex flex-column">
                <input className="form-input" type="text" name="title" onChange={handleChange} value={formState.title} placeholder="title" required />
                {/* Will need JS function splitting the tags by comma */}
                <input className="form-input" type="string" name="tags" onChange={handleChange} value={formState.tags} placeholder="tags" required />
                <input className="form-input" type="string" name="price" onChange={handleChange} value={formState.price} placeholder="price" required />
                <input className="form-input" type="string" name="quantity" onChange={handleChange} value={formState.quantity} placeholder="quantity" required />
                <input className="form-input" name="imgURL" onChange={handleChange} value={formState.imgURL} placeholder="image url" required />
              </form>
            )}
          </div>

          <div className="right-box w-25 align-center justify-center-md" style={styles.imgPreview}>
            <img className="w-100 h-full" src={imageState} alt="preview" />
          </div>
        </div>
        <div>
          <button type="submit" onClick={handleFormSubmit} className="btn btn-primary btn-cart">
            Create Listing
          </button>
        </div>
        {error && <div className="my-3 p-3 bg-danger text-white">{"Submission not successfull. Please fill in all fields!"}</div>}
      </div>
    </div>
  );
};
export default CreateListing;
