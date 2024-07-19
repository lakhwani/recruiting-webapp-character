import React from "react";

const Attribute = ({
  attributeName,
  attributeValue,
  onIncrement,
  onDecrement,
}) => {
  const calculateModifier = (value) => {
    return Math.floor((value - 10) / 2);
  };

  const modifier = calculateModifier(attributeValue);

  return (
    <div className="attribute-row">
      <span>{attributeName}</span>
      <span>{attributeValue}</span>
      <span>
        {modifier >= 0 ? `Modifier: +${modifier}` : `Modifier: ${modifier}`}
      </span>
      <div className="buttons">
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Attribute;
