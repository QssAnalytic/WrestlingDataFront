import React from "react";
import SelectBox from "../components/SelectBox";
import { useState } from "react";
import Chekbox from "./Chekbox";

export default function ActionForm() {
  const [formData, setFormData] = useState({
    matchId: 43214232,
    matchActions: [],
  });

  const [actionDatas, setActionDatas] = useState({});

  const [openSelect, setOpenSelect] = useState({
    action: false,
    techniques: false,
    score: false,
  });

  const toggleSelect = (e) => {
    setOpenSelect({
      ...openSelect,
      [e.currentTarget?.id]: !openSelect[e.currentTarget?.id],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      matchActions: [...formData.matchActions, actionDatas],
    }));

    console.log(actionDatas);
    console.log("formDta", formData);
  };

  return (
    <>
      <form className="w-full flex justify-between" onSubmit={handleSubmit}>
        <div className="action-left basis-[50%] flex flex-col gap-5">
          <SelectBox
            toggleSelect={toggleSelect}
            openSelect={openSelect}
            id={"action"}
            name={"action"}
            actionData={actionDatas}
            setActionDatas={setActionDatas}
          />
          <SelectBox
            toggleSelect={toggleSelect}
            openSelect={openSelect}
            id={"techniques"}
            name={"techniques"}
            actionData={actionDatas}
            setActionDatas={setActionDatas}
          />
          <div className="left-bottom flex justify-between">
            <SelectBox
              toggleSelect={toggleSelect}
              openSelect={openSelect}
              id={"score"}
              name={"score"}
              actionData={actionDatas}
              setActionDatas={setActionDatas}
              ok
            />
            <div className="second-container flex items-center">
              <label htmlFor="minute">Second:</label>
              <div className="time flex justify-between px-3 py-5 bg-wMain gap-3">
                <div className="minute basis-[50%]">
                  <input
                    type="text"
                    name="minute"
                    className="w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white text-center"
                  />
                </div>
                <p>:</p>
                <div className="second">
                  <input
                    type="text"
                    name="second"
                    className={`w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white text-center`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="action-right flex flex-col basis-[40%] gap-7 rounded">
          <div className="right-top pt-3 pb-11 px-14 bg-wMain flex flex-col xl:flex-row  w-full justify-around flex-wrap">
            <Chekbox checkboxName={"successfull"} setActionDatas={setActionDatas} actionDatas={actionDatas}/>
            <Chekbox checkboxName={"defense_reason"} setActionDatas={setActionDatas} actionDatas={actionDatas}/>
          </div>
          <div className="right-bottom self-end">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn-action w-[19rem] h-[3.125rem] bg-wBlue p-4 rounded text-[#C9D4EA]"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
