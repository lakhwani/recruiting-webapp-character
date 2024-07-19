function Attribute({
  attributeName,
  attributeValue,
  onIncrement,
  onDecrement,
}) {
  return (
    <div>
      <h3>{attributeName}</h3>
      <h3>{attributeValue}</h3>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default Attribute;
