'use client';

import Image from 'next/image';
import styles from './visit.module.css';
import { LeadForm } from '../../ui/lead-form/lead-form';

export function Visit() {
  return (
    <section className={styles.visitSection} id="contacts">
      <div className={styles.visitMedia}>
        <Image
          className={styles.visitImage}
          src="/assets/velum/cases/eco-park/main.jpg"
          alt="Модульний будинок для бази відпочинку"
          fill
          sizes="(min-width: 760px) 45vw, 100vw"
        />
        <div className={styles.videoCaption}>
          <span>Velum</span>
          <strong>Перетворюємо ділянки на прибуткові бази відпочинку</strong>
        </div>
      </div>
      <div className={styles.visitCopy}>
        <span className={styles.yellowLabel}>Безкоштовний розрахунок</span>
        <h2>Отримайте <span className={styles.headingHighlight}>розрахунок</span> під вашу ділянку</h2>
        <p>Залиште заявку — ми оцінимо потенціал вашої ділянки, запропонуємо формат бази відпочинку та підготуємо попередній розрахунок бюджету, доходу й окупності.</p>
        <LeadForm variant="land" showConsent={false} source="Розрахунок під вашу ділянку" />
      </div>
    </section>
  );
}
