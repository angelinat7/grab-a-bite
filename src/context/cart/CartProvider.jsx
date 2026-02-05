import { useMemo, useReducer, useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }) {
  const [state, setState] = useState({
    items: [
      {
        meal: {
          id: "item-1",
          categoryId: "category-1",
          name: "Classic Burger",
          description:
            "Juicy beef patty with lettuce, tomato, onion, and our secret sauce.",
          price: 8.99,
          featured: false,
          imageUrl:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        },
        extras: {},
        quantity: 2,
      },
      {
        meal: {
          id: "item-4",
          categoryId: "category-1",
          name: "Bacon Deluxe",
          description:
            "Premium burger with crispy bacon, avocado, and garlic aioli.",
          price: 13.99,
          imageUrl:
            "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400",
        },
        extras: {},
        quantity: 3,
      },
    ],
    total: 5,
  });

  const addToCart = (meal, quantity) => {
    setState((prevState) => {
      const existingItem = prevState.items.find(
        (item) => item.meal.id === meal.id,
      );

      const updatedItems = existingItem
        ? prevState.items.map((item) =>
            item.meal.id === meal.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [...prevState.items, { meal, quantity }];

      return {
        ...prevState,
        items: updatedItems,
        total: prevState.total + quantity,
      };
    });
  };

  const increaseQuantity = (index) => {
    setState((prevState) => ({
      items: prevState.items.map((item, i) =>
        i === index ? { meal: item.meal, quantity: item.quantity + 1 } : item,
      ),
      total: prevState.total + 1,
    }));
  };

  const decreaseQuantity = (index) => {
    setState((prevState) => ({
      items: prevState.items.map((item, i) =>
        i === index
          ? { meal: item.meal, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
      total: prevState.total - 1,
    }));
  };

  const removeItem = (index) => {
    setState((prevState) => {
      const itemToRemove = prevState.items[index];
      const updatedItems = prevState.items.filter((_, i) => i !== index);
      return {
        items: updatedItems,
        total: prevState.total - itemToRemove.quantity,
      };
    });
  };

  const totalPrice = useMemo(() => {
    return state.items.reduce(
      (sum, item) => sum + item.meal.price * item.quantity,
      0,
    );
  }, [state.items]);

  const data = {
    items: state.items,
    total: state.total,
    totalPrice,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
