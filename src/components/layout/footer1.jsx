import React from "react";
import { FiYoutube, FiInstagram } from "react-icons/fi";
import Logo from "../../assets/Logo.png";
import "./Footer-1.css";

const firstFooter = () => {
  return (
    <>
      <div className="first_footer_container">
        <div className="first_footer_section_one_container">
          <div className="first_footer_section_one">
            <h6>fragrance profile analysis</h6>
            <p>
              We are inspired by the conversations we have with our customers.
              Based on the customer's emotions and aura, we create a so-called
              fragrance profile, which helps us to determine the perfect
              fragrance for every personality. Empathy and patience are the key
              to the perfect analysis of a scent profile.
            </p>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="first_footer_section_two_container">
          <div className="first_footer_menu">
            <h6>Aromas Artesanales</h6>
            <ul>
              <li>About </li>
              <li> Contact</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="first_footer_section_three_container">
          <div className="first_footer_menu">
            <h6>Service</h6>
            <ul>
              <li>Payment</li>
              <li> Conditions</li>
              <li>Right of Withdrawal</li>
              <li>Data Protection</li>
              <li>Imprint</li>
            </ul>
          </div>
        </div>
        <div className="first_footer_section_four_container">
          <div className="newsletter">
            <h6>Newsletter</h6>
            <p>Sign up now for our newsletter</p>
            <div className="form_container">
              <input type="text" placeholder="Enter Email" />
              <button>SEND</button>
            </div>
            <ul className="social-links">
              <li>
                <FiYoutube fill="white" color="#676869" size="20px" />
              </li>
              <li>
                <FiInstagram color="#676869" size="20px" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default firstFooter;
