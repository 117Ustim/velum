import styles from './faq.module.css';
import { faqItems } from '../../velum-page-data';

export function Faq() {
  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>FAQ</span>
        <h2>Важливі питання<br />та відповіді на них</h2>
      </div>
      <div className={styles.faqList}>
        {faqItems.map(([question, answer]) => (
          <details key={question}>
            <summary>
              <span>{question}</span>
              <b>+</b>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
