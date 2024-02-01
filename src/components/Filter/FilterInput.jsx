import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export default function FilterInput({ id, setInput, input, placeholder }) {
  const [inputV, setInputV] = useState(input?.[id]);

  const inputVal = useDebounce(inputV,1500);


  useEffect(() => {
    setInput((prevInputs) => ({
      ...prevInputs,
      [id]: inputVal,
    }));
  }, [inputVal]);

  return (
    <>
      <div className="filter-input rounded-lg">
        <input
          type="text"
          value={inputV}
          onChange={(e) => setInputV(e.target.value)}
          className="border-none bg-[#1B3458] truncate outline-none h-full w-full rounded px-3 py-2"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
