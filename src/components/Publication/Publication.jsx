import { motion, useReducedMotion } from "framer-motion";
import styles from "./Publication.module.css";
import publication from "../../data/publication.json";
import { Reveal } from "../common/Reveal";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const row = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Publication() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.container} id="publications">
      <Reveal>
        <h2 className={styles.title}>Publication</h2>
      </Reveal>

      <div className={styles.content}>
        <motion.ul
          className={styles.publication}
          variants={prefersReducedMotion ? undefined : list}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {publication.map((pubItem) => (
            <motion.li
              key={pubItem.title}
              className={styles.pubItem}
              variants={prefersReducedMotion ? undefined : row}
            >
              <h3 className={styles.pubTitle}>{pubItem.title}</h3>
              <a
                href={pubItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewLink}
              >
                View Publication ↗
              </a>
              <ul className={styles.points}>
                <li>{pubItem.desc1}</li>
                <li>{pubItem.desc2}</li>
                <li>{pubItem.desc3}</li>
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
