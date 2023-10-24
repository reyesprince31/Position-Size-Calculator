import ResultList from "../ui/ResultList";

function Ratio({ direction, target, loss, ratio }) {
  return (
    <div className="mt-2 py-6 border-b-[1px] text-slate-100 text-sm ">
      <ResultList>
        Direction
        <span className="font-semibold">{direction ? direction : "-"}</span>
      </ResultList>
      <ResultList>
        Target %<span className="font-semibold">{target}%</span>
      </ResultList>
      <ResultList>
        Stop loss %<span className="font-semibold">{loss}%</span>
      </ResultList>
      <ResultList>
        Risk/reward ratio<span className="font-semibold">{ratio} rr</span>
      </ResultList>
    </div>
  );
}

export default Ratio;
