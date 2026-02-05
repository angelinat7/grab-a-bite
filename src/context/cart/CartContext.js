import { createContext, useContext } from "react";

export const CartContext = createContext({
  items: [],
  total: 0,
  totalPrice: 0,
  addToCart(meal, quantity) {},
  increaseQuantity(index) {},
  decreaseQuantity(index) {},
  removeItem(index) {},
});

export function UseCartContext() {
  const context = useContext(CartContext);
  if (!CartContext) {
    throw new Error("UseCartContext must be used within a CartProvider");
  }
  return context;
}
