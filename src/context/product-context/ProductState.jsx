import React, { useReducer } from "react";
import ProductContext from "./productContext";
import productReducer from "./productReducer";

import {
  PRODUCT_DETAILS,
  //   INCREMENT,
  //   DECREMENT,
} from "../types";

const ProductState = (props) => {
  const initialState = {
    min: "",
    max: "",
    clickedProduct: "",
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Getting  single product on click

  const handleProductClick = (e, product) => {
    e.preventDefault();
    console.log("this is product", product);
    dispatch({
      type: PRODUCT_DETAILS,
      payload: product,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        // products: state.products,
        // max: state.max,
        // min: state.min,
        clickedProduct: state.clickedProduct,
        handleProductClick,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
