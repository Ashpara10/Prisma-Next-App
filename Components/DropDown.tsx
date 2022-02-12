import router from "next/router";
import React from "react";
import {BsFillChatSquareDotsFill} from 'react-icons/bs'


const DropDown: React.FC = (props) => {
  return (
    <div className="rounded-lg border absolute top-[65px] right-2 border-gray-200 bg-white w-40 p-3 overflow-x-hidden ">
      <DropDownItem Icon={<BsFillChatSquareDotsFill className="text-xl"/>} Text='Messages'/>
      <DropDownItem Icon={<BsFillChatSquareDotsFill className="text-xl"/>} Text='Messages'/>
      <button className="p-3 rounded-lg text-white bg-green-400 w-full font-mono  my-1" onClick={()=>router.push('/signup')} >SignUp</button>
    </div>
  );
};

export default DropDown;

export const DropDownItem = ( {Icon, Text}:any ) => {
  return (
    <button className="flex items-center font-mono justify-between gap-x-2 hover:bg-slate-200 p-2 rounded-lg w-full active:translate-x-14">
      <b className="p-2.5 flex items-center justify-center  rounded-full">{Icon}</b>
      <a>{Text}</a>
    </button>
  );
};
