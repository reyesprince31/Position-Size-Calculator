import { useState } from "react";

export default function App() {
  const [posSize, setPosSize] = useState({
    lossValue: "",
    tradeMargin: "",
    positionSize: "",
    forexLotSize: "",
    isCorrect: false,
  });

  const [accountSize, setAccountSize] = useState("");
  const [leverage, setLeverage] = useState("");
  const [riskPercentage, setRiskPercentage] = useState("");
  const [stopLoss, setStopLoss] = useState("");

  function formatCurrency(value) {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      return numericValue.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return "";
  }

  const formattedAccountSize = formatCurrency(accountSize);
  const formattedLossValue = formatCurrency(posSize.lossValue);
  const formattedTradeMargin = formatCurrency(posSize.tradeMargin);
  const formattedPosSize = formatCurrency(posSize.positionSize);

  function calculate() {
    if (!accountSize || !leverage || !riskPercentage || !stopLoss) {
      // If any of the input fields are empty, show a message and return
      alert("Please fill in all the input fields.");
      return;
    }

    const riskUsd = accountSize * riskPercentage;
    const riskPercent = riskUsd / 100;
    const sLev = stopLoss * leverage;
    const tradeSize = riskUsd / sLev;
    const positionSize = leverage * tradeSize;

    function lotSizing(riskPercent) {
      const calculatedLotSize =
        riskPercent < 5
          ? 0.01
          : 0.01 *
            ((riskPercent / 5 + riskPercent / ((stopLoss * 125) / 100) / 5) /
              2);

      // Round to a fixed number of decimal places before using .toFixed()
      const roundedLotSize = Number(calculatedLotSize.toFixed(2));

      return roundedLotSize;
    }

    const objectRes = {
      lossValue: riskPercent.toFixed(2),
      tradeMargin: tradeSize.toFixed(2),
      positionSize: positionSize.toFixed(2),
      forexLotSize: lotSizing(riskPercent),
    };

    setPosSize((currValue) => ({
      ...currValue,
      ...objectRes,
      isCorrect: true,
    }));
  }

  return (
    <div className="App">
      <div className="card">
        <h1>Position Size Calculator</h1>
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
            {!posSize.isCorrect ? (
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
                  Forex Lot Size: <span>{posSize.forexLotSize} lot</span>
                </p>
              </>
            )}
          </div>
        </div>
        <div className="controls">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="border-input">
              <label htmlFor="account-size">Account Size</label>
              <input
                id="account-size"
                type="number"
                placeholder="e.g: ($) 1060.43 "
                value={accountSize}
                onChange={(e) => setAccountSize(e.target.value)}
              />
            </div>
            <div className="border-input">
              <label htmlFor="leverage">Leverage</label>
              <input
                id="leverage"
                type="number"
                placeholder="e.g: 125 (x)"
                value={leverage}
                onChange={(e) => setLeverage(e.target.value)}
              />
            </div>
            <div className="border-input">
              <label htmlFor="stop-loss">Stop Loss</label>
              <input
                id="stop-loss"
                type="number"
                placeholder="e.g: 0.57 (%)"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
              />
            </div>
            <div className="border-input">
              <label htmlFor="risk-percent">Risk Percentage</label>
              <input
                id="risk-percent"
                type="number"
                placeholder="e.g: 1 - 5 value at risk "
                value={riskPercentage}
                onChange={(e) => setRiskPercentage(e.target.value)}
              />
            </div>
            <button onClick={calculate}>Calculate</button>
            {posSize.isCorrect && (
              <button
                onClick={() => {
                  setAccountSize("");
                  setLeverage("");
                  setRiskPercentage("");
                  setStopLoss("");
                  setPosSize(!posSize.isCorrect);
                }}
              >
                Reset
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
