import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h1 className="home-text-title">
          High Quality Furniture For Your House
        </h1>
        <p className="home-text-content">
          Furniture, home accessories, design ideas and inspiration for big
          dreams and small budgets. A better everyday life begins at home!
        </p>
        <Link className="link-shop-now" to="/store">
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Home;
