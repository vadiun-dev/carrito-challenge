import { useContext } from "react";
import { BalanceContext } from "../context/balance";

export function useBalance() {
  const { balance, dispatch } = useContext(BalanceContext);

  const addBalance = (amount: number) =>
    dispatch({
      type: "ADD_BALANCE",
      payload: amount,
    });
  const subtractBalance = (amount: number) =>
    dispatch({
      type: "SUBTRACT_BALANCE",
      payload: amount,
    });
  return {
    balance,
    subtractBalance,
    addBalance,
  };
}
