import { createContext, useContext, useReducer } from "react";

import {
  calculateDirection,
  calculateLotSize,
  calculatePercentageDifference,
  calculatePotentialGain,
  calculatePotentialProfit,
  calculateTradeMargin,
  calculateValueAtRisk,
} from "../utils/helpers";

const PosSizeContext = createContext();

const initialItems = {
  direction: "",
  target: 0,
  loss: 0,
  ratio: 0,
  tradeMargin: 0,
  valueAtRisk: 0,
  posSize: 0,
  lotSize: 0,
};

function reducer(state, action) {
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

  const posSize = leverage * tradeMargin;
  const lotSize = calculateLotSize(valueAtRisk, stopLoss);

  switch (action.type) {
    case "calculate":
      return {
        ...state,
        direction,
        target,
        loss,
        ratio,
        tradeMargin,
        valueAtRisk,
        potentialProfit,
        posSize,
        lotSize,
      };
    case "reset":
      return {
        ...state,
      };

    default:
      return state;
  }
}
function PosSizeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialItems);

  return (
    <PosSizeContext.Provider value={{ state, dispatch }}>
      {children}
    </PosSizeContext.Provider>
  );
}

function usePositionCalculator() {
  const context = useContext(PosSizeContext);

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { PosSizeProvider, usePositionCalculator };
