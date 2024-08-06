import React from "react";

function ProjectCard({ src, link, name, dec }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt="Project Image" />
      <h3>{name}</h3>
      <p>{dec}</p>
    </a>
  );
}

export default ProjectCard;
