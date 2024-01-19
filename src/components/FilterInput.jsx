import React from "react";

export default function FilterInput({ id, setInput, input }) {
  return (
    <>
      <div className="filter-input rounded-lg">
        <input
          type="text"
          value={input[id]}
          onChange={(e) =>
            setInput((prevInputs) => ({
              ...prevInputs,
              [id]: e.target.value,
            }))
          }
          className="border-none bg-[#1B3458] outline-none h-full w-full rounded px-3 py-2"
          placeholder="Enter Match ID:"
        />
      </div>
    </>
  );
}
