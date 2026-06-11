import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "Css3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <>
      <section id="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
