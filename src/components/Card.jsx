import { useState } from "react";
import Result from "./Result";
import Controls from "./Controls";

function Card() {
  const [posSize, setPosSize] = useState({
    lossValue: "",
    tradeMargin: "",
    positionSize: "",
    forexLotSize: "",
    isCorrect: false,
  });

  const [inputtedPositionSize, setInputtedPositionSize] = useState({
    accountSize: "",
    leverage: "",
    riskPercentage: "",
    stopLoss: "",
  });

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

  function calculate() {
    if (
      !inputtedPositionSize.accountSize ||
      !inputtedPositionSize.leverage ||
      !inputtedPositionSize.riskPercentage ||
      !inputtedPositionSize.stopLoss
    ) {
      // If any of the input fields are empty, show a message and return
      alert("Please fill in all the input fields.");
      return;
    }

    const riskUsd =
      inputtedPositionSize.accountSize * inputtedPositionSize.riskPercentage;
    const riskPercent = riskUsd / 100;
    const sLev = inputtedPositionSize.stopLoss * inputtedPositionSize.leverage;
    const tradeSize = riskUsd / sLev;
    const positionSize = inputtedPositionSize.leverage * tradeSize;

    function lotSizing(riskPercent) {
      const calculatedLotSize =
        riskPercent < 5
          ? 0.01
          : 0.01 *
            ((riskPercent / 5 +
              riskPercent / ((inputtedPositionSize.stopLoss * 125) / 100) / 5) /
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

  function reset() {
    setInputtedPositionSize({
      accountSize: "",
      leverage: "",
      riskPercentage: "",
      stopLoss: "",
    });
    setPosSize(!posSize.isCorrect);
  }

  return (
    <div className="card">
      <h1>Position Size Calculator</h1>
      <Result
        formatCurrency={formatCurrency}
        {...posSize}
        {...inputtedPositionSize}
      />

      <Controls
        reset={reset}
        calculate={calculate}
        toSetInputPos={setInputtedPositionSize}
        posSize={posSize}
        inputSize={inputtedPositionSize}
      />
    </div>
  );
}

export default Card;