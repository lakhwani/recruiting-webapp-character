import React from "react";
import { CLASS_LIST } from "../consts";

const ClassDetails = ({ className }) => {
  const classDetails = CLASS_LIST[className];

  return (
    <div>
      <h3>{className} Requirements</h3>
      <ul>
        {Object.entries(classDetails).map(([attr, value]) => (
          <li key={attr}>
            {attr}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassDetails;
