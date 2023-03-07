import {
    PRODUCT_DETAILS,
    //   INCREMENT,
    //   DECREMENT,
  } from "../types";
  
  const productReducer = (state, action) => {
    switch (action.type) {
      case PRODUCT_DETAILS:
        return {
          ...state,
          clickedProduct: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  