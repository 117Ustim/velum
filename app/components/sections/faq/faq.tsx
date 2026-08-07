import styles from './faq.module.css';
import { faqItems } from '../../velum-page-data';

export function Faq() {
  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.faqShell}>
        <div className={styles.centerHeading}>
          <span className={styles.yellowLabel}>FAQ</span>
          <h2>Важливі питання<br />та відповіді на них</h2>
          <p className={styles.introText}>Ми зібрали найпоширеніші запитання, щоб ви швидко знайшли потрібні відповіді.</p>
        </div>
        <div className={styles.faqList}>
          {faqItems.map(([question, answer], index) => (
            <details key={question}>
              <summary>
                <span className={styles.questionNumber}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.questionText}>{question}</span>
                <b aria-hidden="true">+</b>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
