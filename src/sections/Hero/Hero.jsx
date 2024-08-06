import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import lightTwitterLogo from "../../assets/twitter-light.svg";
import lightLinkedInLogo from "../../assets/linkedin-light.svg";
import lightgithubLogo from "../../assets/github-light.svg";
import darkTwitterLogo from "../../assets/twitter-dark.svg";
import darkLinkedInLogo from "../../assets/linkedin-dark.svg";
import darkGithubLogo from "../../assets/github-dark.svg";
import CV from "../../assets/Sandra_p_resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterLogo = theme === "light" ? lightTwitterLogo : darkTwitterLogo;
  const githubLogo = theme === "light" ? lightgithubLogo : darkGithubLogo;
  const linkedInLogo = theme === "light" ? lightLinkedInLogo : darkLinkedInLogo;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="My pic" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Theme pic"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sandra <br /> Binu
        </h1>
        <h2>Computer Engineering Graduate</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/sandra-p-binu-049700254/"
            target="_blank"
          >
            <img src={linkedInLogo} alt="LinkedIn logo" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={githubLogo} alt="Git logo" />
          </a>
          <a href="https://www.youtube.com/@sandra_p_binu" target="_blank">
            <img src={twitterLogo} alt="Youtube logo" />
          </a>
        </span>
        <p className={styles.description}>
          A dancer with a deep passion for coding and web development. My
          journey intertwines the artistry of dance with the precision of
          coding, creating a unique blend of creativity and technical skill.
          Whether on stage or behind a computer screen, I strive to push
          boundaries and explore new horizons
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
