import React, { useContext, useState } from "react";
import { SKILL_LIST } from "../consts";
import { AttributeContext } from "../context/AttributeContext";
import Skill from "./Skill";
import "./SkillList.css";

const SkillList = () => {
  const { values } = useContext(AttributeContext);
  const calculateModifier = (value) => Math.floor((value - 10) / 2);
  const intelligenceModifier = calculateModifier(values.Intelligence);
  const totalAvailablePoints = 10 + 4 * intelligenceModifier;

  const [skillPoints, setSkillPoints] = useState(
    SKILL_LIST.reduce((acc, skill) => {
      acc[skill.name] = 0;
      return acc;
    }, {})
  );

  const totalPointsSpent = Object.values(skillPoints).reduce(
    (acc, points) => acc + points,
    0
  );
  const remainingPoints = totalAvailablePoints - totalPointsSpent;

  const handleIncrement = (skillName) => {
    setSkillPoints({
      ...skillPoints,
      [skillName]: skillPoints[skillName] + 1,
    });
  };

  const handleDecrement = (skillName) => {
    setSkillPoints({
      ...skillPoints,
      [skillName]: skillPoints[skillName] - 1,
    });
  };

  return (
    <div className="skill-list">
      <h2>Skills</h2>
      <div className="points-info">
        <span>Total Points Available: {totalAvailablePoints}</span>
        <span>Points Remaining: {remainingPoints}</span>
      </div>
      {SKILL_LIST.map((skill) => (
        <Skill
          key={skill.name}
          skill={skill}
          points={skillPoints[skill.name]}
          modifier={calculateModifier(values[skill.attributeModifier])}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          totalPoints={remainingPoints}
        />
      ))}
    </div>
  );
};

export default SkillList;
