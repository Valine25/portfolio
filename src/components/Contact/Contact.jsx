import React from "react";
import styles from "./Contact.module.css";
import { Reveal } from "../common/Reveal";

const EMAIL = "valinenoronha25@gmail.com";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.39-1.25.71-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .31.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
  </svg>
);

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <Reveal className={styles.inner}>
        <h2 className={styles.heading}>Want to contact me?</h2>
        <p className={styles.emailLine}>
          Reach out via email:{" "}
          <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
            {EMAIL}
          </a>
        </p>
        <p className={styles.note}>
          I appreciate your visit! Drop me a line and let's make something
          great happen.
        </p>

        <div className={styles.iconRow}>
          <a
            href="https://github.com/Valine25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.iconBtn}
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/valine-sonal-noronha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.iconBtn}
          >
            <LinkedinIcon />
          </a>
        </div>
      </Reveal>

      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Valine Sonal Noronha. All rights reserved.</p>
      </div>
    </footer>
  );
};
