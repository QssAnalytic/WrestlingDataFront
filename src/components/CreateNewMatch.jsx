import React from "react";

export default function CreateNewMatch({id, openComponent}) {
  return (
    <>
      <div className={`create-new-match-container ${!openComponent[id] ? 'hidden' : 'block'}`}>
        <form action="" className="flex flex-col gap-4">
          <div className="create-new-macth flex flex-col gap-5 justify-center items-center w-full">
            <div className="first-line flex gap-4 items-center">
              <div className="create-input flex flex-col gap-[0.62rem] text-[#eaeaea]">
                <label htmlFor="tournament">Tournament:</label>
                <input
                  type="text"
                  name="tournament"
                  id="tournament"
                  className="bg-[#575968] rounded px-2 py-2 outline-none"
                />
              </div>
              <div className="create-input flex flex-col gap-[0.62rem] text-[#eaeaea]">
                <label htmlFor="place">Place:</label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  className="bg-[#575968] rounded px-2 py-2 outline-none"
                />
              </div>
              <div className="create-input flex flex-col gap-[0.62rem] text-[#eaeaea]">
                <label htmlFor="date">Date :</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  class="rounded bg-[#575968] px-6 py-[0.36rem] outline-none focus:outline-none"
                />
              </div>
              <div className="create-input flex flex-col gap-[0.62rem] text-[#eaeaea]">
                <label
                  htmlFor="weight"
                  className="relative flex flex-col gap-[0.62rem]"
                >
                  Weight :
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    class="rounded bg-[#575968] pl-2 py-2 outline-none focus:outline-none"
                  />
                  <div className="absolute top-[34px] rounded-r right-0 py-[0.5rem] pl-3 pr-3 bg-[#6A6B79]">
                    <p>kg</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="second-line flex gap-4 items-center">
              <div className="create-input flex flex-col gap-[0.62rem] text-[#eaeaea]">
                <label htmlFor="tournament">Opponent 1:</label>
                <input
                  type="text"
                  name="tournament"
                  id="tournament"
                  className="bg-[#575968] rounded px-2 py-2 outline-none"
                />
              </div>
              <div className="create-input flex flex-col gap-[0.62rem] text-[#eaeaea]">
                <label htmlFor="place">Opponent 2:</label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  className="bg-[#575968] rounded px-2 py-2 outline-none"
                />
              </div>
              <div className="create-input flex flex-col gap-[0.62rem] text-[#eaeaea]">
                <label htmlFor="place">Nation (Op.1):</label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  className="bg-[#575968] rounded px-2 py-2 outline-none"
                />
              </div>
              <div className="create-input flex flex-col gap-[0.62rem] text-[#eaeaea]">
                <label htmlFor="place">Nation (Op.2):</label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  className="bg-[#575968] rounded px-2 py-2 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="create-btn text-[#fff] flex justify-center items-center">
            <button className="bg-[#1B234F] py-4 w-[25rem] rounded">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
