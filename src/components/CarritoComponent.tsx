import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { CartProduct } from "./product/CartProduct";

const cartStyles = {
  container: "flex flex-col gap-5 px-2 sm:px-6 md:p-0",
  backButton: "rounded-xl bg-purple-700 text-white px-2 max-w-min",
  buyButton:
    "w-full px-3 py-1 rounded-xl bg-purple-700 text-white text-sm enabled:hover:brightness-200 transition-all disabled:bg-gray-500",
  info: "text-lg",
};

export const CarritoComponent = ({ onReturn }: { onReturn: () => void }) => {
  const [cartInfo, setCartInfo] = useState("No tienes productos en el carrito");
  const { cart, clearProducts } = useCart();
  const handleBuy = async () => {
    const payload = { itemsId: cart.map((p: Product) => p.id) };
    await fetch("http://localhost:3001/compras", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    clearProducts();
    setCartInfo("Compra realizada!");
  };
  return (
    <div className={cartStyles.container}>
      <button className={cartStyles.backButton} onClick={() => onReturn()}>
        Volver
      </button>
      {cart.length > 0 ? (
        <>
          <div>
            {cart.map((product: Product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <h2 className={cartStyles.info}>{cartInfo}</h2>
      )}
      <button
        className={cartStyles.buyButton}
        onClick={handleBuy}
        disabled={!(cart.length > 0)}
      >
        Comprar
      </button>
    </div>
  );
};
