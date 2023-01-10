import React from "react";
import storeItems from "../data/items.json";
import "../style/card.css";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <div className="store-container">
      <h1>Our Products</h1>
      <div className="items-container">
        {storeItems.map((item) => (
          <div className="card-container" key={item.id}>
            <StoreItem {...item}/>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
