// import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useState, useContext } from "react";
import { darkThemeContext } from "../App";

const SearchCountry = ({ countries, setCountries }) => {
  const darkThemeBody = useContext(darkThemeContext);
  // Regions object
  const Regions = {
    Africa: { regionName: "Africa" },
    Americas: { regionName: "Americas" },
    Asia: { regionName: "Asia" },
    Europe: { regionName: "Europe" },
    Oceania: { regionName: "Oceania" },
  };
  // console.log("prop countries", countries);
  // console.log("prop setter func", setCountries);
  const [filterRegion, setFilterRegion] = useState("");

  // TODO : Func to set region selected
  const changeRegionFunc = (event) => {
    const _region = event.target.value;
    setFilterRegion(Regions[_region].regionName);
  };
  console.log("filterRegion", filterRegion);

  // TODO: Func to filter countries based on region
  const handleRegionFilterFunc = () => {
    const filteredCountries = countries.filter(
      (country) => country.region === filterRegion
    );
    console.log("filtered countries", filteredCountries);
    // setCountries(filteredCountries);
    // setFilterRegion("");
  };
  //  TODO: Func to select region and filter
  // function handleRegionChangeAndFilter() {
  //   changeRegionFunc(Event);
  //   handleRegionFilterFunc();
  // }
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between mt-[2.5rem] gap-[3rem]">
      {/* Search section */}
      <div
        className={`${
          darkThemeBody.darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
        } rounded shadow-lg p-3  flex w-[90%] lg:w-[20%] mx-auto lg:ml-[5rem]  items-center gap-3`}
      >
        <CiSearch />
        <input
          type="text"
          placeholder="Search for a country..."
          className={`focus:outline-none text-sm ${
            darkThemeBody.darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
          }`}
        />
      </div>
      {/* Filter section */}
      <div
        className={`rounded shadow-lg p-3 lg:mr-[5rem] ml-[5%] w-[60%]  lg:w-auto ${
          darkThemeBody.darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
        }`}
      >
        {/* <input
          type="text"
          placeholder="Filter by region..."
          className="focus:outline-none text-sm"
        /> */}
        <select
          id="regions"
          defaultValue=""
          className={`focus:outline-none rounded ${
            darkThemeBody.darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
          }`}
          // onChange={changeRegionFunc}
          onChange={(event) => {
            changeRegionFunc(event);
            handleRegionFilterFunc();
          }}
        >
          <option hidden value="" defaultValue>
            Filter by region
          </option>
          {Object.keys(Regions).map((_region) => (
            <option key={_region} value={_region}>
              {_region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchCountry;
