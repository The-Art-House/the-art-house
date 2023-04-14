import React, { useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";

import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
import { ADD_LISTING } from "../utils/mutations";

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { profileId: profileId },
  });
  // profiles is an object instead of an array, so we need to fix that
  const [formState, setFormState] = useState({
    title: "",
    tags: "",
    price: "",
    quantity: "",
    imgURL: "",
  });
  const [addListing, { error, items }] = useMutation(ADD_LISTING);

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profiles = data?.me || [];
  const navigate = useNavigate();
  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!profile?.name) {
  //   return (
  //     <h4>
  //       You need to be logged in to see your profile page. Use the navigation
  //       links above to sign up or log in!
  //     </h4>
  //   );
  // }

  function handleClicked(event) {
    navigate(`/listing/${event.target.id}`);
  }

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
    <div className="flex-column align-center">
      <h3>my gallery</h3>
      <div className="card flex-row justify-space-between">
        {profiles.listings.map((listing) => (
          <div key={listing.id}>
            <img src={listing.imgURL} id={listing._id} onClick={handleClicked} style={{ margin: "5px", width: "350px", height: "200px" }} />
          </div>
        ))}
      </div>
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
          <button type="submit" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
