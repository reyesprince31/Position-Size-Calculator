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
          <div className="numbers">
            {!posSize.isCorrect ? (
              "Enter your position"
            ) : (
              <>
                <p>
                  Loss value:{" "}
                  <span style={{ color: "red" }}>$ {posSize.lossValue}</span>
                </p>
                <p>
                  Trade Margin: <span>$ {posSize.tradeMargin} </span>
                </p>
                <p>
                  Position Size: <span>$ {posSize.positionSize} </span>
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
            <input
              type="number"
              placeholder="Account Size"
              value={accountSize}
              onChange={(e) => setAccountSize(e.target.value)}
            />
            <input
              type="number"
              placeholder="Leverage"
              value={leverage}
              onChange={(e) => setLeverage(e.target.value)}
            />

            <input
              type="number"
              placeholder="Stop Loss %"
              value={stopLoss}
              onChange={(e) => setStopLoss(e.target.value)}
            />

            <input
              type="number"
              placeholder="Risk %"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(e.target.value)}
            />
            <button onClick={calculate}>Calculate</button>
            {posSize.isCorrect && (
              <button
                onClick={() => {
                  setAccountSize("");
                  setLeverage("");
                  setRiskPercentage("");
                  setStopLoss("");
                  setPosSize(!posSize.isCorrect);
                }}>
                Reset
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
