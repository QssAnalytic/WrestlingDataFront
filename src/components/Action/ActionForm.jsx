import React, { useContext, useEffect } from "react";
import SelectBox from "../SelectBox";
import { useState } from "react";
import Chekbox from "../Chekbox";
import Time from "../Time";
import { FormContext } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

export default function ActionForm() {
  const { addAction, actionsBase, singleAction, setSingleAction } =
    useContext(FormContext);

  const { control, handleSubmit, setValue, formState, reset } = useForm({
    defaultValues: {
      ...singleAction,
    },
  });

  useEffect(() => {
    reset({
      action: singleAction.action || null,
      techniques: singleAction.techniques || "",
      score: singleAction.score || null,
      time: 0,
    });
  }, [singleAction]);

  const [formData, setFormData] = useState({
    matchId: 43214232,
  });
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

  const handleSubmitFn = async (data, e) => {
    e.preventDefault();
    const { actionId } = singleAction;
    setFormData((prevData) => ({
      ...prevData,
      ...singleAction,
    }));
    addAction(actionId);

    console.log("dataa", data);
  };

  console.log("formstate", formState.errors);
  console.log("context", actionsBase);
  console.log("active action context", singleAction);
  console.log("formdata", formData);

  return (
    <>
      {actionsBase?.map((action) => {
        return action?.actionId === singleAction?.actionId ? (
          <form
            id={`${action?.actionId}`}
            className={`w-full flex justify-between ${
              action.isSubmitted ? "pointer-events-none opacity-[40%]" : null
            }`}
            onSubmit={handleSubmit(handleSubmitFn)}
            aria-disabled={true}
          >
            <div className="action-left basis-[50%] flex flex-col gap-5">
              <Controller
                name="action"
                control={control}
                defaultValue={singleAction.action}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <SelectBox
                    toggleSelect={toggleSelect}
                    openSelect={openSelect}
                    id={"action"}
                    name={"action"}
                    activeAction={singleAction}
                    setActiveAction={setSingleAction}
                    setValue={setValue}
                    errors={formState}
                  />
                )}
              />
              <Controller
                name="techniques"
                control={control}
                defaultValue={singleAction.techniques}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <SelectBox
                    toggleSelect={toggleSelect}
                    openSelect={openSelect}
                    id={"techniques"}
                    name={"techniques"}
                    activeAction={singleAction}
                    setActiveAction={setSingleAction}
                    setValue={setValue}
                    errors={formState}
                  />
                )}
              />
              <div className="left-bottom flex justify-between">
                <Controller
                  name="score"
                  control={control}
                  defaultValue={singleAction.score}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <SelectBox
                      toggleSelect={toggleSelect}
                      openSelect={openSelect}
                      id={"score"}
                      name={"score"}
                      activeAction={singleAction}
                      setActiveAction={setSingleAction}
                      setValue={setValue}
                      errors={formState}
                      ok
                    />
                  )}
                />

                <Time
                  id={"time"}
                  name={"time"}
                  activeAction={singleAction}
                  setActiveAction={setSingleAction}
                />
              </div>
            </div>
            <div className="action-right flex flex-col basis-[40%] gap-7 rounded">
              <div className="right-top pt-3 pb-11 px-14 bg-wMain flex flex-col xl:flex-row  w-full justify-around flex-wrap">
                <Chekbox
                  name={"Succesful"}
                  checkboxName={"Succesful"}
                  setActiveAction={setSingleAction}
                  activeAction={singleAction}
                />
                <Chekbox
                  name={"Defense Reason"}
                  checkboxName={"defense_reason"}
                  setActiveAction={setSingleAction}
                  activeAction={singleAction}
                />
              </div>
              <div className="right-bottom self-end">
                <button
                  type="submit"
                  id={singleAction?.actionId}
                  className={`${
                    action.isSubmitted ? "hidden" : "block"
                  } btn-action w-[19rem] h-[3.125rem] bg-wBlue p-4 rounded text-[#C9D4EA]`}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        ) : null;
      })}
    </>
  );
}
