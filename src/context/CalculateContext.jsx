/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const initialState = {
  lossValue: "",
  tradeMargin: "",
  positionSize: "",
  forexLotSize: "",

  isCorrect: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "calculate/posSize":
      return {
        ...state,
        isCorrect: true,
      };

    case "reset":
      return {
        ...state,
        accountSize: "",
        leverage: "",
        riskPercentage: "",
        stopLoss: "",
        isCorrect: false,
      };

    default:
      throw new Error("Wrong Action Type");
  }
}
const CalculateContext = createContext();

function CalculateProvider({ children }) {
  const [
    {
      lossValue,
      tradeMargin,
      positionSize,
      forexLotSize,

      isCorrect,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <CalculateContext.Provider
      value={{
        lossValue,
        tradeMargin,
        positionSize,
        forexLotSize,
        isCorrect,
        dispatch,
      }}>
      {children}
    </CalculateContext.Provider>
  );
}

function useCalculate() {
  const context = useContext(CalculateContext);
  if (context === undefined) throw new Error("Error Pre!");
  return context;
}

export { CalculateProvider, useCalculate };
