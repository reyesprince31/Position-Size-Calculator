export default function Inputs({ label, value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <div className="border-input">
      <label htmlFor={label}>
        {label} {value}
      </label>

      <input
        id={label}
        type="number"
        placeholder="Enter numeric value..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
