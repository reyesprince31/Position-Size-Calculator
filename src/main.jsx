import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PosSizeProvider } from "./contexts/PosSizeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PosSizeProvider>
      <App />
    </PosSizeProvider>
  </React.StrictMode>
);
