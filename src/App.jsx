import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstHeader from "./components/layout/header1";
import SecondHeader from "./components/layout/header2";
import FirstFooter from "./components/layout/footer1";
import SecondFooter from "./components/layout/footer2";
import Home from "./pages/home";
import Collection from "./pages/collection";
import Product from "./pages/product";
import Cart from "./pages/cart";
import About from "./pages/about";

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
