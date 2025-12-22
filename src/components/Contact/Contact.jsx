import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email icon"
          />
          <a href="mailto:valinenoronha25@gmail.com">
            valinenoronha25@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/valine-sonal-noronha"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/valine-sonal-noronha
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="GitHub icon"
          />
          <a
            href="https://github.com/Valine25"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Valine25
          </a>
        </li>
      </ul>
    </footer>
  );
};
