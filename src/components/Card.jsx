import { useReducer } from "react";
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
};

function reducer(state, action) {
  const { balance, riskPerTrade, entryPrice, stopLoss, targetPrice, leverage } =
    action.payload;

  const direction = entryPrice > stopLoss ? "Long" : "Short";

  const targetDifference = Math.abs(entryPrice - targetPrice);
  const lossDifference = Math.abs(entryPrice - stopLoss);

  const target = ((100 * targetDifference) / entryPrice).toFixed(2);
  const loss = ((100 * lossDifference) / entryPrice).toFixed(2);
  const ratio = (target / loss).toFixed(2);

  const lossLevPercent = leverage * stopLoss;

  const valueAtRisk = balance * (riskPerTrade / 100);
  const tradeMargin = (valueAtRisk / lossLevPercent) * 100;
  const potentialGain = leverage * target;
  const potentialProfit = (tradeMargin * potentialGain) / 100;
  console.log(potentialProfit);

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
