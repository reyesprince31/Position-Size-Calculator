export default function Select({ label, value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="border-input">
      <label htmlFor={label}>
        {label} {value}
      </label>

      {label === "Leverage" && (
        <select value={value} onChange={handleChange}>
          <option value={125}>125x</option>
          <option value={100}>100x</option>
          <option value={50}>50x</option>
          <option value={20}>20x</option>
          <option value={10}>10x</option>
        </select>
      )}

      {label === "Risk Percentage" && (
        <select value={value} onChange={handleChange}>
          <option value={5}>5%</option>
          <option value={4}>4%</option>
          <option value={3}>3%</option>
          <option value={2}>2%</option>
          <option value={1}>1%</option>
        </select>
      )}
    </div>
  );
}
