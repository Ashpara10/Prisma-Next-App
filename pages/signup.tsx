import React from "react";
import { SignUpForm } from "../Components/AuthForms";

const SignUp = () => {
  return (
    <div className=" flex w-full h-[calc(100vh-65px)]  items-center justify-center ">
      <div className="border overflow-hidden  border-gray-300 rounded-md  max-w-2xl min-w-[400px] flex items-center justify-center h-[500px]">
   
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;

