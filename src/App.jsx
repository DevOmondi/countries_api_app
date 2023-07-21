import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useState, useEffect, createContext } from "react";
import Header from "./Components/Header";
import SearchCountry from "./Components/SearchCountry";
import CountryCard from "./Components/CountryCard";

// Create darkTheme context
export const darkThemeContext = createContext();

function App() {
  const API_URL = "https://restcountries.com/v3.1/";
  // loader state management
  const [isLoading, setIsLoading] = useState(true);
  // countries data state management
  const [countries, setCountries] = useState([]);

  // darkTheme state management
  const [darkTheme, setDarkTheme] = useState(false);

  // TODO: Func to fetch countries data
  async function fetchCountriesData() {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/all`);
      const _data = response.data;
      // console.log("countries data",_data)
      setCountries(_data);
      setIsLoading(false);
      // console.log("countries", countries);
    } catch (error) {
      console.log("An error occured:", error);
    }
  }
  // Fetch countries data on page load
  useEffect(() => {
    // fetchLocalData();
    fetchCountriesData();
  }, []);
  //  TODO: Func to update countries array on filter
  async function setFilteredCountries(filterRegion) {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/region/${filterRegion}`);
      const _filteredCountries = response.data;
      setCountries(_filteredCountries);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log("filtered countries:", countries);
  // TODO: Func to search country
  async function setSearchedCountry(searchedCountry) {
    try {
      const response = await axios.get(`${API_URL}/name/${searchedCountry}`);
      const _searchedCountry = response.data;
      setCountries(_searchedCountry);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <darkThemeContext.Provider
      value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
    >
      <div
        className={`h-[100%] text-[14px] ${
          darkTheme ? "bg-[#202c37]" : "bg-[#FAFAFA]"
        } ${darkTheme ? "text-[#ffffff]" : "text-[#111517]"} font-nunito`}
      >
        <Header />
        <SearchCountry
          setFilteredCountries={setFilteredCountries}
          setSearchedCountry={setSearchedCountry}
        />
        {/* <CountryPage /> */}
        {isLoading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color={darkTheme ? "#ffffff" : "#111517"}
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass={`mx-auto`}
            visible={true}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:mx-[5rem] lg:gap-[5rem] min-h-screen">
            {countries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        )}
      </div>
    </darkThemeContext.Provider>
  );
}

export default App;
