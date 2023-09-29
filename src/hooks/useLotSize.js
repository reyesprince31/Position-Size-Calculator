export function useLotSize() {
  function lotSizing(riskPercent, stopLoss) {
    const calculatedLotSize =
      riskPercent < 5
        ? 0.01
        : 0.01 *
          ((riskPercent / 5 + riskPercent / ((stopLoss * 125) / 100) / 5) / 2);

    // Round to a fixed number of decimal places before using .toFixed()
    const roundedLotSize = Number(calculatedLotSize.toFixed(2)) + " lot";

    return roundedLotSize;
  }
  return { lotSizing };
}
