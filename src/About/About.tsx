import "./About.css";
import Portrait from "/Photos-projects/Portrait.webp";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="portrait-wrapper">
          <img
            className="portrait"
            src={Portrait}
            alt="My portrait"
            loading="lazy"
          />
        </div>
        <div className="about-content">
          <h2 className="about-me">About</h2>
          <h4 className="my-location">
            Passionate Full-Stack Developer based in Lviv, Ukraine
          </h4>
          <p className="detailed-description">
            I am a Full-Stack Developer passionate about building modern web
            applications. I enjoy creating clean, responsive, and user-friendly
            interfaces.
          </p>
          <div className="skills">
            <div className="years">
              <p className="years-of-experience">0</p>
              <p className="years-experience">Years Experience</p>
            </div>

            <div className="projects">
              <p className="number-of-projects">1+</p>
              <p className="projects-completed">Projects completed</p>
            </div>
          </div>

          <a href="/CV/My-CV.pdf" download className="cv">
            Download CV ⬇
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
