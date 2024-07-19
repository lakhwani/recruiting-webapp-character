import React from "react";

const Skill = ({
  skill,
  points,
  modifier,
  onIncrement,
  onDecrement,
  totalPoints,
}) => {
  const total = points + modifier;

  return (
    <div className="skill-row">
      <span>{skill.name}</span>
      <span>points: {points}</span>
      <button onClick={() => onDecrement(skill.name)} disabled={points <= 0}>
        -
      </button>
      <button
        onClick={() => onIncrement(skill.name)}
        disabled={totalPoints <= 0}
      >
        +
      </button>
      <span>
        modifier ({skill.attributeModifier}): {modifier}
      </span>
      <span>total: {total}</span>
    </div>
  );
};

export default Skill;
