import { useBalance } from "../hooks/useBalance";
import { useCart } from "../hooks/useCart";

const headerStyles = {
  mainContainer:
    "bg-stone-700 p-4 sm:py-4 sm:px-8 flex justify-between items-center sticky top-0 shadow-md z-10",
  brandName: "text-white text-lg sm:text-2xl font-bold",
  brandImage: "w-5 h-5 sm:w-auto sm:h-auto",
  balanceContainer:
    "flex flex-col sm:flex-row gap-2 text-sm sm:text-base items-center",
  cartButton: "text-white text-sm sm:text-base hover:underline",
};

export const HeaderComponent = ({ onOpen }: { onOpen: () => void }) => {
  const { quantity } = useCart();
  const { balance } = useBalance();
  return (
    <div className={headerStyles.mainContainer}>
      <h1 className={headerStyles.brandName}>🧙‍♂️ Potion Shop</h1>
      <div className={headerStyles.balanceContainer}>
        <img src="./gem.png" className={headerStyles.brandImage} />
        <span>
          {balance} {balance != 1 ? "Gemas" : "Gema"}
        </span>
      </div>
      <button className={headerStyles.cartButton} onClick={() => onOpen()}>
        Ver Carrito ({quantity})
      </button>
    </div>
  );
};
