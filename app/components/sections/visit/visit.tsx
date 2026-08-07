import styles from './visit.module.css';
import { LeadForm } from '../../ui/lead-form/lead-form';

export function Visit() {
  return (
    <section className={styles.visitSection} id="contacts">
      <div className={styles.visitMedia}>
        <video
          className={styles.visitVideo}
          controls
          muted
          loop
          playsInline
          poster="/assets/velum/cases/eco-park/main.jpg"
          aria-label="Відео про створення бази відпочинку"
        >
          <source src="/assets/velum/visit/visit.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoCaption}>
          <span>Velum</span>
          <strong>Перетворюємо ділянки на прибуткові бази відпочинку</strong>
        </div>
      </div>
      <div className={styles.visitCopy}>
        <span className={styles.yellowLabel}>Безкоштовний розрахунок</span>
        <h2>Отримайте розрахунок під вашу ділянку</h2>
        <p>Залиште заявку — ми оцінимо потенціал вашої ділянки, запропонуємо формат бази відпочинку та підготуємо попередній розрахунок бюджету, доходу й окупності.</p>
        <LeadForm variant="land" showConsent={false} />
      </div>
    </section>
  );
}
