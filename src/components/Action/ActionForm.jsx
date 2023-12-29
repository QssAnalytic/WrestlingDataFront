import React, { useContext, useEffect } from "react";
import SelectBox from "../SelectBox";
import { useState } from "react";
import Chekbox from "../Chekbox";
import Time from "../Time";
import { FormContext } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function ActionForm() {
  const { addAction, actionsBase, singleAction, setSingleAction } =
    useContext(FormContext);

  const { control, handleSubmit, setValue, formState, reset, clearErrors } =
    useForm({
      defaultValues: {
        ...singleAction,
      },
    });

  const [err, setErr] = useState([]);

  useEffect(() => {
    reset({
      action: singleAction.action || null,
      Succesful: singleAction.Succesful || null,
      techniques: singleAction.techniques || null,
      score: singleAction.score || null,
      fighter: singleAction.fighter || null,
      opponent: singleAction.opponent || null,
      time: 0,
    });
  }, [singleAction, reset]);

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

  console.log("errors", err);
  console.log("formstate is valid", formState.isValid);
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
                    clearErrors={clearErrors}
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
                    clearErrors={clearErrors}
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
                      clearErrors={clearErrors}
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
                <Controller
                  name={"Succesful"}
                  defaultValue={singleAction.Succesful}
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Chekbox
                      name={"Succesful"}
                      checkboxName={"Succesful"}
                      setActiveAction={setSingleAction}
                      activeAction={singleAction}
                      errors={formState}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name={"defense_reason"}
                  defaultValue={singleAction["defense_reason"]}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Chekbox
                      name={"Defense Reason"}
                      checkboxName={"defense_reason"}
                      setActiveAction={setSingleAction}
                      activeAction={singleAction}
                      errors={formState}
                    />
                  )}
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
      <DevTool control={control} />
    </>
  );
}
