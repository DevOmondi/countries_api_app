// import viteLogo from "/vite.svg";
// import "./App.css";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import Header from "./Components/Header";
import SearchCountry from "./Components/SearchCountry";
import CountryCard from "./Components/CountryCard";

// Create darkTheme context
export const darkThemeContext = createContext();

function App() {
  // countries data state management
  const [countries, setCountries] = useState([]);
  // darkTheme state management
  const [darkTheme, setDarkTheme] = useState(false);
  // TODO: Func to fetch countries data
  async function fetchCountriesData() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const _data = response.data;
      // console.log("countries data",_data)
      setCountries(_data);
      // console.log("countries", countries);
    } catch (error) {
      console.log("An error occured", error);
    }
  }
  // Fetch countries data on page load
  useEffect(() => {
    fetchCountriesData();
  }, []);
  // TODO: Func to filter countries based on regions
  return (
   <darkThemeContext.Provider value={{darkTheme:darkTheme, setDarkTheme: setDarkTheme}}>
     <div className={`h-[100%] text-[14px] ${darkTheme ? "bg-[#202c37]" : "bg-[#FAFAFA]"} ${darkTheme ? "text-[#ffffff]" : "text-[#111517]"} font-nunito`}>
      <Header />
      <SearchCountry countries={countries} setCountries={setCountries}/>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:mx-[5rem] lg:gap-[5rem]">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
   </darkThemeContext.Provider>
  );
}

export default App;
