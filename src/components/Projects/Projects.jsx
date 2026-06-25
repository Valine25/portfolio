import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "../common/Reveal";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const Projects = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.container} id="projects">
      <Reveal>
        <h2 className={styles.title}>Projects</h2>
      </Reveal>
      <motion.div
        className={styles.projects}
        variants={prefersReducedMotion ? undefined : grid}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
};
