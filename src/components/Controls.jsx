import Button from "./Button";
import Inputs from "./Input";
import Select from "./Select";
import { useResult } from "../context/ResultContext";

function Controls() {
  const { accountSize, stopLoss, leverage, riskPercentage, dispatch } =
    useResult();

  function handleSubmit(e) {
    e.preventDefault();
    if (!accountSize || !stopLoss || !leverage || !riskPercentage) return null;
    console.log(accountSize, stopLoss, leverage, riskPercentage);
  }

  return (
    <div className="controls">
      <form onSubmit={handleSubmit}>
        <Inputs
          label="Account Size"
          value={accountSize}
          onChange={(value) =>
            dispatch({ type: "accountSize", payload: value })
          }
        />
        <Inputs
          label="Stop Loss"
          value={stopLoss}
          onChange={(value) => dispatch({ type: "stopLoss", payload: value })}
        />

        <Select
          label="Leverage"
          value={leverage}
          onChange={(value) => dispatch({ type: "leverage", payload: value })}
        />
        <Select
          label="Risk Percentage"
          value={riskPercentage}
          onChange={(value) =>
            dispatch({ type: "riskPercentage", payload: value })
          }
        />

        <Button type="submit">Calculate</Button>
        <Button type="reset" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </form>
    </div>
  );
}

export default Controls;
