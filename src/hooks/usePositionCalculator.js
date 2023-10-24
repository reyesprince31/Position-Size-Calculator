// usePositionCalculator.js
import { useReducer } from "react";
import {
  calculateDirection,
  calculateLotSize,
  calculatePercentageDifference,
  calculatePotentialGain,
  calculatePotentialProfit,
  calculateTradeMargin,
  calculateValueAtRisk,
} from "../utils/helpers";

const initialState = {
  direction: "",
  target: 0,
  loss: 0,
  ratio: 0,
  tradeMargin: 0,
  valueAtRisk: 0,
  potentialProfit: 0,
  posSize: 0,
  lotSize: 0,
};

function positionCalculatorReducer(state, action) {
  // ... Your existing reducer logic here ...
  const { balance, riskPerTrade, entryPrice, stopLoss, targetPrice, leverage } =
    action.payload;

  const direction = calculateDirection(entryPrice, stopLoss);
  const target = calculatePercentageDifference(
    entryPrice,
    targetPrice,
    entryPrice
  );
  const loss = calculatePercentageDifference(entryPrice, stopLoss, entryPrice);
  const ratio = (target / loss).toFixed(2);

  const valueAtRisk = calculateValueAtRisk(balance, riskPerTrade);
  const tradeMargin = calculateTradeMargin(valueAtRisk, leverage, stopLoss);
  const potentialGain = calculatePotentialGain(leverage, target);
  const potentialProfit = calculatePotentialProfit(tradeMargin, potentialGain);
  const lotSize = calculateLotSize(valueAtRisk, stopLoss);
}

export function usePositionCalculator() {
  const [state, dispatch] = useReducer(positionCalculatorReducer, initialState);

  const calculatePosition = (payload) => {
    dispatch({ type: "calculate", payload });
  };

  const resetPosition = () => {
    dispatch({ type: "reset" });
  };

  return {
    state,
    dispatch,
    calculatePosition,
    resetPosition,
  };
}
