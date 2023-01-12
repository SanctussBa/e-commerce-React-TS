import React, { ReactNode, createContext, useContext, useState } from "react";
import { IProduct } from "../components/types";
import CartItem from "../components/CartItem";
import { useShoppingCart } from "./ShoppingCartContext";

type ProductsContextProps = {
  children: ReactNode;
};

type ProductsContext = {
  listOfProducts: IProduct[];
  setListOfProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  fetchAllProducts: () => void;
  payForProducts: () => void;
};

const ProductsContext = createContext({} as ProductsContext);

export function useProductsContext() {
  return useContext(ProductsContext);
}

export function ProductsProvider({ children }: ProductsContextProps) {
  const [listOfProducts, setListOfProducts] = useState([] as IProduct[]);
  const { cartItems } = useShoppingCart();

  const fetchAllProducts = async () => {
    const response = await fetch("http://localhost:5292/Products");
    const allProducts = await response.json();
    setListOfProducts(allProducts.sort(() => Math.random() - 0.5));
  };

  const payForProducts = () => {
    console.log(cartItems);
  };

  return (
    <ProductsContext.Provider
      value={{
        listOfProducts,
        fetchAllProducts,
        setListOfProducts,
        payForProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
