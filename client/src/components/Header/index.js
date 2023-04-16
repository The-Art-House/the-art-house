import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  function goToCart() {
    navigate(`/cart`);
  }
  const styles = {
    homeIcon: {
      border: "5px solid black",
      width: "450px",
      padding: "10px",
    },
    primaryButton: {
      backgroundColor: "black!important",
      color: "white!important",
    },
  };

  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center ">
      <div className="container flex-row justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark flex-row justify-center" style={styles.homeIcon} to="/">
          <h1 className="m-2 theHeader">the art house</h1>
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
            {location.pathname !== "/me" && (
              <Link className="btn btn-lg btn-primary" to="/me">
                my profile
              </Link>
            )}
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                logout
              </button>
              <button className="btn btn-lg btn-primary m-" onClick={goToCart}>
                cart
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" style={styles.primaryButton} to="/login">
                login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                signup
              </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/cart">
                cart
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
