import React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

import styles from "./ProjectCard.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      className={styles.container}
      variants={prefersReducedMotion ? undefined : cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 800 }
      }
    >
      <div className={styles.imageWrap}>
        <img
          src={`${imageSrc}`}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Source ↗
        </a>
      </div>
    </motion.div>
  );
};
