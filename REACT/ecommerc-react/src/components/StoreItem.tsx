import React from "react";
import { formatCurrency } from "../utilities/formatCurrecy";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div>
      <div className="card-img-container">
        <img src={imgUrl} />
      </div>
      <div className="card-product-price-container">
        <div className="card-product-container">
          <h2>{name}</h2>
        </div>
        <div className="card-price-container">
          <h3 className="card-price">{formatCurrency(price)}</h3>
        </div>
      </div>
      <div className="card-add-empty">
        {quantity === 0 ? (
          <button className="button-add-to-cart" onClick={() => increaseCartQuantity(id)}>Add to Cart</button>
        ) : (
          <div className="card-add-counter">
            <div className="counter-minus">
              <button className="button-minus" onClick={() => decreaseCartQuantity(id)}>-</button>
              <div className="counter-empty"></div>
            </div>

            <div className="counter-middle">
              <div className="counter-count">
                <span className="counter-number">{quantity}</span><p> in cart</p>
              </div>
              <button className="button-remove" onClick={() => removeFromCart(id)}>Remove</button>
            </div>

            <div className="counter-plus">
              <button className="button-plus" onClick={() => increaseCartQuantity(id)}>+</button>
              <div className="counter-empty"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
