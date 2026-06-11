import "./Home.css";

const Content = () => {
  return (
    <section id="home" className="hero">
      <p className="hello">Hello,I`m</p>

      <p className="firstName-secondName">Dolbayob Konchenyj</p>

      <h4 className="role">Full-Stack Developer</h4>

      <p className="description">
        I am a beginner Full-Stack Developer who is learning React and building
        modern web applications.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn-project">
          View Projects
        </a>

        <a href="#contact" className="btn-contact">
          Contact Me
        </a>
      </div>
      <a href="#about" className="scroll-down" aria-label="Scroll to about">
        ↓
      </a>
    </section>
  );
};

export default Content;
