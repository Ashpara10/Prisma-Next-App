import React from "react";
import { useState } from "react";

export const SignUpForm: React.FC = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const { username, email, password } = user;

  const HandleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if(data.Success){
       localStorage.setItem("user",data.user.email)
    }
  };

  return (
    <div>
      <form
        onSubmit={HandleSubmit}
        className="w-96 mx-2 p-3 border border-gray-300 h-[380px] rounded-lg bg-white flex flex-col items-center justify-center "
      >
        <div className="w-full px-3 flex flex-col items-center justify-center ">
          <input
            placeholder="Username ex:JhonDoe"
            className=" border border-gray-300   items-center justify-center px-2 py-3 m-3 flex rounded-md font-mono w-full"
            required={true}
            name="username"
            type="text"
            onChange={HandleChange}
          />
          <input
            placeholder="Your E-mail ex:jhondoe@gmail.com"
            className=" border border-gray-300 w-full    items-center justify-center px-2 py-3 my-3  flex rounded-md font-mono"
            type="email"
            required={true}
            name="email"
            onChange={HandleChange}
          />

          <input
            placeholder="Password"
            className="py-3 px-2 border border-gray-300 w-full   items-center justify-center  my-3  flex rounded-md font-mono  "
            name="password"
            type="text"
            required={true}
            onChange={HandleChange}
          />
        </div>

        <div className="w-full my-2 px-4 flex  items-center justify-center">
          <button
            type="submit"
            className="p-3 w-full font-bold disabled:bg-indigo-400 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:transition-all text-white text-lg "
            id="SignupButton"
          >
            Sign up
          </button>
        </div>
        <h1 className="w-full text-center text-gray-800  font-mono p-1 my-1 ">
          Already have a account?
          <a className=" text-indigo-700 hover:underline cursor-pointer ">
            Login!
          </a>
        </h1>
      </form>
    </div>
  );
};
export const LoginForm: React.FC = () => {
  return (
    <div>
      <form className=" w-[430px] mx-2 md:p-2 border border-gray-300 h-[380px] rounded-lg bg-white flex flex-col items-center justify-center ">
        <div className="w-full px-3 flex flex-col items-center justify-center ">
          <input
            placeholder=" E-mail example:leo@gmail.com"
            className=" border border-gray-400 w-full   items-center justify-center px-2 py-3 my-3  flex rounded-md font-mono"
            type="email"
            required={true}
            name="email"
          />

          <input
            placeholder="Password"
            className="py-3 px-2 border border-gray-400 w-full   items-center justify-center  my-3  flex rounded-md font-mono  "
            name="password"
            type="text"
            required={true}
          />
        </div>

        <div className="w-full my-2 px-4 flex  items-center justify-center">
          <button
            type="submit"
            className="p-3 w-full font-bold disabled:bg-indigo-400 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:transition-all text-white text-lg "
            id="SignupButton"
          >
            Sign up
          </button>
        </div>
        <h1 className="w-full text-center text-gray-800  font-mono p-1 my-1 ">
          Don't have a account?
          <a className=" text-indigo-700 hover:underline cursor-pointer ">
            SignUp!
          </a>
        </h1>
      </form>
    </div>
  );
};
