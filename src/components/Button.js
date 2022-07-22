import React from "react";
import Delete from "./media/delete.png";
import { useContext } from "react";

import { appContext } from "../App"; 
export default function Button(props) {  
  const { currentCountry, saved, setSaved } = useContext(appContext);
  const handleRemove = function () {
    setSaved((prev) =>
      prev.filter((country) => {
        return country.name !== props.name;
      })
    );
    if (saved.length === 1) {
      setSaved([]);
      localStorage.clear();
    }

    localStorage.setItem("country", JSON.stringify(saved));
    localStorage.clear();
  };

  const clickHandler = function () {
    currentCountry.cname = props.name;
  };

  return (
    <div className="Button">
      <p className="btn" onClick={clickHandler}>
        {props.name}
      </p>
      <img onClick={handleRemove} src={Delete} alt="delete"></img>
    </div>
  );
}
