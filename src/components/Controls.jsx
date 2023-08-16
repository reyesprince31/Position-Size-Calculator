import Button from "./Button";
import Inputs from "./Inputs";
function Controls({ reset, calculate, toSetInputPos, posSize, inputSize }) {
  return (
    <div className="controls">
      <form onSubmit={(e) => e.preventDefault()}>
        <Inputs
          name_Id="accountSize"
          name="Account Size"
          value={inputSize.accountSize}
          toSetInputPos={toSetInputPos}
        />
        <Inputs
          name_Id="leverage"
          name="Leverage"
          value={inputSize.leverage}
          toSetInputPos={toSetInputPos}
        />
        <Inputs
          name_Id="stopLoss"
          name="Stop Loss"
          value={inputSize.stopLoss}
          toSetInputPos={toSetInputPos}
        />
        <Inputs
          name_Id="riskPercentage"
          name="Value at Risk"
          value={inputSize.riskPercentage}
          toSetInputPos={toSetInputPos}
        />

        <Button name="Calculate" calculate={calculate} />
        {posSize.isCorrect && <Button name="Reset" reset={reset} />}
      </form>
    </div>
  );
}

export default Controls;
