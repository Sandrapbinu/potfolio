import React from "react";
import styles from "./Project.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Project() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard src={viberr} name="Viberr" link="" dec="Streaming App" />
        <ProjectCard
          src={freshBurger}
          name="Fresh Burger"
          link=""
          dec="Restaurent App"
        />
        <ProjectCard src={hipsster} name="Hipster" link="" dec="Glasses App" />
        <ProjectCard src={fitlift} name="Fitlift" link="" dec="Fitness App" />
      </div>
    </section>
  );
}

export default Project;
