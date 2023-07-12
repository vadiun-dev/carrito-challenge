import { useState } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { CartProvider } from "./context/cart";
import { BalanceProvider } from "./context/balance";

const appStyles = {
  mainContainer: "min-h-full bg-fixed",
  contentContainer: "flex justify-center min-h-full",
  content: "max-w-lg w-full py-16",
};

function App() {
  const [showCarrito, setShowCarrito] = useState(false);
  const handleShowCarrito = () => setShowCarrito(true);
  const handleHideCarrito = () => setShowCarrito(false);
  return (
    <div
      className={appStyles.mainContainer}
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <CartProvider>
        <BalanceProvider>
          <HeaderComponent onOpen={handleShowCarrito} />
          <div className={appStyles.contentContainer}>
            <div className={appStyles.content}>
              {showCarrito ? (
                <CarritoComponent onReturn={handleHideCarrito} />
              ) : (
                <ListadoProductosComponent />
              )}
            </div>
          </div>
        </BalanceProvider>
      </CartProvider>
    </div>
  );
}

export default App;
