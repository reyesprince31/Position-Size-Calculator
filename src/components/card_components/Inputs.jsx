export default function Inputs({
  name,
  name_Id,
  toSetInputPos,
  posSize,
  toSetPosSize,
  value,
}) {
  function handleChange(e) {
    const newValue = e.target.value;
    const key = e.target.id;
    toSetInputPos((prevState) => ({ ...prevState, [key]: newValue }));
  }

  function togglePosSizeCorrect() {
    toSetPosSize((prevState) => ({
      ...prevState,
      isCorrect: !prevState.isCorrect,
    }));
  }

  return (
    <div className="border-input">
      <label htmlFor={name_Id} onClick={togglePosSizeCorrect}>
        {name}
      </label>
      {posSize.isCorrect && (
        <input
          id={name_Id}
          type="number"
          placeholder="Enter numeric value..."
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
