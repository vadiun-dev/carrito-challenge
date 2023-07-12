import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {
  const { cart, dispatch } = useContext(CartContext);

  const addProduct = (product: Product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  const removeProduct = (product: Product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const clearProducts = () =>
    dispatch({
      type: "CLEAR_CART",
      payload: undefined,
    });
  const quantity = cart.length;
  const categoriesOnCart = cart.map((product: Product) => product.categoria);
  return {
    cart,
    addProduct,
    removeProduct,
    quantity,
    categoriesOnCart,
    clearProducts,
  };
}
