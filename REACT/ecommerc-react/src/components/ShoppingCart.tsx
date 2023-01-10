import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrecy";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShoppingCart = ({ isOpen, setIsOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems} = useShoppingCart();
  return (
    <div
      className={isOpen ? "show-cart" : "hide-cart"}
      
    >
      <div className="cart-body">
        <div className="cart-close-button-container">
            <button onClick={closeCart} className="cart-close-button" >&times;</button>

        </div>
        <div className="cart-title-container">
            <h2>My Shopping Cart</h2>
        </div>
        <div>
            <div>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />))}
            </div>
            <div className="total-container">
                <h3>Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                }, 0 ))}</h3>
            </div>

        </div>
        
        
      </div>
    </div>
  );
};

export default ShoppingCart;
