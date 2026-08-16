import Image from 'next/image';
import styles from './hero.module.css';
import { assets } from '../../velum-page-data';
import { RevealOnEnter } from '../../ui/reveal-on-enter/reveal-on-enter';

export function Hero() {
  return (
    <RevealOnEnter>
      <section className={styles.hero} id="top">
      <div className={styles.heroCopy}>
        <h1>
          <span className={styles.heroTitleLine}>Запустіть прибуткову</span>
          <span className={styles.heroTitleLine}>базу відпочинку <span className={styles.heroTitleAccent}>під</span></span>
          <span className={`${styles.heroTitleLine} ${styles.heroTitleAccent}`}>ключ від 6 000 000 грн</span>
        </h1>
        <p>Допоможемо створити готовий дохідний туристичний комплекс — від концепції та фінмоделі до будівництва будинків та запуску</p>
        <div className={styles.heroFacts}>
          <div>
            <span className={styles.factIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
            </span>
            <span>2 562 000 грн чистий прибуток на рік</span>
          </div>
          <div>
            <span className={styles.factIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </span>
            <span>Окупність всього за 28 місяців</span>
          </div>
          <div>
            <span className={styles.factIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            <span>Строк запуску бази — 5 місяців</span>
          </div>
          <div>
            <span className={styles.factIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </span>
            <span>Фіксовані терміни та кошторис</span>
          </div>
        </div>
        <div className={styles.heroButtons}>
          <a className={styles.primaryButton} href="#contacts">Отримати розрахунок під мою ділянку</a>
        </div>
        <span className={styles.heroNote}><i /> Від фінансової моделі до перших гостей — одна команда</span>
      </div>
      <div className={styles.heroVisual}>
        <Image src={assets.hero} alt="База відпочинку Velum" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
        <div className={styles.visualTopBadge}>Готове рішення для інвестицій</div>
      </div>
      </section>
    </RevealOnEnter>
  );
}
