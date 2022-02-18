import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import router from "next/router";
import { SiGotomeeting } from "react-icons/si";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import DropDown from "./DropDown";

export const Navbar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();
  return (
    <nav className="navbar z-10">
      <LoadingBar
        color="blue"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="flex items-center justify-center gap-x-2">
        <h1
          onClick={() => router.push("/")}
          className="text-4xl text-blue-700 py-2 px-4 rounded-md font-extrabold"
        >
          <SiGotomeeting />
        </h1>
      </div>
      <div className="">
        {session ? (
          <div className="flex gap-x-3 items-center justify-center">
            <button
              className="p-3 bg-blue-700 rounded-md text-white  font-mono flex items-center justify-center "
              onClick={() => {
                router.push("/createpost");
              }}
            >
              Create Post
            </button>{" "}
            <img
              className="w-9 rounded-full border border-gray-400"
              src={`${session?.user?.image}`}
              onClick={() => setOpen(!open)}
            />
            {open && <DropDown />}
          </div>
        ) : (
          <button
            className="bg-blue-700 p-3 rounded-md text-white"
            onClick={() => signIn()}
          >
            SignIn
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

const NavList: React.FC = ({ children }) => {
  return (
    <ul
      className="mx-3 flex items-center justify-center p-1 gap-x-2 text-md font-medium "
      style={{ listStyle: "none" }}
    >
      {children}
    </ul>
  );
};
