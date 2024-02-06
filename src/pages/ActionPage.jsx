import React, { useEffect } from "react";
import Header from "../components/Header";
import ActionCounter from "../components/Action/ActionCounter";
import ActionForm from "../components/Action/ActionForm";
import ActionTable from "../components/Table/ActionTable";
import { FormContext } from "../context/FormContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/api/requests";
import Notification from "../components/Modals/Notification";
import useSWR from "swr";
import { fightInfosEndpoints } from "../services/api/endponits";
import { FightContext } from "../context/FightContext";
import { ThreeDots } from "react-loader-spinner";

export default function ActionPage() {
  const { actionsBase, singleAction, setSingleAction } =
    useContext(FormContext);
  const { setStateFight } = useContext(FightContext);
  const { fightId } = useParams();

  useEffect(() => {
    setSingleAction(fightInfo?.fight_statistic || []);
  }, []);

  const {
    data: fightInfo,
    isLoading,
    mutate,
  } = useSWR(fightInfosEndpoints.byId(fightId), getData);

  useEffect(() => {
    setStateFight({
      author: fightInfo?.author,
      status: fightInfo?.status,
      check_author:
        fightInfo?.status === "checked" ? fightInfo?.check_author : "",
      order: fightInfo?.order,
    });
  }, [fightInfo]);

  return (
    <>
      {!isLoading ? (
        <div>
          <Header fightInfo={fightInfo} mutate={mutate} isLoading={isLoading} />
          <main className="main px-9">
            <div className="container m-auto">
              <div className="main-inner mb-7">
                <div className="action-form text-white flex flex-col gap-1">
                  <ActionCounter
                    fightInfo={fightInfo}
                    actionsBase={actionsBase}
                    setActiveAction={setSingleAction}
                    activeAction={singleAction}
                  />
                  <div className="flex flex-col gap-8 bg-wSecMain border border-wGreen rounded-md py-5 px-10">
                    <ActionForm />
                    <ActionTable fightStatistic={fightInfo?.fight_statistic} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="w-[100vh] h-[100%] translate-x-[60%] translate-y-[40%]">
          <ThreeDots
            visible={true}
            width="400"
            color="#eaeaea"
            radius="9"
            ariaLabel="three-dots-loading"
            className="flex justify-center items-center h-[100%]"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
}
