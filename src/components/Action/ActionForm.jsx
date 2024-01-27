import React, { useContext, useEffect } from "react";
import SelectBox from "../FormInputs/SelectBox";
import { useState } from "react";
import Chekbox from "../FormInputs/Chekbox";
import Time from "../FormInputs/Time";
import { FormContext } from "../../context/FormContext";
import Notification from "../Modals/Notification";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { getData, postData, updateData } from "../../services/api/requests";
import toast, { Toaster } from "react-hot-toast";

export default function ActionForm() {
  const {
    addAction,
    actionsBase,
    singleAction,
    setSingleAction,
    editable,
    setEditable,
    response,
    setResponse,
  } = useContext(FormContext);

  const [actionNames, setActionNames] = useState([]);
  const [techniqueNames, setTechniqueNames] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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
    setTechniqueNames(await getData("/techniques/"));
  };

  useEffect(() => {
    getAllDatas();
  }, []);

  useEffect(() => {
    reset({
      action_name_id: singleAction?.action_name_id || null,
      successful: singleAction?.successful || null,
      defense_reason: singleAction?.["defense_reason"] || null,
      technique_id: singleAction?.technique_id || null,
      score_id: singleAction?.score_id || null,
      fighter_id: singleAction?.fighter_id || null,
      opponent_id: singleAction?.opponent_id || null,
      action_time_second: singleAction?.action_time_second || null,
      fight_id: null,
    });
  }, [singleAction, reset]);

  const [openSelect, setOpenSelect] = useState({
    action_name_id: false,
    technique_id: false,
    score: false,
  });

  const toggleSelect = (e) => {
    setOpenSelect({
      [Object.keys(openSelect)[0]]: false,
      [Object.keys(openSelect)[1]]: false,
      [e.currentTarget?.id]: !openSelect[e.currentTarget?.id],
    });
  };

  console.log("before post data", singleAction);
  const postAction = async (formData) => {
    try {
      const response = await postData(
        "/statistics/",
        {
          ...formData,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      addAction(response);
      console.log("try in response", response);
      toast("Successfully added", {
        style: { background: "green", color: "#eaeaea" },
      });
      setSingleAction('')

      // setSingleAction(response)
    } catch (err) {
      toast("Please fill correctly", {
        style: { background: "red", color: "#eaeaea" },
      });
      console.log("post err", err.response?.status);
    }
  };

  const putAction = async (action) => {
    console.log("put action id", action.id);
    try {
      const response = await updateData(
        `/statistics/${action.id}/`,
        {
          ...action,
          video_link: "https://example.com/",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("put response", response);
      addAction(response);
      setEditable(false);
      setSingleAction('')
    toast('Succesfully updated', {style : {background : 'green', color : '#eaeaea'}})
    } catch (err) {
    toast('Update error', {style : {background : 'red', color : '#eaeaea'}})
      console.log("put error", err);
    }
  };
  const handleSubmitFn = (data, e) => {
    e.preventDefault();
    !editable ? postAction(singleAction) : putAction(singleAction);
    console.log("posted data in submit fn", singleAction);
  };

  console.log("actionsBase", actionsBase);

  // action?.action_number === singleAction?.action_number

  return (
    <>
      {/* <Notification message={openModal?.message} modalName={openModal?.action}  setOpenModal={setOpenModal} openModal={openModal} />  */}
      {actionsBase?.map((action) => {
        {
          console.log("is equal", singleAction);
        }
        return action?.action_number === singleAction?.action_number ? (
          <form
            id={`${singleAction?.action_number}`}
            className={`w-full flex justify-between`}
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
                    id={"action_name"}
                    toggleSelect={toggleSelect}
                    openSelect={openSelect}
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
                    id={"technique"}
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
                <SelectBox
                  toggleSelect={toggleSelect}
                  openSelect={openSelect}
                  id={"score"}
                  name={"score"}
                  activeAction={singleAction}
                  setActiveAction={setSingleAction}
                  ok={true}
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
                <Chekbox
                  name={"successful"}
                  checkboxName={"successful"}
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
                  id={singleAction?.action_number}
                  className={`${
                    singleAction.isSubmitted ? "hidden" : "block"
                  } btn-action w-[19rem] h-[3.125rem] bg-wBlue p-4 rounded text-[#C9D4EA]`}
                >
                  Submit
                </button>
                <Toaster />
              </div>
            </div>
          </form>
        ) : null;
      })}
      {/* <DevTool control={control} /> */}
    </>
  );
}
