import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import "./style/main.css";
import "./style/navbar.css";
import "./style/sideCart.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ShoppingCartProvider>
    </ProductsProvider>
  );
}

export default App;
