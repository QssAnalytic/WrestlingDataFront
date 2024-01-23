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

export default function ActionPage() {
  const { actionsBase, singleAction, setSingleAction } =
    useContext(FormContext);

  const [fightInfo, setFightInfo] = useState();
  const { fightId } = useParams();

  const getFightInfo = async () => {
    setFightInfo(await getData(`/fight-infos/${fightId}`));
  };

  useEffect(() => {
    getFightInfo();
    setSingleAction(fightInfo?.fight_statistic || []);
  }, []);
  console.log("fightiddd", fightInfo);

  return (
    <div>
      {/* <Notification /> */}
      <Header fightInfo={fightInfo} />
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
  );
}
