import React from "react";

import styles from "./TechStack.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const TechStack = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>TechStack</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  {/* <h4>{`${historyItem.imageSrc}`}</h4> */}
                  <a href={`${historyItem.imageSrc}`}>View Certificate</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
