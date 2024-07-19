import React, { useContext } from "react";
import { ATTRIBUTE_LIST } from "../consts";
import Attribute from "./Attribute";
import ClassList from "./ClassList";
import { AttributeContext } from "../context/AttributeContext";

const AttributeList = () => {
  const { values, handleIncrement, handleDecrement } =
    useContext(AttributeContext);

  return (
    <div>
      {ATTRIBUTE_LIST.map((attribute) => (
        <Attribute
          key={attribute}
          attributeName={attribute}
          attributeValue={values[attribute]}
          onIncrement={() => handleIncrement(attribute)}
          onDecrement={() => handleDecrement(attribute)}
        />
      ))}
      <ClassList attributeValues={values} />
    </div>
  );
};

export default AttributeList;
