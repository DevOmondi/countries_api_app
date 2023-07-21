// // import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

const CountryPage = () => {
  // theme state management
  const [darkTheme, setDarkTheme] = useState(false);
  // TODO: Func to handle theme change
  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };
  // Receive data from country card component
  const { state } = useLocation();
  console.log("country data is:", state);

  // const langObject = state.map((countryObject)=> countryObject.languages)
  // console.log(langObject)
  return (
    <div
      className={`h-[100%] lg:h-screen ${
        darkTheme ? "bg-[#202c37]" : "bg-[#FAFAFA]"
      } ${darkTheme ? "text-[#ffffff]" : "text-[#111517]"} font-nunito`}
    >
      {/* Header section */}
      <div
        className={`flex justify-between ${
          darkTheme ? "bg-[#2b3945]" : "bg-[#FFF]"
        } items-center h-[4rem] p-3 shadow-lg lg:px-[5rem]`}
      >
        <div>
          <p className="font-bold">Where in the world?</p>
        </div>
        <div
          className="flex gap-2 items-center text-xs hover:cursor-pointer"
          onClick={changeTheme}
        >
          {darkTheme ? <BsSunFill /> : <BsMoon />}
          {darkTheme ? <span>Light Mode</span> : <span>Dark Mode</span>}
        </div>
      </div>
      {/* <Header /> */}
      {/* Back button */}
      <div
        className={`${
          darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
        } flex items-center gap-3 font-thin ml-6 mt-[3rem] w-[6rem] px-[1rem] py-[0.2rem]  shadow lg:ml-[5rem] hover:cursor-pointer`}
      >
        <BsArrowLeft />
        <span>
          <Link to={`/`}>Back</Link>
        </span>
      </div>
      {/* flag and details section */}
      <div
        className={`mx-6 mt-[4rem] pb-[3rem] lg:mx-[5rem] flex flex-col lg:flex-row lg:justify-between`}
      >
        {/* Country flag */}
        {state.map((countryObject, index) => (
          <img
            src={countryObject?.flags.svg}
            key={index}
            alt="country flag"
            className="lg:w-[40%] lg:h-[40%]"
          />
        ))}
        {/* country details div */}
        <div className="mt-[3rem]">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:gap-[8rem]">
            <div>
              {state.map((countryObject, index) => (
                <h1 className="pb-[1rem] font-bold text-lg" key={index}>
                  {countryObject?.name.common}
                </h1>
              ))}
              <div className="flex gap-1 pb-[0.5rem]">
                <span className="font-bold">Native Name:</span>
                {state.map((countryObject, index) => (
                  <p key={index}>{countryObject?.nativeName}</p>
                ))}
              </div>
              <div className="flex gap-1 pb-[0.5rem]">
                <span className="font-bold">Population:</span>
                {state.map((countryObject, index) => (
                  <p key={index}>{countryObject?.population}</p>
                ))}
              </div>
              <div className="flex gap-1 pb-[0.5rem]">
                <span className="font-bold">Region:</span>
                {state.map((countryObject, index) => (
                  <p key={index}>{countryObject?.region}</p>
                ))}
              </div>
              <div className="flex gap-1 pb-[0.5rem]">
                <span className="font-bold">Sub Region:</span>
                {state.map((countryObject, index) => (
                  <p key={index}>{countryObject?.subregion}</p>
                ))}
              </div>
              <div className="flex gap-1 pb-[0.5rem]">
                <span className="font-bold">Capital:</span>
                {state.map((countryObject, index) => (
                  <p key={index}>{countryObject?.capital}</p>
                ))}
              </div>
            </div>
            <div>
              <div className="flex gap-1 pb-[0.5rem]">
                <span className="font-bold">Top level domain:</span>
                {state.map((countryObject, index) => (
                  <p key={index}>{countryObject?.domain}</p>
                ))}
              </div>
              <div className="flex gap-1 pb-[0.5rem]">
                <span className="font-bold">Currencies:</span>
                {state.map((countryObject, index) => (
                  <p key={index}>{countryObject?.currencies.name}</p>
                ))}
              </div>
              <div className="flex gap-1 pb-[0.5rem]">
                <span className="font-bold">Languages:</span>
                {/* <p>Dutch, French, German</p> */}
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-[4rem] flex flex-col lg:flex-row lg:items-center gap-3">
            <p>Border Countries:</p>
            <div className="flex gap-3">
              <button
                className={`${
                  darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
                } w-[5rem] px-[1rem] py-[0.1rem] shadow`}
              >
                Country1
              </button>
              <button
                className={`${
                  darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
                } w-[5rem] px-[1rem] py-[0.1rem] shadow`}
              >
                Country2
              </button>
              <button
                className={`${
                  darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
                } w-[6rem] px-[1rem] py-[0.1rem] shadow`}
              >
                Country3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
