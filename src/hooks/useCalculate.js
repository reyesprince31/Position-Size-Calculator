import { useResult } from "../context/ResultContext";
// import { useLotSize } from "../hooks/useLotSize";

export function useCalculate() {
  const { accountSize, stopLoss, leverage, riskPercentage } = useResult();

  //   const { lotSizing } = useLotSize();

  function calculate() {
    const riskUsd = accountSize * riskPercentage;
    const riskPercent = riskUsd / 100;
    const sLev = stopLoss * leverage;
    const tradeSize = riskUsd / sLev;
    const positionSize = leverage * tradeSize;

    return { riskPercent, tradeSize, positionSize };

    // const objectRes = {
    //   lossValue: riskPercent,
    //   tradeMargin: tradeSize,
    //   positionSize: positionSize,
    //   forexLotSize: lotSizing(riskPercent),
    // };

    // if (!accountSize || !leverage || !riskPercentage || !stopLoss) {
    //   // If any of the input fields are empty, show a message and return
    //   alert("Please fill in all the input fields.");
    //   return;
    // }

    // dispatch({ type: "calculate/posSize", payload: objectRes });
  }

  return { calculate };
}
