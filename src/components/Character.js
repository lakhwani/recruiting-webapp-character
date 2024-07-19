import React, { useContext, useState } from "react";
import { ATTRIBUTE_LIST } from "../consts";
import Attribute from "./Attribute";
import ClassList from "./ClassList";
import ClassDetails from "./ClassDetails";
import SkillList from "./SkillList";
import { AttributeContext } from "../context/AttributeContext";
import { getCharacter, saveCharacter } from "../api/characterApi";
import "./Character.css";

const Character = () => {
  const { values, setValues, handleIncrement, handleDecrement } =
    useContext(AttributeContext);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (className) => {
    setSelectedClass(className);
  };

  const handleSave = async () => {
    await saveCharacter({ attributes: values });
    alert("Character data saved!");
  };

  const handleRetrieve = async () => {
    const characterAttributes = await getCharacter();
    if (characterAttributes) {
      setValues(characterAttributes);
      alert("Character data retrieved!");
    }
  };

  return (
    <div className="character-container">
      <div className="buttons-container">
        <button onClick={handleSave}>Save Character</button>
        <button onClick={handleRetrieve}>Retrieve Character</button>
      </div>
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
      <div className="column">
        <SkillList />
      </div>
    </div>
  );
};

export default Character;
