import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import "./Header-2.css";
import Logo from "../../assets/Logo.png";

const secondHeader = () => {
  return (
    <>
      <div className="second_header_container">
        <div className="second_header_innerContainer">
          <div className="second_header_left">
            <ul className="menu_links">
              <li>
                <Link to="/" className="anchor_links">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/collection" className="anchor_links">
                  SHOP
                </Link>
              </li>
              <li>
                <Link to="/#" className="anchor_links">
                  UBER UNS
                </Link>
              </li>
              <li>
                <Link to="/#" className="anchor_links">
                  WERDE FRANCHISE-PARTNER
                </Link>
              </li>
            </ul>
          </div>
          <div className="second_header_middle">
            <Link to="/">
              <img src={Logo} alt="Logo" width="150px" />
            </Link>
          </div>
          <div className="second_header_right">
            <ul className="second_header_icons">
              <li>
                <a href="/" className="anchor_links">
                  Suchen{" "}
                  <FiSearch
                    size="25px"
                    style={{ verticalAlign: "text-bottom" }}
                  />
                </a>
              </li>
              <li>
                <Link to="/cart" className="anchor_links">
                  Warenkorb{" "}
                  <BsCart
                    size="25px"
                    style={{ verticalAlign: "text-bottom" }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default secondHeader;
