import React from "react";
import { CLASS_LIST } from "../consts";
import "./ClassList.css";

const ClassList = ({ attributeValues }) => {
  const checkRequirements = (className) => {
    const requirements = CLASS_LIST[className];
    return Object.keys(requirements).every(
      (attr) => attributeValues[attr] >= requirements[attr]
    );
  };

  return (
    <div>
      <h2>Available Classes</h2>
      {Object.keys(CLASS_LIST).map((className) => {
        const meetsRequirements = checkRequirements(className);
        return (
          <div
            key={className}
            style={{
              border: "1px solid",
              padding: "10px",
              margin: "10px",
              backgroundColor: meetsRequirements ? "lightgreen" : "lightcoral",
            }}
          >
            <h3>{className}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ClassList;
