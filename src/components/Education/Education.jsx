import { motion, useReducedMotion } from "framer-motion";
import styles from "./Education.module.css";
import edu from "../../data/edu.json";
import { Reveal } from "../common/Reveal";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const row = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Education() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.container} id="education">
      <Reveal>
        <h2 className={styles.title}>Education</h2>
      </Reveal>

      <div className={styles.content}>
        <motion.ul
          className={styles.edu}
          variants={prefersReducedMotion ? undefined : list}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {edu.map((eduItem) => (
            <motion.li
              key={eduItem.course}
              className={styles.eduItem}
              variants={prefersReducedMotion ? undefined : row}
            >
              <span className={styles.node} />
              <div className={styles.eduItemDetails}>
                <h3 className={styles.course}>{eduItem.course}</h3>
                <p className={styles.college}>{eduItem.college}</p>
                <div className={styles.meta}>
                  <span>{eduItem.date}</span>
                  <span className={styles.cgpa}>CGPA {eduItem.cgpa}</span>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
