// import React from 'react'
// import germanFlag from "../assets/german_flag.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { darkThemeContext } from "../App";

const CountryCard = ({ country }) => {
  const API_URL = "https://restcountries.com/v3.1/";
  // country state management
  const [singleCountry, setSingleCountry] = useState([]);
  // TODO: Func to fetch details of single country
  async function fetchSingleCountryData() {
    try {
      const response = await axios.get(
        `${API_URL}/name/${country.name.common}?fullText=true`
      );
      const _singleCountry = response.data;
      // console.log(_singleCountry);
      setSingleCountry(_singleCountry);
    } catch (error) {
      console.log(error);
    }
  }
  // Fetch individual country data on page load
  useEffect(() => {
    fetchSingleCountryData();
  }, [country.name.common]);
  // Dark theme context body
  const darkThemeBody = useContext(darkThemeContext);
  return (
    <div
      className={`w-[65%] mx-auto mt-[3rem] max-h-[18rem] lg:max-h-[25rem] rounded lg:w-auto shadow-lg h-auto ${
        darkThemeBody.darkTheme ? "bg-[#2b3945]" : "bg-[#ffffff]"
      }`}
    >
      <div>
        <img
          src={country.flags.svg}
          alt="country flag"
          className="h-auto w-[100%] rounded-t"
        />
      </div>
      <div>
        <p className="p-3 font-[700]">{country.name.common}</p>
        <div className="pl-3 pb-[2.5rem] text-xs font-thin">
          <div className="flex gap-1">
            <span className="font-[600]">Population:</span>
            <p onClick={fetchSingleCountryData}>{country.population}</p>
          </div>
          <div className="flex gap-1">
            <span className="font-[600]">Region:</span>
            <p>{country.region}</p>
          </div>
          <div className="flex gap-1">
            <span className="font-[600]">Capital:</span>
            <p>{country.capital}</p>
          </div>
          <div className=" mt-[0.8rem] font-[600] font-thin">
            <p>
              <Link to={"/page"} state={singleCountry}>
                See more...
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
