import React from "react";

function ResultNumberSection({
  isCorrect,
  formattedLossValue,
  formattedTradeMargin,
  formattedPosSize,
  forexLotSize,
}) {
  return (
    <div className="numbers">
      {!formattedLossValue ? (
        "Enter your position"
      ) : (
        <>
          <div className="pos-size">
            <p>Loss value:</p>
            <span style={{ color: "red" }}>{formattedLossValue}</span>
          </div>
          <div className="pos-size">
            <p>Trade Margin:</p>
            <span>{formattedTradeMargin} </span>
          </div>
          <div className="pos-size">
            <p>Position Size:</p>
            <span>{formattedPosSize} </span>
          </div>
          <div className="pos-size">
            <p>Forex Lot Size:</p>
            <span>{forexLotSize}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default ResultNumberSection;
