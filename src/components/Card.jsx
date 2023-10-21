import { formatCurrency } from "../utils/helpers";
import FormRow from "../ui/FormRow";
import ResultList from "../ui/ResultList";
import Input from "../ui/Input";
import { useReducer, useState } from "react";

const initialInputValues = {
  balance: 100,
  riskPerTrade: 2,
  entryPrice: "",
  stopLoss: "",
  target: "",
};

const initialItems = {
  balance: initialInputValues.balance,
  target: 0,
  loss: 0,
  posSize: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "calculate":
      return { ...state };

    default:
      return state;
  }
}
function Card() {
  const [
    { balance, riskPerTrade, entryPrice, stopLoss, target },
    setInputValue,
  ] = useState(initialInputValues);
  const [state, dispatch] = useReducer(reducer, initialItems);

  console.log(state);

  return (
    <div className="bg-slate-800 px-4 py-6 rounded-md" role="card">
      <h1 className="text-slate-200 font-semibold text-2xl text-center">
        Position Size Calculator
      </h1>
      <div className=" border-b-[1px] py-6">
        <FormRow label="Balance">
          <Input
            type="text"
            id="balance"
            defaultValue={balance}
            setInputValue={setInputValue}
          />
        </FormRow>

        <FormRow label="Risk per trade %">
          <Input type="text" id="riskPerTrade" defaultValue={riskPerTrade} />
        </FormRow>

        <FormRow label="Entry price">
          <Input type="text" id="entryPrice" value={entryPrice} />
        </FormRow>

        <FormRow label="Stop loss">
          <Input type="text" id="stopLoss" value={stopLoss} />
        </FormRow>

        <FormRow label="Target">
          <Input type="text" id="target" value={target} />
        </FormRow>
      </div>
      <div className="mt-2 py-6 border-b-[1px] text-slate-100 ">
        <ResultList>
          Target %<span className="font-semibold">0.24%</span>
        </ResultList>
        <ResultList>
          Stop loss %<span className="font-semibold">0.24%</span>
        </ResultList>
        <ResultList>
          Risk/reward ratio<span className="font-semibold">0.24%</span>
        </ResultList>
      </div>
      <div className="mt-2 py-6 border-b-[1px] text-slate-100 ">
        <ResultList>
          Potential profit
          <span className="font-semibold">{formatCurrency(0.24)}</span>
        </ResultList>
        <ResultList>
          Value at risk
          <span className="font-semibold">{formatCurrency(0.24)}</span>
        </ResultList>
      </div>
      <div className="flex flex-col items-center justify-center px-2 py-3.5">
        <p className="text-sm text-slate-600 mt-2">Your position size</p>
        <span className="text-2xl font-bold text-slate-100 mt-2">0.04 Lot</span>
      </div>
    </div>
  );
}

export default Card;
