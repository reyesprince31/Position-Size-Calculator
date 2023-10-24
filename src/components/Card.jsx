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
import Inputs from "./Inputs";
import Ratio from "./Ratio";
import PosSize from "./PosSize";

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
function Card() {
  const [state, dispatch] = useReducer(reducer, initialItems);

  return (
    <div className="bg-slate-800 px-4 py-6 rounded-md" role="card">
      <h1 className="text-slate-200 font-semibold text-2xl text-center">
        Position Size Calculator
      </h1>
      <div className="text-center mt-4 text-slate-50 text-sm">
        Crypto / Forex
      </div>

      <Inputs dispatch={dispatch} />
      <Ratio {...state} />
      <PosSize {...state} />
    </div>
  );
}

export default Card;
