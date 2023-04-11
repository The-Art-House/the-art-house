import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_LISTINGS, QUERY_PROFILES } from "../utils/queries";

const Gallery = () => {

const { loading, data } = useQuery(QUERY_ALL_LISTINGS);
  const listings = data?.listings || [];
  const navigate = useNavigate();
  const styles = {
    img: {
      width: "700px",
      height: "500px",
      //   border: "1px solid black",
    },
  };



  function handleClicked(event) {
    navigate(`listing/${event.target.id}`)
  }

  return (
    <div className="flex-column align-center">
      <h3>Gallery</h3>
      <div className="card flex-row justify-space-between">
        {listings &&
          listings.map((listing) => (
            <div>
              <img src={listing.imgURL} id={listing._id} onClick={handleClicked} style={{ margin: "5px", width: "350px", height: "200px" }} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
