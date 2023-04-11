import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";

import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { profileId: profileId },
  });
  // profiles is an object instead of an array, so we need to fix that

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
  console.log(profiles);
  return (
    <div className="flex-column align-center">
      <h3>Users Gallery</h3>
      <div className="card flex-row justify-space-between">
        {profiles.listings.map((listing) => (
          <div key={listing.id}>
            <img src={listing.imgURL} id={listing._id} onClick={handleClicked} style={{ margin: "5px", width: "350px", height: "200px" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
