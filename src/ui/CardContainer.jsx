function CardContainer({ children }) {
  return (
    <div className="bg-slate-800 px-4 py-6 rounded-md" role="card">
      <h1 className="text-slate-200 font-semibold text-2xl text-center">
        Position Size Calculator
      </h1>
      <div className="text-center mt-4 text-slate-50 text-sm">
        Crypto / Forex
      </div>
      {children}
    </div>
  );
}

export default CardContainer;
