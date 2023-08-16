function Inputs({ name, name_Id, toSetInputPos, value }) {
  function handleChange(e) {
    const value = e.target.value;
    const key = e.target.id;
    toSetInputPos((c) => ({ ...c, [key]: value }));
  }
  return (
    <div className="border-input">
      <label htmlFor={name_Id}>{name}</label>
      <input
        id={name_Id}
        type="number"
        placeholder="0"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Inputs;
