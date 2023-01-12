import React from "react";
import { formatCurrency } from "../utilities/formatCurrecy";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { IProduct } from "./types";

const StoreItem = ({ id, name, price, image, stock }: IProduct) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const stockCount = () => {
    return stock - quantity;
  };

  return (
    <div>
      <div className="card-img-container">
        <div className="card-available">
          <p className="card-available-text">
            In Stock:{" "}
            <span className="card-available-count">{stockCount()}</span>
          </p>
          {stockCount() === 1 && <p className="last-chance">Last Available</p>}
          {stockCount() === 0 && <p className="sold-out">Sold Out</p>}
        </div>
        <img src={`data:image/jpg;base64,${image}`} alt="ProdImg" />
      </div>
      <div className="card-product-price-container">
        <div className="card-product-container">
          <h2 className="card-product-name">{name}</h2>
        </div>
        <div className="card-price-container">
          <h3 className="card-price">{formatCurrency(price)}</h3>
        </div>
      </div>
      <div className="card-add-empty">
        {quantity === 0 ? (
          <button
            className="button-add-to-cart"
            onClick={() => increaseCartQuantity(id)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="card-add-counter">
            <div className="counter-minus">
              <button
                className="button-minus"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <div className="counter-empty"></div>
            </div>

            <div className="counter-middle">
              <div className="counter-count">
                <span className="counter-number">{quantity}</span>
                <p> in cart</p>
              </div>
              <button
                className="button-remove"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>

            <div className="counter-plus">
              {stockCount() === 0 ? (
                <p>Not Available</p>
              ) : (
                <button
                  className="button-plus"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              )}

              <div className="counter-empty"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
