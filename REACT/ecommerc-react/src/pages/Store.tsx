import React, { useEffect, useState } from "react";

import "../style/card.css";
import StoreItem from "../components/StoreItem";

import { useProductsContext } from "../context/ProductsContext";

const Store = () => {
  const { listOfProducts, fetchAllProducts } = useProductsContext();
  const [productCategory, setProductCategory] = useState<string>("all");

  const getListOfCategories = () => {
    const arrOfCategories = Array.from(
      new Set(listOfProducts.map((c) => c.category))
    );
    return arrOfCategories;
  };

  const handleProductCategoryChange = (e: any) => {
    setProductCategory(e.target.value);
  };

  useEffect(() => {
    fetchAllProducts();
    getListOfCategories();
  }, []);

  return (
    <div className="store-container">
      <div>
        <h1>Our Products</h1>
        <div className="store-select-container">
          <label className="select-label">Select Product Category</label>
          <select className="select" onChange={handleProductCategoryChange}>
            <option className="option" value="all">
              All
            </option>
            {getListOfCategories().map((category, index) => (
              <option className="option" key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="items-container">
        {productCategory === "all" &&
          listOfProducts.map((item) => (
            <div className="card-container" key={item.id}>
              <StoreItem {...item} />
            </div>
          ))}
        {productCategory !== "all" &&
          listOfProducts
            .filter((product) => product.category === productCategory)
            .map((item) => (
              <div className="card-container" key={item.id}>
                <StoreItem {...item} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Store;
