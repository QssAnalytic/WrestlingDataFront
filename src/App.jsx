import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import { useState } from "react";
import SelectBox from "./components/SelectBox";

export default function App() {
  const [openSelect, setOpenSelect] = useState({
    action: false,
    techniques: false,
    score: false,
  });

  const toggleSelect = (e) => {
    e.preventDefault();
    setOpenSelect({
      ...openSelect,
      [e.currentTarget?.id]: !openSelect[e.currentTarget?.id],
    });
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="container m-auto">
          <div className="main-inner">
            <div className="action-form text-white bg-wSecMain border border-wGreen rounded-md py-5 px-10">
              <form className="w-full">
                <div className="action-left basis-[40%] flex flex-col gap-5">
                  <SelectBox
                    toggleSelect={toggleSelect}
                    openSelect={openSelect}
                    id={"action"}
                  />
                  <SelectBox
                    toggleSelect={toggleSelect}
                    openSelect={openSelect}
                    id={"techniques"}
                  />
                  <div className="left-bottom">
                    <SelectBox
                      toggleSelect={toggleSelect}
                      openSelect={openSelect}
                      id={"score"}
                    />
                    <div className="second-container">
                      
                    </div>
                  </div>
                </div>
                <div className="action-right basis-[40%]"></div>
              </form>
            </div>
            <Table />
          </div>
        </div>
      </main>
    </>
  );
}
