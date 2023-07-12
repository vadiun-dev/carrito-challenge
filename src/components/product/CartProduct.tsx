import { useBalance } from "../../hooks/useBalance";
import { useCart } from "../../hooks/useCart";

const productStyle = {
  card: "flex flex-row justify-between w-full max-w-[520px] p-3 bg-stone-700 border-b-2 border-stone-500",
  image: "object-cover h-[full] w-[full]",
  imageContainer: "flex  w-10 h-10 rounded-full bg-stone-500",
  name: "self-center",
  cancelButton:
    "flex place-items-center px-2 text-gray-400 text-sm hover:brightness-200 transition-all",
};
export const CartProduct = ({ product }: { product: Product }) => {
  const { removeProduct } = useCart();
  const { addBalance } = useBalance();
  const handleRemoveProduct = () => {
    removeProduct(product);
    addBalance(product.precio);
  };

  return (
    <div className={productStyle.card}>
      <ProductRounded image={product.imagen} />
      <h5 className={productStyle.name}>{product.nombre}</h5>
      <button
        className={productStyle.cancelButton}
        onClick={handleRemoveProduct}
      >
        X
      </button>
    </div>
  );
};

const ProductRounded = ({ image }: { image: string }) => {
  return (
    <div className={productStyle.imageContainer}>
      <img className={productStyle.image} src={image} alt={"Product"}></img>
    </div>
  );
};
