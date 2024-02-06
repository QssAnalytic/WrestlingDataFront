import React from "react";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import CreateInput from "../components/NewMatch/CreateInput";

export default function withInputField(WrappedComponent) {
  return function EnhancedComponet(props) {
    const [newInput, setNewInput] = useState(false);

    console.log('propss', props.setValue)
    const handleAddNew = () => {
      setNewInput((prev) => true);
    };

    return (
      <div className="flex flex-col">
        {!newInput ? (
          <WrappedComponent {...props} />
        ) : (
          // This component is responsible for if the user want to add new fightter or anything, he/she can enter succesfully through the help of it
          <CreateInput
            id={props.id}
            name={props.id}
            value={props.value}
            setValue={props.setValue}
            // type={"text"}
          />
        )}

        <div className="add-new" onClick={handleAddNew}>
          <button
            className="flex text-[#eaeaea] items-center transition-all duration-200 hover:text-green-300"
            type="button"
          >
            <MdAdd />
            Add new one
          </button>
        </div>
      </div>
    );
  };
}
