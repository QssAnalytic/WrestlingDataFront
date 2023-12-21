import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import ActionCounter from "./components/ActionCounter";
import ActionForm from "./components/ActionForm";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container m-auto">
          <div className="main-inner mb-7">
            <div className="action-form text-white flex flex-col gap-1">
              <ActionCounter />
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
