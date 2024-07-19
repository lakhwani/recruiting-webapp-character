import React, { useState } from "react";
import { ATTRIBUTE_LIST } from "../consts";
import Attribute from "./Attribute";

const AttributeList = () => {
  const initialValues = ATTRIBUTE_LIST.reduce((acc, attribute) => {
    acc[attribute] = 0;
    return acc;
  }, {});

  const [values, setValues] = useState(initialValues);

  function handleIncrement(attribute) {
    setValues({
      ...values,
      [attribute]: values[attribute] + 1,
    });
  }

  function handleDecrement(attribute) {
    setValues({
      ...values,
      [attribute]: values[attribute] - 1,
    });
  }

  return ATTRIBUTE_LIST.map((attribute) => (
    <Attribute
      key={attribute}
      attributeName={attribute}
      attributeValue={values[attribute]}
      onIncrement={() => handleIncrement(attribute)}
      onDecrement={() => handleDecrement(attribute)}
    ></Attribute>
  ));
};

export default AttributeList;
