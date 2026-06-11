import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        section.classList.add("reveal-hidden");
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="site-wrapper">
      <header className="header">
        <p className="name">
          Dev<span className="name-span">Dolbayob</span>
        </p>

        <nav className="nav">
          <ul className="ul-nav">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={activeSection === item.id ? "active" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="main-content animate-site-entry">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
