import React, { useState } from "react";
import "./index.css";

const Inputname = ({ setName }) => {
  const [thisName, setThisName] = useState("");
  const handleOnClick = () => {
    setName(thisName);
  };
  return (
    <div className="input-name-box">
      <div className="input-title">
        ReactJS & Firebase Chat System
      </div>
      <input
        type="text"
        placeholder="Enter name"
        className="input-name"
        onChange={(e) => setThisName(e.target.value)}
        value={thisName}
      />
      <button className="submit-name" type="button" onClick={handleOnClick}>
        Chat now
      </button>
    </div>
  );
};

export default Inputname;
