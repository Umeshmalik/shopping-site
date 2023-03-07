import React from "react";
import "./Header-1.css";

import { FiYoutube, FiInstagram } from "react-icons/fi";

const firstHeader = () => {
  return (
    <>
      <div className="first_header_container">
        <div className="innerContainer">
          <div className="first_header_left">
            <ul className="social-links">
              <li>
                <FiYoutube fill="white" size="20px" />
              </li>
              <li>
                <FiInstagram fill="white" size="20px" />
              </li>
            </ul>
          </div>
          <div className="first_header_middle">
            <p className="first_header_text">Free Shipping</p>
          </div>
          <div className="first_header_right"></div>
        </div>
      </div>
    </>
  );
};

export default firstHeader;
