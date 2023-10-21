import React from "react";

export default function FormRow({ label, children }) {
  return (
    <div className="flex justify-between gap-4 items-center mt-2 ">
      {label && (
        <label className="text-slate-100 " htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
}
