import { useState } from "react";
import FormRow from "../ui/FormRow";

function Inputs({ dispatch }) {
  const [inputs, setInputs] = useState({
    balance: "100",
    riskPerTrade: "2",
    leverage: "125",
    entryPrice: "4.3",
    stopLoss: "4.5",
    targetPrice: "1",
  });

  const { balance, riskPerTrade, entryPrice, stopLoss, targetPrice, leverage } =
    inputs;

  function handleInputChange(key, value) {
    setInputs({ ...inputs, [key]: Number(value) });
  }

  function handleInputBlur() {
    // Dispatch the "calculate" action on input blur
    if (entryPrice && stopLoss) {
      console.log("ty");
      dispatch({
        type: "calculate",
        payload: {
          balance,
          riskPerTrade,
          entryPrice,
          stopLoss,
          targetPrice,
          leverage,
        },
      });
    }
  }

  return (
    <div className=" border-b-[1px] py-6">
      <FormRow label="Balance">
        <input
          className="px-2 py-[1px]"
          type="number"
          id="balance"
          onChange={(e) => handleInputChange("balance", e.target.value)}
          onBlur={() => handleInputBlur()}
          value={balance}
        />
      </FormRow>

      <FormRow label="Risk per trade %">
        <input
          className="px-2 py-[1px]"
          type="number"
          id="riskPerTrade"
          onChange={(e) => handleInputChange("riskPerTrade", e.target.value)}
          onBlur={() => handleInputBlur()}
          value={riskPerTrade}
        />
      </FormRow>

      <FormRow label="leverage">
        <input
          className="px-2 py-[1px]"
          type="number"
          id="leverage"
          onChange={(e) => handleInputChange("leverage", e.target.value)}
          onBlur={() => handleInputBlur()}
          value={leverage}
        />
      </FormRow>

      <FormRow label="Entry price">
        <input
          className="px-2 py-[1px]"
          type="number"
          id="entryPrice"
          onChange={(e) => handleInputChange("entryPrice", e.target.value)}
          onBlur={() => handleInputBlur()}
          value={entryPrice}
        />
      </FormRow>

      <FormRow label="Stop loss">
        <input
          className="px-2 py-[1px]"
          type="number"
          id="stopLoss"
          onChange={(e) => handleInputChange("stopLoss", e.target.value)}
          onBlur={() => handleInputBlur()}
          value={stopLoss}
        />
      </FormRow>

      <FormRow label="Target">
        <input
          className="px-2 py-[1px]"
          type="number"
          id="targetPrice"
          onChange={(e) => handleInputChange("targetPrice", e.target.value)}
          onBlur={() => handleInputBlur()}
          value={targetPrice}
        />
      </FormRow>
    </div>
  );
}

export default Inputs;
