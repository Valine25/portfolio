import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Valine Sonal Noronha</h1>
        <p className={styles.description}>
          I’m an MCA student aspiring for Developer or Software Engineer roles—feel free to reach out to connect and learn more.
        </p>
        <div className="buttons">
        <a href="mailto:valinenoronha25@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/Valine_Frontend_Developer.pdf" className={styles.contactBtn}>
          View Resume
        </a>
        </div>
      </div>
      <img
        src="/assets/hero/Valine.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
