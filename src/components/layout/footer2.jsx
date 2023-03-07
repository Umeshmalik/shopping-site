import React from "react";

import { FaWhatsapp } from "react-icons/fa";

import Amex from "../../assets/amex-svgrepo-com.1da5143496631a7c87c6d21a1ee5b8d0.svg"
import Gpay from "../../assets/google-pay-svgrepo-com.svg";
import Apay from "../../assets/apple-pay-payment-mark-logo-svgrepo-com.svg";
import Klarna from "../../assets/klarna-pay-logo-svgrepo-com.svg";
import mastercard from "../../assets/mastercard-svgrepo-com.svg";
import paypal from "../../assets/paypal-color-svgrepo-com.svg";
import Visa from "../../assets/visa-pay-logo-svgrepo-com.svg";
import OPay from "../../assets/Opay.svg";
import Maestro from "../../assets/Maestro_2016.png"

import "./Footer-2.css";

const paymentOptions = [Amex, Apay, Gpay, Klarna, Maestro, mastercard, paypal, OPay, Visa ];

const secondFooter = () => {
  return (
    <>
      <div className="second_footer_container">
        <div className="second_footer_left_container">
          <div className="second_footer_left">
            <p>© 2023 Aromas Artesenales. Powered by Pragma</p>
          </div>
        </div>
        <div className="second_footer_middle"></div>
        <div className="second_footer_right_container">
          <div className="second_footer_right">
            <div className="payment_icons">
              <ul>
                {paymentOptions.map((option) => <li> <img src={option} alt="" /></li>)}
              </ul>
            </div>
          </div>
        </div>
        <FaWhatsapp className="whatsapp-logo" />
      </div>
    </>
  );
};

export default secondFooter;
