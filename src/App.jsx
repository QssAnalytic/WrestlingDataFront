import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import ActionForm from "./components/Action/ActionForm";
import { useContext } from "react";
import { FormContext } from "./context/FormContext";
import ActionCounter from "./components/Action/ActionCounter";

export default function App() {
  const { actionsBase, singleAction, setSingleAction } =
    useContext(FormContext);

  return (
    <>
      <Header />
      <main className="main">
        <div className="container m-auto">
          <div className="main-inner mb-7">
            <div className="action-form text-white flex flex-col gap-1">
              <ActionCounter
                actionsBase={actionsBase}
                setActiveAction={setSingleAction}
                activeAction={singleAction}
              />
              <div className="flex flex-col gap-8 bg-wSecMain border border-wGreen rounded-md py-5 px-10">
                <ActionForm />
                <Table />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
