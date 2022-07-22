import React from "react";
import { useContext } from "react";

import { appContext } from "../App";
import { nanoid } from "nanoid";
import Button from "./Button";
export default function Dashboard() {
  const { currentCountry, saved } = useContext(appContext);
  const addHandler = function () {
    if (
      !saved.find((element) => {
        if (element.name === currentCountry.data.location.country) {
          return true;
        } else return false;
      })
    ) {
      saved.push({ id: nanoid(), name: currentCountry.data.location.country });
      localStorage.setItem("country", JSON.stringify(saved));
    }
  };
  return (
    <div className="dashboard">
      <div className="current-country">
        <div className="condition">
          <p className="data--item">{`${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.condition.text
          } `}</p>
          <span className="icon">
            <img className="icon"
              src={
                currentCountry.data.current === undefined
                  ? ""
                  : currentCountry.data.current.condition.icon
              }
              alt="icon"
            ></img>
          </span>
        </div>

        <div className="location">
          <p className="data--item">{`Country: ${
            currentCountry.data.location === undefined
              ? ""
              : currentCountry.data.location.country
          }`}</p>
          <p className="data--item">{`Region:  ${
            currentCountry.data.location === undefined
              ? ""
              : currentCountry.data.location.region
          }`}</p>

          <p className="data--item">{`Capital: ${
            currentCountry.data.location === undefined
              ? ""
              : currentCountry.data.location.name
          }`}</p>
          <p className="data--item">{`Lat : ${
            currentCountry.data.location === undefined
              ? ""
              : currentCountry.data.location.lat
          }`}</p>
          <p className="data--item">{`Lon: ${
            currentCountry.data.location === undefined
              ? ""
              : currentCountry.data.location.lon
          }`}</p>
          <p className="data--item">{`Local Time: ${
            currentCountry.data.location === undefined
              ? ""
              : currentCountry.data.location.localtime
          }`}</p>
        </div>
        <div className="current">
          <p className="data--item-t">{`The weather in ${currentCountry.data.location.name}`}</p>
          <p className="data--item">{`Last updated: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.last_updated
          }`}</p>
          <p className="data--item">{`Temperature in Celsius: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.temp_c
          } C`}</p>
          <p className="data--item">{`Temperature in Ferenheight: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.temp_f
          } F`}</p>
          <p className="data--item">{`Is Day: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.is_day
              ? "Yes"
              : "No"
          }`}</p>
          <p className="data--item">{`Wind in MPH: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.wind_mph
          }`}</p>
          <p className="data--item">{`Wind in KPH: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.wind_kph
          }`}</p>
          <p className="data--item">{`Wind dir: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.wind_dir
          }`}</p>
          <p className="data--item">{`Preasure MB: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.pressure_mb
          }`}</p>
          <p className="data--item">{`Preasure IN: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.pressure_in
          }`}</p>
          <p className="data--item">{`Humidity: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.humidity
          }`}</p>
          <p className="data--item">{`UV: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.uv
          }`}</p>
          <p className="data--item">{`Precip MM: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.precip_mm
          }`}</p>
          <p className="data--item">{`Precip IN: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.precip_in
          }`}</p>
          <p className="data--item">{`Wind Degree: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.wind_degree
          }`}</p>
          <p className="data--item">{`Vis KM: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.vis_km
          }`}</p>
          <p className="data--item">{`Vis Miles: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.vis_miles
          }`}</p>
          <p className="data--item">{`Gust MPH: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.gust_mph
          }`}</p>
          <p className="data--item">{`Gust KPH: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.gust_kph
          }`}</p>
          <p className="data--item">{`Cloud: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.cloud
          }`}</p>
          <p className="data--item">{`Feels Like: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.feelslike_c
          } C`}</p>
          <p className="data--item">{`Feels Like: ${
            currentCountry.data.current === undefined
              ? ""
              : currentCountry.data.current.feelslike_f
          } F`}</p>
        </div>
      </div>
      <div className="saved-countries">
        <p className="Add" onClick={addHandler}>
          Add to watchlist
        </p>
        <div className="buttons">
          {saved.map(({ id, name }) => (
            <Button id={id} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
