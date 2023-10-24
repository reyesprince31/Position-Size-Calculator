function Button({ name, calculate, reset }) {
  return (
    <>
      <button onClick={name === "Calculate" ? calculate : reset}>{name}</button>
    </>
  );
}

export default Button;
