import Card from "./components/Card";
import { CalculateProvider } from "./context/CalculateContext";
import { ResultProvider } from "./context/ResultContext";

export default function App() {
  return (
    <div className="App">
      <CalculateProvider>
        <ResultProvider>
          <Card />
        </ResultProvider>
      </CalculateProvider>
    </div>
  );
}
