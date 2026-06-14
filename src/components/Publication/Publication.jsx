import styles from "./Publication.module.css";
import publication from "../../data/publication.json";

export default function Publication() {
  return (
    <section className={styles.container} id="publications">
      <h2 className={styles.title}>Publication</h2>

      <div className={styles.content}>
        <ul className={styles.publication}>
          {publication.map((pubItem, id) => (
            <li key={id} className={styles.pubItem}>
              <div className={styles.pubItemDetails}>
                <h3 className={styles.title}>{pubItem.title}</h3>


                <div className={styles.meta}>
                  <ul>
                    <br/>
                    <a href={pubItem.link} target="_blank" rel="noopener noreferrer" className={styles.view_link}>
                      View Publication
                    </a><br/><br/>
                    <li>{pubItem.desc1}</li><br/>
                    <li>{pubItem.desc2}</li><br/>
                    <li>{pubItem.desc3}</li>
                  </ul>
                  {/* <p></p><br/><br/>
                  <span>{pubItem.desc2}</span><br/><br/>
                  <span>{pubItem.desc3}</span> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
