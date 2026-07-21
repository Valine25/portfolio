import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { Reveal } from "../common/Reveal";

const EXPERIENCE_ITEM = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  hover: { y: -5, scale: 1.01 },
};

const EXPERIENCES = [
  {
    role: "Software Development and Operations Intern",
    company: "Besttrip Tech Solutions Pvt. Ltd.",
    date: "December 2025 — March 2026",
    desc: "Worked on a live SaaS product for QR-based digital menu platforms (QR Tiger), gaining hands-on experience in cloud infrastructure, deployments, and operational support.",
    bullets: [
      "Deployed and managed cloud resources using AWS services such as S3, CloudFront, and ACM.",
      "Configured SSL certificates and monitored production reliability for live customer traffic.",
      "Collaborated with product and operations teams to streamline deployment workflows."
    ],
    certificateUrl: "/assets/certificates/INternship Certificate 2 month.pdf"
  }
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <Reveal>
        <h2 className={styles.title}>Experience</h2>
      </Reveal>

      

      <div className={styles.content}>
        <ul className={styles.list}>
          {EXPERIENCES.map((exp) => (
            <motion.li
              key={exp.role}
              className={styles.item}
              variants={EXPERIENCE_ITEM}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <p className={styles.date}>{exp.date}</p>
              </div>
              <p className={styles.desc}>{exp.desc}</p>
              {exp.certificateUrl && (
                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.certificateButton}
                >
                  View Internship Certificate ↗
                </a>
              )}
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
