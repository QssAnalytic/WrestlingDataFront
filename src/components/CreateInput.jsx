import React from "react";

export default function CreateInput({ id, name, value, setValue, type }) {
  const handleInput = (inputVal) => {
    setValue((prev) => ({
      ...prev,
      [id]: (id === "weight_category") ? Number(inputVal) : inputVal,
    }));
  };

  return (
    <>
      <div className="create-input flex flex-col gap-[0.62rem] text-[#eaeaea]">
        <label htmlFor="place">{name}:</label>
        <input
          type={type ? type : "text"}
          name={`${name.toLowerCase()}`}
          id={id}
          value={value?.[id]}
          className="bg-[#575968] rounded px-2 py-2 outline-none"
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
    </>
  );
}
