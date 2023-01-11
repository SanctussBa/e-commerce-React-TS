import React, { useEffect } from "react";

import "../style/card.css";
import StoreItem from "../components/StoreItem";

import { useProductsContext } from "../context/ProductsContext";

const Store = () => {
  const { listOfProducts, fetchAllProducts } = useProductsContext();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="store-container">
      <h1>Our Products</h1>
      <div className="items-container">
        {listOfProducts.map((item) => (
          <div className="card-container" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
