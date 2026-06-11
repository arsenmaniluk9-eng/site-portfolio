import "./Projects.css";

const projects = [
  {
    name: "E-Commerce",
    image: "/Photos-projects/E-Commerce.webp",
    description:
      "A dashboard for managing online store. Built with React, TypeScript, Node.js, Express, and MongoDB.",
    github: "#",
  },
  {
    name: "Real Estate Website",
    image: "/Photos-projects/Estate.webp",
    description:
      "A real estate website where users can search homes. Built with React, Node.js and PostgreSQL.",
    github: "#",
  },
  {
    name: "DevPortfolio CMS",
    image: "/Photos-projects/CMS.webp",
    description:
      "A content management system for creating portfolio projects. Built with React, Node.js and MongoDB.",
    github: "#",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="projects-card" key={project.name}>
              <div className="photos">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a
                  className="github-link"
                  href="project.github"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
