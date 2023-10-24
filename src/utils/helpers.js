export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

// const direction = entryPrice > stopLoss ? "Long" : "Short";

// const targetDifference = Math.abs(entryPrice - targetPrice);
// const lossDifference = Math.abs(entryPrice - stopLoss);

// const target = ((100 * targetDifference) / entryPrice).toFixed(2);
// const loss = ((100 * lossDifference) / entryPrice).toFixed(2);
// const ratio = (target / loss).toFixed(2);

// const lossLevPercent = leverage * stopLoss;

// const valueAtRisk = balance * (riskPerTrade / 100);
// const tradeMargin = (valueAtRisk / lossLevPercent) * 100;
// const potentialGain = leverage * target;
// const potentialProfit = (tradeMargin * potentialGain) / 100;
// const posSize = leverage * tradeMargin;

// const lotSize =
//   valueAtRisk < 5
//     ? 0.01
//     : (
//         (0.01 * (valueAtRisk / 5 + valueAtRisk / (stopLoss * 125) / 5)) /
//         2
//       ).toFixed(2);

function calculateDirection(entryPrice, stopLoss) {
  return entryPrice > stopLoss ? "Long" : "Short";
}

function calculatePercentageDifference(value1, value2, base) {
  return ((100 * Math.abs(value1 - value2)) / base).toFixed(2);
}

function calculateValueAtRisk(balance, riskPerTrade) {
  return balance * (riskPerTrade / 100);
}

function calculateTradeMargin(valueAtRisk, leverage, stopLoss) {
  const lossLevPercent = leverage * stopLoss;
  return (valueAtRisk / lossLevPercent) * 100;
}

function calculatePotentialGain(leverage, target) {
  return leverage * target;
}

function calculatePotentialProfit(tradeMargin, potentialGain) {
  return (tradeMargin * potentialGain) / 100;
}

function calculateLotSize(valueAtRisk, stopLoss) {
  if (valueAtRisk < 5) {
    return 0.01;
  } else {
    return (
      (0.01 * (valueAtRisk / 5 + valueAtRisk / (stopLoss * 125) / 5)) /
      2
    ).toFixed(2);
  }
}

export {
  calculateDirection,
  calculatePercentageDifference,
  calculateValueAtRisk,
  calculateTradeMargin,
  calculatePotentialGain,
  calculatePotentialProfit,
  calculateLotSize,
};
