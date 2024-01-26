import React, { useEffect, useState } from "react";
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

export default function ActionPage() {
  const { actionsBase, singleAction, setSingleAction } =
    useContext(FormContext);



  const [fightInfo, setFightInfo] = useState();
  const { fightId } = useParams();

  const [qualityCheck, setQualityCheck] = useState({
    status: fightInfo?.status || "",
  });
  const getFightInfo = async () => {
    setFightInfo(await getData(`/fight-infos/${fightId}`));
  };

  useEffect(() => {
    getFightInfo();
  }, [qualityCheck]);

  useEffect(() => {
    setSingleAction(fightInfo?.fight_statistic || []);
  }, []);

  // const { data: fightInfo, isLoading } = useSWR(
  //   fightInfosEndpoints.byId(fightId),
  //   getData
  // );

  useEffect(() => {
    setSingleAction(fightInfo?.fight_statistic || []);
  }, []);
  console.log("fightiddd", fightInfo);

  return (
    <>
      {/* <Notification /> */}
      {/* {!isLoading ? ( */}
        <>
          <Header
            fightInfo={fightInfo}
            qualityCheck={qualityCheck}
            setQualityCheck={setQualityCheck}
          />
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
          ){" "}
        </>
      ) 
        {/* <p className="text-white">Loading...</p> */}
      {/* )} */}
    </>
  );
}
