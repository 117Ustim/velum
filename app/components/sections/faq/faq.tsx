import styles from './faq.module.css';
import { faqItems } from '../../velum-page-data';
import { RevealOnEnter } from '../../ui/reveal-on-enter/reveal-on-enter';

export function Faq() {
  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.faqShell}>
        <RevealOnEnter>
          <div className={styles.centerHeading}>
            <span className={styles.yellowLabel}>FAQ</span>
            <h2>
              <span className={styles.headingLineLeft}>Важливі питання</span>
              <span className={styles.headingLineRight}>та відповіді на них</span>
            </h2>
            <p className={styles.introText}>Ми зібрали найпоширеніші запитання, щоб ви швидко знайшли потрібні відповіді.</p>
          </div>
        </RevealOnEnter>
        <RevealOnEnter>
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
        </RevealOnEnter>
      </div>
    </section>
  );
}
