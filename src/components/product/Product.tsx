import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useBalance } from "../../hooks/useBalance";

const productStyle = {
  card: "flex flex-col items-center w-60 pb-7 pt-3 px-3 bg-stone-700 rounded-md",
  info: "flex flex-col gap-3 px-5 pt-2",
  image: "h-[80px] w-[80px]",
  price:
    "flex px-3 py-1 self-end bg-green-500 rounded-xl text-white text-xs font-semibold",
  name: "self-start font-bold",
  description: "text-sm text-gray-400",
  addButton:
    "w-full px-3 py-1 rounded-xl bg-purple-700 text-white text-sm enabled:hover:brightness-200 transition-all disabled:bg-gray-500",
};
export const ProductoCard = ({ product }: { product: Product }) => {
  const { cart, addProduct, categoriesOnCart } = useCart();
  const { balance, subtractBalance } = useBalance();

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const handleAddProduct = () => {
    addProduct(product);
    subtractBalance(product.precio);
  };
  const productCategoryIsInCart = categoriesOnCart.includes(product.categoria);
  const isAffordable = product.precio > balance;
  const isAlreadyInCart = cart.some((p: Product) => p.id == product.id);
  useEffect(() => {
    setIsDisabled(isAlreadyInCart || productCategoryIsInCart || isAffordable);
  }, [cart]);
  return (
    <div className={productStyle.card}>
      <div className={productStyle.price}>
        {product.precio} {product.precio > 1 ? "Gemas" : "Gema"}
      </div>
      <img
        className={productStyle.image}
        src={product.imagen}
        alt={"Product"}
      ></img>
      <div className={productStyle.info}>
        <h5 className={productStyle.name}>{product.nombre}</h5>
        <span className={productStyle.description}>{product.descripcion}</span>
        <button
          disabled={isDisabled}
          className={productStyle.addButton}
          onClick={handleAddProduct}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
