// import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { darkThemeContext } from "../App";

const SearchCountry = ({ setFilteredCountries, setSearchedCountry }) => {
  const darkThemeBody = useContext(darkThemeContext);
  // Regions object
  const Regions = {
    Africa: { regionName: "Africa" },
    Americas: { regionName: "Americas" },
    Asia: { regionName: "Asia" },
    Europe: { regionName: "Europe" },
    Oceania: { regionName: "Oceania" },
  };
  // TODO: Func to handle search
  const searchCountryFunc = (event) => {
    event.preventDefault();
    // console.log("searched country", event.target.value);
    setSearchedCountry(event.target.value);
  };
  // TODO: Func to filter countries based on region
  const changeRegionFunc = (event) => {
    const _region = event.target.value;
    // console.log("filterRegion:", _region);
    setFilteredCountries(_region);
  };

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
          onChange={searchCountryFunc}
        />
      </div>
      {/* Filter section */}
      <div
        className={`rounded shadow-lg p-3 lg:mr-[5rem] ml-[5%] w-[50%]  lg:w-auto  ${
          darkThemeBody.darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
        }`}
      >
        <select
          id="regions"
          defaultValue=""
          className={`focus:outline-none rounded ${
            darkThemeBody.darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
          }`}
          onChange={changeRegionFunc}
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
