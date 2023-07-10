// import React from 'react'
// import germanFlag from "../assets/german_flag.jpg";
import { useContext } from "react";
import { darkThemeContext } from "../App";

const CountryCard = ({country}) => {
  const darkThemeBody = useContext(darkThemeContext);
  return (
    <div className={`w-[55%] mx-auto mt-[3rem]  rounded lg:w-auto ${
      darkThemeBody.darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
    }`}>
      <div >
        <img src={country.flags.svg} alt="country flag" className="h-auto w-[100%] rounded-t" />
      </div>
      <div>
        <p className="p-3 font-[700]">{country.name.common}</p>
        <div className="pl-3 pb-[2.5rem] text-xs font-thin">
          <div className="flex gap-1">
            <span className="font-[600]">Population:</span>
            <p>{country.population}</p>
          </div>
          <div className="flex gap-1">
            <span className="font-[600]">Region:</span>
            <p>{country.region}</p>
          </div>
          <div className="flex gap-1">
            <span className="font-[600]">Capital:</span>
            <p>{country.capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
