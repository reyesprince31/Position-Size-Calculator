import { useResult } from "../../context/ResultContext";

function InputValuesSection() {
  const { leverage, stopLoss, riskPercentage } = useResult();
  return (
    <div className="inputValue">
      <p className="result-p">
        Leverage
        {leverage && <span> {leverage}x</span>}
      </p>
      <p className="result-p">
        Stoploss
        {stopLoss && <span> {stopLoss}%</span>}
      </p>
      <p className="result-p">
        Risk Trade
        {riskPercentage && <span> {riskPercentage}%</span>}
      </p>
    </div>
  );
}

export default InputValuesSection;
