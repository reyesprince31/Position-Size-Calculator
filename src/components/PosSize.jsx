import ResultList from "../ui/ResultList";
import { formatCurrency } from "../utils/helpers";

function PosSize({ tradeMargin, potentialProfit, valueAtRisk }) {
  return (
    <>
      <div className="mt-2 py-6 border-b-[1px] text-slate-100 text-sm ">
        <ResultList>
          Trade margin
          <span className="font-semibold">{formatCurrency(tradeMargin)}</span>
        </ResultList>
        <ResultList>
          Potential profit
          <span className="font-semibold">
            {formatCurrency(potentialProfit)}
          </span>
        </ResultList>
        <ResultList>
          Value at risk
          <span className="font-semibold">{formatCurrency(valueAtRisk)}</span>
        </ResultList>
      </div>
      <div className="flex flex-col items-center justify-center px-2 py-3.5">
        <p className="text-sm text-slate-600 mt-2">Your position size</p>
        <span className="text-2xl font-bold text-slate-100 mt-2">0.04 Lot</span>
        <span className="text-2xl font-bold text-slate-100 mt-2">
          100 pos size
        </span>
      </div>
    </>
  );
}

export default PosSize;
