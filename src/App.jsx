import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const FirstHeader = lazy( () => import("./components/layout/header1"));
const SecondHeader = lazy( () => import("./components/layout/header2"));
const FirstFooter = lazy( () => import("./components/layout/footer1"));
const SecondFooter = lazy( () => import("./components/layout/footer2"));
const Home = lazy( () => import("./pages/home"));
const Collection = lazy( () => import("./pages/collection"));
const Product = lazy( () => import("./pages/product"));
const Cart = lazy( () => import("./pages/cart"));
const About = lazy( () => import("./pages/about"));

import ProductState from "./context/product-context/ProductState";
import "./App.css";

function App() {
  return (
    <Router>
      <ProductState>
        <div className="App">
        <FirstHeader />
        <SecondHeader />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/description" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <FirstFooter />
        <SecondFooter />
      </ProductState>
    </Router>
  );
}

export default App;
