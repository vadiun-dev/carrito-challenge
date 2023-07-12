type Product = {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  imagen: string;
};

type ProviderProps = {
  children: React.ReactNode;
};
type CartState = Product[];

interface Action<T extends string, P = undefined> {
  type: T;
  payload: P;
}

interface AddProductAction extends Action<"ADD_TO_CART", Product> {}
interface RemoveProductAction extends Action<"REMOVE_FROM_CART", Product> {}
interface ClearCartAction extends Action<"CLEAR_CART", undefined> {}
type CartAction = AddProductAction | RemoveProductAction | ClearCartAction;
type CartContext = {
  cart: Product[];
  dispatch: React.Dispatch<CartAction>;
};
interface AddBalanceAction extends Action<"ADD_BALANCE", number> {}
interface SubtractBalanceAction extends Action<"SUBTRACT_BALANCE", number> {}
type BalanceActions = AddBalanceAction | SubtractBalanceAction;
type BalanceContext = {
  balance: number;
  dispatch: React.Dispatch<Action>;
};
