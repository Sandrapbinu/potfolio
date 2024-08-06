import React from "react";

function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Check mark"></img>
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
