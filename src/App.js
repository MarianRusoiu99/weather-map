import React, { useEffect, useState, createContext } from "react";

import Map from "./components/Map";
import Dashboard from "./components/Dashoard";

export const appContext = createContext();

function App() {
  const [content, setContent] = useState(""); //used to pass the name of the country witch is hoovered on
  const [saved, setSaved] = useState(
    JSON.parse(localStorage.getItem("country"))
      ? JSON.parse(localStorage.getItem("country"))
      : []
  );  // this is a list with all the countries saved in local storage, it is initialised with what is already saved

  const [currentCountry, setCurrentCountry] = useState({
    cname: "",
    data: "",
    staus: false,
  }); //gets the current country from the weather api

  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${currentCountry.cname}` },
      headers: {
        "X-RapidAPI-Key": "9a6e8cafed4p192a6fjsn8483b60e5f2d",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCurrentCountry((prev) => {
          return {
            ...prev,
            data: response.data,
            status: true,
          };
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [currentCountry]); //

  return (
    <>
      <div className="App">
        <appContext.Provider
          value={{ currentCountry, setCurrentCountry, saved, setSaved }}
        >
          <div className="map-placement">
            <Map Content={setContent} clickHandler={setCurrentCountry} />
          </div>

          <div className="container">
            <p className="country-name">{content}</p>
            {currentCountry.status && <Dashboard />}
          </div>
        </appContext.Provider>
      </div>
      <div className="footer">footer</div>
    </>
  );
}

export default App;
