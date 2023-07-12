import { createContext, useReducer } from "react";

const initialState: CartState = [];

export const CartContext = createContext<CartContext>({} as CartContext);

function cartReducer(state: CartState, { type, payload }: CartAction) {
  switch (type) {
    case "ADD_TO_CART": {
      return [...state, payload];
    }
    case "REMOVE_FROM_CART": {
      const newState = state.filter((p) => p.id !== payload.id);
      return newState;
    }
    case "CLEAR_CART": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export function CartProvider({ children }: ProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
