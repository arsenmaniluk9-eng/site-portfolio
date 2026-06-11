import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";

const contacts = [
  { name: "WhatsApp", icon: <FaWhatsapp />, inform: " +380 97 195 50 65" },
  { name: "Email", icon: <MdEmail />, inform: " arsenmaniluk9@gmail.com" },
  { name: "Location", icon: <MdLocationOn />, inform: " Lviv, Ukraine" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isNameShort = formData.name.length > 0 && formData.name.length < 3;

  const isMessageShort =
    formData.message.length > 0 && formData.message.length < 3;

  const emailError =
    formData.email.length === 0
      ? ""
      : !formData.email.includes("@")
        ? "Email must contain @"
        : !formData.email.includes(".")
          ? "Email must contain a domain"
          : "";

  //Функція залупи коня

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>

      <div className="contact-wrapper">
        <div className="contact-left">
          <div className="contact-grid">
            {contacts.map((contact) => (
              <article className="contact-card" key={contact.name}>
                <div className="contact-info">
                  <div className="contact-icon">{contact.icon}</div>
                </div>

                <div className="contact-nav">
                  <h3>{contact.name}</h3>
                  <p>{contact.inform}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a
              href="https://t.me/Arsen178018"
              className="social-link"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>

            <a href="#" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <p className="field-error">
            {isNameShort
              ? "The name must consist of at least 3 characters."
              : ""}
          </p>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <p className="field-error">{emailError}</p>

          <div className="message-field">
            <textarea
              name="message"
              placeholder="Your Message"
              maxLength={5000}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <p className="message-counter">{formData.message.length}/5000</p>

            <p className="field-error">
              {isMessageShort
                ? "The minimum number of characters must be 3 or more."
                : ""}
            </p>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
