import React, { createContext, useState } from "react";
import { ATTRIBUTE_LIST } from "../consts";
import { saveCharacter } from "../api/characterApi";

export const AttributeContext = createContext();

const AttributeProvider = ({ children }) => {
  const initialValues = ATTRIBUTE_LIST.reduce((acc, attribute) => {
    acc[attribute] = 0;
    return acc;
  }, {});

  const [values, setValues] = useState(initialValues);

  const totalAttributes = Object.values(values).reduce(
    (acc, value) => acc + value,
    0
  );
  const maxAttributes = 70;

  const handleIncrement = (attribute) => {
    if (totalAttributes < maxAttributes) {
      setValues((prevValues) => {
        const newValues = {
          ...prevValues,
          [attribute]: prevValues[attribute] + 1,
        };
        saveCharacter({ attributes: newValues });
        return newValues;
      });
    }
  };

  const handleDecrement = (attribute) => {
    if (values[attribute] > 0) {
      setValues((prevValues) => {
        const newValues = {
          ...prevValues,
          [attribute]: prevValues[attribute] - 1,
        };
        saveCharacter({ attributes: newValues });
        return newValues;
      });
    }
  };

  return (
    <AttributeContext.Provider
      value={{ values, setValues, handleIncrement, handleDecrement }}
    >
      {children}
    </AttributeContext.Provider>
  );
};

export default AttributeProvider;
