import "./Footer.css";

const year = new Date().getFullYear();

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© {year} Minimalist. All rights reserved.</p>
      <button className="back-to-top" onClick={backToTop} aria-label="Вгору">
        ↑
      </button>
    </footer>
  );
};

export default Footer;
