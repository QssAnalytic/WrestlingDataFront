import React from 'react'

export default function Notification({message, modalName}) {
  return (
    <>
    <div className="notification-container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#080C2B] rounded py-12 w-[31rem] z-50">
        <div className="notification-inner flex flex-col gap-5">
            <div className="notification-message flex justify-center items-center text-[#eaeaea]">
                <h4 className='message'>Are you sure?</h4>
            </div>
            <div className="notification-btns flex justify-center gap-3 items-center text-[#eaeaea]">
                <button className='bg-[#D52B1E] py-1 px-2 rounded w-36'>Delete</button>
                <button className="cancel bg-[#1B234F] py-1 px-2 rounded w-36">Cancel</button>
            </div>
        </div>
    </div>
    </>
  )
}
