/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const ResultContext = createContext();

const initialState = {
  accountSize: "",
  leverage: "",
  riskPercentage: "",
  stopLoss: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "accountSize":
      return { ...state, accountSize: action.payload };
    case "stopLoss":
      return {
        ...state,
        stopLoss: action.payload,
      };
    case "leverage":
      return {
        ...state,
        leverage: action.payload,
      };
    case "riskPercentage":
      return {
        ...state,
        riskPercentage: action.payload,
      };
    case "reset":
      return {
        ...state,
        accountSize: "",
        leverage: "",
        riskPercentage: "",
        stopLoss: "",
      };

    default:
      return state;
  }
}

function ResultProvider({ children }) {
  const [{ accountSize, leverage, riskPercentage, stopLoss }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <ResultContext.Provider
      value={{ accountSize, leverage, riskPercentage, stopLoss, dispatch }}>
      {children}
    </ResultContext.Provider>
  );
}
function useResult() {
  const context = useContext(ResultContext);
  return context;
}

export { ResultProvider, useResult };
