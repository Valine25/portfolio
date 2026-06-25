import { motion, useReducedMotion } from "framer-motion";

import styles from "./TechStack.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { Reveal } from "../common/Reveal";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const pop = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const row = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const CertIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
    <path
      d="M12 2 14.5 6 19 6.7 15.8 10 16.6 14.6 12 12.4 7.4 14.6 8.2 10 5 6.7 9.5 6 12 2Z"
      fill="currentColor"
      opacity="0.9"
    />
    <path
      d="M8.5 14.5 7.5 21l4.5-2.2 4.5 2.2-1-6.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TechStack = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.container} id="certifications">
      <Reveal>
        <h2 className={styles.title}>TechStack</h2>
      </Reveal>
      <div className={styles.content}>
        <motion.div
          className={styles.skills}
          variants={prefersReducedMotion ? undefined : grid}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              className={styles.skill}
              variants={prefersReducedMotion ? undefined : pop}
              whileHover={prefersReducedMotion ? undefined : { y: -6 }}
            >
              <div className={styles.skillImageContainer}>
                <img src={skill.imageSrc} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.ul
          className={styles.history}
          variants={prefersReducedMotion ? undefined : list}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {history.map((historyItem) => (
            <motion.li
              key={`${historyItem.role}-${historyItem.organisation}`}
              className={styles.historyItem}
              variants={prefersReducedMotion ? undefined : row}
            >
              <span className={styles.certIcon}>
                <CertIcon />
              </span>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <a
                  href={historyItem.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate ↗
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
