import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import styles from "./About.module.css";
import { Reveal } from "../common/Reveal";

const ABOUT_ITEMS = [
  {
    icon: "/assets/about/cursorIcon.png",
    title: "Full-Stack Developer",
    text: "Building end-to-end web applications by integrating frontend, backend, and database systems to deliver complete and scalable solutions.",
  },
  {
    icon: "/assets/about/uiIcon.png",
    title: "Frontend Developer",
    text: "I'm a frontend developer with experience in building responsive and optimized sites.",
  },
  {
    icon: "/assets/about/serverIcon.png",
    title: "Backend Developer",
    text: "I have experience developing fast and optimised back-end systems and APIs.",
  },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const row = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.container} id="about">
      <Reveal>
        <h2 className={styles.title}>About</h2>
      </Reveal>
      <div className={styles.content}>
        <motion.ul
          className={styles.aboutItems}
          variants={prefersReducedMotion ? undefined : list}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {ABOUT_ITEMS.map((aboutItem) => (
            <motion.li
              key={aboutItem.title}
              className={styles.aboutItem}
              variants={prefersReducedMotion ? undefined : row}
              whileHover={prefersReducedMotion ? undefined : { x: 6 }}
            >
              <img src={aboutItem.icon} alt="" />
              <div className={styles.aboutItemText}>
                <h3>{aboutItem.title}</h3>
                <p>{aboutItem.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
