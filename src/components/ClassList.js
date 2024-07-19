import React from "react";
import { CLASS_LIST } from "../consts";
import "./ClassList.css";

const ClassList = ({ attributeValues, onClassClick }) => {
  const checkRequirements = (className) => {
    const requirements = CLASS_LIST[className];
    return Object.keys(requirements).every(
      (attr) => attributeValues[attr] >= requirements[attr]
    );
  };

  return (
    <div>
      {Object.keys(CLASS_LIST).map((className) => {
        const meetsRequirements = checkRequirements(className);
        return (
          <div
            key={className}
            className="class-item"
            onClick={() => onClassClick(className)}
            style={{
              cursor: "pointer",
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
