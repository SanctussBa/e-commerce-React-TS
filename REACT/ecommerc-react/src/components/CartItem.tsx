import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrecy";
import { useProductsContext } from "../context/ProductsContext";

type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const { listOfProducts } = useProductsContext();
  const item = listOfProducts.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="cart-item-container">
      <div className="cart-item-container-left">
        <div className="cart-item-img-name-container">
          <div className="cart-img-container">
            <img className="cart-item-img" src={`data:image/jpg;base64,${item.image}`} alt="pic"/>
          </div>
          <div >
            <h3>
              {item.name}{" "}
              {quantity > 1 && (
                <span className="cart-item-quantity">x{quantity}</span>
              )}
            </h3>
            <p className="cart-item-price">{formatCurrency(item.price)}</p>
          </div>
        </div>
      </div>

      <div className="cart-item-container-right">
        <div>{formatCurrency(item.price * quantity)}</div>
        <div>
          <button className="cart-item-remove-button" onClick={() => removeFromCart(item.id)}>&times;</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
