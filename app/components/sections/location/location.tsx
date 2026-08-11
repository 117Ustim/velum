import styles from './location.module.css';
import { RevealOnEnter } from '../../ui/reveal-on-enter/reveal-on-enter';

export function Location() {
  return (
    <section className={styles.locationSection} id="location">
      <div className={styles.locationCopy}>
        <span className={styles.locationEyebrow}>Velum · Львів</span>
        <RevealOnEnter>
          <h2>Місце, з якого починається ваш <span className={styles.headingHighlight}>проєкт</span></h2>
        </RevealOnEnter>
        <RevealOnEnter>
          <p className={styles.locationDescription}>Приїжджайте до шоуруму, щоб побачити модульні будинки наживо, обговорити формат бази відпочинку та зробити перший крок до запуску.</p>
        </RevealOnEnter>
        <RevealOnEnter>
          <div className={styles.locationPoints}>
            <div><b>01</b><span>Покажемо рішення<br />під ваш бюджет</span></div>
            <div><b>02</b><span>Оцінимо потенціал<br />локації</span></div>
            <div><b>03</b><span>Підготуємо наступний<br />крок проєкту</span></div>
          </div>
        </RevealOnEnter>
        <div className={styles.locationAddress}>
          <span>Адреса</span>
          <p>м. Львів, вул. Промислова, 60</p>
        </div>
        <a className={styles.routeLink} href="https://www.google.com/maps/dir/?api=1&destination=Промислова+60,+Львів,+Україна" target="_blank" rel="noreferrer">
          Прокласти маршрут
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>
      </div>
      <div className={styles.mapVisual}>
        <div className={styles.mapFrame}>
        <iframe
          title="Карта проїзду до шоуруму Velum у Львові"
          src="https://www.google.com/maps?q=Промислова+60,+Львів,+Україна&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </div>
    </section>
  );
}
