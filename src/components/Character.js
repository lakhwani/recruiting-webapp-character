import React, { useContext, useState } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST } from "../consts";
import Attribute from "./Attribute";
import ClassList from "./ClassList";
import ClassDetails from "./ClassDetails";
import { AttributeContext } from "../context/AttributeContext";
import "./Character.css";

const Character = () => {
  const { values, handleIncrement, handleDecrement } =
    useContext(AttributeContext);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (className) => {
    setSelectedClass(className);
  };

  return (
    <div className="character-container">
      <div className="column">
        <h2>Attributes</h2>
        {ATTRIBUTE_LIST.map((attribute) => (
          <Attribute
            key={attribute}
            attributeName={attribute}
            attributeValue={values[attribute]}
            onIncrement={() => handleIncrement(attribute)}
            onDecrement={() => handleDecrement(attribute)}
          />
        ))}
      </div>
      <div className="column">
        <h2>Classes</h2>
        <ClassList attributeValues={values} onClassClick={handleClassClick} />
      </div>
      <div className="column">
        <h2>Class Details</h2>
        {selectedClass && <ClassDetails className={selectedClass} />}
      </div>
    </div>
  );
};

export default Character;
