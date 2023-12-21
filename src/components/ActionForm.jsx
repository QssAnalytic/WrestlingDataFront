import React from "react";
import SelectBox from "../components/SelectBox";
import { useState, useEffect, useRef } from "react";

export default function ActionForm() {
  const [success, setSuccess] = useState(null);
  const [translateEl, setTranslateEl] = useState("");
  const parentRef = useRef(null);

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

  useEffect(() => {
    setTranslateEl(`${parentRef.current?.clientWidth / 2}px`);
  }, [parentRef.current?.clientWidth]);

  const handleSuccess = () => {
    setSuccess((prev) => !prev);
    setTranslateEl(`${parentRef.current.clientWidth / 2 - 10}px`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      matchActions : [...formData.matchActions, actionDatas]
    }));

    console.log(actionDatas)
    console.log('formDta', formData)
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
            <div className="success-container flex flex-col basis-[45%] gap-3">
              <p className="text-center">Successfull : </p>
              <div
                className="success rounded-[3.5rem] overflow-x-hidden py-[0.4rem] px-[0.6rem] bg-[#1E264B]"
                ref={parentRef}
              >
                <div
                  className={`transition-all yes-no px-[1.12rem] py-[0.6rem] w-[50%] rounded-[3.5rem]  
                          ${
                            success === null
                              ? "bg-[#7A817A] h-11"
                              : `${!success ? "bg-wGreen" : "bg-[#D52B1E]"}`
                          }
                           flex items-center justify-center`}
                  onClick={handleSuccess}
                  style={
                    success
                      ? { transform: `translateX(${translateEl})` }
                      : { transform: "translateX(0)" }
                  }
                >
                  {success === null ? "" : `${success ? "No" : "Yes"}`}
                </div>
              </div>
            </div>
            <div className="success-container flex flex-col basis-[45%] gap-3">
              <p className="text-center">Defense Reason : </p>
              <div className="success rounded-[3.5rem] py-[0.4rem] px-[0.6rem] bg-[#1E264B]">
                <div className="yes-no px-[1.12rem] py-[0.6rem] w-[50%] rounded-[3.5rem] bg-wGreen flex items-center justify-center">
                  Yes
                </div>
              </div>
            </div>
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
