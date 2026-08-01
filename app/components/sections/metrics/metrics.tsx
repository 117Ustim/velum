import styles from './metrics.module.css';

export function Metrics() {
  return (
    <section className={styles.metricsSection} id="metrics">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Нам довіряють</span>
        <h2><mark>Цифри</mark> — які<br />говорять самі за себе</h2>
        <p>Довіра клієнтів і результати проєктів говорять про нас більше за будь-які обіцянки.</p>
      </div>
      <div className={styles.metricsGrid}>
        <article><strong>5.0</strong><span>рейтинг на Яндекс.Картах</span><small>★★★★★</small></article>
        <article><strong>ТОП1</strong><span>виробників модульних будинків</span><b>&gt;20<br /><small>баз збудовано</small></b></article>
        <article><strong>ТОП7</strong><span>за заміською нерухомістю</span><b>&gt;700<br /><small>будинків збудовано</small></b></article>
      </div>
    </section>
  );
}

