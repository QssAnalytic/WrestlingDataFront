import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import { useState } from "react";
import SelectBox from "./components/SelectBox";

export default function App() {

  const [success, setSuccess] = useState(false)

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

  const handleSuccess = (e)=>{
    setSuccess((prev)=> !prev)
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="container m-auto">
          <div className="main-inner">
            <div className="action-form text-white bg-wSecMain border border-wGreen rounded-md py-5 px-10">
              <form className="w-full flex justify-between">
                <div className="action-left basis-[50%] flex flex-col gap-5">
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
                  <div className="left-bottom flex justify-between">
                    <SelectBox
                      toggleSelect={toggleSelect}
                      openSelect={openSelect}
                      id={"score"}
                      ok
                    />
                    <div className="second-container flex items-center">
                      <label htmlFor="second">Second:</label>
                      <div className="time flex justify-between px-3 py-5 bg-wMain gap-3">
                        <div className="minute basis-[50%]">
                          <input
                            type="text"
                            className="w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white text-center"
                          />
                        </div>
                        <p>:</p>
                        <div className="second">
                          <input
                            type="text"
                            className="w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white text-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="action-right flex flex-col basis-[40%] gap-7 rounded">
                  <div className="right-top pt-3 pb-11 px-14 bg-wMain flex w-full justify-around">
                    <div className="success-container flex flex-col basis-[45%] gap-3">
                      <p className="text-center">Successfull : </p>
                      <div className="success rounded-[3.5rem] py-3 px-3 bg-[#1E264B]">
                        <div className={`${success ? `translate-x-[80px] transition-all` : 'translate-x-0 transition-all'} yes-no h-[3rem] w-[4rem] rounded-[3.5rem] bg-wGreen flex items-center justify-center`} onClick={handleSuccess}>
                          Yes
                        </div>
                      </div>
                    </div>
                    <div className="success-container flex flex-col basis-[45%] gap-3">
                      <p className="text-center">Defense Reason : </p>
                      <div className="success rounded-[3.5rem] py-3 px-3 bg-[#1E264B]">
                        <div className="yes-no h-[3rem] w-[4rem] rounded-[3.5rem] bg-wGreen flex items-center justify-center">
                          Yes
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-bottom self-end">
                    <button className="btn-action w-[19rem] h-[3.125rem] bg-wBlue p-4 rounded text-[#C9D4EA]">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <Table />
          </div>
        </div>
      </main>
    </>
  );
}
