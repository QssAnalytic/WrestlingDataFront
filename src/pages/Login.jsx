import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import CreateNewMatch from "../components/CreateNewMatch";
import LoginForm from "../components/LoginForm";
export default function Login() {
  const [openComponent, setOpenComponent] = useState({
    find : true,
    create : false,
  });

  const handleOpenComponent = (id)=>{
    setOpenComponent((prev)=>({
      [Object.keys(prev)?.[0]] : false,
      [id] : !prev[id]
    }))
  }

  return (
    <div className="login h-[100vh]">
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
          <div className="login-btns flex items-center gap-8 justify-center">
            <div className="find">
              <button
                id="find"
                className="bg-[#3D66B5] py-4 px-32 text-[#eaeaea] rounded"
                onClick={(e)=> handleOpenComponent(e.currentTarget.id)}
              >
                Find Match by ID:
              </button>
            </div>
            <div className="find">
              <button
                id="create"
                className="bg-[#3D66B5] py-4 px-32 text-[#eaeaea] rounded"
                onClick={(e)=> handleOpenComponent(e.currentTarget.id)}
              >
                Create new match:
              </button>
            </div>
          </div>
          <LoginForm id={'find'} openComponent={openComponent} />
          <CreateNewMatch id={'create'} openComponent={openComponent} />
        </div>
      </div>
    </div>
  );
}
