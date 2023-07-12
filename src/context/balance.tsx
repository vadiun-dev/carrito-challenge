import { createContext, useReducer } from "react";

const INITIAL_BALANCE = 3;

export const BalanceContext = createContext<BalanceContext>(
  {} as BalanceContext
);

function balanceReducer(state: number, { type, payload }: BalanceActions) {
  switch (type) {
    case "ADD_BALANCE": {
      return state + payload;
    }
    case "SUBTRACT_BALANCE": {
      const substractResult = state - payload;
      if (substractResult < 0) {
        throw new Error("Esta accion no es posible");
      }
      return state - payload;
    }
    default: {
      return state;
    }
  }
}

export const BalanceProvider = ({ children }: ProviderProps) => {
  const [balance, dispatch] = useReducer(balanceReducer, INITIAL_BALANCE);
  return (
    <BalanceContext.Provider value={{ balance, dispatch }}>
      {children}
    </BalanceContext.Provider>
  );
};
