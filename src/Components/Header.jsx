// import React from 'react'
import { useContext } from "react";
import { BsMoon } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { darkThemeContext } from "../App";

const Header = () => {
  const darkThemeBody = useContext(darkThemeContext);
  const changeTheme = ()=>{
    darkThemeBody.setDarkTheme(!darkThemeBody.darkTheme)
  }
  // console.log(darkThemeBody);
  return (
    <div className={`flex justify-between ${darkThemeBody.darkTheme ? "bg-[#2b3945]" : "bg-[#FFF]"} items-center h-[4rem] p-3 shadow-lg lg:px-[5rem]`}>
      <div>
        <p className="font-bold">Where in the world?</p>
      </div>
      <div
        className="flex gap-2 items-center text-xs hover:cursor-pointer"
        onClick={changeTheme}
      >
        {darkThemeBody.darkTheme ? <BsSunFill /> : <BsMoon />}
        {darkThemeBody.darkTheme ? (
          <span>Light Mode</span>
        ) : (
          <span>Dark Mode</span>
        )}
      </div>
    </div>
  );
};

export default Header;
