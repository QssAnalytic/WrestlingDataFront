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

  const [actionDatas, setActionDatas] = useState({});
  const [actionBase, setActionBase] = useState([]);
  const [activeAction, setActiveAction] = useState();
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
    console.log("formId", e.currentTarget.parentElement.parentElement.id);
    setFormData((prevData) => ({
      ...prevData,
      ...actionDatas,
    }));
  };

  console.log(actionBase);

  return (
    <>
      <ActionCounter
        setActionBase={setActionBase}
        actionsBase={actionBase}
        setActiveAction={setActiveAction}
        activeAction={activeAction}
      />

      {actionBase.map((actionForm, index) => {
        return (
          <form
            id={actionForm.actionId}
            className="w-full flex justify-between"
            onSubmit={handleSubmit}
          >
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
                <Time />
              </div>
            </div>
            <div className="action-right flex flex-col basis-[40%] gap-7 rounded">
              <div className="right-top pt-3 pb-11 px-14 bg-wMain flex flex-col xl:flex-row  w-full justify-around flex-wrap">
                <Chekbox
                  checkboxName={"Succesful"}
                  setActionDatas={setActionDatas}
                  actionDatas={actionDatas}
                />
                <Chekbox
                  checkboxName={"defense_reason"}
                  setActionDatas={setActionDatas}
                  actionDatas={actionDatas}
                />
              </div>
              <div className="right-bottom self-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn-action w-[19rem] h-[3.125rem] bg-wBlue p-4 rounded text-[#C9D4EA]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        );
      })}
    </>
  );
}
