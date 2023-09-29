import { useResult } from "../../context/ResultContext";
import { useFormat } from "../../hooks/useFormat";

import AccountSizeSection from "./AccountSizeSection";
import InputValuesSection from "./InputValuesSection";
import ResultNumberSection from "./ResultNumberSection";

function Result() {
  const { accountSize, lossValue, tradeMargin, positionSize } = useResult();
  const { formatCurrency } = useFormat();

  const formattedAccountSize = formatCurrency(accountSize);
  const formattedLossValue = formatCurrency(lossValue);
  const formattedTradeMargin = formatCurrency(tradeMargin);
  const formattedPosSize = formatCurrency(positionSize);

  return (
    <div className="result">
      <h2>Your Position Size</h2>
      <AccountSizeSection formattedAccountSize={formattedAccountSize} />

      <InputValuesSection />

      <ResultNumberSection
        formattedLossValue={formattedLossValue}
        formattedTradeMargin={formattedTradeMargin}
        formattedPosSize={formattedPosSize}
      />
    </div>
  );
}

export default Result;
