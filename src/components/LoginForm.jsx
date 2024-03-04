import React from "react";
import { FormContext } from "../context/FormContext";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Toaster } from "react-hot-toast";

export default function LoginForm({ id, openComponent }) {
  const { loadData } = useContext(FormContext);
  const [fightId, setFightId] = useState("");

  const handleMatch = () => {
    loadData(Number(fightId));
    console.log("match Id", fightId);
  };

  return (
    <>
      <div
        className={`form-container flex justify-center items-center ${
          !openComponent[id] ? "hidden" : "flex"
        }`}
      >
        <div className="login-form flex flex-col justify-center items-center gap-[10px] w-[400px]">
          <div className="match-id flex flex-col gap-2 justify-center items-center w-full">
            <label htmlFor="matchId" className="text-wTextSec self-start">
              Match ID:
            </label>
            <input
              type="text"
              value={fightId}
              onChange={(e) => setFightId(e.target.value)}
              name="matchId"
              className=" w-full outline-none bg-wSecMain px-[20px] py-[10px] rounded-md  text-wTextSec"
              placeholder="Enter match id..."
            />
          </div>
          <div className="go-to-match flex justify-center items-center w-full ">
            <Link to={`/${fightId}`} className="w-full"> 
              <button
                className="submit text-wTextSec w-full bg-[#3D66B5] rounded-md py-4 hover:opacity-50"
                type="button"
                onClick={handleMatch}
              >
                Go to match
              </button>
              <Toaster />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
