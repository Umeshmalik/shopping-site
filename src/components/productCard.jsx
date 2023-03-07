import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/product-context/productContext";
import Products from "../Products";
import "./Product-Card.css";

const ProductCard = () => {
  const productContext = useContext(ProductContext);
  const { handleProductClick } = productContext;

  return (
    <>
      <div className="page_title">
        <p className="title">Products</p>
        <p className="count">{Products.length} products</p>
      </div>
      <div className="container">
        <div className="products_container">
          {Products.map((product) => (
            <div key={product.id} className="product_container">
              <button className="stock">{product.stock} in stock</button>
              <div
                className="product_image"
                onClick={(e) => handleProductClick(e, product)}
              >
                <img src={product.image} alt="air freshner" width="440px" height="400px" />
                <div className="buy_button">
                  <Link to="/description" style={{ textDecoration: "none" }}>
                    {" "}
                    <button>Quick Buy</button>
                  </Link>
                </div>
              </div>
              <div className="product_detail">
                <p className="name">{product.name}</p>
                <p className="price">
                  From <span>&euro;{product.price}.00</span>
                </p>
                <p className="weight">{product.weight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
