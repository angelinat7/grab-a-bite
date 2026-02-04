import { createContext, useContext } from "react";

export const CartContext = createContext();

export function UseCartContext() {
  return useContext(CartContext);
}
