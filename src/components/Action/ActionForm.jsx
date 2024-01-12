import React, { useContext, useEffect } from "react";
import SelectBox from "../SelectBox";
import { useState } from "react";
import Chekbox from "../Chekbox";
import Time from "../Time";
import { FormContext } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useParams } from "react-router-dom";
import { getData, postData } from "../../services/api/requests";

export default function ActionForm() {
  const { addAction, actionsBase, singleAction, setSingleAction } =
    useContext(FormContext);

  const [actionNames, setActionNames] = useState([]);
  const [techniqueNames, setTechniqueNames] = useState([]);

  const {
    control,
    handleSubmit,
    setValue,
    formState,
    reset,
    clearErrors,
    watch,
  } = useForm({
    defaultValues: {
      ...singleAction,
    },
  });

  const getAllDatas = async () => {
    setActionNames(await getData("/actions/"));
    setTechniqueNames(await getData("/techniques"));
  };

  useEffect(() => {
    getAllDatas();
  }, []);

  useEffect(() => {
    reset({
      action_name_id: singleAction.action_name_id || null,
      successful: singleAction.successful || null,
      defense_reason: singleAction?.["defense_reason"] || null,
      technique_id: singleAction.technique_id || null,
      score: singleAction.score || null,
      fighter_id: singleAction.fighter_id || null,
      opponent_id: singleAction.opponent_id || null,
      action_time_second: singleAction.action_time_second || null,
      fight_id: null,
    });
  }, [singleAction, reset]);

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

  const postAction = async (formData) => {
    try {
      console.log("before post data", singleAction);
      const response = await postData(
        "/statistics/",
        {
          ...formData,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("try in response", response);     
    } catch (err) {
      console.log("Oops something went wrong");
    }
  };

  const handleSubmitFn = (data, e) => {
    e.preventDefault();
    const { action_number } = singleAction;
    addAction(action_number);
    postAction(singleAction);
    console.log("posted data in submit fn", singleAction);
  };

  console.log("actionsBase", actionsBase);
  // console.log("active action context in global", singleAction);

  return (
    <>
      {actionsBase?.map((action) => {
        return action?.action_number === singleAction?.action_number ? (
          <form
            id={`${action?.action_number}`}
            className={`w-full flex justify-between ${
              action.isSubmitted ? "pointer-events-none opacity-[40%]" : null
            }`}
            onSubmit={handleSubmit(handleSubmitFn)}
            aria-disabled={true}
          >
            <div className="action-left basis-[50%] flex flex-col gap-5">
              <Controller
                name="action_name_id"
                control={control}
                defaultValue={singleAction.action_name_id}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <SelectBox
                    toggleSelect={toggleSelect}
                    openSelect={openSelect}
                    id={"action_name_id"}
                    name={"action"}
                    activeAction={singleAction}
                    setActiveAction={setSingleAction}
                    setValue={setValue}
                    errors={formState.errors?.action_name_id}
                    clearErrors={clearErrors}
                    datas={actionNames}
                  />
                )}
              />
              <Controller
                name="technique_id"
                control={control}
                defaultValue={singleAction.technique_id}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <SelectBox
                    toggleSelect={toggleSelect}
                    openSelect={openSelect}
                    id={"technique_id"}
                    name={"techniques"}
                    activeAction={singleAction}
                    setActiveAction={setSingleAction}
                    setValue={setValue}
                    errors={formState.errors?.technique_id}
                    clearErrors={clearErrors}
                    datas={techniqueNames}
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
                      errors={formState.errors?.score}
                      clearErrors={clearErrors}
                      ok
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="action_time_second"
                  rules={{ required: "It is required field" }}
                  defaultValue={singleAction.action_time_second}
                  render={({ field }) => (
                    <Time
                      id={"action_time_second"}
                      name={"action_time_second"}
                      activeAction={singleAction}
                      setActiveAction={setSingleAction}
                      errors={formState}
                    />
                  )}
                />
              </div>
            </div>
            <div className="action-right flex flex-col basis-[40%] gap-7 rounded">
              <div className="right-top pt-3 pb-11 px-14 bg-wMain flex flex-col xl:flex-row  w-full justify-around flex-wrap">
                <Controller
                  name={"successful"}
                  defaultValue={singleAction.successful}
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Chekbox
                      name={"successful"}
                      checkboxName={"successful"}
                      setActiveAction={setSingleAction}
                      activeAction={singleAction}
                      errors={formState}
                      formState={formState}
                      field={field}
                      setValue={setValue}
                      watch={watch}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name={"defense_reason"}
                  defaultValue={singleAction?.["defense_reason"]}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Chekbox
                      name={"Defense Reason"}
                      checkboxName={"defense_reason"}
                      setActiveAction={setSingleAction}
                      activeAction={singleAction}
                      errors={formState}
                      formState={formState}
                      field={field}
                      setValue={setValue}
                      watch={watch}
                    />
                  )}
                />
              </div>
              <div className="right-bottom self-end">
                <button
                  type="submit"
                  id={singleAction?.action_number}
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
