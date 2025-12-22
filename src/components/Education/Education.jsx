import styles from "./Education.module.css";
import edu from "../../data/edu.json";

export default function Education() {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>

      <div className={styles.content}>
        <ul className={styles.edu}>
          {edu.map((eduItem, id) => (
            <li key={id} className={styles.eduItem}>
              <div className={styles.eduItemDetails}>
                <h3 className={styles.course}>{eduItem.course}</h3>

                <p className={styles.college}>{eduItem.college}</p>

                <div className={styles.meta}>
                  <span>{eduItem.date}</span>
                  <span>CGPA: {eduItem.cgpa}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
