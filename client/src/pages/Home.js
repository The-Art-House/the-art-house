import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import ProfileList from "../components/ProfileList";

import { QUERY_PROFILES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  const styles = {
    img: {
      width: "100px",
      height: "100px",
    },
  };

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )} */}
        </div>
      </div>
    </main>
  );
};

export default Home;
