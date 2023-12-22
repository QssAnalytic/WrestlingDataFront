import React from "react";
import SelectBox from "../components/SelectBox";
import { useState } from "react";
import Chekbox from "./Chekbox";
import Time from "./Time";
import ActionCounter from "./ActionCounter";

export default function ActionForm() {
  const [formData, setFormData] = useState({
    matchId: 43214232,
  });

  const [activeAction, setActiveAction] = useState({});
  const [actionBase, setActionBase] = useState([]);
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
    console.log("formId", e.currentTarget.id);
    setFormData((prevData) => ({
      ...prevData,
      ...activeAction
    }));

    setActionBase((prev)=>[, formData])
  };
  console.log("actions base", actionBase);
  console.log("formdata", formData);
  console.log("active action", activeAction);

  return (
    <>
      <ActionCounter
        setActionBase={setActionBase}
        actionsBase={actionBase}
        setActiveAction={setActiveAction}
        activeAction={activeAction}
      />

      <form
        id={`${activeAction?.actionId}`}
        className="w-full flex justify-between"
        onSubmit={handleSubmit}
      >
        <div className="action-left basis-[50%] flex flex-col gap-5">
          <SelectBox
            toggleSelect={toggleSelect}
            openSelect={openSelect}
            id={"action"}
            name={"action"}
            actionData={activeAction}
            setActionDatas={setActiveAction}
          />
          <SelectBox
            toggleSelect={toggleSelect}
            openSelect={openSelect}
            id={"techniques"}
            name={"techniques"}
            actionData={activeAction}
            setActionDatas={setActiveAction}
          />
          <div className="left-bottom flex justify-between">
            <SelectBox
              toggleSelect={toggleSelect}
              openSelect={openSelect}
              id={"score"}
              name={"score"}
              actionData={activeAction}
              setActionDatas={setActiveAction}
              ok
            />
            <Time />
          </div>
        </div>
        <div className="action-right flex flex-col basis-[40%] gap-7 rounded">
          <div className="right-top pt-3 pb-11 px-14 bg-wMain flex flex-col xl:flex-row  w-full justify-around flex-wrap">
            <Chekbox
              checkboxName={"Succesful"}
              setActionDatas={setActiveAction}
              actionDatas={activeAction}
            />
            <Chekbox
              checkboxName={"defense_reason"}
              setActionDatas={setActiveAction}
              actionDatas={activeAction}
            />
          </div>
          <div className="right-bottom self-end">
            <button
              type="button"
              id={activeAction?.actionId}
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
