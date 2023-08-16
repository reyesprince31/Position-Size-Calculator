import AccountSizeSection from "./AccountSizeSection";
import InputValuesSection from "./InputValuesSection";
import ResultNumberSection from "./ResultNumberSection";

function Result({
  formatCurrency,
  accountSize,
  leverage,
  stopLoss,
  riskPercentage,
  forexLotSize,
  lossValue,
  tradeMargin,
  positionSize,
  isCorrect,
}) {
  const formattedAccountSize = formatCurrency(accountSize);
  const formattedLossValue = formatCurrency(lossValue);
  const formattedTradeMargin = formatCurrency(tradeMargin);
  const formattedPosSize = formatCurrency(positionSize);

  return (
    <div className="result">
      <h2>Your Position Size</h2>
      <AccountSizeSection formattedAccountSize={formattedAccountSize} />
      <InputValuesSection
        leverage={leverage}
        stopLoss={stopLoss}
        riskPercentage={riskPercentage}
      />
      <ResultNumberSection
        isCorrect={isCorrect}
        formattedLossValue={formattedLossValue}
        formattedTradeMargin={formattedTradeMargin}
        formattedPosSize={formattedPosSize}
        forexLotSize={forexLotSize}
      />
    </div>
  );
}

export default Result;
