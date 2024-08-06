import React from "react";
import styles from "./Skills.module.css";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  console.log(theme);
  const checkMark = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="HTML" />
        <SkillList src={checkMark} skill="CSS" />
        <SkillList src={checkMark} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="JavaScript" />
        <SkillList src={checkMark} skill="Python" />
        <SkillList src={checkMark} skill="C/C++" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="ReactJs" />
        <SkillList src={checkMark} skill="ExpressJs" />
        <SkillList src={checkMark} skill="SQL/MYSQL" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
