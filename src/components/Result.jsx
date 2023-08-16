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
      <div className="account-size">
        <p className="result-p">Account Size</p>
        <span>{formattedAccountSize}</span>
      </div>
      <div className="inputValue">
        <p className="result-p">
          Leverage
          <span> {leverage}x</span>
        </p>
        <p className="result-p">
          Stoploss
          <span> {stopLoss}%</span>
        </p>
        <p className="result-p">
          Risk Per Trade
          <span> {riskPercentage}%</span>
        </p>
      </div>
      <div className="numbers">
        {!isCorrect ? (
          "Enter your position"
        ) : (
          <>
            <p>
              Loss value:
              <span style={{ color: "red" }}>{formattedLossValue}</span>
            </p>
            <p>
              Trade Margin: <span>{formattedTradeMargin} </span>
            </p>
            <p>
              Position Size: <span>{formattedPosSize} </span>
            </p>
            <p>
              Forex Lot Size: <span>{forexLotSize} lot</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Result;
