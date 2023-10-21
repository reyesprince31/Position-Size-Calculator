import Button from "../../ui/Button";
import Inputs from "./Inputs";
function Controls({
  reset,
  calculate,
  toSetInputPos,
  toSetPosSize,
  posSize,
  inputSize,
}) {
  const inputFields = [
    { nameId: "accountSize", name: "Account Size" },
    { nameId: "leverage", name: "Leverage" },
    { nameId: "stopLoss", name: "Stop Loss" },
    { nameId: "riskPercentage", name: "Value at Risk" },
  ];

  return (
    <div className="controls">
      <form onSubmit={(e) => e.preventDefault()}>
        {inputFields.map((field) => (
          <Inputs
            key={field.nameId}
            name_Id={field.nameId}
            name={field.name}
            value={inputSize[field.nameId]}
            toSetInputPos={toSetInputPos}
            posSize={posSize}
            toSetPosSize={toSetPosSize}
          />
        ))}

        <Button name="Calculate" calculate={calculate} />
        {posSize.isCorrect && <Button name="Reset" reset={reset} />}
      </form>
    </div>
  );
}

export default Controls;
