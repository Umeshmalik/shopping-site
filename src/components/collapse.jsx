import React, { useState } from "react";
import {FiPlus} from "react-icons/fi"
import "./Collapse.css";

const Collapse = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <div className="collapse_container">
        <div onClick={toggle} className="collaspe_button_container">
          <div className="button_div">
            <button className="collapse_button">Ingredients</button>
          </div>
          <div className="img_div">
            <FiPlus />
          </div>
        </div>
        <p className={`${collapse ? "closed" : "open"}`}>
          "Desire Me!" is the first thing your counterpart thinks of with this
          perfume. At the beginning you perceive a fruity note, which is
          triggered by an exotic accord of raspberry, passion fruit, peach and
          black currant. The heart note of Desire Me! consists of lilies of the
          valley, which enable a subtle transition from fruity to sweet. This
          scent owes its sweetness to the interplay of sandalwood, vanilla,
          heliotrope, patchouli and the specialties of the Aromas house: amber
          and musk.
        </p>
      </div>
    </>
  );
};

export default Collapse;
