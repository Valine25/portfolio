import React from "react";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const status = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
  },
};

export const Hero = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="show"
      >
       
        <motion.h1 variants={item} className={styles.title}>
          <span className={styles.greeting}>Hi, I'm</span>
          <span className={styles.name}> Valine Sonal Noronha</span>
        </motion.h1>
        <motion.p variants={item} className={styles.description}>
          I'm a Full-Stack Developer, building real-world applications across
          AI, healthcare, and web. From an AI-powered blind assistance system
          to a medical monitoring dashboard, I turn complex problems into
          clean, scalable solutions. I've completed my MCA — and actively
          looking for developer roles where I can make an impact.
        </motion.p>
        <motion.div variants={item} className={styles.buttons}>
          <motion.a
            variants={item}
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            href="mailto:valinenoronha25@gmail.com"
            className={styles.primaryBtn}
          >
            Contact Me
          </motion.a>
          <motion.a
            variants={item}
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            href="/Valine_FSD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            View Resume
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.imageWrap}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.img
          src="/assets/hero/Valine.png"
          alt="Hero image of me"
          className={styles.heroImg}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
        <motion.span
          variants={status}
          initial="hidden"
          animate="show"
          className={styles.statusPill}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className={styles.statusDot} /> Open to new roles
        </motion.span>
      </motion.div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
