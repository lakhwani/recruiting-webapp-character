import React, { createContext, useState } from "react";
import { ATTRIBUTE_LIST } from "../consts.js";

export const AttributeContext = createContext();

const AttributeProvider = ({ children }) => {
  const initialValues = ATTRIBUTE_LIST.reduce((acc, attribute) => {
    acc[attribute] = 0;
    return acc;
  }, {});

  const [values, setValues] = useState(initialValues);

  const handleIncrement = (attribute) => {
    setValues({
      ...values,
      [attribute]: values[attribute] + 1,
    });
  };

  const handleDecrement = (attribute) => {
    setValues({
      ...values,
      [attribute]: values[attribute] > 0 ? values[attribute] - 1 : 0,
    });
  };

  return (
    <AttributeContext.Provider
      value={{ values, handleIncrement, handleDecrement }}
    >
      {children}
    </AttributeContext.Provider>
  );
};

export default AttributeProvider;
