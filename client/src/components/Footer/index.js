import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="btn btn-primary mb-3" onClick={() => navigate(-1)}>
            return
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - CGJCEM</h4>
      </div>
    </footer>
  );
};

export default Footer;
