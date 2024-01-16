import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FormContext } from "../context/FormContext";
export default function Login() {
  const { loadData } = useContext(FormContext);
  const [fightId, setFightId] = useState("");

  const handleMatch = () => {
    loadData(Number(fightId));
    console.log('match Id', fightId)
  };

  return (
    <div className="login">
      <div className="container m-auto px-9">
        <div className="login-inner h-[450px] flex flex-col justify-between">
          <div className="login-header flex justify-end">
            <div className="flex w-52 right-btn items-end rounded-sm bg-[#ffffff] bg-opacity-[0.08] py-[0.62rem] px-[1.88rem]">
              <Link to={"/"}>
                <button className="view-matches flex justify-between items-center gap-[10px] text-wShadow">
                  View matches <IoIosArrowForward className="text-[20px]" />
                </button>
              </Link>
            </div>
          </div>
          <div className="form-container flex justify-center items-center">
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
                    className="submit text-wTextSec w-full bg-[#3D66B5] rounded-md py-4"
                    type="button"
                    onClick={handleMatch}
                  >
                    Go to match
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
