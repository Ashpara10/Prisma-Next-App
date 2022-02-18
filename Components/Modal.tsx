import React from "react";

const Modal: React.FC = () => {
  return (
    <div className=" fixed top-0 left-0 bottom-0 z-10 w-full bg-[rgba(0,0,0,0.5)] h-screen flex items-center justify-center ">
      <div className="bg-white flex flex-col items-center justify-between rounded-xl max-w-md p-3 gap-y-3 min-h-[150px]">
        <span className="text-xl font-serif font-semibold px-2">Are You Sure you want to SignOut?</span>
        <span className="text-gray-700 font-mono max-w-md px-3">Signout will remove all your credentials and data from our database...</span>
        <button className="bg-green-600 font-mono text-white p-3 rounded-md">SignOut</button>
      </div>
    </div>
  );
};

export default Modal;
