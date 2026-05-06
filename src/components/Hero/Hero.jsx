import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Valine Sonal Noronha</h1>
        <p className={styles.description}>
          I'm a Full-Stack Developer, building real-world applications across AI, healthcare, and web. From an AI-powered blind assistance system to a medical monitoring dashboard, I turn complex problems into clean, scalable solutions. Currently pursuing my MCA — and actively looking for developer roles where I can make an impact.
        </p>
        <div className="buttons">
        <a href="mailto:valinenoronha25@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/ValineSonal_Resume.pdf" className={styles.contactBtn}>
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
