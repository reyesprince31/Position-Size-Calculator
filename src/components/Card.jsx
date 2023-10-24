// import { useReducer } from "react";
// import {
//   calculateDirection,
//   calculateLotSize,
//   calculatePercentageDifference,
//   calculatePotentialGain,
//   calculatePotentialProfit,
//   calculateTradeMargin,
//   calculateValueAtRisk,
// } from "../utils/helpers";

import Inputs from "./Inputs";
import Ratio from "./Ratio";
import PosSize from "./PosSize";
import CardContainer from "../ui/CardContainer";
import { usePositionCalculator } from "../contexts/PosSizeContext";

function Card() {
  const { state, dispatch } = usePositionCalculator();

  return (
    <>
      <CardContainer>
        <Inputs dispatch={dispatch} />
        <Ratio {...state} />
        <PosSize {...state} />
      </CardContainer>
    </>
  );
}

export default Card;
