export default function Input({
  type,
  id: cssIdName,
  defaultValue,
  setInputValue,
  value,
}) {
  return (
    <>
      <input
        className="px-1.5 py-[2px] bg-slate-200"
        type={type}
        id={cssIdName}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
}
